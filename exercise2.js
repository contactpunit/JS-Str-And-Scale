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

    Constructor.prototype.addMg = function (mg) {
        this.weight = this.weight + parseFloat(mg)
        return this
    }

    Constructor.prototype.addGrams = function (grams) {
        this.weight = this.weight + (grams * 1000)
        return this
    }

    return Constructor
})()

let hummingbird = new Weight(4000)
let afterEating = hummingbird.addMg(150).addGrams(1).inGrams()
console.log(afterEating)