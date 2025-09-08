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
            
            // Redirecionar para a página da fase com o parâmetro do bioma
            window.location.href = `fase-${biome}.html?biome=${biome}`;
        });
    });
});