import { defineStore } from "pinia"
import { getDateFromToday, yesterday } from "@/app/utils/date"
import moment from "moment"
import { fireStore } from "@/firebase/firebaseInit"
import { collection, getDocs, setDoc, addDoc } from "firebase/firestore"

export const useTQReportStore = defineStore("TQReport", {
  state: () => {
    return {
      loading: false,
      filters: {
        dateRange: [getDateFromToday(-4), yesterday],
        teamIdIn: [],
        deviceIdIn: [2],
        marketIdIn: [1, 2, 3, 4, 7, 8, 14, 15, 16, 17],
      },
      filtersOptions: {
        devices: [],
        markets: [1, 2, 3, 4, 5, 6, 7, 8],
        teams: [],
      },
      tqReport: [],
      tqTresholds: {
        1: "No Data [<=0]",
        2: "Remedial [<1]",
        3: "Improve [<=3.5]",
        4: "Grow [<7]",
        5: "Push [7+]",
      },
    }
  },
  getters: {
    getFiltersOptions: state => state.filtersOptions,
    // getDeviceNameById: state => id => state.filtersOptions.devices.find(i => i.id === id)?.name ?? '',
    getMarketNameById: (state) => id => state.filtersOptions.markets.find(i => i.id === id)?.name ?? '',
    // getTeamNameById: state => id => state.filtersOptions.teams.find(i => i.id === id)?.name ?? '',
  
    getThresholdNameById: state => id => state.tqTresholds[id] ?? "",
    getFilters: state => state.filters,
    getDateRange: state => state.filters.dateRange,
    getTeamIdIn: state => state.filters.teamIdIn,
    getDeviceIdIn: state => state.filters.deviceIdIn,
    getMarketIdIn: state => state.filters.marketIdIn,
    getLabels: state => {
      const [start, end] = state.filters.dateRange ?? []
      if (!(start && end)) return []
      const format = "YYYY-MM-DD"
      const fromDate = moment(start)
      const toDate = moment(end)
      let diff = toDate.diff(fromDate, "days")
      let range = []
      for (let i = 0; i <= diff; i++) {
        range.push(moment(start).add(i, "days").format(format))
      }
      return range
    },
  },
  actions: {
    async fetchReport() {
      // this.loading = true

      // const items = []

      const markets = await getDocs(collection(fireStore, "markets"))
      markets.forEach(market => {
        this.filtersOptions.markets.push({ id: market.data().id, name: market.data().name })
      })

      const tqReportData = await getDocs(collection(fireStore, "tq"))
      tqReportData.forEach(item => {
        // items.push({ ...this.rows, ...row.data() })
        // console.log('tqReportData : ', item.data()?.rpc)
        this.tqReport.push({rpc: item.data()?.rpc, marketId: item.data().marketID, ctr: item.data().ctr, tagTq: item.data().tagTq})
      })

      // console.log('ITEMS : ', items)

      // this.tqReport = items
      this.loading = false
    },
  },
})
