import { defineStore } from "pinia"
import { getRowChildrenNameByType, rowChildrenSettings } from "./helpers"


const prepareOverviewReport = (overviewReport) => {
  overviewReport.rows.forEach((row) => {
    prepareRowParent(row);
    prepareRowChildren(row);
  });

  if (overviewReport.rowTotal) {
    addRowToTop(overviewReport, overviewReport.rowTotal);
  }

  if (overviewReport.rowAverage) {
    addRowToTop(overviewReport, overviewReport.rowAverage);
    addRowToBottom(overviewReport, overviewReport.rowAverage);
  }

  if (overviewReport.rowTotal) {
    addRowToBottom(overviewReport, overviewReport.rowTotal);
  }

  return overviewReport;
};

const prepareRowParent = (row, type = null, rowIdPostfix = '') => {
  row.row_id = row.id + rowIdPostfix;
  row.children = [];
  row.type = type;
  row.childrenType = null;
  row.isChild = false;
};

const prepareRowChildren = (row) => {
  rowChildrenSettings().forEach((reportChildSettings) => {
    if (row[reportChildSettings.name] !== undefined && row[reportChildSettings.name] !== null) {
      row[reportChildSettings.name].forEach((rowChild) => {
        rowChild.row_id = row.row_id + '_' + rowChild.id;
        rowChild.type = reportChildSettings.type;
        rowChild.isChild = true;
      });
    }
  });
};


const overviewReport = {
  rows: [
    {
      date: '2022-06-22 - Wed',
      id: '12987122',
      name: 'Tom',
      amount1: '234',
      amount2: '3.2',
      amount3: 10,
      bought: 111.870,
    },
    {
      date: '2022-06-22 - Wed',
      id: '12987123',
      name: 'Tom',
      amount1: '165',
      amount2: '4.43',
      amount3: 12,
      bought: 133.034,
    },
    {
      date: '2022-06-22 - Wed',
      id: '12987124',
      name: 'Tom',
      amount1: '324',
      amount2: '1.9',
      amount3: -1,
      bought: 125.454,
    },
    {
      date: '2022-06-22 - Wed',
      id: '12987125',
      name: 'Tom',
      amount1: '621',
      amount2: '2.2',
      amount3: 17,
      bought: 188.800,
    },
    {
      date: '2022-06-22 - Wed',
      id: '12987126',
      name: 'Tom',
      amount1: '539',
      amount2: '4.1',
      amount3: 15,
      bought: 115.181,
    },
  ]
}

import { fireStore } from "@/firebase/firebaseInit"
import { collection, getDocs } from "firebase/firestore"


export const useOverviewReportStore = defineStore('overviewReport', {
  state: () => {
    return {
      loading: false,
      filtersAvailable: {},
      filters: {
        dateRange: [],
        marketIdIn:[],
        siteProjectIdIn: [],
        siteIdIn:[],
        sourceIdIn: [],
        deviceIdIn: [],
        partnerAccountIdIn: [],
        buyerIdIn: [],
        teamIdIn: []
      },    
      visibleColumns: [],
      report: [],
      groupOptions: [
        {
          value: 'date',
          label: 'Date'
        },
        {
          value: 'buyerId',
          label: 'Buyer'
        },
        {
          value: 'feedId',
          label: 'Revenue'
        },
        {
          value: 'siteId',
          label: 'Site'
        },
        {
          value: 'teamId',
          label: 'Team'
        },
        {
          value: 'sourceId',
          label: 'Traffic Source'
        },
        {
          value: 'siteProjectId',
          label: 'Project'
        }
      ],
      tableSize: 'default',
      rows: {
        id: null,
        date: null,
        impressions: null,
        bought: null,
        adCTR: null,
        cost: null,
        CPC: null,
        sold: null,
        earned: null,
        opCTR: null,
        RPS: null,
        RPC: null,
        profit: null,
        margin: null,    
      }
    }
  } ,
  getters: {
    // your getters here, check the Offical Pinia above
    getReport: () => this.report,
    getRows: () => this.report?.rows ?? [],
  },
  actions: {
    async fetchReport() {

      this.loading = true

      const items = []

      const overviewReportRows = await getDocs(collection(fireStore, "overview"))
      overviewReportRows.forEach((doc) => {
        // const data = {
        //   id: doc.data().id,
        //   date: doc.data().date,
        //   impressions: doc.data().impressions,
        //   bought: doc.data().bought,
        //   adCTR: doc.data().adCTR,
        //   cost: doc.data().cost,
        //   CPC: doc.data().CPC,
        //   sold: doc.data().sold,
        //   earned: doc.data().earned,
        //   opCTR: doc.data().opCTR,
        //   RPS: doc.data().RPS,
        //   RPC: doc.data().RPC,
        //   profit: doc.data().profit,
        //   margin: doc.data().margin,      
        // }
        items.push({ ...this.rows, ...doc.data() } )
      })

      this.report.rows = items
      this.loading = false
    },

    setReportRowChildrenByType(payload) {
      let row_id = payload.row_id
      let childrenType = payload.childrenType
      let childrenTypeName = getRowChildrenNameByType(childrenType)

      // console.log(payload, this.report.rows)

      this.report.rows.forEach((row, i) => {
        if (row.row_id === row_id) {
          let children = childrenType !== null && row[childrenTypeName] !== undefined ? row[childrenTypeName] : []
          let newRow = {...row, children, childrenType}
          this.report.rows.splice(i, 1, newRow)
          console.log(this.report.rows)
        }
      })
    },     
  }
})
