document.addEventListener('DOMContentLoaded', function() {
    const gridElement = document.getElementById('grid');
    const commandSequence = document.getElementById('command-sequence');
    const runBtn = document.getElementById('run-btn');
    const resetBtn = document.getElementById('reset-btn');
    
    let gameState = {
        grid: [],
        characterPosition: { x: 0, y: 0 },
        commands: [],
        itemsCollected: 0,
        totalItems: 2,
        currentBiome: 'atlantic'
    };
    
    const biomes = {
        atlantic: { path: '#e9d985', obstacle: '#8B4513', start: '#4CAF50', end: '#2196F3', item: '#FFD700' },
        amazon: { path: '#8DB600', obstacle: '#3D550C', start: '#4CAF50', end: '#2196F3', item: '#FFD700' },
        cerrado: { path: '#D2B48C', obstacle: '#8B4513', start: '#4CAF50', end: '#2196F3', item: '#FFD700' }
    };
    
    function initializeGrid() {
        gridElement.innerHTML = '';
        gameState.grid = [];
        
        for (let y = 0; y < 8; y++) {
            gameState.grid[y] = [];
            for (let x = 0; x < 10; x++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                cell.dataset.x = x;
                cell.dataset.y = y;
                
                if (x === 0 && y === 0) {
                    cell.classList.add('start');
                    gameState.grid[y][x] = 'start';
                } else if (x === 9 && y === 7) {
                    cell.classList.add('end');
                    gameState.grid[y][x] = 'end';
                } else if ((x === 3 && y === 2) || (x === 7 && y === 4)) {
                    cell.classList.add('item');
                    gameState.grid[y][x] = 'item';
                } else if (
                    (x === 2 && y >= 1 && y <= 3) || 
                    (x === 5 && y >= 3 && y <= 5) ||
                    (x === 8 && y >= 2 && y <= 6)
                ) {
                    cell.classList.add('obstacle');
                    gameState.grid[y][x] = 'obstacle';
                } else {
                    cell.classList.add('path');
                    gameState.grid[y][x] = 'path';
                }
                
                applyBiomeStyle(cell, gameState.grid[y][x]);
                gridElement.appendChild(cell);
            }
        }
        placeCharacter(0, 0);
    }
    
    function applyBiomeStyle(cell, type) {
        const biome = biomes[gameState.currentBiome];
        cell.style.backgroundColor = biome[type];
    }
    
    function placeCharacter(x, y) {
        document.querySelectorAll('.character').forEach(el => el.remove());
        const cell = document.querySelector(`.cell[data-x="${x}"][data-y="${y}"]`);
        const character = document.createElement('div');
        character.classList.add('character');
        character.textContent = 'L';
        cell.appendChild(character);
        gameState.characterPosition = { x, y };
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
            if (direction === 'down') newY = Math.min(7, y + 1);
            if (direction === 'left') newX = Math.max(0, x - 1);
            if (direction === 'right') newX = Math.min(9, x + 1);
            
            if (gameState.grid[newY][newX] !== 'obstacle') {
                placeCharacter(newX, newY);
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
        placeCharacter(0, 0);
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
