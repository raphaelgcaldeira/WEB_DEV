function alternarTelas() {
    const createForm = document.querySelector('.create-form');
    const loginForm = document.querySelector('.login-form');

    createForm.classList.toggle('hidden');
    loginForm.classList.toggle('hidden');
}

document.addEventListener('DOMContentLoaded', () => {
    const formLogin = document.getElementById('form-login');
    const formCreate = document.getElementById('form-create');

    formLogin.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o navegador de dar POST e crashar

        // Exemplo de redirecionamento após logar:
        window.location.href = '/index.html';
    });

    formCreate.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o navegador de dar POST e crashar

        alert('Conta criada com sucesso!');
        alternarTelas(); // Volta para a tela de login
    });
});