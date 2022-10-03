//1. Let, const --> OK
//2. Template literals --> Ok
//3. Multi-line String --> Ok

//4. Arrow function (hàm mủi tên)

//function
function myFunc(log) {
  console.log(log);
}

//expression function
const logger = function (log) {
  console.log(log);
};

logger("Message");

//arrow function
const logger2 = (log) => {
  console.log(log);
};

const sum = (a, b) => {
  return a + b;
};

const sum2 = (a, b) => a + b;

const course = {
  name: "Javascript basic!",
  getName: function () {
    return this.name;
  },
};

console.log(course.getName());

//5. Classes
//6. Default parameter values
//7. Destructuring - phân rã
//---> Áp dụng cho ob và array
var array = ["JavaScript", "PHP", "Java"];

// var a = array[0];
// var b = array[1];
// var c = array[2];

var [a, , c] = array;

console.log(a, c);
console.log(a, c);

//8. Rest parameters
console.log("rest --------------");
//Là rest khi sử dụng chung với destructuring
var [a, ...rest] = array;
console.log(a);
console.log(rest);

var obj = {
  name: "JavaScript",
  price: 1000,
  imgae: "image-address",
  children: {
    name: "ReactJS",
  },
};

//Có thể áp dụng để xóa key của 1 obj
var {
  name: parentName, //đổi tên chỉ cần :tên mới
  children: { name: childrenName },
  ...rest
} = obj;

//name sẽ bị ghi dè thành ReactJS
console.log(parentName);
console.log(childrenName);
console.log(rest);
console.log(obj);

//Cũng là rest trong function
function logger3(...params) {
  console.log(params);
}

console.log(logger3(1, 2, 3, 4, 5, 6));
//---> sẽ trả về mảng gồm các phần tử trên

//9. Spread (...) là bỏ đi dấu mảng, để nối mảng
console.log("Spread --------------");
var array1 = ["JavaScript", "Ruby", "PHP"];
var array2 = ["ReactJS", "Dart"];
var array3 = [...array2, ...array1];

console.log(array3);

var object1 = {
  name: "JavaScript",
};

var object2 = {
  price: 1000,
};

var object3 = {
  ...object1,
  ...object2,
};

console.log(object3);

var defaultConfig = {
  api: "https://domain-trang-khoa-hoc",
  apiVersion: "v1",
  other: "Other",
  //
  //
  //
};

var exerciseConfig = {
  ...defaultConfig,
  api: "https://domain-trang-bai-tap",
};
//2 key đc đặt trùng tên nhau thì nó sẽ lấy value sau cùng

console.log(exerciseConfig);

var arr = ["JavaScript", "PHP", "Ruby"];

function logger9(...rest) {
  //bước này lại thêm [] để tại thành mảng của 3 String
  for (var i = 0; i < rest.length; i++) {
    console.log(rest[i]);
  }
}

logger9(...arr); //Bước này bỏ đi dấu [], truyển vào 3 cái String

//10. Enhanced object literals

/**
 * 1. Định nghĩa key: value cho object
 * 2. Định nghĩa method cho object
 * 3. ĐỊnh nghĩa key cho object dưới dạng biến
 */

var name = "JavaScript";
var price = 1000;

//1
var course2 = {
  name: name,
  price: price,
};
//=>
var course2 = {
  name,
  price,
  getName() {
    return name;
  },
};

console.log(course2.getName());

//3
var fieldName = "name";
var fieldPrice = "price";

var courses = {
  [fieldName]: "JavaScript",
  [fieldPrice]: 1000,
};

console.log(courses);

//11. Tagged template literal
//12. Modules: import / export
console.log("Modules ----------------");
import { TYPE_ERROR, TYPE_LOG, TYPE_WARN } from "./constants.js";
import logger10 from "./logger.js";
import * as constants from "./constants.js"

logger10("Test message", TYPE_ERROR);
