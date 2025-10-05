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
    const biomeInfoBtn = document.getElementById('biome-info-btn');
    const biomeInfoModal = document.getElementById('biome-info-modal');
    const closeBiomeInfoBtn = document.getElementById('close-biome-info-btn');
    const biomeModalTitle = document.getElementById('biome-modal-title');
    const biomeInfoContent = document.getElementById('biome-info-content');
    
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
        pantanal: pantanalLevels.colorPalette,
        pampa: pampaLevels.colorPalette,
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
        },
        pampa: {
            titulo: pampaLevels.name,
            fases: pampaLevels.levels
        }

    };
    
    // Atualizar título do nível
    levelTitle.textContent = `${formatBiomeName(biome)} - NIVEL ${level}`;
    
    // Inicializar o jogo
    initializeGame(biome, parseInt(level));

    // Botão menu
    menuBtn.addEventListener('click', function() {
        window.location.href = 'fases.html';
    });
    
    // Botão ajuda
    helpBtn.addEventListener('click', function() {
        helpModal.style.display = 'flex';
    });

    // Botão informações do bioma
    biomeInfoBtn.addEventListener('click', function() {
        showBiomeInfo();
    });

    // Fechar informações do bioma
    closeBiomeInfoBtn.addEventListener('click', function() {
        biomeInfoModal.style.display = 'none';
    });
    
    // Fechar ajuda
    closeHelpBtn.addEventListener('click', function() {
        helpModal.style.display = 'none';
    });
    
    // Continuar
    continueBtn.addEventListener('click', function() {
        const nextLevel = parseInt(level) + 1;
        if (nextLevel <= 6) {
            window.location.href = `jogo.html?biome=${biome}&level=${nextLevel}`;
        } else {
            window.location.href = `fase-${biome}.html?biome=${biome}`;
        }
    });
    
    // Replay
    replayBtn.addEventListener('click', function() {
        window.location.href = `jogo.html?biome=${biome}&level=${level}`;
    });
    
    // Menu modal
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
        if (event.target === biomeInfoModal) {
        biomeInfoModal.style.display = 'none';
        }
    });

    // ========== FUNÇÃO PARA TOCAR SONS ==========
    function playGameSound(soundName) {
        window.soundManager.play(soundName);
    }

    
    document.querySelectorAll('.command-block').forEach(block => {
        block.addEventListener('click', () => {
            addCommand(block.dataset.command);
        });
    });


    runBtn.addEventListener('click', function() {
        executeCommands();
    });

    resetBtn.addEventListener('click', function() {
        resetGame();
    });

    // Função para mostrar informações do bioma
    function showBiomeInfo() {
        const biome = gameState.currentBiome;
        const biomeInfo = getBiomeInformation(biome);
        
        biomeModalTitle.textContent = `BIOMA - ${formatBiomeName(biome).toUpperCase()}`;
        biomeInfoContent.innerHTML = biomeInfo;
        
        biomeInfoModal.style.display = 'flex';
    }

    // Função para obter informações dos biomas
    function getBiomeInformation(biome) {
        const biomeData = {
            'atlantic': {
                title: 'MATA ATLÂNTICA',
                description: 'A Mata Atlântica é um bioma rico em biodiversidade que se estende ao longo da costa brasileira.',
                characteristics: [
                    '🌿 Floresta tropical úmida',
                    '🏞️ Grande diversidade de espécies',
                    '🌧️ Clima quente e úmido',
                    '🌊 Próximo ao litoral',
                    '🦜 Habitat de muitas espécies endêmicas'
                ]
            },
            'amazon': {
                title: 'AMAZÔNIA',
                description: 'A Floresta Amazônica é a maior floresta tropical do mundo, conhecida por sua imensa biodiversidade.',
                characteristics: [
                    '🌳 Maior floresta tropical do mundo',
                    '💧 Região com maior biodiversidade',
                    '🌡️ Clima equatorial úmido',
                    '🦜 Habitat de milhões de espécies',
                    '🌊 Rica em rios e recursos hídricos'
                ]
            },
            'cerrado': {
                title: 'CERRADO',
                description: 'O Cerrado é conhecido como a savana brasileira, com vegetação única e adaptada ao clima seco.',
                characteristics: [
                    '🌵 Savana brasileira',
                    '🔥 Vegetação adaptada ao fogo',
                    '🌞 Clima tropical sazonal',
                    '💧 Duas estações bem definidas',
                    '🦎 Grande biodiversidade'
                ]
            },
            'caatinga': {
                title: 'CAATINGA',
                description: 'A Caatinga é o único bioma exclusivamente brasileiro, adaptado ao clima semiárido.',
                characteristics: [
                    '🏜️ Único bioma exclusivamente brasileiro',
                    '☀️ Clima semiárido',
                    '🌵 Vegetação xerófila',
                    '💧 Estação seca prolongada',
                    '🦇 Espécies adaptadas à seca'
                ]
            },
            'pantanal': {
                title: 'PANTANAL',
                description: 'O Pantanal é a maior planície alagável do mundo, com rica vida selvagem e ecossistemas únicos.',
                characteristics: [
                    '🌊 Maior planície alagável do mundo',
                    '🐊 Rica vida aquática e terrestre',
                    '💦 Períodos de cheia e seca',
                    '🦜 Grande concentração de fauna',
                    '🌿 Vegetação adaptada a alagamentos'
                ]
            },
            'pampa': {
              title: 'PAMPA',
              description: 'O Pampa é um bioma caracterizado por vastas planícies e coxilhas, presente principalmente no Rio Grande do Sul.',
              characteristics: [
                  '🌾 Vastas planícies e campos abertos',
                  '🏇 Tradição gaúcha e pecuária extensiva',
                  '🌤️ Clima subtropical temperado',
                  '🐎 Habitat de espécies como veado-campeiro',
                  '🛤️ Paisagem de coxilhas suaves'
              ]
          }
        };
        
        const data = biomeData[biome] || biomeData['atlantic'];
        
        return `
            <div class="biome-info">
                <p><strong>${data.description}</strong></p>
                <div class="biome-characteristics">
                    <h3>CARACTERÍSTICAS PRINCIPAIS:</h3>
                    <ul>
                        ${data.characteristics.map(char => `<li>${char}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
    }

    // Inicializar o grid do jogo 
    // função responsável por configurar o grid do jogo com base no bioma e nível selecionados
    function initializeGame(biome, level) {
        const faseConfig = gameLevels[biome]?.fases[level] || gameLevels.atlantic.fases[1];
        setGridBackground(biome); // Definir o fundo do grid
        initializeGrid(faseConfig);
        updateCounters();
    }

    function setGridBackground(biome) {
        // Remove classes de bioma existentes
        const grid = document.getElementById('grid');
        grid.classList.remove('atlantic', 'amazon', 'cerrado', 'caatinga', 'pampa','pantanal');
        
        // Adiciona a classe correspondente ao bioma atual
        grid.classList.add(biome);
        
        // Define um fallback caso a imagem não carregue
        setTimeout(() => {
            const computedStyle = window.getComputedStyle(grid);
            if (computedStyle.backgroundImage === 'none' || 
                computedStyle.backgroundImage.includes('undefined')) {
                console.warn(`Imagem de fundo para ${biome} não encontrada, usando cor de fallback`);
                grid.style.backgroundColor = getBiomeFallbackColor(biome);
            }
        }, 100);
    }

    // Função para obter cor de fallback para cada bioma
    function getBiomeFallbackColor(biome) {
        const fallbackColors = {
            'atlantic': '#2E8B57', // Verde Mata Atlântica
            'amazon': '#228B22',   // Verde Floresta Amazônica
            'cerrado': '#DAA520',  // Dourado do Cerrado
            'caatinga': '#CD853F', // Marrom Caatinga
            'pampa': '#71cef3ff', // Azul Pampa
            'pantanal': '#20B2AA'  // Azul Pantanal
        };
        return fallbackColors[biome] || '#6B8E23'; // Cor padrão se não encontrado
    }
    
      function initializeGrid(faseConfig) {
        gridElement.innerHTML = '';
        gameState.grid = [];
        gameState.currentConfig = faseConfig;
        gameState.totalItems = faseConfig.itens.length;
        gameState.itemsCollected = 0;
        gameState.steps = 0;
        
        // Identificar a área do labirinto (células acessíveis)
        const mazeArea = [];
        for (let y = 0; y < faseConfig.grid.height; y++) {
            for (let x = 0; x < faseConfig.grid.width; x++) {
                if (faseConfig.accessibleCells.some(pos => pos.x === x && pos.y === y)) {
                    mazeArea.push({x, y});
                }
            }
        }
        
        // Encontrar células bloqueadas próximas ao labirinto (evitando bordas)
        const blockedCellsNearMaze = [];
        for (let y = 1; y < faseConfig.grid.height - 1; y++) { // Evitar bordas superior e inferior
            for (let x = 1; x < faseConfig.grid.width - 1; x++) { // Evitar bordas laterais
                
                // Verificar se a célula é bloqueada e não é um obstáculo original
                const isOriginallyBlocked = !faseConfig.accessibleCells.some(pos => pos.x === x && pos.y === y) &&
                                          !faseConfig.obstaculos.some(obs => obs.x === x && obs.y === y) &&
                                          !(x === faseConfig.inicio.x && y === faseConfig.inicio.y) &&
                                          !(x === faseConfig.fim.x && y === faseConfig.fim.y) &&
                                          !faseConfig.itens.some(item => item.x === x && item.y === y);
                
                // Verificar se está próxima do labirinto (máximo 1 célula de distância)
                if (isOriginallyBlocked) {
                    const isNearMaze = mazeArea.some(mazeCell => {
                        const distanceX = Math.abs(mazeCell.x - x);
                        const distanceY = Math.abs(mazeCell.y - y);
                        return distanceX <= 1 && distanceY <= 1;
                    });
                    
                    if (isNearMaze) {
                        blockedCellsNearMaze.push({x, y});
                    }
                }
            }
        }
        
        // Selecionar 2-3 células bloqueadas aleatoriamente próximas ao labirinto
        const randomObstacleCount = Math.floor(Math.random() * 2) + 2; // 2 ou 3 obstáculos
        const randomObstacles = [];
        
        for (let i = 0; i < randomObstacleCount && blockedCellsNearMaze.length > 0; i++) {
            const randomIndex = Math.floor(Math.random() * blockedCellsNearMaze.length);
            randomObstacles.push(blockedCellsNearMaze[randomIndex]);
            blockedCellsNearMaze.splice(randomIndex, 1);
        }
        
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
                let isRandomObstacle = false;
                
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
                } else if (randomObstacles.some(obs => obs.x === x && obs.y === y)) {
                    cellType = 'obstacle';
                    isRandomObstacle = true;
                }
                
                cell.classList.add(cellType);
                if (isRandomObstacle) {
                    cell.classList.add('obstacle-random');
                }
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
        
        // Se for uma célula de caminho, usar transparente para mostrar o fundo
        if (type === 'path') {
        } else {
            cell.style.backgroundColor = biomeColors[type];
        }
        // Se for um obstáculo aleatório, não aplicar estilo de bioma
        if (cell.classList.contains('obstacle-random')) {
            cell.style.backgroundColor = 'transparent';
        }
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
    
    
    function addCommand(command) {
        if (gameState.commands.length < 50) {
            gameState.commands.push(command);
            updateCommandDisplay();
        }
    }

    function scrollToBottom() {
        const commandSequence = document.getElementById('command-sequence');
        if (commandSequence) {
            commandSequence.scrollTop = commandSequence.scrollHeight;
        }
    }

    function updateScrollIndicator() {
        const commandSequence = document.getElementById('command-sequence');
        const scrollIndicator = document.getElementById('scrollIndicator');
        
        if (commandSequence && scrollIndicator) {
            const isAtBottom = commandSequence.scrollHeight - commandSequence.scrollTop <= commandSequence.clientHeight + 5;
            scrollIndicator.style.display = isAtBottom ? 'none' : 'flex';
        }
    }
    
    function updateCommandDisplay() {
        commandSequence.innerHTML = '';
        gameState.commands.forEach((cmd, index) => {
            const cmdElement = document.createElement('div');
            cmdElement.classList.add('command-block');
            
            // Adiciona a imagem em vez do texto
            const commandImg = getCommandSymbol(cmd);
            cmdElement.appendChild(commandImg);
            
            cmdElement.dataset.index = index;
            
            cmdElement.addEventListener('click', () => {
                gameState.commands.splice(index, 1);
                updateCommandDisplay();
            });
            
            commandSequence.appendChild(cmdElement);
        });
        
        // Scroll automático para o último comando
        setTimeout(scrollToBottom, 10);
        
        // Atualizar indicador de scroll
        setTimeout(updateScrollIndicator, 20);
    }
    
    function getCommandSymbol(command) {
      const imagePaths = {
          up: '../assets/setas/arrow-up.png',
          down: '../assets/setas/arrow-down.png',
          left: '../assets/setas/arrow-left.png',
          right: '../assets/setas/arrow-right.png'
      };
      
      const img = document.createElement('img');
      img.src = imagePaths[command] || '../assets/setas/unknown.png';
      img.alt = command;
      img.style.width = '40px'; // Ajuste o tamanho conforme necessário
      img.style.height = '40px';
      
      return img;
  }
      
    
    async function executeCommands() {
        runBtn.disabled = true;
        resetBtn.disabled = true;
        gameState.steps = 0;
        
        for (let command of gameState.commands) {
            const movementResult = await moveCharacter(command);
            
            // Verificar se bateu em obstáculo
            if (movementResult === 'blocked') {
                await new Promise(resolve => setTimeout(resolve, 800));
                playGameSound('obstacle-hit'); // SOM AO BATER EM OBSTÁCULO
                alert("VOCÊ ESBARROU EM UM OBSTACULO - REINICIANDO");
                resetGame();
                runBtn.disabled = false;
                resetBtn.disabled = false;
                return;
            }
            
            gameState.steps++;
            updateCounters();
            checkForItem();
            
            // Verificar se venceu a cada movimento
            const winStatus = checkWinCondition();
            
            if (winStatus === true) {
                runBtn.disabled = false;
                resetBtn.disabled = false;
                return;
            }
            
            if (winStatus === 'incomplete') {
                playGameSound('obstacle-hit'); // SOM AO NÃO COLETAR TODOS ITENS
                alert('VOCE CHEGOU AO FINAL MAS NÃO COLETOU TODOS OS ITENS - REINICIANDO');
                resetGame();
                runBtn.disabled = false;
                resetBtn.disabled = false;
                return; // IMPORTANTE: sair da função
            }
            
            await new Promise(resolve => setTimeout(resolve, 500));
        }
        
        // Se terminou todos os comandos sem vencer
        if (!checkWinCondition()) {
            await new Promise(resolve => setTimeout(resolve, 500));
            playGameSound('obstacle-hit'); // SOM AO NÃO COMPLETAR O JOGO
            alert("VOCÊ NÃO COMPLETOU O JOGO - REINICIANDO");
            resetGame();
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
            
            // Verificar se a célula é um obstáculo (original ou aleatório) ou bloqueada
            const isObstacle = gameState.grid[newY][newX] === 'obstacle';
            const isBlocked = gameState.grid[newY][newX] === 'blocked';
            
            if (!isObstacle && !isBlocked) {
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
            playGameSound('item-collect'); // SOM AO COLETAR ITEM
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
        
        if (gameState.grid[y][x] === 'end' && gameState.itemsCollected === gameState.totalItems) {
            showVictory();
            return true;
        }
        
        if (gameState.grid[y][x] === 'end' && gameState.itemsCollected < gameState.totalItems) {
            return 'incomplete'; 
        }
        
        return false;
    }

    function showVictory() {
        stepsResult.textContent = `VOCE COMPLETOU O NIVEL EM ${gameState.steps} PASSOS`;
        saveProgress(gameState.currentBiome, level, gameState.steps);
        
        const isLastPantanalLevel = gameState.currentBiome === 'pantanal' && level === '6';
        const isLastLevelOfBiome = level === '6';
        
        if (isLastPantanalLevel) {
            playGameSound('victory'); // SOM DE VITÓRIA FINAL
            showFinalVictoryModal();
        } else if (isLastLevelOfBiome) {
            playGameSound('level-complete'); // SOM DE NÍVEL COMPLETO
            showBiomeCompletionModal(gameState.currentBiome);
        } else {
            playGameSound('level-complete'); // SOM DE NÍVEL COMPLETO
            victoryModal.style.display = 'flex'; // Modal normal para nível comum
        }
    }

        function showBiomeCompletionModal(biome) {
        victoryModal.style.display = 'none';
        
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.style.display = 'flex';
        modal.innerHTML = `
            <div class="modal-content">
                <h2>PARABÉNS!</h2>
                <p>VOCÊ COMPLETOU TODO O BIOMA ${formatBiomeName(biome).toUpperCase()}</p>
                <div class="modal-buttons">
                    <button id="same-biome-btn">CONTINUAR</button>
                    <button id="next-biome-btn">IR PARA O PRÓXIMO BIOMA</button>
                    <button id="back-to-map-btn">VOLTAR AO MAPA</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        document.getElementById('next-biome-btn').addEventListener('click', function() {
            const biomesOrder = ['atlantic', 'amazon', 'cerrado', 'caatinga','pampa', 'pantanal'];
            const currentIndex = biomesOrder.indexOf(biome);
            
            if (currentIndex < biomesOrder.length - 1) {
                const nextBiome = biomesOrder[currentIndex + 1];
                window.location.href = `fase-${nextBiome}.html?biome=${nextBiome}`;
            } else {
                window.location.href = 'fases.html';
            }
        });

        document.getElementById('same-biome-btn').addEventListener('click', function() {
            continueBtn.click();
        });
        
        document.getElementById('back-to-map-btn').addEventListener('click', function() {
            window.location.href = 'fases.html';
        });
        
    }


    function showFinalVictoryModal() {
        const finalModal = document.createElement('div');
        finalModal.className = 'modal';
        finalModal.style.display = 'flex';
        finalModal.innerHTML = `
            <div class="modal-content">
                <h2>PARABÉNS!</h2>
                <p></p>
                <p></p>
                <p>VOCÊ SALVOU TODOS OS BIOMAS DO BRASIL! O JOGO ESTÁ COMPLETO!</p>
                <p></p>
                <p></p>
                <div class="modal-buttons">
                    <button id = "victory-btn-menu" onclick="window.location.href='fases.html'">VOLTAR AO MAPA</button>
                    <button id = "victory-btn-biome" onclick="window.location.href='fase-pantanal.html?biome=pantanal'">VER NÍVEIS PANTANAL</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(finalModal);
      
    }
    
    function saveProgress(biome, level, steps) {
        const progress = JSON.parse(localStorage.getItem('gameProgress')) || {
            'atlantic': [true, false, false, false, false, false],
            'amazon': [false, false, false, false, false, false],
            'cerrado': [false, false, false, false, false, false],
            'caatinga': [false, false, false, false, false, false],
            'pampa': [false, false, false, false, false, false],
            'pantanal': [false, false, false, false, false, false],
        };
        
        const levelIndex = parseInt(level) - 2;
        progress[biome][levelIndex] = true;
        
        if (levelIndex < 6) {
            progress[biome][levelIndex + 1] = true;
        }
        
        const completedAllLevels = progress[biome].every(levelCompleted => levelCompleted === true);
        
        if (completedAllLevels) {
            const biomesOrder = ['atlantic', 'amazon', 'cerrado', 'caatinga','pampa', 'pantanal'];
            const currentIndex = biomesOrder.indexOf(biome);
            
            if (currentIndex < biomesOrder.length - 1) {
                const nextBiome = biomesOrder[currentIndex + 1];
                progress[nextBiome][0] = true;
            }
        }
        
        const stats = JSON.parse(localStorage.getItem('gameStats')) || {};
        const levelKey = `${biome}_level_${level}`;
        stats[levelKey] = {
            completed: true,
            steps: steps,
            bestSteps: Math.min(steps, stats[levelKey]?.bestSteps || Infinity),
            completedAt: new Date().toISOString()
        };

        localStorage.setItem('gameProgress', JSON.stringify(progress));
        localStorage.setItem('gameStats', JSON.stringify(stats));
        
        console.log(`Progresso salvo: ${biome}, nível ${level}, ${steps} passos`);
    }

    resetBtn.addEventListener('click', resetGame);
    
    function resetGame() {
        gameState.itemsCollected = 0;
        gameState.steps = 0;
        
        gameState.commands = [];
        updateCommandDisplay();

        updateCounters();

        if (gameState.currentConfig) {
            gridElement.innerHTML = '';
            gameState.grid = [];

            initializeGrid(gameState.currentConfig);
        }
    }

    
    function resetCommands() {
        gameState.commands = [];
        updateCommandDisplay();
    }
    
    function updateCounters() {
        // stepsCounter.textContent = `PASSOS: ${gameState.steps}`;
        itemsCounter.textContent = `ITENS: ${gameState.itemsCollected}/${gameState.totalItems}`;
    }
    
    function formatBiomeName(biome) {
        const names = {
            'atlantic': 'MATA ATLANTICA',
            'amazon': 'AMAZONIA',
            'cerrado': 'CERRADO',
            'caatinga': 'CAATINGA',
            'pampa': 'PAMPA',
            'pantanal': 'PANTANAL'
        };
        return names[biome] || 'Bioma Desconhecido';
    }
});