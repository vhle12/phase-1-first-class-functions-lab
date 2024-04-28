// Define an array of driver names
const drivers = ["Antonia", "Nuru", "Amari", "Mo"];

// Define a function to return the first two drivers from the drivers array
function returnFirstTwoDrivers() {
    return drivers.slice(0, 2); // Use the slice method to get the first two elements of the drivers array
}

// Define a function to return the last two drivers from the drivers array
function returnLastTwoDrivers() {
    return drivers.slice(-2); // Use the slice method with a negative index to get the last two elements of the drivers array
}

// Create an array containing references to the returnFirstTwoDrivers and returnLastTwoDrivers functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Define a function that creates a fare multiplier based on a given multiplier value
function createFareMultiplier(multiplier) {
    // Return a function that takes a fare as input and multiplies it by the given multiplier
    return function(fare) {
        return fare * multiplier;
    };
}

// Create a fare multiplier function with a multiplier of 2
const fareMultiplier = createFareMultiplier(2);

// Create another fare multiplier function with a multiplier of 3
const fareMultiplier2 = createFareMultiplier(3);

// Define a function that doubles a fare using the fareMultiplier function
function fareDoubler(fare) {
    return fareMultiplier(fare); // Call the fareMultiplier function with the fare as input
}

// Define a function that triples a fare using the fareMultiplier2 function
function fareTripler(fare) {
    return fareMultiplier2(fare); // Call the fareMultiplier2 function with the fare as input
}

// Define a function that selects different drivers from an array based on a provided function
function selectDifferentDrivers(arrayOfDrivers, func) {
    return func(arrayOfDrivers); // Call the provided function (func) with the arrayOfDrivers as input
}