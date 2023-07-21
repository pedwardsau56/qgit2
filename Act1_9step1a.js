// The following function creates a greeting (you do not need to modify this statement)
function addGreeting(message) {

    // Create a constant variable called greeting to store the string "Hello! The message is: "
    const greeting = "Hello! The message is: ";
    
    // Close the loop using the return statement that performs a value sustition that adds the greeting to the message
    return `${greeting}${message}`;
}
// Create a constant variable to store this unit's code
const unitCode = 'IFQ714';

// Define a variable that stores the function for the greeting plus the unit code (you do not need to modify this statement)
newMessage = addGreeting(unitCode);

// Show the message in the console (you do not need to modify this statement)
console.log(newMessage);