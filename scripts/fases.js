document.addEventListener('DOMContentLoaded', function() {
    const backBtn = document.getElementById('back-btn');
    const selectBtns = document.querySelectorAll('.select-btn');

    backBtn.addEventListener('click', function() {
        window.soundManager.play('button-click');
        window.soundManager.stop('background-music');
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 300);
    });
    
    // Verificar progresso e atualizar aparência dos botões
    updateBiomeButtons();
    
    selectBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            window.soundManager.play('button-click');
            
            const biomeCard = this.closest('.biome-card');
            const biome = biomeCard.dataset.biome;
            
            // Verificar se o bioma está desbloqueado
            const progress = JSON.parse(localStorage.getItem('gameProgress')) || {
                atlantic: [true, false, false, false, false, false],
                amazon: [false, false, false, false, false, false],
                cerrado: [false, false, false, false, false, false],
                caatinga: [false, false, false, false, false, false],
                pampa: [false, false, false, false, false, false],
                pantanal: [false, false, false, false, false, false]
            };
            
            const isBiomeUnlocked = progress[biome] && progress[biome].some(level => level === true);
            
            if (!isBiomeUnlocked) {
                window.soundManager.play('obstacle-hit');
                window.modalManager.showAlert(
                    'Este bioma ainda está bloqueado! Complete o bioma anterior primeiro.', 
                    'Bioma Bloqueado'
                );
                return;
            }else {
                // Redirecionar normalmente
                setTimeout(() => {
                    window.location.href = `fase-${biome}.html?biome=${biome}`;
                }, 300);
            }
        });
    });
    
    function updateBiomeButtons() {
        const progress = JSON.parse(localStorage.getItem('gameProgress')) || {
            atlantic: [true, false, false, false, false, false],
            amazon: [false, false, false, false, false, false],
            cerrado: [false, false, false, false, false, false],
            caatinga: [false, false, false, false, false, false],
            pampa: [false, false, false, false, false, false],
            pantanal: [false, false, false, false, false, false],
        };

        const biomesOrder = ['atlantic', 'amazon', 'cerrado', 'caatinga', 'pampa', 'pantanal'];
        
        biomesOrder.forEach((biome, index) => {
            const biomeCard = document.querySelector(`.biome-card[data-biome="${biome}"]`);
            const selectBtn = biomeCard.querySelector('.select-btn');
            
            const isBiomeUnlocked = progress[biome] && progress[biome].some(level => level === true);
            const isBiomeCompleted = progress[biome] && progress[biome].every(level => level === true);
            
            // Remover classes anteriores
            biomeCard.classList.remove('locked', 'biome-completed');
            selectBtn.classList.remove('locked');
            
            // Remover indicadores visuais anteriores
            const lockIndicator = selectBtn.querySelector('.locked-indicator');
            if (lockIndicator) {
                lockIndicator.remove();
            }
            
            // Remover texto de completo se existir
            const completedText = selectBtn.querySelector('.completed-text');
            if (completedText) {
                completedText.remove();
            }
            
            if (!isBiomeUnlocked) {
                // Bioma bloqueado
                selectBtn.classList.add('locked');
                selectBtn.innerHTML += '<div class="locked-indicator">🔒</div>';
                selectBtn.title = 'Complete o bioma anterior para desbloquear';
            } else if (isBiomeCompleted) {
                // Bioma completamente finalizado
                biomeCard.classList.add('biome-completed');
                selectBtn.innerHTML += '<div class="completed-indicator">✅</div>';
                selectBtn.title = 'Bioma completo! Clique para revisitar os níveis';

            } else {
                // Bioma desbloqueado mas não completo
                selectBtn.title = 'Bioma em progresso - Clique para jogar';
                
                // Mostrar progresso atual (opcional)
                const completedLevels = progress[biome].filter(level => level === true).length;
                const totalLevels = progress[biome].length;
                selectBtn.title = `Progresso: ${completedLevels}/${totalLevels} níveis`;
            }
        });
    }

    // Função para verificar se um bioma está completamente concluído
    function checkBiomeCompletion(biome) {
        const progress = JSON.parse(localStorage.getItem('gameProgress')) || {
            atlantic: [true, false, false, false, false, false],
            amazon: [false, false, false, false, false, false],
            cerrado: [false, false, false, false, false, false],
            caatinga: [false, false, false, false, false, false],
            pampa: [false, false, false, false, false, false],
            pantanal: [false, false, false, false, false, false],
        };
        
        return progress[biome] && progress[biome].every(level => level === true);
    }

    // Função para obter estatísticas de progresso do bioma
    function getBiomeProgress(biome) {
        const progress = JSON.parse(localStorage.getItem('gameProgress')) || {
            atlantic: [true, false, false, false, false, false],
            amazon: [false, false, false, false, false, false],
            cerrado: [false, false, false, false, false, false],
            caatinga: [false, false, false, false, false, false],
            pampa: [false, false, false, false, false, false],
            pantanal: [false, false, false, false, false, false],
        };
        
        const levels = progress[biome] || [];
        const completedLevels = levels.filter(level => level === true).length;
        const totalLevels = levels.length;
        
        return {
            completed: completedLevels === totalLevels,
            progress: completedLevels,
            total: totalLevels,
            percentage: totalLevels > 0 ? Math.round((completedLevels / totalLevels) * 100) : 0
        };
    }

    // Função para redirecionar para os níveis do bioma
    function goToBiomeLevels(biome) {
        setTimeout(() => {
            window.location.href = `fase-${biome}.html?biome=${biome}`;
        }, 300);
    }

    // Função para formatar nome do bioma
    function formatBiomeName(biome) {
        const names = {
            'atlantic': 'MATA ATLÂNTICA',
            'amazon': 'AMAZÔNIA', 
            'cerrado': 'CERRADO',
            'caatinga': 'CAATINGA',
            'pampa': 'PAMPA',
            'pantanal': 'PANTANAL'
        };
        return names[biome] || biome;
    }

});