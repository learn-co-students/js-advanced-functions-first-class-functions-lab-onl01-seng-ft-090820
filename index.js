// Code your solution in this file!

const returnFirstTwoDrivers = function(array) {
    return array.slice(0, 2)
}

const returnLastTwoDrivers = function(array) {
    return array.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(num) {
    return function(mult) {
        return num * mult
    }
}

const fareDoubler = function(fare){
    return createFareMultiplier(fare)(2)
}

const fareTripler = function(fare){
    return createFareMultiplier(fare)(3)
}

const selectDifferentDrivers = function(drivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers)
}