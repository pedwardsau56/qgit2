function greeting (text) {
    console.log(text);
}
greeting ("Hello world");
//==============================
function addFive (initialNum) {
    let five = 5;
    return initialNum + five;
}
console.log(addFive(10));

//==============================
// This function takes an initial number and adds five to it.
function addFiveToNumber(initialNumber) {
    // Define the number to be added.
    const numberToAdd = 5;
    // Compute the sum of the initial number and the number to be added.
    const sum = initialNumber + numberToAdd;
    // exit the function
    return sum;
}
console.log(addFiveToNumber(10));

//==============================
// The following function creates a greeting
function addGreeting(message) {
        const greeting = "Hello! The message is: ";
        // Close the loop using the return statement to perform a value substition that adds the greeting to the message (the return statement hasn't been used in the course yet)
    return `${greeting}${message}`;
}
// Task: Create a constant value called unitCode to store this unit's code
const unitCode = 'IFQ714';

// Define a variable that stores the function for the greeting plus the unit code
newMessage = addGreeting(unitCode);
console.log(newMessage);