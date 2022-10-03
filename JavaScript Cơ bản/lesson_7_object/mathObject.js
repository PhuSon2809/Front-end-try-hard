/**
 * Math object
 *
 * - Math.PI
 * - Math.round()
 * - Math.abs()
 * - Math.ceil()
 * - Math.floor()
 * - Math.random()
 * - Math.min()
 * - Math.max()
 */

console.log(Math.PI);
console.log(Math.round(1.3666)); //làm tròn
console.log(Math.abs(-4)); //lấy trị tuyệt đối
console.log(Math.ceil(4.000255)); //làm tròn trên
console.log(Math.floor(4.999999)); //làm tròn dưới
console.log(Math.random()); //trả về số thập phân nhỏ hơn 1
console.log(Math.floor(Math.random() * 100)); //random 0 -> 100

var random = Math.floor(Math.random() * 5);

var bonus = ["10 coin", "20 coin", "30 coin", "40 coin", "50 coin"];

console.log(bonus[random]);

var random2 = Math.floor(Math.random() * 99);

if (random2 < 5) {
  console.log("Cường hóa thành công!");
}

// Hãy tạo hàm getRandomItem, hàm này nhận 1 tham số 
// là mảng và sẽ trả về ngẫu nhiên 1 phần tử của mảng.
var bonus2 = [];

var arrayLength = bonus2.length;

function getRandomItem(bonus2) {
  return bonus2[Math.floor(Math.random() * arrayLength)];
}
