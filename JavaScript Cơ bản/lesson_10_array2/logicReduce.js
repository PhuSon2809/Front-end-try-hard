Array.prototype.reduce2 = function (callback, result) {
  let i = 0;
  if (arguments.length < 2) {
    i = 1;
    result = this[0];
  }
  for (; i < this.length; i++) {
    result = callback(result, this[i], i, this);
  }
  return result;
};

const number = [1, 2, 3, 4, 5];

const result = number.reduce2(function (total, number) {
  return total + number;
},10);

console.log(result);

function arrToObj(arr){
    var newObject = arr.reduce(function(object, item){
        object[item[0]] = item[1];
        return object;
    }, {})
    return newObject;
}
 
// Expected results:
var arr = [
    ['name', 'Sơn Đặng'],
    ['age', 18],
];
console.log(arrToObj(arr)); // { name: 'Sơn Đặng', age: 18 }
