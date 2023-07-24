let incomingData = '{"brand":"Mazda","model":"MX-5","year":1989}';
let car2 = JSON.parse(incomingData);
console.log(car2.brand);
let outgoingData = JSON.stringify(car2);
console.log(outgoingData)
let listOfNumbers = [1, 2, 3, 4, 5];
console.log(listOfNumbers[1]);