/**
 * Toán tử so sánh
 *
 * ==         --> Bằng
 * !=         --> Không Bằng
 * >          --> Lớn hơn
 * <          --> Nhỏ hơn
 * >=         --> Lớn hơn hoặc bằng
 * <=         --> Nhỏ hơn hoặc bằng
 *
 */

console.log("Toán tử so sánh: ");

// var a = 1;
// var b = 2;

var a = "Son";
var b = "So";

if (a == b) {
  console.log("Dieu kiện đúng!");
} else {
  console.log("Dieu kien sai!");
}

/**
 * Toán tử so sánh - P2
 * 
 * Sử dụng == chỉ quan tâm đến value của 2 biến (so sánh giá trị)
 * 
 * === so sánh cả value và cả datatype
 * !==
 */



/**
 * If - else
 * 
 * chỉ quan tâm đến giá trị boolean
 * 
 * 0
 * false
 * "" - ''
 * Null
 * NaN
 * undefined
 * 
 * các giá trị trên convert sang boolean sẽ là false
 * còn lại sẽ là true
 */

var fullName = "Son Tran"; 

if (fullName) {
  console.log("Điều kiện đúng!");
} else {
  console.log("Dieu kien sai!");
}
