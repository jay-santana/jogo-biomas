document.addEventListener('DOMContentLoaded', function() {
    // Adicionar event listeners aos botões de jogar
    document.querySelectorAll('.play-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            if (!this.disabled) {
                const level = this.dataset.level;
                // Redirecionar para o jogo com o nível selecionado
                window.location.href = `game.html?level=${level}`;
            }
        });
    });
});