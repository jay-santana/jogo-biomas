// scripts/sounds.js
class SoundManager {
  constructor() {
    this.sounds = {};
    // Carregar estado do mute do localStorage
    this.isMuted = localStorage.getItem("soundMuted") === "true";
    this.init();
  }

  init() {
    // Sons principais que vamos usar
    this.sounds = {
      "background-music": new Audio("../assets/sounds/background-music.mp3"),
      "item-collect": new Audio("../assets/sounds/item-collect.mp3"),
      "obstacle-hit": new Audio("../assets/sounds/obstacle-hit.mp3"),
      "level-complete": new Audio("../assets/sounds/level-complete.mp3"),
      victory: new Audio("../assets/sounds/victory.mp3"),
      
    };

    // Configurar música de fundo
    this.sounds["background-music"].loop = true;
    this.sounds["background-music"].volume = 0.3; // Volume mais baixo para música de fundo

    // Configurar volume dos outros sons
    this.sounds["item-collect"].volume = 0.7;
    this.sounds["obstacle-hit"].volume = 0.7;
    this.sounds["level-complete"].volume = 0.8;
    this.sounds["victory"].volume = 0.8;
  }

  play(soundName) {
    if (this.isMuted || !this.sounds[soundName]) return;

    try {
      // Para a música de fundo, usar o mesmo audio para loop
      if (soundName === "background-music") {
        this.sounds[soundName].play();
      } else {
        // Para outros sons, criar clone para evitar conflitos
        const sound = this.sounds[soundName].cloneNode();
        sound.volume = this.sounds[soundName].volume;
        sound.play();
      }
    } catch (error) {
      console.log("Erro ao tocar som:", error);
    }
  }

  stop(soundName) {
    if (this.sounds[soundName]) {
      this.sounds[soundName].pause();
      this.sounds[soundName].currentTime = 0;
    }
  }

  stopAll() {
    Object.values(this.sounds).forEach((sound) => {
      sound.pause();
      sound.currentTime = 0;
    });
  }

  toggleMute() {
    this.isMuted = !this.isMuted;

    // Salvar estado no localStorage
    localStorage.setItem("soundMuted", this.isMuted);

    if (this.isMuted) {
      this.stopAll();
    } else {
      // Tocar música de fundo se estiver em uma página apropriada
      this.playBackgroundMusic();
    }

    // Atualizar todos os botões de mute na página
    this.updateMuteButtons();

    return this.isMuted;
  }

  playBackgroundMusic() {
    if (!this.isMuted) {
      const currentPage = window.location.pathname;

      // Verificar se está em uma página onde deve tocar música de fundo
      const shouldPlayMusic =
        currentPage.includes("index.html") ||
        currentPage.includes("fases.html") ||
        currentPage.includes("fase-atlantic.html") ||
        currentPage.includes("fase-amazon.html") ||
        currentPage.includes("fase-cerrado.html") ||
        currentPage.includes("fase-caatinga.html") ||
        currentPage.includes("fase-pantanal.html");

      if (shouldPlayMusic) {
        setTimeout(() => {
          this.play("background-music");
        }, 500);
      }
    }
  }

  updateMuteButtons() {
    const muteBtns = document.querySelectorAll("#mute-btn");
    muteBtns.forEach((btn) => {
      if (btn) {
        const hasMuteStructure =
          btn.querySelector(".mute-icon") && btn.querySelector(".mute-text");

        if (hasMuteStructure) {
          btn.querySelector(".mute-icon").textContent = this.isMuted
            ? "🔇"
            : "🔊";
          btn.querySelector(".mute-text").textContent = this.isMuted
            ? "MUDO"
            : "SOM";
        } else {
          btn.textContent = this.isMuted ? "🔇" : "🔊";
        }
      }
    });
  }

  // Método para inicializar quando a página carrega
  initializePage() {
    this.updateMuteButtons();
    this.setupMuteButton();
    this.playBackgroundMusic();
  }

  // Configurar o event listener para o botão de mute
  setupMuteButton() {
    const muteBtn = document.getElementById("mute-btn");
    if (muteBtn && !muteBtn.hasAttribute("data-listener-added")) {
      muteBtn.setAttribute("data-listener-added", "true");
      muteBtn.addEventListener("click", () => {
        this.toggleMute();
      });
    }
  }
}
// Criar instância global
window.soundManager = new SoundManager();

// Inicializar automaticamente quando a página carrega
document.addEventListener("DOMContentLoaded", function () {
  window.soundManager.initializePage();
});
