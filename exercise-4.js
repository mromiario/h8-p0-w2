var hari = 28; //Input tanggal
var bulan =11; //Input bulan
var namaBulan; //variabel nama bulan
var tahun = 1997; //Input tahun

switch(bulan){
    case 1 :{
        namaBulan = 'Januari';
        break;
    }
    case 2 :{
        namaBulan = 'Februari';
        break;
    }
    case 3 :{
        namaBulan = 'Maret';
        break;
    }
    case 4 :{
        namaBulan = 'April';
        break;
    }
    case 5 :{
        namaBulan = 'Mei';
        break;
    }
    case 6 :{
        namaBulan = 'Juni';
        break;
    }
    case 7 :{
        namaBulan = 'Juli';
        break;
    }
    case 8 :{
        namaBulan = 'Agustus';
        break;
    }
    case 9 :{
        namaBulan = 'September';
        break;
    }
    case 10:{
        namaBulan = 'Oktober';
        break;
    }
    case 11:{
        namaBulan = 'November';
        break;
    }
    case 12:{
        namaBulan = 'Desember';
        break;
    }
    default :{
        namaBulan = 'Bulan tidak valid' //Bulan selain 1-12
        hari = '' // Reset hari
        tahun = ''// Reset tahun
    }

}

console.log(hari+' '+namaBulan+' '+tahun);
// M Romi Ario 
