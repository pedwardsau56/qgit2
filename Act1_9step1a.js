// The following function creates a greeting (you do not need to modify this statement)
function addGreeting(message)
{
    // Task: Create a constant value called greeting to store the string "Hello! The message is: "
    const greeting = "Hello! The message is: ";
    
    // Close the loop using the return statement to perform a value substition that adds the greeting to the message (the return statement hasn't been used in the course yet)
    return `${greeting}${message}`;
}
// Task: Create a constant value called unitCode to store this unit's code
const unitCode = 'IFQ714';

// Define a variable that stores the function for the greeting plus the unit code (you do not need to modify this statement)
newMessage = addGreeting(unitCode);

// Task: Display the newMessage in the console
console.log(newMessage);