const Weight = (function () {
    function Constructor(weight) {
        this.weight = parseFloat(weight)
    }

    Constructor.prototype.inGrams = function () {
        return this.weight / 1000
    }

    Constructor.prototype.inKg = function () {
        return this.weight / 1000 / 1000
    }

    Constructor.prototype.inMg = function () {
        return this.weight
    }

    return Constructor
})()

let hummingbird = new Weight(4000)
let grams = hummingbird.inGrams()
console.log(grams)