// convert date utility to constructor pattern

class Time {
    constructor(date = [], options = {}) {
        let settings = Object.assign({
            days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        },
            options)
        Object.freeze(settings)
        Object.defineProperties(this, {
            date: { value: Array.isArray(date) ? new Date(...date) : new Date([date]) },
            _settings: { value: settings }
        })
    }

    getDay() {
        const day = this.date.getDay()
        return this._settings.days[day]
    }

    getMonth() {
        const month = this.date.getMonth()
        return this._settings.months[month]
    }

    addSeconds(sec) {
        const d = new Date(this.date)
        d.setSeconds(d.getSeconds() + sec)
        return new Time(d, this.settings)
    }

    addMinutes(min) {
        const d = new Date(this.date)
        d.setMinutes(d.getMinutes() + min)
        return new Time(d, this.settings)
    }

    addHours(hr) {
        const d = new Date(this.date)
        d.setHours(d.getHours() + hr)
        return new Time(d, this.settings)
    }

    addDays(days) {
        const d = new Date(this.date)
        d.setDate(d.getDate() + days)
        return new Time(d, this.settings)
    }

    addMonths(months) {
        const d = new Date(this.date)
        d.setMonth(d.getMonth() + months)
        return new Time(d, this.settings)
    }

    addYears(years) {
        const d = new Date(this.date)
        d.setFullYear(d.getFullYear() + years)
        return new Time(d, this.settings)
    }
}


let halloween = new Time('October 31, 2021', {
    days: ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
    months: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']
});

// Try to override settings
// These should not change anything
halloween._settings = null;
halloween._settings.months = null;

// Get details from the instance
// returns "domingo" and "octubre"
let day = halloween.getDay()
console.log(day)

let month = halloween.getMonth()
console.log(month)

// Add some time
let allHallowsDay = halloween.addYears(5).addDays(1);

// halloween should still be October 31, 2021
// allHallowsDay should be November 1, 2026
console.log(halloween.date);
console.log(allHallowsDay.date)

let newMonth = halloween.getMonth();
console.log(newMonth)