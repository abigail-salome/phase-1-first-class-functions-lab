// Code your solution in this file!

// Function to return the first two drivers from an array
function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2);
}

// Function to return the last two drivers from an array
function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);
}

// Array containing selectingDrivers functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Function to create a fare multiplier function
function createFareMultiplier(multiplier) {
    return function(fare) {
        return fare * multiplier;
    };
}

// Function to double a fare
function fareDoubler(fare) {
    return createFareMultiplier(2)(fare);
}

// Function to triple a fare
function fareTripler(fare) {
    return createFareMultiplier(3)(fare);
}

// Function to select different drivers based on a provided function
function selectDifferentDrivers(drivers, fn) {
    return fn(drivers);
}

// Exporting functions and variables
module.exports = {
    returnFirstTwoDrivers,
    returnLastTwoDrivers,
    selectingDrivers,
    createFareMultiplier,
    fareDoubler,
    fareTripler,
    selectDifferentDrivers
};

