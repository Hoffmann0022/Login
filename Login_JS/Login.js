document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('form').addEventListener('submit', function(e) {
        e.preventDefault(); 

        window.location.href = '../Login_HTML/obrigado.html';
    });
});