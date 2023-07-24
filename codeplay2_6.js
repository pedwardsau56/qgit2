function greeting (text) {
    console.log(text);
}
greeting ("Hello world");

function addFive (initialNum) {
    let five = 5;
    return initialNum + five;
}
console.log(addFive(10));

// This function takes an initial number and adds five to it.
function addFiveToNumber(initialNumber) {
    // Define the number to be added.
    const numberToAdd = 5;

    // Compute the sum of the initial number and the number to be added.
    const sum = initialNumber + numberToAdd;

    // Return the result.
    return sum;
}
// Print the result of the function when passing in 10 as the initial number.
console.log(addFiveToNumber(10)); // Should print 15 to the console.
