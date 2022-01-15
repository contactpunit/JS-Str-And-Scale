const convert = (function () {
    // Convert grams to Kgs
    function gramsToKg(grams) {
        return parseFloat(grams) / 1000
    }

    // convert grams to milligrams
    function gramsToMg(grams) {
        return parseFloat(grams) * 1000
    }

    // convert kilograms to grams
    function kgToGrams(kg) {
        return parseFloat(kg) * 1000
    }

    // convert kiograms to milligrams
    function kgToMg(kg) {
        return kgToGrams(kg) * 1000
    }

    // convert milligrams to grams
    function mgToGrams(mg) {
        return parseFloat(mg) / 1000
    }

    // convert mg to kilograms
    function mgToKg(mg) {
        return mgToGrams(mg) / 1000
    }

    return { gramsToKg, gramsToMg, kgToGrams, kgToMg, mgToGrams, mgToKg }
})()

let mgs = convert.gramsToMg(42);
console.log(convert.mgToKg(1000))