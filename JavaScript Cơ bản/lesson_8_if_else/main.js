/**
 * Câu lệnh rẽ nhánh - If else
 *
 * đk có thể đúng cả 2 nhánh --> nhưng kết quả trả ra đúng ở nhánh đầu tiên
 */

var date = 9;

if (date === 2) {
  console.log("Hôm nay là thứ 2");
} else if (date === 3) {
  console.log("Hôm nay là thứ 3");
} else if (date === 4) {
  console.log("Hôm nay là thứ 4");
}

function run(a) {
  //
  if (a % 3 == 0 && a % 5 != 0) {
    return 1;
  } else if (a % 5 == 0 && a % 3 != 0) {
    return 2;
  } else if (a % 15 == 0) {
    return 3;
  }
}

// Kỳ vọng
console.log(run(3)); // 1
console.log(run(5)); // 2
console.log(run(15)); // 3

/**
 * Câu lệnh rẽ nhanh - Switch
 */
console.log("Switch");

switch (date) {
  case 2:
    console.log("Hôm nay là thứ 2");
    break;
  case 3: // ===
    console.log("Hôm nay là thứ 3");
    break; //Khi không có break, tính từ case đúng nó sẽ chạy vào cả các case bên dưới
  case 4:
    console.log("Hôm nay là thứ 4");
    break;
  case 5:
    console.log("Hôm nay là thứ 5");
    break;

  default:
    console.log("Không biết");
    break; //default có thể ko cần break vì ko còn case bên dưới
}

//Cần so sánh tính đúng sai --> có thể sử dung if else
//Khi đc cho trc các giá trị --> sử dụng switch
//ít hơn 3 case nên dùng if else --> để code nhìn dễ hơn

/**
 * Toán tử 3 ngôi - Ternary operator
 */

//2 ngôi
var course = {
  name: "JavaScript",
  coin: 250,
};

if (course.coin > 0) {
  console.log(`${course.coin} Coins`);
} else {
  console.log("Miễn phí!");
}

//3 ngôi
var result = course.coin > 0 ? `${course.coin} Coins` : "Miễn phí!";
console.log(result);

var a = 1;
var b = 2;

var c = a > 0 ? a : b;
console.log(c);