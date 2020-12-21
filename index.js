// Code your solution in this file!
let arr = []
const returnFirstTwoDrivers = (array) => {
    // arr.push(array[0]) 
    // arr.push(array[1]) 
    // return arr
    return array.slice(0,2)
//    return Object.assign([], (array[0]), (array[1])  
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

// const fareDoubler = (fare) => {
//     createFareMultiplier(fare)
//    return fare * 2 
// } 

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(array, variable) { 
    return variable(array)
}