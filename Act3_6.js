// Example from https://stackoverflow.com/questions/9991805/javascript-how-to-parse-json-array
// var myMessage = '{"success": true,"counters": [{"counter_name": "dsd", "counter_type": "sds", "counter_unit": "sds" }, { "counter_name": "gdg", "counter_type": "dfd", "counter_unit": "ds" }, { "counter_name": "sdsData", "counter_type": "sds", "counter_unit": " dd " }, { "counter_name": "Stoc final", "counter_type": "number ", "counter_unit": "litri " }, { "counter_name": "Consum GPL", "counter_type": "number ", "counter_unit": "litri " }, { "counter_name": "sdg", "counter_type": "dfg", "counter_unit": "gfgd" }, { "counter_name": "dfgd", "counter_type": "fgf", "counter_unit": "liggtggggri " }, { "counter_name": "fgd", "counter_type": "dfg", "counter_unit": "kwfgf " }, { "counter_name": "dfg", "counter_type": "dfg", "counter_unit": "dg" }, { "counter_name": "gd", "counter_type": "dfg", "counter_unit": "dfg" } ] }';
// var jsonData = JSON.parse(myMessage);
// for (var i = 0; i < jsonData.counters.length; i++) {
//    var counter = jsonData.counters[i];
//    console.log(counter.counter_name);
// }
//===================================================================================
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
