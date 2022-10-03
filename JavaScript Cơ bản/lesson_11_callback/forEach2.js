//forEach, find, filter, some, every, reduce

var courses = ["JavaScript", "PHP", "Ruby"];

courses.length = 10;
console.log(courses);

// for (var i in courses) {
//   console.log(courses[i]);
// }

Array.prototype.forEach2 = function (callback) {
  //for-in ko chỉ duyệt qua những phần tử trong mảng
  //mà còn duyệt qua cả những ele trong prototype
  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      callback(this[index], index, this);
    }
  }
};

//forEach: không quan tâm đến thuộc tính length, 
//chỉ duyệt qua những thuộc tính thực
//--> là vòng lặp for-in
var output = courses.forEach2(function (course, index, array) {
  console.log(course, index, array);
});
console.log(output);
