// === Using a while loop =================================================
let brands = ["Ferrari", "Pagani", "Mazda", "Holden", "Ford", "Mercedes", "Nissan", "Dacia", "Saab"];
let i = 0;
while (i < brands.length) {
    console.log(brands[i]);
    i++;
}

//== while statement used to find the index position of the number 1 =======
let oneFound = false;
let index = 0;
let numbers = [5,3,1,4,2];
while (!oneFound && index < numbers.length) {
    if (numbers[index] === 1) {
        console.log(`Found 1 at index ${index} in a while statement`);
        oneFound = true;
    }
    index++;
}

//== same expression in a do while statement =========================
oneFound = false; // Resetting variables to original values.
index = 0;
do {
    if (numbers[index] === 1) {
        console.log(`Found 1 at index ${index} in a do while statement`);
        oneFound = true;
    }
    index++;
} while (!oneFound && index < numbers.length);
