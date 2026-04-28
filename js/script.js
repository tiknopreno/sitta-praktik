const isValidEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
};

function showToast(message, type = 'success', duration = 5000) {
    const containerToast = document.getElementById('toastContainer');
    
    if (!containerToast) {
        console.error("Elemen #toastContainer tidak ditemukan di HTML!");
        return;
    }

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    let iconSvg = '';
    if (type === 'success') {
        iconSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>';
    } else if (type === 'error') {
        iconSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>';
    } else {
        iconSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>';
    }

    toast.innerHTML = `
        <div class="toast-icon">${iconSvg}</div>
        <div class="toast-content">
            <p class="toast-message">${message}</p>
        </div>
        <button class="toast-close">&times;</button>
    `;

    containerToast.appendChild(toast);

    const removeToast = () => {
        toast.classList.add('fade-out');
        toast.addEventListener('transitionend', () => toast.remove());
        setTimeout(() => toast.remove(), 500);
    };

    const timer = setTimeout(removeToast, duration);

    toast.querySelector('.toast-close').onclick = () => {
        clearTimeout(timer);
        removeToast();
    };
}

const openModal = (modalId) => {
    const targetModal = document.getElementById(modalId);
    if (targetModal) {
        targetModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
};

const closeModal = (modalElement) => {
    if (modalElement) {
        modalElement.classList.remove('active');
        document.body.style.overflow = '';
    }
};


const cariPengguna = (email , password) => {


    console.log(email);

    const user = dataPengguna.find((item) => {
        
        if(item.email === email && item.password){
            return item;
        }
       

    });

    return user;

    
}

const handleLogin = (event) => {

    event.preventDefault();
    const email = document.getElementById('emailLogin');
    const password = document.getElementById('password-login');

    const validasiUser = cariPengguna(email.value , password.value);
    
    console.log(validasiUser);
    if(validasiUser){
        showToast(`Login Success! Welcome ${validasiUser.nama}` , 'success' , 5000);

        localStorage.setItem('userActive' , JSON.stringify(validasiUser));

        setTimeout(() => {

            window.location.replace('dashboard.html');

        }, 1500);
    }else{
        showToast(`Email atau kata sandi salah`, 'error' , 5000);
    }

   

};

const checkEmail = (event) =>{
    event.preventDefault();

    const input = event.target;
    const value = input.value.trim();

    const targetId = input.getAttribute('data-validasi-text');
    const displayValidasi = document.getElementById(targetId);

    if(!displayValidasi) return;
   
    if(!isValidEmail(value)){

        displayValidasi.className = "text-error";
        displayValidasi.innerHTML = "Format email tidak valid. Ex : jhon@gmail.com";
        input.style.borderColor = "#ef4444";

    }else{
        displayValidasi.className = "text-success";
        displayValidasi.innerHTML = "Format email sesuai";
        input.style.borderColor = "#10b981";
    }
    
};

document.addEventListener('DOMContentLoaded', () => {



    document.addEventListener('click', (e) => {
        
        const btnToggle = e.target.closest('.toggle-password');
        if (btnToggle) {
            const targetId = btnToggle.getAttribute('data-target');
            const passwordInput = document.getElementById(targetId);

            if (passwordInput) {
                const isPassword = passwordInput.getAttribute('type') === 'password';
                passwordInput.setAttribute('type', isPassword ? 'text' : 'password');
                
                btnToggle.classList.toggle('is-visible');
                btnToggle.style.color = isPassword ? '#111' : '#888';
            }
            return;
        }

        const trigger = e.target.closest('[data-open]');
        if (trigger) {
            e.preventDefault();
            openModal(trigger.getAttribute('data-open'));
            return;
        }

        if (e.target.classList.contains('close-btn')) {
            closeModal(e.target.closest('.modal-overlay'));
            return;
        }

        if (e.target.classList.contains('modal-overlay')) {
            closeModal(e.target);
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const activeModal = document.querySelector('.modal-overlay.active');
            if (activeModal) closeModal(activeModal);
        }
    });

});