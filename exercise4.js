const Convert = (function () {
    function Constructor(weight, options = {}) {
        const settings = Object.assign({
            units: 'mg'
        }, options)
        if (!['mg', 'kg', 'grams'].includes(settings.units)) {
            throw Error(`${settings.units} should have allowed values mg, kg and grams`)
        }
        Object.freeze(settings)
        Object.defineProperties(this, {
            weight: {
                value: this.weightToMg(weight, settings.units),
                writable: true
            },
            _settings: { value: settings }
        })
    }

    Constructor.prototype.weightToMg = function (m, unit) {
        if (unit === 'grams') return m * 1000
        else if (unit === 'kg') return m * 1000 * 1000
        else return m
    }

    Constructor.prototype.addMg = function (m) {
        this.weight = this.weight + parseFloat(m)
        return this
    }

    Constructor.prototype.addGrams = function (m) {
        this.weight = this.weight + (m * 1000)
        return this
    }

    Constructor.prototype.inGrams = function () {
        return this.weight / 1000
    }

    return Constructor
})()


let current = new Convert(100);

// This will not overwrite or break anything
current._settings = 'Ruined your library'
console.log(current._settings)
current._settings.units = 'Ruined it again'
console.log(current._settings)