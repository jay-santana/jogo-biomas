document.addEventListener('DOMContentLoaded', function() {
    const playBtn = document.getElementById('play-btn');
    const infoBtn = document.getElementById('info-btn');

    playBtn.addEventListener('click', function() {
        window.soundManager.play('button-click');
        window.soundManager.stop('background-music');
        setTimeout(() => {
            window.location.href = 'fases.html';
        }, 300);
    });
    
    infoBtn.addEventListener('click', function() {
        window.soundManager.play('button-click');
        setTimeout(() => {
            window.location.href = 'informacoes.html';
        }, 300);
    });
});