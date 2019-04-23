//M Romi Ario - Looping Asterisk - Exercise 7

//1. Menyusun Barisan Bintang
console.log('Menyusun Barisan Bintang');
console.log();
var rows1 = 5;//input number
var counter = 1;//counter

while(counter<=rows1){
    console.log('*');
    counter++;
}
console.log();

//2.Menyusun Barisan Bintang Dengan Nested Looping
console.log('Menyusun Barisan Bintang Dengan Nested Looping');
console.log();
var rows2=5; //input number


var counterRow=1; // value of row
var counterColumn=1; //value of column
var storeStars = '';

while(counterRow<=rows2){
    counterColumn = 1;
    storeStars = '';
    while(counterColumn<=rows2){
        storeStars += '*' 
        counterColumn++;
    }
    console.log(storeStars);
    counterRow++;
}
console.log()

//3.Menyusun Barisan Tangga Bintang Dengan Nested Looping
console.log('Menyusun Barisan Tangga Bintang Dengan Nested Looping');
console.log();
var rows3 = 5; // input the number of rows
var counterR = 1;
var counterC = 1;
var storeStars2 = '';

while(counterR<=rows3){
    counterC = 1;
    storeStars2 = '';
    while(counterC<=counterR){
        storeStars2+= '*';
        counterC++;
    }
    console.log(storeStars2);
    counterR++;
}

