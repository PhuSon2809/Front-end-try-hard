//filter2
// var courses = ["JavaScript", "PHP", "Ruby"];

var courses = [
  {
    id: 1,
    name: "JavaScript",
    coin: 200,
  },
  {
    id: 2,
    name: "HTML-CSS",
    coin: 0,
  },
  {
    id: 3,
    name: "Ruby",
    coin: 0,
  },
  {
    id: 4,
    name: "PHP",
    coin: 400,
  },
  {
    id: 5,
    name: "ReactJS",
    coin: 500,
  },
  {
    id: 6,
    name: "Ruby",
    coin: 100,
  },
];

Array.prototype.filter2 = function (callBack) {
  var output = [];
  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      var result = callBack(this[index], index, this);
      if (result) {
        output.push(this[index]);
      }
      
    }
  }
  return output;
};

var output = courses.filter2(function (course, index, array) {
  return course.coin > 100;
});

console.log(output);
