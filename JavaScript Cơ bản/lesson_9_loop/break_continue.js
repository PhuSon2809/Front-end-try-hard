//Break $ Continue in loop
console.log("Break $ Continue------------");

for (var i = 0; i < 10; i++) {
  console.log(i);

  if (i >= 5) {
    break;
  }
}

for (var i = 0; i < 10; i++) {
  if (i % 2 !== 0) {
    continue;
  }

  console.log(i);
}

//Vòng lặp lồng nhau - nested loop
var myArray = [
    [1, 2],
    [3, 4],
    [5, 6],
];

for (var i = 0; i < myArray.length; i++){
    console.log(myArray[i]);
    for(var j = 0; j < myArray[i].length; j++){
        console.log(myArray[i][j]);
    }
}

//Loop example
for(var i = 10; i > 0; i--){
    console.log(i);
}

for(var i = 0; i <= 50; i += 5){
    console.log(i);
}

for(var i = 100; i>0; i -= 5){
    console.log(i);
}
