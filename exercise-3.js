//Contoh input
var nama = 'Zero';
var peran = 'Penyihir';
var action;

if (nama === ''){ //Jika nama kosong, ke line 7,
    console.log('Nama harus diisi!')
} else{
    if(peran === ''){//Jika peran kosong ke line 10, setelah itu console line 22
        action = 'Pilih peranmu untuk memulai game!'
    } else{
        //Jika peran sesuai assingn console, setelah itu console line 20, setelah itu console line 22
        if(peran === 'Ksatria'){ 
            action = 'kamu dapat menyerang dengan senjatamu!'
        } else if(peran === 'Tabib'){
            action = 'kamu akan membantu temanmu yang terluka.'
        } else if (peran === 'Penyihir'){
            action = 'ciptakan keajaiban yang membantu kemenanganmu!'
        }
        console.log("Selamat datang di Dunia Proxytia, "+nama);
    }
    console.log('Halo '+peran+' '+nama+', '+action);
}

//M Romi Ario - Exercise 3 Week 2