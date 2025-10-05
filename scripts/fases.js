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
            }
            
            // Redirecionar para a página da fase
            setTimeout(() => {
                window.location.href = `fase-${biome}.html?biome=${biome}`;
            }, 300);
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

        const biomesOrder = ['atlantic', 'amazon', 'cerrado', 'caatinga', 'pantanal', 'pampa'];
        
        biomesOrder.forEach((biome, index) => {
            const biomeCard = document.querySelector(`.biome-card[data-biome="${biome}"]`);
            const selectBtn = biomeCard.querySelector('.select-btn');
            
            const isBiomeUnlocked = progress[biome] && progress[biome].some(level => level === true);
            
            if (!isBiomeUnlocked) {
                // Adicionar classe locked e indicador visual
                selectBtn.classList.add('locked');
                selectBtn.innerHTML += '<div class="locked-indicator">🔒</div>';
                
                // Adicionar tooltip
                selectBtn.title = 'Complete o bioma anterior para desbloquear';
            } else {
                selectBtn.classList.remove('locked');
                const lockIndicator = selectBtn.querySelector('.locked-indicator');
                if (lockIndicator) {
                    lockIndicator.remove();
                }
            }
        });
    }
});