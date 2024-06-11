document.getElementById('fingerprint-button').addEventListener('click', function() {
    const popup = document.getElementById('popup');
    popup.classList.remove('hidden');
    setTimeout(() => {
        window.location.href = 'inicio.html';
    }, 3000); // Aguarda 3 segundos antes de redirecionar
});
