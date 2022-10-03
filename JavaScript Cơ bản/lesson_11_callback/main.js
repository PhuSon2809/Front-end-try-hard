/**
 * Callback? (gọi lại)
 *
 * Là hàm (function) được truyền qua đối số
 * khi gọi hàm khác
 *
 * 1. Là hàm
 * 2. Được truyền qua đối số
 * 3. Được gọi lại trong hàm nhận đối số
 */

function myFunction(param) {
  if (typeof param === "function") {
    param("Học lập trình");
  } else {
    console.log("param is not function");
  }
}

function myCallback(value) {
  console.log("Value: ", value);
}

myFunction(123);

function sumCb(a, b) {
  return (a += b);
}

function subCb(a, b) {
  return (a -= b);
}

function multiCb(a, b) {
  return (a *= b);
}

function divCb(a, b) {
  return (a /= b);
}

function caculate(a, b, cb) {
  return cb(a, b);
}

// Expected results
// caculate(1, 2, sumCb) // Output: 3
// caculate(1, 2, subCb) // Output: -1
// caculate(1, 2, multiCb) // Output: 2
// caculate(3, 1, divCb) // Output: 3

Array.prototype.map2 = function (callback) {
  var arrLength = this.length;
  var output = [];

  for (var i = 0; i < arrLength; ++i) {
    var result = callback(this[i], i);
    output.push(result)
  }
  return output;
};

var courses = ["JavaScript", "PHP", "Ruby"];

var htmls2 = courses.map2(function (course) {
  return `<h2>${course}</h2>`;
});

console.log(htmls2.join(""));

var htmls = courses.map(function (course) {
  return `<h2>${course}</h2>`;
});

console.log(htmls.join(""));
