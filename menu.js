// menu.js - Controle de navegação entre telas
document.addEventListener('DOMContentLoaded', function() {
    // Inicia os listeners dos botões do jogo (Run, Reset, etc.)

    // Elementos das telas
    const menuScreen = document.getElementById('menu-screen');
    const levelsScreen = document.getElementById('levels-screen');
    const gameScreen = document.getElementById('game-screen');
    
    // Botões do menu principal
    const playBtn = document.getElementById('play-btn'); // O seu botão de play tem o id 'grid'
    const levelsBtn = document.getElementById('levels-btn');
    const aboutBtn = document.getElementById('about-btn');
    
    // Botões da tela de níveis
    const backBtn = document.getElementById('back-btn');
    const biomeButtons = document.querySelectorAll('.select-biome');
    
    function showScreen(screenToShow) {
        [menuScreen, levelsScreen, gameScreen].forEach(screen => {
            screen.classList.add('hidden');
        });
        screenToShow.classList.remove('hidden');
    }
    
    
    biomeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const biomeCard = this.closest('.biome-card');
            const biome = biomeCard.dataset.biome;
            startGame(biome, 'fase1');
        });
    });
    
    function addBackButtonToGame() {
        const backButton = document.createElement('button');
        backButton.textContent = '← Menu';
        backButton.className = 'back-to-menu-btn';
        backButton.addEventListener('click', function() {
            showScreen(menuScreen);
            gameState.commands = [];
            updateCommandDisplay();
        });
        gameScreen.appendChild(backButton);
    }
    
    addBackButtonToGame();
    showScreen(menuScreen);
});

// Estilos do CSS podem continuar aqui
const backButtonStyles = `
.back-to-menu-btn {
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: 1000;
    background: linear-gradient(135deg, #FF5722, #E64A19);
    color: white;
    border: none;
    padding: 12px 20px;
    border-radius: 25px;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
}
.back-to-menu-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
}
`;
const styleSheet = document.createElement('style');
styleSheet.textContent = backButtonStyles;
document.head.appendChild(styleSheet);