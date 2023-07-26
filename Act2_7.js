// Step 1
let empinput = '{"id":1,"firstName":"John","lastName":"Smith","gender":"Male","age":23,"position":"Manager"}';
let empdata1 = JSON.parse(empinput);
console.log(empdata1);
console.log("==============");

let saleinp = '{"staffId":1,"item":"Wi-Fi Adapter","price":40.00,"date":"01-09-2022"}';
let saledata1 = JSON.parse(saleinp);
console.log(saledata1);
console.log("==============");

// Step 2
function empmsg (emptxt){
    console.log(emptxt);
}
empmsg("Emp: "+ empdata1.id + " " + empdata1.firstName + " " + empdata1.lastName);
console.log("==============");

// Step 3
function empconstruct(id,firstName,lastName,gender,age,position){
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.age = age;
    this.position = position;
}
let empdata2 = new empconstruct(2,"Mary","Sue","Female",32,"Salesperson");
console.log(empdata2);
console.log("==============");

function salesconstruct(staffId,item,price,date){
    this.staffId = staffId;
    this.item = item;
    this.price = price;
    this.date = date;
}
let saledata2 = (1,"Wi-Fi Adapter",40.00,"03-09-2022");
console.log(saledata2);
console.log("==============");

//Step 4
let employees = [empdata1,empdata2];
let sales = [saledata1,saledata2];
console.log(employees);
console.log(sales);
