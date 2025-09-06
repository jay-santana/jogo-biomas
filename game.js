// Adicione no início do arquivo, antes de tudo:
document.addEventListener('DOMContentLoaded', function() {
    // Configurar o botão de voltar ao menu
    const menuBtn = document.getElementById('menu-btn');
    if (menuBtn) {
        menuBtn.addEventListener('click', function() {
            window.location.href = 'menu.html';
        });
    }
    
    // Obter o nível da URL se existir
    const urlParams = new URLSearchParams(window.location.search);
    const levelParam = urlParams.get('level');
    
    if (levelParam) {
        // Se houver um nível na URL, carregá-lo
        loadFase(levelParam, 'fase1');
    } else {
        // Se não, carregar o nível padrão
        initializeGrid();
    }
});

// script.js - Controle logica do jogo
document.addEventListener('DOMContentLoaded', function() {
    const gridElement = document.getElementById('grid');
    const commandSequence = document.getElementById('command-sequence');
    const runBtn = document.getElementById('run-btn');
    const resetBtn = document.getElementById('reset-btn');

    const gameLevels = {
        nivel1: {
            titulo: "Mata Atlântica - Fase 1",
            fases: {
                fase1: {
                    acessivel: true,
                    concluida: false,
                    grid: { largura: 10, altura: 12 },
                    celulasAcessiveis: 4,
                    inicio: { x: 2, y: 5 },
                    fim: { x: 7, y: 5 },
                    itens: [{x: 5, y: 5}],
                    obstaculos: [],
                    accessibleCells: [
                        {x: 3, y: 5}, {x: 4, y: 5}, 
                        {x: 5, y: 5}, {x: 6, y: 5}
                    ]
                },
                fase2: {
                    acessivel: false,
                    concluida: false,
                    // ... configurações
                }
            }
        },
        nivel2: {
            titulo: "Amazônia",
            fases: {
                fase1: {
                    acessivel: false,
                    concluida: false,
                    // ... configurações
                }
            }
        }
    };

    function loadFase(levelId, faseId) {
        const fase = gameLevels[levelId].fases[faseId];
        
        // Atualizar gameState
        gameState.currentLevel = levelId;
        gameState.currentFase = faseId;
        gameState.totalItems = fase.itens.length;
        
        // Atualizar interface
        document.querySelector('.level-title').textContent = gameLevels[levelId].titulo + " - " + faseId.toUpperCase();
        
        // Inicializar grid com configurações da fase
        initializeGrid(fase);
    }
    
    let gameState = {
        grid: [],
        characterPosition: { x: 0, y: 0 }, //posição do personagem
        commands: [],
        itemsCollected: 0,
        totalItems: 0,
        currentBiome: 'atlantic',
        currentLevel: 'nivel1',
        currentFase: 'fase1',
    };
    
    const biomes = {
        atlantic: { path: '#e9d985', obstacle: '#8B4513', start: '#4CAF50', end: '#2196F3', item: '#FFD700', blocked: '#333333E6'}, // cor dos quadradinhos
        amazon: { path: '#8DB600', obstacle: '#3D550C', start: '#4CAF50', end: '#2196F3', item: '#FFD700', blocked: '#333333E6'},
        cerrado: { path: '#D2B48C', obstacle: '#8B4513', start: '#4CAF50', end: '#2196F3', item: '#FFD700', blocked: '#333333E6' }
    };

    document.querySelectorAll('.fase').forEach(faseEl => {
        faseEl.addEventListener('click', function() {
            if (this.classList.contains('active')) return;
            
            const levelId = this.closest('.level').dataset.level;
            const faseId = this.dataset.fase;
            
            // Atualizar visualmente
            document.querySelectorAll('.fase').forEach(f => f.classList.remove('active'));
            this.classList.add('active');
            
            // Carregar a fase
            loadFase(levelId, faseId);
        });
    });
    
    function initializeGrid(faseConfig = null) {
        gridElement.innerHTML = '';
        gameState.grid = [];

        // 1. Primeiro processar a configuração
        const config = faseConfig || {
            accessibleCells: [
                {x: 3, y: 5}, {x: 4, y: 5}, 
                {x: 5, y: 5}, {x: 6, y: 5}
            ],
            inicio: { x: 2, y: 5 },
            fim: { x: 7, y: 5 },
            itens: [{x: 5, y: 5}]
        };

        // 2. DEPOIS salvar no gameState
        gameState.currentConfig = config;
        
        for (let y = 0; y < 12; y++) {
            gameState.grid[y] = [];
            for (let x = 0; x < 10; x++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                cell.dataset.x = x;
                cell.dataset.y = y;

                // Verificar se a célula está na lista de acessíveis
                const isAccessible = config.accessibleCells.some(pos => pos.x === x && pos.y === y);
                
                if (x === config.inicio.x && y === config.inicio.y) { //posição inicial do personagem verde
                    cell.classList.add('start');
                    gameState.grid[y][x] = 'start';
                } else if (x === config.fim.x && y === config.fim.y) { //posição final azul
                    cell.classList.add('end');
                    gameState.grid[y][x] = 'end';
                } else if (x === config.itens.some(item => item.x === x && item.y === y)) {
                    cell.classList.add('item');
                    gameState.grid[y][x] = 'item';
                } else if (isAccessible) {            //ve se o caminho é acessivel
                    cell.classList.add('path');
                    gameState.grid[y][x] = 'path';
                }else {
                    cell.classList.add('blocked'); //Caminhos bloqueados
                    gameState.grid[y][x] = 'blocked';
                }
                
                applyBiomeStyle(cell, gameState.grid[y][x]); //estilo visual baseado no tipo
                gridElement.appendChild(cell); //Adiciona célula ao grid
            }
        }
        placeCharacter(config.inicio.x, config.inicio.y); // ponto incial do L - PERSONAGEM - tem maneiras de automatizar para sempre iniciar no ponto do start
    }
    
    function applyBiomeStyle(cell, type) {
        const biome = biomes[gameState.currentBiome]; //Obtem o bioma atual do gameState
        cell.style.backgroundColor = biome[type]; //Aplica a cor de fundo correspondente ao tipo de célula no bioma atual
    }
    
    function placeCharacter(x, y) {
        document.querySelectorAll('.character').forEach(el => el.remove()); //Remove qualquer personagem anterior do grid
        const cell = document.querySelector(`.cell[data-x="${x}"][data-y="${y}"]`); //Encontra a célula onde o personagem será colocado
        const character = document.createElement('div'); //Cria o elemento do personagem
        character.classList.add('character'); //Adiciona a classe CSS para estilização
        character.textContent = 'L'; // Define o texto/ícone do personagem
        cell.appendChild(character); //Insere o personagem na célula
        gameState.characterPosition = { x, y }; // Atualiza a posição no estado do jogo
    }
    
    document.querySelectorAll('.command-block').forEach(block => {
        block.addEventListener('click', () => addCommand(block.dataset.command));
    });
    
    function addCommand(command) {
        if (gameState.commands.length < 50) {
            gameState.commands.push(command);
            updateCommandDisplay();
        }
    }
    
    function updateCommandDisplay() {
        commandSequence.innerHTML = '';
        gameState.commands.forEach((cmd, index) => {
            const cmdElement = document.createElement('div');
            cmdElement.classList.add('command-block');
            cmdElement.textContent = getCommandSymbol(cmd);
            cmdElement.dataset.index = index;
            
            cmdElement.addEventListener('click', () => {
                gameState.commands.splice(index, 1);
                updateCommandDisplay();
            });
            
            commandSequence.appendChild(cmdElement);
        });
    }
    
    function getCommandSymbol(command) {
        return { up: '↑', down: '↓', left: '←', right: '→' }[command] || '?';
    }
    
    runBtn.addEventListener('click', executeCommands);
    
    async function executeCommands() {
        runBtn.disabled = true;
        resetBtn.disabled = true;
        
        for (let command of gameState.commands) {
            await moveCharacter(command);
            checkForItem();
            if (checkWinCondition()) break;
            await new Promise(resolve => setTimeout(resolve, 500));
        }
        
        runBtn.disabled = false;
        resetBtn.disabled = false;
    }
    
    function moveCharacter(direction) {
        return new Promise(resolve => {
            const { x, y } = gameState.characterPosition;
            let newX = x, newY = y;
            
            if (direction === 'up') newY = Math.max(0, y - 1);
            if (direction === 'down') newY = Math.min(11, y + 1);
            if (direction === 'left') newX = Math.max(0, x - 1);
            if (direction === 'right') newX = Math.min(9, x + 1);
            
            if (gameState.grid[newY][newX] !== 'obstacle' && gameState.grid[newY][newX] !== 'blocked') { // VERIFICAR SE A CÉLULA É ACESSÍVEL (não é obstáculo E não é bloqueada)
                placeCharacter(newX, newY);
            } else {
                // Feedback visual de movimento bloqueado
                const cell = document.querySelector(`.cell[data-x="${newX}"][data-y="${newY}"]`);
                cell.classList.add('blocked-shake');
                setTimeout(() => cell.classList.remove('blocked-shake'), 300);
                resetGame();

                // Remover a classe após a animação terminar
                setTimeout(() => {
                    cell.classList.remove('blocked-shake');
                }, 500);
          }
            setTimeout(resolve, 300);
        });
    }
    
    function checkForItem() {
        const { x, y } = gameState.characterPosition;
        if (gameState.grid[y][x] === 'item') {
            gameState.itemsCollected++;
            gameState.grid[y][x] = 'path';
            const cell = document.querySelector(`.cell[data-x="${x}"][data-y="${y}"]`);
            cell.classList.remove('item');
            cell.classList.add('path');
            applyBiomeStyle(cell, 'path');
            alert(`Item coletado! (${gameState.itemsCollected}/${gameState.totalItems})`);
        }
    }
    
    function checkWinCondition() {
        const { x, y } = gameState.characterPosition;
        if (gameState.grid[y][x] === 'end') {
            if (gameState.itemsCollected === gameState.totalItems) {
                alert('Parabéns! Você completou o nível coletando todos os itens!');
            } else {
                alert('Você chegou ao final, mas não coletou todos os itens!');
            }
            return true;
        }
        return false;
    }
    
    resetBtn.addEventListener('click', resetGame);
    
    function resetGame() {
        gameState.commands = [];
        gameState.itemsCollected = 0;
        updateCommandDisplay();
        placeCharacter(gameState.currentConfig.inicio.x, gameState.currentConfig.inicio.y);
    }
    
    document.querySelectorAll('.biome-btn').forEach((btn, index) => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.biome-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            gameState.currentBiome = ['atlantic', 'amazon', 'cerrado'][index];
            initializeGrid();
        });
    });
    
    initializeGrid();

});



