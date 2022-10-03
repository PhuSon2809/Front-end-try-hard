//For/of loop

//Dùng khi muốn lấy ra từng phần tử của một mảng
//Lấy ra chữ cái của một chuỗi

console.log('For/of --------------');
var language = ["JavaScript", "PHP", "Dart", "Java"];

for (var value of language) {
  console.log(value);
}

var string = "Java";

for (var value of string) {
  console.log(value);
}

var myInfor = {
  name: "Son Tran",
  age: 22,
  address: "Dalat, VN",
};

for (var value of Object.keys(myInfor)) {
  console.log(myInfor[value]);
}

for (var value of Object.values(myInfor)) {
  console.log(value);
}
