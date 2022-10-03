/**
 * Vòng lặp - loop
 *
 * Lợi ích:
 * - Viết mã ít hơn
 * - Trách lặp đi lặp lại
 *
 * 1. for - Lặp vs điều kiện đúng
 * 2. for/in - Lặp qua key của đối tượng
 * 3. for/of - Lặp qua value của đối tượng
 * 4. while - Lặp khi điều kiện đúng
 * 5. do/while - Lặp ít nhất 1 lần,
 *    sau đó lặp khi điều kiện đúng
 */

//1. Vòng lặp For
//In 1 dãy số tăng dần từ 1 --> 1000

// var i = 1 chỉ chạy 1 lần
// i <= 1000 --> trả về true --> đk đúng --> thực thi code --> in ra 1
// i++ = 2 --> trả về true --> đk đúng --> thực thi code --> in ra 2
// ...
// i > 1000 --> vòng lặp kết thúc
for (var i = 1; i <= 1000; i++) {
  //   console.log(i);
}

var myArray = ["JavaScript", "PHP", "Dart", "Java"];
var arrayLength = myArray.length;
for (var i = 0; i < arrayLength; i++) {
  console.log(myArray[i]);
}

// VD 1: for (var i = 0; i < 100; i--) // i++ mới đúng
// VD 2: for (var i = 100; i >= 0; i++) // i-- mới đúng
// là 2 vòng lặp không có điểm dừng (lặp vô hạn)
//
// => Treo trình duyệt!!!

function getRandNumbers(min, max, length) {
  var array = [];
  for (var i = 1; i < length; i++) {
    array[i] = Math.random() * (max - min) + min;
  }
  return array;
}

function getTotal(arr) {
  var sum = 0;
  var arrLength = arr.length;
  for (var i = 0; i < arrLength; i++) {
    sum += arr[i];
  }
  return sum;
}
 var total = [1, 2, 3];
console.log(getTotal([1, 2, 3]));

var orders = [
  {
    name: "Khóa học HTML - CSS Pro",
    price: 3000000,
  },
  {
    name: "Khóa học Javascript Pro",
    price: 2500000,
  },
  {
    name: "Khóa học React Pro",
    price: 3200000,
  },
];

function getTotal(orders) {
  var sum = 0;
  var arrLength = orders.length;
  for (var i = 0; i < arrLength; i++) {
    sum += orders[i].price;
  }
  return sum;
}

// Expected results:
getTotal(orders); // Output: 8700000
console.log(getTotal(orders));