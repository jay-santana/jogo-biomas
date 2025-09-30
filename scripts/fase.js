document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        window.soundManager.play('page-transition');
    }, 100);
    
    const backBtn = document.getElementById("back-btn");
    const startBtns = document.querySelectorAll(".start-btn");

    backBtn.addEventListener("click", function () {
        window.soundManager.play('button-click');
        setTimeout(() => {
            window.location.href = "fases.html";
        }, 300);
    });

    startBtns.forEach((btn) => {
        btn.addEventListener("click", function () {
            if (!this.disabled) {
                window.soundManager.play('button-click');

                const levelCard = this.closest(".level-card");
                const level = levelCard.dataset.level;

                // Obter o nome do bioma da URL ou do título da página
                const urlParams = new URLSearchParams(window.location.search);
                let biome = urlParams.get("biome");

                // Se não estiver na URL, tentar obter do título da página
                if (!biome) {
                    const pageTitle = document.querySelector("h1").textContent.toLowerCase();
                    if (pageTitle.includes("mata atlântica")) biome = "atlantic";
                    else if (pageTitle.includes("amazônia") || pageTitle.includes("amazonia")) biome = "amazon";
                    else if (pageTitle.includes("cerrado")) biome = "cerrado";
                    else if (pageTitle.includes("caatinga")) biome = "caatinga";
                    else if (pageTitle.includes("pantanal")) biome = "pantanal";
                    else biome = "atlantic";
                }

                setTimeout(() => {
                    window.location.href = `jogo.html?biome=${biome}&level=${level}`;
                }, 300);
            }
        });
    });

  // Verificar progresso salvo para desbloquear níveis
  checkProgress();

  function checkProgress() {
    // Obter progresso do localStorage ou criar padrão CORRETO
    const progress = JSON.parse(localStorage.getItem("gameProgress")) || {
      atlantic: [true, false, false, false, false, false],  // Apenas nível 1 desbloqueado
      amazon: [false, false, false, false, false, false],   // Totalmente bloqueado
      cerrado: [false, false, false, false, false, false],  // Totalmente bloqueado
      caatinga: [false, false, false, false, false, false], // Totalmente bloqueado
      pantanal: [false, false, false, false, false, false]  // Totalmente bloqueado
    };

    // Obter o bioma atual
    const urlParams = new URLSearchParams(window.location.search);
    let biome = urlParams.get("biome");

    // Se não estiver na URL, tentar obter do título da página
    if (!biome) {
      const pageTitle = document.querySelector("h1").textContent.toLowerCase();
      if (pageTitle.includes("mata atlântica")) biome = "atlantic";
      else if (pageTitle.includes("amazônia") || pageTitle.includes("amazonia"))
        biome = "amazon";
      else if (pageTitle.includes("cerrado")) biome = "cerrado";
      else if (pageTitle.includes("caatinga")) biome = "caatinga";
      else if (pageTitle.includes("pantanal")) biome = "pantanal";
      else biome = "atlantic"; // Padrão
    }

    let biomeProgress = progress[biome] || [false, false, false, false, false, false];
    if (biomeProgress.length < 6) {
      biomeProgress = [
        ...biomeProgress,
        ...Array(6 - biomeProgress.length).fill(false),
      ];
    }
    const levelCards = document.querySelectorAll(".level-card");
    levelCards.forEach((card, index) => {
      if (biomeProgress[index]) {
        const status = card.querySelector(".level-status");
        const btn = card.querySelector(".start-btn");

        status.classList.remove("locked");
        status.classList.add("unlocked");
        btn.disabled = false;
      }
    });
  }
});