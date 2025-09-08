// scripts/index.js
document.addEventListener('DOMContentLoaded', function() {
    const playBtn = document.getElementById('play-btn');
    const infoBtn = document.getElementById('info-btn');
    
    playBtn.addEventListener('click', function() {
        window.location.href = 'fases.html';
    });
    
    infoBtn.addEventListener('click', function() {
        window.location.href = 'informacoes.html';
    });
});