/**
 * Toán tử số học
 +    --> Cộng
 -    --> Trừ
 *    --> Nhân
 **   --> Lỹ Thừa
 /    --> Chia
 %    --> Chia lấy số dư
 ++   --> Tăng 1 giá trị số (Có thể dung làm tiền tố học hậu tố: variable++ hoajrwc ++variable)
 --   --> Giảm 1 giá trị số (Có thể dung làm tiền tố học hậu tố: variable++ hoajrwc ++variable)
 
x++ tăng giá trị biến lên 1 và trả về giá trị trước khi tăng
++x tăng giá trị biến lên 1 và trả về giá trị sau khi tăng
x-- giảm giá trị biến xuống 1 và trả về giá trị trước khi giảm
--x giảm giá trị biến xuống 1 và trả về giá trị sau khi giảmm
 
 */

var a = 6;
var b = 2;
var c = a + b;
var d = a - b;
var e = a * b;
var f = a ** b;
var g = a / b;
var h = a % b;

console.log("Toán tử số học: ");
console.log("Cộng: " + c);
console.log("Trừ: " + d);
console.log("Nhân: " + e);
console.log("Lũy thừa: " + f);
console.log("Chia: " + g);
console.log("Chia lấy dư: " + h);



b--;
console.log("b: " + b);

//Nguyên lý hoạt động của ++/--
//Prefix(tiền tố) & Postfix(hậu tố)

//Việc 1: + 1 cho a, a = a + 1 => a = 7
//Việc 2: trả về a sau khi được + 1
console.log(++a);

//Việc 1: `a copy`, `a copy` = 6
//Việc 2: trừ 1 của a, a = a -1 => a = 5
//Việc 3: trả về `a copy`
var output = a--;
console.log("ouput: " + output);
console.log("a: " + a);

var number = 6;
var out = number++ + --number
var out2 = ++number * 2 - number-- * 2;

//6 + 6 = 12

console.log("out: " + out);
console.log("out2: " + out2);