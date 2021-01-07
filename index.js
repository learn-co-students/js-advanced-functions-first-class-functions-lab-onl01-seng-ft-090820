// Code your solution in this file!
let arr = []
const returnFirstTwoDrivers = (array) => {

    return array.slice(0,2) 
}

const returnLastTwoDrivers = (array) => {
    return array.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (multiplier) => {
    return (fare) => {
        let result = fare * multiplier
        return result
    }  
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(array, variable) { 
    return variable(array)
}