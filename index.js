// Code your solution in this file!

const returnFirstTwoDrivers = function(arr) {
    return arr.slice(0, 2)
}

const returnLastTwoDrivers = function(arr) {
    return arr.slice(-2)
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int) {
    return function(fare) {
        return fare * int
    }
}

const fareDoubler = function(fare) {
    return createFareMultiplier(2)(fare)
}

const fareTripler = function(fare) {
    return createFareMultiplier(3)(fare)
}

function selectDifferentDrivers(arrayOfDrivers, func) {
    if (func === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(arrayOfDrivers)
    } else if (func === returnLastTwoDrivers) {
        return returnLastTwoDrivers(arrayOfDrivers)
    }
}