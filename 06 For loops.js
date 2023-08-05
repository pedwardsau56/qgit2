for (let i = 0; i < 5; i++) {
    console.log("The current number is " + i.toString());
}
// ============================================
let brands = ["Ferrari", "Pagani", "Mazda", "Holden", "Ford", "Mercedes", "Nissan", "Dacia", "Saab"];
for (let i = 0; i < brands.length; i++) {
    console.log(brands[i]);
}
// ============================================
let target = "Nissan";
for (let i = 0; i < brands.length; i++) {
    if (brands[i] == target) {
        console.log(`The number of letters in ${target} is ${i}.`);
        break;
    }
}
// ============================================
// Function for multiplying numbers by 10 and showing the result.
function multiplyByTen(...args) 
{
    for (let i = 0; i < args.length; i++) 
    {
         // Store the current number temporarily.
        let currentNumber = args[i];

        // Task: Multiply the current number by ten.
        currentNumber *= 10;
       
        // Show the number in the console.
        console.log(`Number ${i} times 10 = ${currentNumber}`);
    }
}
// Multiply some numbers by 10.
multiplyByTen(5, 10, 15, 20);

// ============================================================================
// Function for counting how many 1s are in an array.
function countOnes (values) 
{
    // Variable for the number of ones.
    numOnes = 0;

    for (let i = 0; i < values.length; i++) {

        // Check if the current value is 1.
        let isOne = (values[i] == 1);

        // Add one to the count of ones.
        if (isOne) numOnes++;
    }
    console.log(`Total ones: ${numOnes}`);
}

countOnes([1, 1, 1, 2])
