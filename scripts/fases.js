document.addEventListener('DOMContentLoaded', function() {
    const backBtn = document.getElementById('back-btn');
    const selectBtns = document.querySelectorAll('.select-btn');
    
    backBtn.addEventListener('click', function() {
        window.location.href = 'index.html';
    });
    
    selectBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const biomeCard = this.closest('.biome-card');
            const biome = biomeCard.dataset.biome;
            
            // Verificar se o bioma está desbloqueado
            const progress = JSON.parse(localStorage.getItem('gameProgress')) || {
                atlantic: [true, false, false, false, false, false],
                amazon: [false, false, false, false, false, false],
                cerrado: [false, false, false, false, false, false],
                caatinga: [false, false, false, false, false, false],
                pantanal: [false, false, false, false, false, false]
            };
            
            // Um bioma está desbloqueado se pelo menos um nível estiver desbloqueado
            const isBiomeUnlocked = progress[biome] && progress[biome].some(level => level === true);
            
            if (!isBiomeUnlocked) {
                alert('Este bioma ainda está bloqueado! Complete o bioma anterior primeiro.');
                return;
            }
            
            // Redirecionar para a página da fase com o parâmetro do bioma
            window.location.href = `fase-${biome}.html?biome=${biome}`;
        });
    });
});