document.addEventListener('DOMContentLoaded', function() {
    // Configuração inicial
    const urlParams = new URLSearchParams(window.location.search);
    const biome = urlParams.get('biome') || 'atlantic';
    const level = urlParams.get('level') || '1';
    
    // Elementos da interface
    const gridElement = document.getElementById('grid');
    const commandSequence = document.getElementById('command-sequence');
    const runBtn = document.getElementById('run-btn');
    const resetBtn = document.getElementById('reset-btn');
    const menuBtn = document.getElementById('menu-btn');
    const helpBtn = document.getElementById('help-btn');
    const closeHelpBtn = document.getElementById('close-help-btn');
    const helpModal = document.getElementById('help-modal');
    const victoryModal = document.getElementById('victory-modal');
    const continueBtn = document.getElementById('continue-btn');
    const replayBtn = document.getElementById('replay-btn');
    const menuModalBtn = document.getElementById('menu-modal-btn');
    const stepsCounter = document.getElementById('steps-counter');
    const itemsCounter = document.getElementById('items-counter');
    const stepsResult = document.getElementById('steps-result');
    const levelTitle = document.getElementById('level-title');
    
    // Estado do jogo
    let gameState = {
        grid: [],
        characterPosition: { x: 0, y: 0 },
        commands: [],
        itemsCollected: 0,
        totalItems: 0,
        currentBiome: biome,
        steps: 0,
        currentConfig: null
    };
    
    // Biomas e suas cores
    const biomes = {
        atlantic: atlanticLevels.colorPalette,
        amazon: amazonLevels.colorPalette,
        cerrado: cerradoLevels.colorPalette,
        caatinga: caatingaLevels.colorPalette,
        pantanal: pantanalLevels.colorPalette
    };
    
    // Configurações dos níveis
    const gameLevels = {
        atlantic: {
            titulo: atlanticLevels.name,
            fases: atlanticLevels.levels
        },
        amazon: {
            titulo: amazonLevels.name,
            fases: amazonLevels.levels
        },
        cerrado: {
            titulo: cerradoLevels.name,
            fases: cerradoLevels.levels
        },
        caatinga: {
            titulo: caatingaLevels.name,
            fases: caatingaLevels.levels
        },
        pantanal: {
            titulo: pantanalLevels.name,
            fases: pantanalLevels.levels
        }  
    };
    
    // Atualizar título do nível
    levelTitle.textContent = `${formatBiomeName(biome)} - Nível ${level}`;
    
    // Inicializar o jogo
    initializeGame(biome, parseInt(level));
    
    // Configurar botões
    menuBtn.addEventListener('click', function() {
        window.location.href = 'index.html';
    });
    
    helpBtn.addEventListener('click', function() {
        helpModal.style.display = 'flex';
    });
    
    closeHelpBtn.addEventListener('click', function() {
        helpModal.style.display = 'none';
    });
    
    continueBtn.addEventListener('click', function() {
        // Avançar para o próximo nível
        const nextLevel = parseInt(level) + 1;
        if (nextLevel <= 6) {
            window.location.href = `jogo.html?biome=${biome}&level=${nextLevel}`;
        } else {
            window.location.href = 'fases.html';
        }
    });
    
    replayBtn.addEventListener('click', function() {
        // Recarregar o nível atual
        window.location.href = `jogo.html?biome=${biome}&level=${level}`;
    });
    
    menuModalBtn.addEventListener('click', function() {
        window.location.href = 'fases.html';
    });
    
    // Fechar modais ao clicar fora deles
    window.addEventListener('click', function(event) {
        if (event.target === helpModal) {
            helpModal.style.display = 'none';
        }
        if (event.target === victoryModal) {
            victoryModal.style.display = 'none';
        }
    });
    
    // Inicializar o grid do jogo 
    // função responsável por configurar o grid do jogo com base no bioma e nível selecionados
    function initializeGame(biome, level) {
        const faseConfig = gameLevels[biome]?.fases[level] || gameLevels.atlantic.fases[1];
        initializeGrid(faseConfig);
        updateCounters();
    }
    
    function initializeGrid(faseConfig) {
        gridElement.innerHTML = '';
        gameState.grid = [];
        gameState.currentConfig = faseConfig;
        gameState.totalItems = faseConfig.itens.length;
        gameState.itemsCollected = 0;
        gameState.steps = 0;
        
        // Crie o grid com base nas dimensões configuradas
        for (let y = 0; y < faseConfig.grid.height; y++) {
            gameState.grid[y] = [];
            for (let x = 0; x < faseConfig.grid.width; x++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                cell.dataset.x = x;
                cell.dataset.y = y;

                // Verificar o tipo de célula
                let cellType = 'blocked'; // Padrão é bloqueado
                
                if (x === faseConfig.inicio.x && y === faseConfig.inicio.y) {
                    cellType = 'start';
                } else if (x === faseConfig.fim.x && y === faseConfig.fim.y) {
                    cellType = 'end';
                } else if (faseConfig.itens.some(item => item.x === x && item.y === y)) {
                    cellType = 'item';
                } else if (faseConfig.obstaculos.some(obs => obs.x === x && obs.y === y)) {
                    cellType = 'obstacle';
                } else if (faseConfig.accessibleCells.some(pos => pos.x === x && pos.y === y)) {
                    cellType = 'path';
                }
                
                cell.classList.add(cellType);
                gameState.grid[y][x] = cellType;
                
                applyBiomeStyle(cell, cellType);
                gridElement.appendChild(cell);
            }
        }
        
        placeCharacter(faseConfig.inicio.x, faseConfig.inicio.y);
        resetCommands();
    }
    
    function applyBiomeStyle(cell, type) {
        const biomeColors = biomes[gameState.currentBiome];
        cell.style.backgroundColor = biomeColors[type];
    }
    
    function placeCharacter(x, y, initialDirection = 'down') {
        document.querySelectorAll('.character').forEach(el => el.remove());
        const cell = document.querySelector(`.cell[data-x="${x}"][data-y="${y}"]`);
        const character = document.createElement('div');
        character.classList.add('character');
        // frame inicial olhando para baixo
        character.style.backgroundPosition = "0px 0px";
        cell.appendChild(character);
        gameState.characterPosition = { x, y };
        updateCharacterSprite(initialDirection, 0);
    }

    function updateCharacterSprite(direction, frame = 0) {
        const character = document.querySelector('.character');
        if (!character) return;

        const frameWidth = 64;
        const frameHeight = 88;

        // cada linha do spritesheet corresponde a uma direção
        const directions = { down: 3, left: 2, right: 1, up: 0 };

        const posX = -frame * frameWidth;
        const posY = -directions[direction] * frameHeight;

        character.style.backgroundPosition = `${posX}px ${posY}px`;
    }
    
    // Configurar blocos de comando
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
    
    // Executar comandos
    runBtn.addEventListener('click', executeCommands);
    
    async function executeCommands() {
        runBtn.disabled = true;
        resetBtn.disabled = true;
        gameState.steps = 0;
        
            for (let command of gameState.commands) {
            const movementResult = await moveCharacter(command);
            
            // Se o movimento foi bloqueado, interrompe a execução
            if (movementResult === 'blocked') {
                // Aguarda um pouco para mostrar o feedback visual
                await new Promise(resolve => setTimeout(resolve, 800));
                resetGame();
                runBtn.disabled = false;
                resetBtn.disabled = false;
                return;
            }
            
            gameState.steps++;
            updateCounters();
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
            
            // Atualizar a direção do personagem independentemente do movimento
            updateCharacterSprite(direction, 0);
            
            if (gameState.grid[newY][newX] !== 'obstacle' && gameState.grid[newY][newX] !== 'blocked') {
                // Movimento permitido - atualizar posição
                placeCharacter(newX, newY);
                // Animação de movimento
                const animFrame = gameState.steps % 2; 
                updateCharacterSprite(direction, animFrame);
                setTimeout(() => resolve('success'), 300);
            } else {
                // Movimento bloqueado - manter posição mas mostrar tentativa
                const animFrame = gameState.steps % 2;
                updateCharacterSprite(direction, animFrame);
                
                // Feedback visual de movimento bloqueado
                const cell = document.querySelector(`.cell[data-x="${newX}"][data-y="${newY}"]`);
                cell.classList.add('blocked-shake');
                setTimeout(() => {
                    cell.classList.remove('blocked-shake');
                    resolve('blocked');
                }, 300);
            }
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
            updateCounters();
        }
    }
    
    function checkWinCondition() {
        const { x, y } = gameState.characterPosition;
        if (gameState.grid[y][x] === 'end') {
            if (gameState.itemsCollected === gameState.totalItems) {
                showVictory();
                return true;
            } else {
                alert('Você chegou ao final, mas não coletou todos os itens!');
                resetGame();
            }
        }
        return false;
    }
    
    function showVictory() {
        stepsResult.textContent = `Você completou o nível em ${gameState.steps} passos`;
        victoryModal.style.display = 'flex';
        
        // Salvar progresso
        saveProgress(gameState.currentBiome, level, gameState.steps);
    }
    
    function saveProgress(biome, level, steps) {
        // Carregar progresso existente ou criar novo
        const progress = JSON.parse(localStorage.getItem('gameProgress')) || {
            'atlantic': [false, false, false, false, false, false],
            'amazon': [false, false, false, false, false, false],
            'cerrado': [false, false, false, false, false, false],
            'caatinga': [false, false, false, false, false, false],
            'pantanal': [false, false, false, false, false, false],
        };
        
        // Marcar nível atual como concluído
        const levelIndex = parseInt(level) - 1;
        progress[biome][levelIndex] = true;
        
        // Se não for o último nível, desbloquear o próximo
        if (levelIndex < 5) {
            progress[biome][levelIndex + 1] = true;
        }
        
        // Salvar estatísticas adicionais (opcional)
        const stats = JSON.parse(localStorage.getItem('gameStats')) || {};
        const levelKey = `${biome}_level_${level}`;
        stats[levelKey] = {
            completed: true,
            steps: steps,
            bestSteps: Math.min(steps, stats[levelKey]?.bestSteps || Infinity),
            completedAt: new Date().toISOString()
        };
        
        // Salvar no localStorage
        localStorage.setItem('gameProgress', JSON.stringify(progress));
        localStorage.setItem('gameStats', JSON.stringify(stats));
        
        console.log(`Progresso salvo: ${biome}, nível ${level}, ${steps} passos`);
    }
    
    // Resetar jogo
    resetBtn.addEventListener('click', resetGame);
    
    function resetGame() {
        resetCommands();
        initializeGrid(gameState.currentConfig);
    }
    
    function resetCommands() {
        gameState.commands = [];
        updateCommandDisplay();
    }
    
    function updateCounters() {
        stepsCounter.textContent = `Passos: ${gameState.steps}`;
        itemsCounter.textContent = `Itens: ${gameState.itemsCollected}/${gameState.totalItems}`;
    }
    
    function formatBiomeName(biome) {
        const names = {
            'atlantic': 'Mata Atlântica',
            'amazon': 'Amazônia',
            'cerrado': 'Cerrado',
            'caatinga': 'Caatinga',
            'pantanal': 'Pantanal'
        };
        return names[biome] || 'Bioma Desconhecido';
    }
});