//M Romi Ario - Exercise 13
function xo(str) {
    var jumlahX = 0;
    var jumlahO = 0;
    for(var count=0;count<str.length;count++){
        if(str[count] === 'x'){
            jumlahX += 1;
        } else if (str[count] === 'o'){
            jumlahO += 1;
        }       
    }
    if (jumlahX === jumlahO){
        return true;
    } else{
        return false;
    }
  }
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true