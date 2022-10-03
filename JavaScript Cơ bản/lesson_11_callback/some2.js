//some2: true/false

var courses = [
  {
    id: 1,
    name: "JavaScript",
    coin: 200,
    isFinish: false,
  },
  {
    id: 2,
    name: "HTML-CSS",
    coin: 0,
    isFinish: false,
  },
  {
    id: 3,
    name: "Ruby",
    coin: 0,
    isFinish: false,
  },
  {
    id: 4,
    name: "PHP",
    coin: 400,
    isFinish: false,
  },
  {
    id: 5,
    name: "ReactJS",
    coin: 500,
    isFinish: false,
  },
  {
    id: 6,
    name: "Ruby",
    coin: 100,
    isFinish: false,
  },
];

Array.prototype.some2 = function (callBack) {
  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      var result = callBack(this[index], index, this);
      if (result) {
        return true;
      }
    }
  }
  return false;
};

var output = courses.some2(function (course, index, array) {
  return course.coin === 900;
});

console.log(output);
