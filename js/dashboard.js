const sign = (event) =>{

    event.preventDefault();

    window.location.href = 'login.html';

};

const getTrendingData = (dataMentah) =>{ 

    return dataMentah.filter(buku => buku.kodeBarang.includes('MSIM')).slice(0,5);

};

const getDataByLimit = (dataMentah , limit =4) => {


    return dataMentah
        .reverse()
        .slice(0, limit);

};

function updateClock() {
    const clockElement = document.getElementById('live-clock');
    const greetingElement = document.getElementById('dynamic-greeting');
    if (!clockElement) return;

    const now = new Date();
    const hours = now.getHours();
    let greeting = "";

    if (hours >= 5 && hours < 11) {
        greeting = "Selamat Pagi";
    } else if (hours >= 11 && hours < 15) {
        greeting = "Selamat Siang";
    } else if (hours >= 15 && hours < 18) {
        greeting = "Selamat Sore";
    } else {
        greeting = "Selamat Malam";
    }

    if (greetingElement) {
        greetingElement.innerText = greeting;
    }

    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    
    clockElement.innerText = now.toLocaleString('id-ID', options);
}




const detailPage = (id , currentPage) => {
 
    localStorage.setItem('currentPage' , currentPage);

    window.location.href = `detail-page.html?id=${id}`;

};

document.addEventListener('DOMContentLoaded', () => {
    

    // CEK USER AKTIF
    const getLoginData = localStorage.getItem('userActive');
    const logIn = document.querySelectorAll('.log-in');
    const logOut = document.querySelectorAll('.log-out');
    const welcomNologin = document.getElementById('welcom-nologin');
    const welcomlogin = document.getElementById('welcom-login');

    const path = window.location.pathname.split("/").pop() || "index.html";




    if(getLoginData){
       
        const user = JSON.parse(getLoginData);
        const htmlNama = document.getElementById("namauser");
        htmlNama.innerHTML = `${user.nama}`;

        logOut.forEach(button => {
            button.classList.remove('hidden')
        });
       
        welcomlogin.classList.remove('hidden');

    }else{

        logIn.forEach(button => {
            button.classList.remove('hidden');
        });

        welcomNologin.classList.remove('hidden');

    }

    setInterval(updateClock, 1000);
    updateClock();

    //  TRENDING BOOK & Latest Bahan Ajar
    const bahanAjarMentah = JSON.parse(localStorage.getItem('dataBahanAjar'));
    const dataTrending = getTrendingData(bahanAjarMentah);
    const bahanAjarLatest = getDataByLimit(bahanAjarMentah , 4);
    const trendingContainer = document.getElementById('trending-book');
    const latestContainer = document.getElementById('bahan-ajar-latest');


    if(dataTrending.length > 0){

        trendingContainer.innerHTML = dataTrending.map(item => `
             <article class="book-card-vertical">
                    <div class="book-cover color-1">
                        <img src="${item.cover}" alt="Book Cover">
                    </div>
                    <h4>${item.kodeBarang}</h4>
                </article>
            `).join('');


    }else{
        
            trendingContainer.innerHTML = `<div class="empty-state-container">
                    <div class="empty-state-content">
                        <div class="icon-wrapper">
                            <i class='bx bx-data'></i>
                        </div>
                        <h3>Menampilkan : ${dataTrending.length}data</h3>
                        <p>Tidak ada data yang ditampilkan</p>
                    </div>
                </div>`;

    }

    // Bahan Latest
    if(bahanAjarLatest.length > 0){

          
        latestContainer.innerHTML = bahanAjarLatest.map(item => `
            <article class="book-item">
                    <img src="${item.cover}" alt="Cover" class="thumb">
                    <div class="book-info">
                        <h5>${item.namaBarang}</h5>
                        <p>${item.kodeBarang}</p>
                    </div>
                    <button class="btn-click" onclick="detailPage('${item.kodeBarang}','${path}')"><i class='bx bx bxs-info-circle'></i></button>
                </article>
            `).join('');

          

    }else{

         latestContainer.innerHTML = `<div class="empty-state-container">
                    <div class="empty-state-content">
                        <div class="icon-wrapper">
                            <i class='bx bx-data'></i>
                        </div>
                        <h3>Menampilkan : ${bahanAjarLatest.length}data</h3>
                        <p>Tidak ada data yang ditampilkan</p>
                    </div>
                </div>`;

    }


});