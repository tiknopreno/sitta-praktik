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


const updateUI = (el, msgEl, res) => {
    msgEl.className = res.isValid ? "text-success" : "text-error";
    msgEl.innerHTML = res.isValid ? res.successMsg : res.errorMsg;
    el.style.borderColor = res.isValid ? "#10b981" : "#ef4444";
};

const checkValidasi = (event) => {
    event.preventDefault();

    const input = event.target;
    const value = input.value.trim();

    const ruleType = input.getAttribute('data-rules');
    const targetId = input.getAttribute('data-validasi-text');
    const displayValidasi = document.getElementById(targetId);

    if (!displayValidasi) return;

    let result;


    if (ruleType === "confirmPassword") {
        const compareId = input.getAttribute('data-compare');
        const compareValue = document.getElementById(compareId)?.value || '';
        result = validationRules.confirmPassword(value, compareValue);
    } else if (ruleType === "minLength") {
        const min = input.getAttribute('data-min') || 6;
        result = validationRules.minLength(value, min);
    } else if (ruleType === "maxLength") {
        const max = input.getAttribute('data-max') || 12;
        result = validationRules.maxLength(value, max);
    } else {
        result = validationRules[ruleType](value);
    }

    updateUI(input, displayValidasi, result);

};


const clearValidasi = (formElement) => {
    const inputs = formElement.querySelectorAll('[data-validasi-text]');

    inputs.forEach(input => {
        input.style.borderColor = "";

        const targetId = input.getAttribute('data-validasi-text');
        const displayValidasi = document.getElementById(targetId);

        if (displayValidasi) {
            displayValidasi.innerHTML = "";
            displayValidasi.className = "";
        }
    });
};

document.addEventListener('DOMContentLoaded', () => {


    // NAV ITEM
    const path = window.location.pathname.split("/").pop() || "index.html";

    const link = document.querySelectorAll('.nav-item, .nav-link');
    const title = document.querySelector('.title');


    let cleanName = path.replace(".html" , "");


    link.forEach(link => {

        const href = link.getAttribute('href');


        if (path === 'index.html' && href === 'index.html') {

            link.classList.add('active');

        } else {


            if (path === href) {


                link.classList.add('active');
                

            }

        }

    });

    if(cleanName === 'index'){
        cleanName = 'HOME';
    }else{
        cleanName = cleanName.toUpperCase();
    }

    
    if(path.includes('detail-page.html')){

        const queryString = window.location.search;
        const urlParam = new URLSearchParams(queryString);
    
        const kodeBarang = urlParam.get("id");

        title.innerText = `SITTA - Detail ${kodeBarang}`;

    }else{

        cleanName = cleanName.replace('-', ' ');
        title.innerText = `SITTA - ${cleanName}`;
    }


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