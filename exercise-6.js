//M Romi Ario - Exercise 6 - Looping

//1. Melakukan Looping Menggunakan While

console.log(" Melakukan Looping Menggunakan While")
console.log();
console.log('LOOPING PERTAMA');
var awal =1; //inisial counter
while (awal<=20){
    if(awal%2===0){ // Jika genap tampilkan
        console.log(awal+" "+"-"+" "+"I love coding");
    }
    awal++;
}

console.log('LOOPING KEDUA');
var akhir = 20;
while (akhir>=1){
    if(akhir %2=== 0){
        console.log(akhir+" "+"-"+" "+"I love coding");
    }
    akhir--;
}
console.log(" ");

//2. Melakukan Looping Menggunakan For

console.log("Melakukan Looping Menggunakan For");
console.log();
console.log("LOOPING PERTAMA");
for(var awalFor = 1; awalFor<=20; awalFor++){
    console.log(awalFor+" "+"-"+" "+"I love coding")
}
console.log();
console.log("LOOPING KEDUA");
for(var akhirFor = 20; akhirFor>=1; akhirFor--){
    console.log(akhirFor+" "+"-"+" "+" I will become fullstack developer")
}
console.log(" ");

//3. Angka Ganjil dan Genap
console.log("Angka Ganjil dan Genap");
console.log();

//Ganjil - Genap
for(var counter = 1; counter<=100; counter++){
    if(counter%2 === 0){
        console.log("GENAP");
    } else {
        console.log("GANJIL");
    }
}
console.log();

//Pertambahan 2
console.log("Pertambahan 2");
var counter2 = 1;
while(counter2<=100){
    counter2 += 2;
    if(counter2%3===0){
        console.log(counter2+" kelipatan 3");
    }
}
console.log();

//Pertambahan 5
console.log("Pertambahan 5");
var counter5 = 1;
while(counter5<=100){
    counter5 += 5;
    if(counter5%6===0){
        console.log(counter5+" kelipatan 6");
    }
}
console.log();

//Pertambahan 9
console.log("Pertambahan 9");
var counter9= 1;
while(counter9<=100){
    counter9 += 9;
    if(counter9%10===0){
        console.log(counter9+" kelipatan 10");
    }
}
console.log();