//Xóa các phần tử trùng lặp
//input
arr = ["a", "b", "c", "d", "a", "a", "c"];

console.log([...new Set(arr)]);

/**
 * Đệ quy
 *
 * Một ham khi nó tự gọi lại chính nó --> đệ quy
 *
 * 1. Xác đinh điểm dừng
 * 2. logic handle => tạo ra điểm dừng
 */

function countDown(num) {
  if (num > 0) {
    console.log(num);
    return countDown(num - 1);
  }
  return num;
}

countDown(10);


function loop(start, end, callBack){
    if(start < end){
        callBack(start);
        return loop(start + 1, end, callBack);
    }
}

var language = ["JavaScript", "PHP", "Dart", "Java"];

loop(0, language.length, function(index){
    console.log(language[index]);
})