/**
 * For/in loop
 *
 * Thường dừng để lấy ra key của object
 */

var myInfor = {
  name: "Son Tran",
  age: 22,
  address: "Dalat, VN",
};

for (const key in myInfor) {
  console.log(key);
  console.log(myInfor[key]);
}

var language = ["JavaScript", "PHP", "Dart", "Java"];

for (var key in language) {
  console.log(key);
  console.log(language[key]);
}

var myString = "Java";

for (var key in myString) {
  console.log(key);
  console.log(myString[key]);
}

function run(object) {
  var arr = [];
  for (var key in object) {
    arr.push(`Thuộc tính ${key} có giá trị ${object[key]}`);
  }
  return arr;
}

// Expected results:
console.log(run({ name: "Nguyen Van A", age: 16 }));
