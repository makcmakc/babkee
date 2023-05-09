const dateToString = (date) => {
  const currentDate = new Date(date)
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0")
  const day = currentDate.getDate().toString().padStart(2, "0")
  const year = currentDate.getFullYear()
  return `${year}-${month}-${day}`
}

// gets the date days from today
const getDateFromToday = (daysDiff = 0) => {
  const today = new Date()
  const date = new Date(today.setDate(today.getDate() + daysDiff))
  return dateToString(date)
}

// returns an array with the 1st and the last month dates
const getMonthRange = (monthDiff = 0) => {
  const today = new Date()
  const currentMonth = today.getMonth()
  const monthDiffComputed = (monthDiff + currentMonth) % 12
  const month =
    (monthDiffComputed >= 0 ? monthDiffComputed : monthDiffComputed + 12) + 1
  const year = today.getFullYear() + Math.floor((monthDiff + currentMonth) / 12)
  const daysInMonth = new Date(year, month, 0).getDate()
  const dateString = `${year}-${month.toString().padStart(2, "0")}-`
  return [dateString + "01", dateString + daysInMonth]
}

const getCurrentMonth = () => {
  const today = new Date()
  const month = today.getMonth() + 1
  const year = today.getFullYear()
  return `${year}-${month.toString().padStart(2, "0")}`
}

const today = getDateFromToday(0)
const yesterday = getDateFromToday(-1)
const thisMonthRange = () => {
  const firsDayOfMonth = getMonthRange(0)[0]
  if (today === firsDayOfMonth) {
    return [firsDayOfMonth, firsDayOfMonth]
  } else {
    return [firsDayOfMonth, yesterday]
  }
}

const ranges = {
  Today: [today, today],
  Yesterday: [yesterday, yesterday],
  "Last 4 Days": [getDateFromToday(-4), yesterday],
  "Last 7 Days": [getDateFromToday(-7), yesterday],
  "Last 14 Days": [getDateFromToday(-14), yesterday],
  "This Month": thisMonthRange(),
  "Last 30 Days": [getDateFromToday(-30), yesterday],
  "Last Month": getMonthRange(-1),
}

const getDayFromDateString = (d) => {
  return ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][
    new Date(d).getUTCDay()
  ]
}

const getHourStringFromHour = (h) => {
  let hours = []
  hours.push((h < 10 ? "0" : "") + h + ":00")
  hours.push((h < 9 ? "0" : "") + (h + 1) + ":00")
  return hours.join(" - ")
}

const everyday = (start, end, callback) => {
  start = new Date(start)
  let current = start
  end = new Date(end)
  while (start <= end) {
    current = current + 24 * 60 * 60
    callback(yyyymmdd(current))
  }
}

const yyyymmdd = function (date) {
  date = new Date(date)
  var mm = date.getMonth() + 1 // getMonth() is zero-based
  var dd = date.getDate()

  return [
    date.getFullYear(),
    (mm > 9 ? "" : "0") + mm,
    (dd > 9 ? "" : "0") + dd,
  ].join("")
}

const addDays = function (date, days) {
  let result = new Date(date)
  result.setDate(result.getDate() + days)
  return result
}

export {
  addDays,
  dateToString,
  getDateFromToday,
  getDayFromDateString,
  getHourStringFromHour,
  getMonthRange,
  getCurrentMonth,
  today,
  yesterday,
  ranges,
  yyyymmdd,
  everyday,
}
