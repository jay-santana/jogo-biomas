document.addEventListener('DOMContentLoaded', function() {
    const backBtn = document.getElementById('back-btn');
    const startBtns = document.querySelectorAll('.start-btn');
    
    backBtn.addEventListener('click', function() {
        window.location.href = 'fases.html';
    });
    
    startBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            if (!this.disabled) {
                const levelCard = this.closest('.level-card');
                const level = levelCard.dataset.level;
                
                // Obter o nome do bioma da URL ou do título da página
                const urlParams = new URLSearchParams(window.location.search);
                let biome = urlParams.get('biome');
                
                // Se não estiver na URL, tentar obter do título da página
                if (!biome) {
                    const pageTitle = document.querySelector('h1').textContent.toLowerCase();
                    if (pageTitle.includes('mata atlântica')) biome = 'atlantic';
                    else if (pageTitle.includes('amazônia') || pageTitle.includes('amazonia')) biome = 'amazon';
                    else if (pageTitle.includes('cerrado')) biome = 'cerrado';
                    else biome = 'atlantic'; // Padrão
                }
                
                // Redirecionar para a página do jogo com os parâmetros corretos
                window.location.href = `jogo.html?biome=${biome}&level=${level}`;
            }
        });
    });
    
    // Verificar progresso salvo para desbloquear níveis
    checkProgress();
    
    function checkProgress() {
        // Simulação - na implementação real, isso viria de localStorage ou servidor
        const progress = JSON.parse(localStorage.getItem('gameProgress')) || {
            'atlantic': [true, false, false, false, false] // Apenas o nível 1 desbloqueado
        };
        
        // Obter o bioma atual
        const urlParams = new URLSearchParams(window.location.search);
        let biome = urlParams.get('biome');
        
        // Se não estiver na URL, tentar obter do título da página
        if (!biome) {
            const pageTitle = document.querySelector('h1').textContent.toLowerCase();
            if (pageTitle.includes('mata atlântica')) biome = 'atlantic';
            else if (pageTitle.includes('amazônia') || pageTitle.includes('amazonia')) biome = 'amazon';
            else if (pageTitle.includes('cerrado')) biome = 'cerrado';
            else biome = 'atlantic'; // Padrão
        }
        
        const biomeProgress = progress[biome] || [true, false, false, false, false];
        
        const levelCards = document.querySelectorAll('.level-card');
        levelCards.forEach((card, index) => {
            if (biomeProgress[index]) {
                const status = card.querySelector('.level-status');
                const btn = card.querySelector('.start-btn');
                
                status.classList.remove('locked');
                status.classList.add('unlocked');
                status.querySelector('span').textContent = 'Desbloqueado';
                btn.disabled = false;
            }
        });
    }
});