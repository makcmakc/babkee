import { defineStore } from "pinia"
import { fireStore } from "@/firebase/firebaseInit"
import { collection, getDocs } from "firebase/firestore"


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



export const useOverviewReportStore = defineStore('overviewReport', {
  state: () => {
    return {
      loading: false,
      filtersAvailable: {
        markets: [],
        sources: [],
        teams: [],
        devices: [],
        sites: []
      },
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
      visibleColumns: {
        impressions: true,
        bought: true,
        adCTR: true,
        cost: true,
        CPC: true,
        CPA: false,
        sold: true,
        earned: true,
        opCTR: true,
        RPS: true,
        RPC: true,
        profit: true,
        margin: true,    
      },
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
    getReport: state => state.report,
    getRows: state => state.report?.rows ?? [],
    getVisibleColumns: state => state.visibleColumns,
    getSources: state => state.filters.sourceIdIn,

    getFiltersAvailable: state => state.filtersAvailable,
  },
  actions: {

    async fetchFiltersAvailable() {
      const markets = await getDocs(collection(fireStore, "markets"))
      markets.forEach(market => this.filtersAvailable.markets.push( { id: market.data().id, name: market.data().name } ) )
      const sources = await getDocs(collection(fireStore, "sources"))
      sources.forEach(source => this.filtersAvailable.sources.push({ id: source.data().id, name: source.data().name }) )
      const teams = await getDocs(collection(fireStore, "teams"))
      teams.forEach(team => this.filtersAvailable.teams.push({ id: team.data().id, name: team.data().name }) )
      const devices = await getDocs(collection(fireStore, "devices"))
      devices.forEach(device => this.filtersAvailable.devices.push({ id: device.data().id, name: device.data().name }) )
      const sites = await getDocs(collection(fireStore, "sites"))
      sites.forEach(site => this.filtersAvailable.sites.push({ id: site.data().id, name: site.data().name }) )   
    },


    async fetchReport() {

      this.loading = true

      const items = []

      const overviewReportRows = await getDocs(collection(fireStore, "overview"))
      overviewReportRows.forEach(row => {
        items.push({ ...this.rows, ...row.data() })
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
