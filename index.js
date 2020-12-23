// Code your solution in this file!

const returnFirstTwoDrivers = (arr) => arr.slice(0,2)

const returnLastTwoDrivers = (arr) => arr.slice(-2)

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (x) => (mult => x*mult)

const fareDoubler = (fare) => (createFareMultiplier(fare)(2))

const fareTripler = (fare) => (createFareMultiplier(fare)(3))

const selectDifferentDrivers = (arr, select) => (select(arr))