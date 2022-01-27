// convert date utility to constructor pattern

class Time {
    constructor(date = []) {
        if (Array.isArray(date)) {
            this.date = new Date(...date)
        }
        else {
            this.date = new Date([date])
        }
        this.days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        this.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    }

    getDay() {
        const day = this.date.getDay()
        return this.days[day]
    }

    getMonth() {
        const month = this.date.getMonth()
        return this.months[month]
    }

    addSeconds(sec) {
        this.date.setSeconds(this.date.getSeconds() + sec)
        return this
    }

    addMinutes(min) {
        this.date.setMinutes(this.date.getMinutes() + min)
        return this
    }

    addHours(hr) {
        this.date.setHours(this.date.getHours() + hr)
        return this.date
    }

    addDays(days) {
        this.date.setDate(this.date.getDate() + days)
        return this
    }

    addMonths(months) {
        this.date.setMonth(this.date.getMonth() + months)
        return this
    }

    addYears(years) {
        this.date.setFullYear(this.date.getFullYear() + years)
        return this
    }
}

let halloween = new Time('October 31, 2021');

// This should also work
let halloween2 = new Time(2021, 9, 31);

// Get the date object
let date = halloween.date;

// // returns "Sunday"
let day = halloween.getDay();
console.log(day)

// // returns "October"
let month = halloween.getMonth();
console.log(month)

// // Add some time
halloween.addDays(3).addMonths(1).addYears(5)
console.log(halloween.date)

// // returns "Thursday"
let newDay = halloween.getDay();
console.log(newDay)

// // returns "December"
let newMonth = halloween.getMonth();
console.log(newMonth)
