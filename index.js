// Code your solution in this file!

const returnFirstTwoDrivers = (drivers) => drivers.slice(0,2)

const returnLastTwoDrivers = (drivers) => drivers.slice(-2)

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (x) => (mult => x*mult)

const fareDoubler = (fare) => (createFareMultiplier(fare)(2))

const fareTripler = (fare) => (createFareMultiplier(fare)(3))

const selectDifferentDrivers = (array, select) => (select(array))