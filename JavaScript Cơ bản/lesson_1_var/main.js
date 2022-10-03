// alert("Hi JavaScript basic!")

// Khai báo biến
// Khai báo biến dùng var là viết tắt của variable (biến)
// Tên biến phân biệt hoa và thường, bao gồm cả chữ và số,
// nhưng kí tự đầu tiên phải là chữ

var fullName = "Tran Phu Son";
var age = 22;

// alert tại một thời điểm chỉ hiển thị được một cái thôi
// vì vầy sẽ hiển thị lần lượt từng cái
// Goi hàm thông báo
alert(fullName);
alert(age);

// Khi khai viết code ko có dấu chấm phẩy dễ bị lỗi cú pháp
// khi khai báo biến trên cùng một dòng
// Ex: var fullName = "Tran Phu Son"var age = 22

/**
 * Comments trong JavaScript
 *
 * 1. Mục đích sử dụng
 *  - Ghi chú
 *  - Vô hiệu hóa mã
 *
 * 2. Loại comments
 * - Comment 1 dòng
 * - Comment nhiều dòng
 *
 * 3. Sử dụng phím tắt
 * - Win: Ctrl + /
 * - MacOS: Command + /
 */

/**
 * Một số hàm built-in
 * 1. Alert
 * 2. Console
 * - Chứa nhiều hàm bên trong
 * - Dùng để in ra thông báo trên tab console
 * 3. Confirm
 * 4. Prompt
 * 5. Set timeout
 * - Thực thi một đoạn code sau một thời gian xác định
 * 6. Set interval
 * - Thực thi liên tự một đoạn code sau một khoản thời gian
 */

console.log("Day la 1 dong log");
console.log(fullName);
console.warn(age);
console.error(fullName);

//Để xác nhận thông tin
confirm("Xac nhan ban du tuoi!");

//Để lấy giá trị người dùng nhập vào
prompt("Tuổi của bạn: ");

//Sẽ truyền vào một function
setTimeout(function () {
  alert("Thông báo");
}, 1000);

setInterval(function () {
  console.log("Thông báo nè!!!" + Math.random());
}, 1000);
