function alternarTelas() {
    const createForm = document.querySelector('.create-form');
    const loginForm = document.querySelector('.login-form');

    createForm.classList.toggle('hidden');
    loginForm.classList.toggle('hidden');
}