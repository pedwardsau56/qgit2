
// ============================================================================
// Function for checking if two values are the same.
function checkValuesEqual(first, second) 
{
    // Variable for storing Boolean.
    let valuesEqual;

    // Task: Check if the values are the same, including their type.
    valuesEqual = first === second;

    // Show the result in the console.
    if (valuesEqual) {
        console.log("The values were equal.");
    } else {
        console.log("The values were not equal.");
    }
}

// See if these pairs of values are the same.
checkValuesEqual("hello", "goodbye");
checkValuesEqual("hello", "hello");
checkValuesEqual(5, 5);
checkValuesEqual(5, "5");
// ============================================
let number1 = 10;
let number2 = 20;
if (number1 < number2) {
    console.log("Number 1 is smaller than Number 2");
}
else {
    console.log("Number 1 is larger than or equal to Number 2");
}
