
// Step 1: Array of objects - employees and sales
const employees = [{"id":1,"firstName":"John","lastName":"Smith","gender":"Male","age":23,"position":"Manager"},
{"id":2,"firstName":"Mary","lastName":"Sue","gender":"Female","age":32,"position":"Salesperson"},
{"id":3,"firstName":"Fred","lastName":"Jones","gender":"Non-Binary","age":54,"position":"Salesperson"},
{"id":4,"firstName":"Jane","lastName":"Doe","gender":"Female","age":41,"position":"Accountant"},
{"id":5,"firstName":"Joe","lastName":"Bloggs","gender":"Male","age":65,"position":"IT Administrator"}]

const sales = [{"staffId":1,"item":"Wi-Fi Adapter","price":40.00,"date":"01-09-2022"},
{"staffId":1,"item":"Wi-Fi Adapter","price":40.00,"date":"03-09-2022"},
{"staffId":1,"item":"USB Cable","price":5.00,"date":"03-09-2022"},
{"staffId":1,"item":"Thermal Paste","price":7.50,"date":"05-09-2022"},
{"staffId":1,"item":"Wi-Fi Adapater","price":40.00,"date":"07-09-2022"},
{"staffId":2,"item":"USB Stick","price":10.99,"date":"06-09-2022"},
{"staffId":3,"item":"Pre-built PC","price":1999.95,"date":"02-09-2022"},
{"staffId":3,"item":"USB Cable","price":5.00,"date":"02-09-2022"},
{"staffId":3,"item":"HDMI Cable","price":15.45,"date":"02-09-2022"}]
//===================================================================================
// Step 2 display employee details
function showEmployeeInfo(employees) {
           console.log(`Name: ${employees.firstName} ${employees.lastName}\nStaff ID: ${employees.id}\nGender: ${employees.gender}\nAge: ${employees.age}\nPosition: ${employees.position}\n`);
    }

 // Function to traverse all the employees and show information for each
 function showAllEmployeesInfo() {
    for (let i = 0; i < employees.length; i++) {
       showEmployeeInfo(employees[i]);
    }
 }
 showAllEmployeesInfo();
//===================================================================================
// Step 3: Create a constructor
function employee(id,firstName,lastName,gender,age,position) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.age = age;
    this.position = position;
}
