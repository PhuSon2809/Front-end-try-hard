/**
 * Làm việc với số
 * 
 * 1. Tạo giá trị Number
 *  - Các cách tạo 
 *  - Dùng cách nào? Tại sao?
 *  - Kiểm tra data type
 * 
 * 2. làm việc với Number
 *  - To String 
 *  - To fixed: để làm tròn số
 */

//Cách 1 
//Nên dùng cách 1
//Tránh cách sử dụng từ khóa new
//Trả về kiểu dữ liệu mong muốn

var age = 22;
var PI = 3.14;

var otherNumber = new Number(9);
console.log(typeof otherNumber);

var result = 20 / 'ABC';

console.log(result); //NaN là một số không hợp lệ
console.log(isNaN(result)); //Kiểm tra xem có phải NaN ko

console.log(age.toString());
console.log(typeof age.toString());

console.log(PI.toFixed());
console.log(PI.toFixed(1)); //rút gọn số thập phân
console.log(typeof PI.toFixed()); //trả về kiểu String
