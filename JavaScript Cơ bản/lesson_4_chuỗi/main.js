/**
 * CHUỖI trong JavaScript
 *
 * 1. Tạo chuỗi
 *  - Các cách tạo chuối: có 2 cách
 *  - Nên dùng cách nào? Ly do?
 *   --> Nên dùng cách số 1
 *  - Kiểm tra data type
 *
 * 2. Một số case sử dụng backslash (\)
 * 3. Xem dộd dài chuỗi
 * 4. Chú ý độ dài khi viết Code
 * - Nên viết chỉ 80 ký tử trên 1 dòng code
 * 5. Teamplate string ES6
 *
 */

// SyntaxError là lỗi cú pháp

//Cách 1
/**
 * Lý do nên dùng cách 1
 * - Vì cách 2 dài dòng hơn
 * - Cách 2 kiểu dữ liệu là object
 */
var fullName = "Son Tran là 'sieu nhan'"; //""dùng tương tự
//Cách 2
var fullName2 = new String("Son Tran");

console.log(typeof fullName2);

console.log(fullName);

var string = "Đây là dấu \\";
console.log(string.length); //length kiểu tra độ dài tính cả dấu cách

//Teamplate string ES6
var firstName = "Son";
var lastName = "Tran";

console.log("Toi la: " + firstName + " " + lastName);
console.log(`Toi la: ${firstName} ${lastName}`);

/**
 * Làm việc với chuỗi
 *
 * keyword: JavaScript String methods
 */

var myString = "Hoc JS tai JS JS F8!";
var myString2 = "   Hoc JS tai F8!";

//1. Length
console.log(myString.length);

// 2. Find index
//indexOf sẽ trả về vị trí chuỗi đầu tiền mà nó tìm thấy
console.log(myString.indexOf("JS"));
console.log(myString.indexOf("JS", 6)); //Nhập số lớn hơn vị trí ban đầu
console.log(myString.lastIndexOf("JS")); //vị trí cuối cùng kí tự muốn tìm kếm
console.log(myString.indexOf("ABC")); //-1 là ko tiềm thấy

console.log(myString.search("JS")); //Tìm kiếm thao biểu thusch chính quy

// 3. Cut string

console.log(myString2.slice(4, 6));
console.log(myString2.slice(4));
console.log(myString2.slice(-3, -1));

// 4. Replace

console.log(myString.replace("JS", "JavaScript"));
//Chỉ thay đổi kí tự đầu tiên tìm thấy
console.log(myString.replace(/JS/g, "JavaScript"));
//Phải áp dụng biểu thúc chính quy đề thay đổi tất cả kí tự muốn thay thế

// 5. Convert to upper case
console.log(myString2.toUpperCase());

// 6. Convert to lower case
console.log(myString2.toLowerCase());

// 7. Trim: Giúp loại bỏ khoảng trắng 2 đầu
console.log(myString2.trim().length);

// 8. Split: sẽ trả về array
//Phải tìm ra đc điểm chung hợp lý
var language = "JavaScript, PHP, Ruby";
console.log(language.split(", "));
console.log(language.split("")); //tách thanh từng chữ cái

// 9. Get a character by index
//Lấy được kí tự từ index cho trước
const myString3 = "Son Tran";
console.log(myString3.charAt(1));
//truyền vào index ko có thì sẽ tả về chuỗi rỗng

console.log(myString3[1]);

var coursesStr = "HTML & CSS, JavaScript, ReactJS";

function stringToArray(str) {
  return str.split(", ");
}

// Expected results
console.log(stringToArray(coursesStr));
