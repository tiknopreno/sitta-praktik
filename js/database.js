const logout = (event) => {
    event.preventDefault();

    if(localStorage.getItem('userActive')){

        localStorage.removeItem('userActive');
        showToast(`Logout sukses ` , 'success' , 5000);

        setTimeout(() => {
            window.location.href="index.html";
        },1500);

    }
};


const initDatabase = () => {

    const dbDataPengguna = localStorage.getItem('dataPenggunaLocal');
    const dbBahanAjar = localStorage.getItem('dataBahanAjar');
    const dbDataPengiriman = localStorage.getItem('dataPengiriman');
    const dbProgress = localStorage.getItem('progressBelajar');

    let reload = false;
    if(!dbDataPengguna){
        console.log("Data pengguna kosong. menyalin dari data.js");
        localStorage.setItem('dataPenggunaLocal' , JSON.stringify(dataPengguna));
        reload = true;
    }

    if(!dbBahanAjar){
        console.log("Data bahan ajar kosong. menyalin dari data.js");
        localStorage.setItem('dataBahanAjar' , JSON.stringify(dataBahanAjar));
        reload = true;
    }
    
    if(!dbDataPengiriman){
        console.log('Data pengiriman kosong. menyalin dari data.js');
        localStorage.setItem('dataPengiriman' , JSON.stringify(dataTracking));
        reload = true;
    }

    if(!dbProgress){
        console.log('Data progress kosong. menyalin dari data.js');
        localStorage.setItem('progressBelajar', JSON.stringify(dataProgress));
        reload = true;
    }


    if(reload){
        window.location.reload();
    }else{
        console.log('Semua data ready ...');
    }

};

initDatabase();


let currentPage = 1;
const limitPage = 6;
const sourceData =JSON.parse(localStorage.getItem('dataBahanAjar'));
let dataShow = [...sourceData];

const sourcePengiriman = JSON.parse(localStorage.getItem('dataPengiriman'));
let dataPengiriman = Object.values(sourcePengiriman);

const sourceProgress = JSON.parse(localStorage.getItem('progressBelajar'));
let progressBelajar = [...sourceProgress];
