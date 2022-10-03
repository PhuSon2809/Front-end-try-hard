/**
 * Mảng trong JavaScript - Array
 *
 * 1. Tạo mảng
 *  - Cách tạo
 *  - Sử dụng cách nào? Tạo sao?
 *  - Kiểm tra data type
 *
 * 2. Truy xuất mảng
 *  - độ dài mảng
 *  - lấy phần tử theo index
 */

//Có thể chứa đc tất cả kiểu dữ liệu trong JS
var languages = [
  "JavaScript",
  "PHP",
  "Java",
  "ReactJS",
  "C#",
];

var languages3 = [
  "JavaScript",
  "PHP",
];

var languages2 = new Array(
  "JavaScript",
  "PHP",
  "Java",
  "ReactJS",
  "C#",
  null,
  undefined,
  function name(params) {}
);

console.log(languages);
console.log(languages[2]);
console.log(languages.length);
console.log(Array.isArray(languages));

/**
 * Làm việc với Array
 * 
 */

// 1. To String
console.log(languages);
console.log(languages.toString());

// 2. Join
console.log(languages.join('-'));

// 3. Pop: xóa đi phần tử cuối mảng và trả về phần tử đã xóa
// Khi xóa mãng rỗng sẽ trả về undefined và mảng rổng
console.log(languages.pop());

// 4. Push: thêm 1 hoặc nhiều phần tử vào cuối mảng
// Trả về độ dài mới của mảng và in ra mảng mới sau khi thêm
console.log(languages.push('Dart', 'C++'));

// 5. Shift: xóa đi phần tử đầu mảng và trả về phần tử đã xóa
// Khi xóa mãng rỗng sẽ trả về undefined và mảng rổng
console.log(languages.shift()); 

// 6. Unshift: thêm 1 hoặc nhiều phần tử vào đầu mảng
// Trả về độ dài mới của mảng và in ra mảng mới sau khi thêm 
console.log(languages.unshift('JS'));

// 7. Splicing
console.log(languages.splice(1, 2, 'CSS'));
//1 vị trí bắt đầu muốn xóa
// 2 Số phần tử muốn xóa
// 'CSS' chèm thêm CSS vào

// 8. Concat: nối 2 array
console.log(languages.concat(languages3));

// 9. Slicting: cắt một vài phần tử của mảng
console.log(languages.slice(1,2));

console.log(languages);