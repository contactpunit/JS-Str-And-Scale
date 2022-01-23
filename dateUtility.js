let time = (function () {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']4

    function getDay(date) {
        const day = date.getDay()
        return days[day]
    }

    function getMonth(date) {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        const month = date.getMonth()
        return months[month]
    }

    function addSeconds(date, sec) {
        date.setSeconds(date.getSeconds() + sec)
        return date
    }

    function addMinutes(date, min) {
        date.setMinutes(date.getMinutes() + min)
        return date
    }

    function addHours(date, hr) {
        date.setHours(date.getHours() + hr)
        return date
    }

    function addDays(date, days) {
        date.setDate(date.getDate() + days)
        return date
    }

    function addMonths(date, months) {
        date.setMonth(date.getMonth() + months)
    }
    return { getDay, getMonth, addSeconds, addMinutes, addHours, addMonths, addDays }
}())

let halloween = new Date('October 29, 2021')
console.log(time.getDay(halloween))