// Code your solution in this file!
const returnFirstTwoDrivers = function(arr){
    return arr.slice(0, 2)
}

const returnLastTwoDrivers = function(arr){
    return arr.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(int){
    return function(mult) {
        return int*mult
    }
}

const fareDoubler = function(fare){
    return createFareMultiplier(fare)(2)
}

const fareTripler = function(fare){
    return createFareMultiplier(fare)(3)
}

const selectDifferentDrivers = function(arr, selector){
    return selector(arr)
}