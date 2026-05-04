
const searchUser = (dataForm) => {

    const localData = localStorage.getItem('dataPenggunaLocal');

    if (!localData) return null;

    const dbLocal = JSON.parse(localData);

    return dbLocal.find((item) => {
        return Object.keys(dataForm).every((key) => {
            return item[key] === dataForm[key];
        });
    });


}

const getLatestId = (data) => {

    const maxId = data.reduce((max, user) => (user.id > max ? user.id : max), 0);

    return maxId + 1;


};


const handleLogin = (event, formElement) => {

    event.preventDefault();
    const formData = new FormData(formElement);
    const dataForm = Object.fromEntries(formData.entries());

    const validasiUser = searchUser(dataForm);

    if (validasiUser) {

        const userActive = JSON.stringify(validasiUser);
        localStorage.setItem('userActive', userActive);

        showToast(`Login Success! Welcome ${validasiUser.nama}`, 'success', 5000);

        setTimeout(() => {

            window.location.href = 'index.html';

        }, 1500);


    } else {
        showToast(`Email atau kata sandi salah`, 'error', 5000);
    }



};


const resetPassword = (event, formElemt) => {

    event.preventDefault();

    const formData = new FormData(formElemt);

    const data = Object.fromEntries(formData.entries());

    const user = searchUser(data);

    if (user) {

        showToast(`Reset Success! silahkan check email: ${user.email}`, 'success', 5000);

    } else {

        showToast(`Email : ${data.email} tidak terdaftar`, 'error', 5000);
    }



};

const register = (event, formElement) => {

    event.preventDefault();


    const dbLocal = JSON.parse(localStorage.getItem('dataPenggunaLocal'));

    const formData = new FormData(formElement);
    const data = Object.fromEntries(formData.entries());
    if (!dbLocal) {
        showToast(`Maaf db local tidak terbaca, sistem akan reload dalam 5detik`, 'error', 5000);
        window.location.reload();
    } else {


        data.id = getLatestId(dbLocal);


        const isEmailExist = dbLocal.some(user => user.email === formData.get('email'));


        if (isEmailExist) {
            showToast(`Email : ${data.email} sudah terdaftar`, 'error', 5000);
            return;
        }


        const isValidEmail = validationRules.validEmail(data.email);
        if (!isValidEmail.isValid) {
            showToast(`${isValidEmail.errorMsg}`);
            return;
        }

        const passLength = validationRules.minLength(data.password, 6);
        if (!passLength.isValid) {
            showToast(`${passLength.errorMsg}`);
            return;
        }

        const confirmPass = validationRules.confirmPassword(data.password, data.repassword);
        if (!confirmPass.isValid) {
            showToast(`${confirmPass.errorMsg}`);
            return;
        }

        dbLocal.push(data);


        localStorage.setItem('dataPenggunaLocal', JSON.stringify(dbLocal));

        formElement.reset();
        clearValidasi(formElement);
        const modalRegister = formElement.closest('.modal-overlay');
        closeModal(modalRegister);
        showToast(`Pendaftaran sukses! silahkan login`, 'success', 5000);

        setTimeout(() => {
            window.location.href = 'login.html';
        }, 1500);

    }


};
