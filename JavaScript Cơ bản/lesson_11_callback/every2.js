//every2: true/false

var courses = [
  {
    id: 1,
    name: "JavaScript",
    coin: 200,
    isFinish: true,
  },
  {
    id: 2,
    name: "HTML-CSS",
    coin: 0,
    isFinish: true,
  },
  {
    id: 3,
    name: "Ruby",
    coin: 0,
    isFinish: true,
  },
  {
    id: 4,
    name: "PHP",
    coin: 400,
    isFinish: true,
  },
  {
    id: 5,
    name: "ReactJS",
    coin: 500,
    isFinish: true,
  },
  {
    id: 6,
    name: "Ruby",
    coin: 100,
    isFinish: true,
  },
];

Array.prototype.every2 = function (callBack) {
  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      var result = callBack(this[index], index, this);
      if(!result){
        return false;
      }
    }
  }
  return true;
};

var output = courses.every2(function (course, index, array) {
  return course.coin < 900;
});

console.log(output);
