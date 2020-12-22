const returnFirstTwoDrivers = array => array.slice(0,2);

const returnLastTwoDrivers = array => array.slice(-2);

const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
]

const createFareMultiplier = num => {
    return fare => fare*num
}

const fareDoubler = fare => createFareMultiplier(2)(fare)
// function fareDoubler(fare){
//     return createFareMultiplier(2)(fare)
// }

const fareTripler = fare => createFareMultiplier(3)(fare)
// function fareTripler(fare){
//     return createFareMultiplier(3)(fare)
// }

function selectDifferentDrivers(arrayOfDrivers, func){
    return func(arrayOfDrivers)
}