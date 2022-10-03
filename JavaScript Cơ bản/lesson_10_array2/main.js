/**
 * Array method
 * - forEach()
 * - every()
 * - some()
 * - find()
 * - filter()
 * - map()
 * - reduce()
 */

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

//Hàm đc truyền vào theo dang tham số được là callBack
courses.forEach(function (course, index) {
  console.log(index, course);
});

//every: kiểm tra tất cả các phần tử thuộc
//1 mảng phải thỏa mãn đk gì đó
//every trả về kiểu boolean
//Kiểm tra thk đầu tiên đúng thì mới kiểm tra thằng thứ 2
var isFree = courses.every(function (course, index) {
  console.log(index);
  return course.coin === 0;
});

console.log(isFree);

//some: kiểm tra chỉ cần 1 phần tử trong
//1 mảng thỏa mãn đk gì đó --> trả về true
//--> ngừng lại vòng lặp ngay khi gặp kết quả đúng
var isFree = courses.some(function (course, index) {
  console.log(index);
  return course.coin === 0;
});

console.log(isFree);

//find(): chỉ trả về một đối tượng thỏa mãn
//Khi có 2 phần tử thỏa mãn đk trở lên
//--> Cũng chỉ trả về phần tử đầu tiên thỏa mãn
//Ko có phần tử thỏa mãn đk thì trả về undefined
var course = courses.find(function (course, index) {
  console.log(index);
  return course.name === "Ruby2";
});

console.log(course);

//filter(): chỉ trả về tất cả đối tượng thỏa mãn
//Ko có phần tử thỏa mãn đk thì trả về undefined
var listCourses = courses.filter(function (course, index) {
  console.log(index);
  return course.name === "Ruby";
});

console.log(listCourses);

//map(): sử dụng khi muốn chỉnh sửa/thay đổi
//những elment của 1 array
//map() sẽ trả về một array

//return về cái gì thì mảng mới nhận về cái đó
function courseHandle(course, index, originArray) {
  return {
    id: course.id,
    name: `Khóa học: ${course.name}`,
    coin: course.coin,
    coinText: `Giá: ${course.coin}`,
    index: index,
    originArray: originArray,
  };
}

var newCourses = courses.map(courseHandle);
console.log(newCourses);

var courseName = courses.map((course) => {
  return course.name;
});

console.log(courseName);

// reduce():
// Sử dụng khi muốn nhận về giá trị duy nhất
// sau khi tính toán và xử lý các phần tử trong array

//1. Dễ hiểu hơn
//2. ngắn gọn
//3. hiệu năng (nhanh hơn)

var totalCoin = 0;

for (var course of courses) {
  totalCoin += course.coin;
}

console.log(totalCoin);

var i = 0;

function coinHandle(accumulator, currentValue, currentIndex, originArray) {
  i++;
  var total = accumulator + currentValue.coin;
  console.table({
    "Lượt chạy: ": i,
    "Biến tích trữ: ": accumulator,
    "Giá khóa học: ": currentValue.coin,
    "Tích trữ được: ": total,
  });

  return total;
}

var total = courses.reduce(coinHandle, 0);
console.log(total);

var totalCoinCou = courses.reduce(function (total, course) {
  return (total += course.coin);
}, 0); //initial value (ko bắt buộc)

//Khi ko có initial value thì nó sẽ lấy phần tử đầu tiên
//để giá trị khởi tạo

console.log(totalCoinCou);

var numbers = [100, 200, 220, 200, 480];

var totalNum = numbers.reduce(function (total, num) {
  return total + num;
});

console.log(totalNum);

//Flat - "Làm phẳng" mảng từ Depth array - "Mảng sâu"
var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];

var flatArray = depthArray.reduce(function (flatOut, deptItem) {
  return flatOut.concat(deptItem);
}, []);

console.log(flatArray);

//Lấy ra các khóa học và đưa vào một mảng mới
var topics = [
  {
    topic: "Front-end",
    courses: [
      {
        id: 1,
        title: "HTML-CSS",
      },
      {
        id: 2,
        title: "JavaScript",
      },
    ],
  },
  {
    topic: "Back-end",
    courses: [
      {
        id: 1,
        title: "PHP",
      },
      {
        id: 2,
        title: "NodeJS",
      },
    ],
  },
];

var newCourses = topics.reduce(function (course, topic) {
  return course.concat(topic.courses);
}, []);

console.log(newCourses);

var htmls = newCourses.map(function (course) {
  return `
        <div>
            <h2>${course.title}</h2>
            <p>ID: ${course.id}</p>
        </div>
    `;
});

console.log(htmls.join(''));