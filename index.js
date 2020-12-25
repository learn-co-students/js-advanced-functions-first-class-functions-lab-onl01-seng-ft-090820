const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2)
}

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(n) {
    return function(m) {
        return n*m
    } 
}

const fareDoubler = function(f) {
    return createFareMultiplier(f)(2)
}

const fareTripler = function(f) {
    return createFareMultiplier(f)(3)
}

const selectDifferentDrivers = function(driversArray, func) {
    return func(driversArray)
}