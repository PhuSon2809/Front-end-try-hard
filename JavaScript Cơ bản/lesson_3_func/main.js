/**
 * Hàm (function) trong JavaScript
 *
 * 1. Hàm ?
 *  - Là một khối mã
 *  - Làm một việc cụ thể
 *
 * 2. Loại hàm
 *  - Built-in
 *  - Tự định nghĩa
 *
 * 3. Tính chất
 *  - Không thực thi khi định nghĩa
 *  - Sẽ thực thi khi được gọi
 *  - Có thể nhận tham số
 *  - Có thể trả vè một giá trị
 *
 * 4. Tạo hàm đầu tiên
 *
 * Quy tắc đặt tên hàm/biến
 *  - Có thể chứa a-z A-Z 0-9 _ $
 *  - Không đặt số đầu tiên
 */

function showDialog() {
  //code
  alert("Hi. Xin chào các bạn!");
}
// () đây là toán tử call
// showDialog();

/**
 * Tham số hàm - JS cơ bản
 *
 * 1. Tham số?
 *  - Định nghĩa?
 *  - Kiểu dữ liệu?
 *  - Tính private? chỉ sử dụng đc trong func mình khai báo
 *  - 1 tham số
 *  - Nhiều tham số
 *
 * 2. Truyền tham số
 *  - 1 tham số
 *  - Nhiều tham số
 *
 * 3. Argument?
 *  - Đối tượng arguments
 *  - Giới thiệu vòng for of
 */

function writeLog(message, message2) {
  //message là tham số
  console.log(typeof message);
  console.log(message);
  console.log(message2);
}

writeLog("Đây là một dòng log! ", "text 2"); //"Đây là một dòng log! " là đối số (argument)

// console.log không phải tự tạo nhiều tham số mà
// sử dụng arguments

console.log("for - of");

function writeLog2() {
  var myString = "";
  for (var param of arguments) {
    myString += `${param} -`;
  }
  console.log(myString);
}

writeLog2("Log 1", "Log 2", "Log 3");

//Return trong hàm - JS cơ bản
//Trong một hàm mà không return thì sẽ trả về undefined
//các câu lênh bên dưới return thì sẽ ko đc thực thi
//return có thể trả ra bất cứ kiểu dữ liệu gì

var isConfirm = confirm("Message?");

console.log(isConfirm);

function cong(a, b) {
  return a + b;
}

var result = cong(2, 8);

console.log(result);

/**
 * Một số điều cần biết về function
 *
 * 1. Khi function đặt trung tên?
 *  - function định nghĩa sau sẽ ghi đè lên function đình nghĩa trc
 * 2. Khai báo biến trong hàm?
 *  - Có thể khai báo biến trong hàm
 *  - Phạm vi của biến chỉ sử dụng trong function
 * 3. Định nghĩa hàm trong hàm?
 *  - Có thể định nghia hàm trong hàm
 *  - Phạm vi chỉ sử dụng trong function mình định nghĩa
 */

function showMessage() {
  console.log("Message 1");
}

function showMessage() {
  console.log("Message 2");
}

showMessage();

function showMessage() {
  var fullName = "Sơn";
  console.log(fullName);
}

showMessage();

function showMessage() {
  function showMessage2() {
    var fullName = "Sơn trần";
    console.log(fullName);
  }

  showMessage2();
}

showMessage();

/**
 * Các loại function
 *
 * 1. Declaration function
 * 2. Expression function
 * 3. Arrow function
 */

//Declaration
function message() {}

//Expression
var message2 = function () {};

setTimeout(function name(params) {});

var myObject = {
  myFunction: function () {},
};

//Hosting: gọi trước khi định nghĩa function
