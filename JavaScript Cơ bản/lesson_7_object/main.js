/**
 * Object trong JavaScript - Đối tượng
 */

var phoneKey = "phone";

var myInfo = {
  //cặp key và value
  //key: value,
  name: "Tran Phu Son",
  age: 22,
  address: "Da Lat, VN", // --> thuộc tính
  [phoneKey]: "0914360736", //tạo key thông qua biến
  getName: function () {
    return this.name; //this cũng như là myInfo
  },
};

//function --> gọi là phương thức / method
//others --> thuộc tính / property

myInfo.email = "phuson@gmail.com";
myInfo["shool"] = "FPT"
var myKey = "address";

//Xóa key
delete myInfo.age;

console.log(myInfo);
console.log(myInfo.name);
console.log(myInfo["phone"]); //một key ko có thì sẽ trả về undefined
console.log(myInfo[myKey]); //để lấy đc dữ liệu khi ko đc truy cập trực tiếp vào Object
console.log(myInfo.getName());

//Object constructor - Xây dụng đối tượng/ngội nhà
//this gọi từ ông nào thì nó là ông đó

function User(fisrtName, lastName, avatar) {
    //this.fisrtName: đối tượng được khởi tạo có thuộc tính fisrtName = với tham số firstName truyền vào
    this.fisrtName = fisrtName; 
    this.lastName=lastName;
    this.avatar=avatar;

    this.getName = function(){
        return `${this.fisrtName} ${this.lastName}`
    }
}

User.prototype.className = 'F8';
User.prototype.getClassName = function(){
    return this.className;
}

var author = new User('Sơn', 'Đăng', 'PNG 1');
var user = new User('Vũ', 'Nguyễn', 'PNG 2');

author.title = 'Chia sẽ dạo tại F8';
user.comment = 'Liệu có ổn ko add?'

console.log(author);
console.log(author.getName());
console.log(user);
console.log(user.getName());
console.log(author.className);
console.log(author.getClassName());

console.log(user.constructor);
console.log(user.constructor === User);

/**
 * Object prototype - basic 
 * 
 * 1. Prototype là gì? (nguyên mẫu)
 * 2. Sử dụng khi nào?
 */

//Đối tượng Date
//JS date object mozilla

var date = new Date();
console.log(date);
console.log(typeof date);

var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();

console.log(`${day}/${month}/${year}`);



