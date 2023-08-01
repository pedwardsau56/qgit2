let number1 = 10;
let number2 = 20;
if (number1 < number2) {
    console.log("Number 1 is smaller than Number 2");
}
else {
    console.log("Number 1 is larger than or equal to Number 2");
}
// ============================================
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