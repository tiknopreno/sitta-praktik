

const sign = (event) =>{

    event.preventDefault();

    window.location.href = 'login.html';

};


const getDataByLimit = (dataMentah , page = 1, limit =4) => {


    const newData = [...dataMentah].reverse();

    const start = (page -1) * limit;
    const end = start + limit;


    return newData.slice(start , end);
    

};


const cariData = (keyword) => {

    dataShow = sourceData.filter(item => {

        return item.namaBarang.toLowerCase().includes(keyword.toLowerCase()) || item.kodeBarang.toLowerCase().includes(keyword.toLowerCase());

    });

    currentPage = 1;

    renderTampilan(dataShow);

};


const renderTampilan = (bahanAjarMentah) => {


      // Latest Bahan Ajar
    const bahanAjarLatest = getDataByLimit(bahanAjarMentah , currentPage , limitPage);
    const latestContainer = document.querySelector('.bahan-ajar-latest');

    const path = window.location.pathname.split("/").pop() || "index.html";



    // Bahan Latest
    if(bahanAjarLatest.length > 0){

          
        latestContainer.innerHTML = bahanAjarLatest.map(item => `
            <article class="book-item">
                    <img src="${item.cover}" alt="Cover" class="thumb">
                    <div class="book-info">
                        <h5>${item.namaBarang}</h5>
                         <p>${item.kodeBarang}</p>
                    </div>
                    <button class="btn-click" onclick="detailPage('${item.kodeBarang}' , '${path}')"><i class='bx bx bxs-info-circle'></i></button>
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

    renderPagnation(bahanAjarMentah);
};

const renderPagnation = (dataCount) => {

    const paginationContainer = document.getElementById('pagination-controls');
    paginationContainer.innerHTML = "";

    const totalPage = Math.ceil(dataCount.length / limitPage);

    if(totalPage <= 1) return;

    for(let i = 1; i <= totalPage; i++){

        const btn = document.createElement('button');
        btn.innerText = i;
        btn.className = (i === currentPage) ? 'active' : '';

        btn.onclick = () => {
            currentPage = i;
            renderTampilan(dataCount);
            window.scrollTo({ top : 0 , behavior : 'smooth'});
        };

        paginationContainer.appendChild(btn);

    }
    

};

const detailPage = (id , currentPage) => {
 
    localStorage.setItem('currentPage' , currentPage);

    window.location.href = `detail-page.html?id=${id}`;

};

document.addEventListener('DOMContentLoaded', () => {
    

    const getLoginData = localStorage.getItem('userActive');
    const logIn = document.querySelectorAll('.log-in');
    const logOut = document.querySelectorAll('.log-out');

     if(getLoginData){
    

        logOut.forEach(button => {
            button.classList.remove('hidden')
        });
       

    }else{

        logIn.forEach(button => {
            button.classList.remove('hidden');
        });


    }
    
    
  renderTampilan(dataShow);
  


});