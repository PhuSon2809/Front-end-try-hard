//While loop
console.log('while ---------------');

var i = 0;

while (i < 10){
    i++; //ko đc quên
    console.log(i);
}

var i = 1;

while (i <= 10){
    console.log(i);
    i++; //ko đc quên
}

var language = ["JavaScript", "PHP", "Dart", "Java"];
var i = 0;

while(i < language.length){
    console.log(language[i]);
    i++;
}

//do/while loop
console.log('Do/while ---------------');

var i = 0;
var isSuccess = false;

do{
    i++;
    console.log('Nạp thẻ lần '+ i);
    if(true){
        isSuccess = true;
    }
}while(!isSuccess && i < 3)

