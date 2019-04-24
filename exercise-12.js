//M Romi Ario - Exercise 12

function konversiMenit(menit) {
    var jamBaru = Math.trunc(menit/60);
    var menitBaru = menit%60;
    if (menitBaru<10){
        menitBaru = '0'+menitBaru;
    }
    return jamBaru+':'+menitBaru;
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00