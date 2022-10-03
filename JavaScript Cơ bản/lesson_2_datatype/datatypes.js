/**
 * Kiểu dữ liệu trong JS
 * 
 * 1. Dữ liệu nguyên thủy - Primitive Data
 *  - Number
 *  - String 
 *  - Boolean 
 *  - Undefined
 *  - null
 *  - Symbol
 * 
 * gán gián trị sẽ tạo ra vùng nhớ mới để lưu dữ liệu mới
 * 
 * 2. Dữ liệu phức tạp - Complex data
 *  - Function
 *  - Object
 * 
 */

//Numer types
var a = 1;
var b = 1.5;

//String types
var fullName = "Son \'Tran";
console.log(fullName);

//boolean
var isSuccess = true;

//undefined type
var age;
console.log(age);

//null
var isNull = null; //nothing

//symbol
var id = Symbol("id"); 

//Function
var myFunction = function (){
    // alert("Hi. Xin chao các bạn! ")
}

// myFunction();

//object
var myObject = {
    //key: value,
    name: "Son Tran",
    age: 22,
    address: "Da Lat",
    myFunction: function (){
    }
};

//Array có key tự tăng bắt đầu từ 0
var myArray = ['PHP','Java'];

//Để kiểm tra kiểu dữ liệu
console.log(typeof myArray);