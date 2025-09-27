// Sistema de modais personalizados
class ModalManager {
    constructor() {
        this.modalContainer = null;
        this.init();
    }

    init() {
        this.modalContainer = document.createElement('div');
        this.modalContainer.id = 'modal-container';
        document.body.appendChild(this.modalContainer);
    }

    showAlert(message, title = "Alerta", confirmText = "OK", onConfirm = null) {
        return new Promise((resolve) => {
            const modalId = 'modal-' + Date.now();
            const modalHTML = `
                <div id="${modalId}" class="custom-modal" style="display: flex;">
                    <div class="custom-modal-content">
                        <h2>${title}</h2>
                        <p>${message}</p>
                        <div class="custom-modal-buttons">
                            <button class="custom-modal-btn confirm" onclick="window.modalManager.closeModal('${modalId}', true)">${confirmText}</button>
                        </div>
                    </div>
                </div>
            `;

            this.modalContainer.innerHTML += modalHTML;

            if (onConfirm) {
                window.modalConfirmCallback = onConfirm;
            }
        });
    }

    showConfirm(message, title = "Confirmação", confirmText = "Sim", cancelText = "Não") {
        return new Promise((resolve) => {
            const modalId = 'modal-' + Date.now();
            const modalHTML = `
                <div id="${modalId}" class="custom-modal" style="display: flex;">
                    <div class="custom-modal-content">
                        <h2>${title}</h2>
                        <p>${message}</p>
                        <div class="custom-modal-buttons">
                            <button class="custom-modal-btn confirm" onclick="window.modalManager.closeModal('${modalId}', true)">${confirmText}</button>
                            <button class="custom-modal-btn cancel" onclick="window.modalManager.closeModal('${modalId}', false)">${cancelText}</button>
                        </div>
                    </div>
                </div>
            `;

            this.modalContainer.innerHTML += modalHTML;

            this.currentResolve = resolve;
        });
    }

    closeModal(modalId, result) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'none';
            setTimeout(() => {
                modal.remove();
            }, 300);
        }

        if (this.currentResolve) {
            this.currentResolve(result);
            this.currentResolve = null;
        }
    }
}

window.modalManager = new ModalManager();

window.originalAlert = window.alert;
window.alert = function(message) {
    return window.modalManager.showAlert(message);
};

window.originalConfirm = window.confirm;
window.confirm = function(message) {
    return window.modalManager.showConfirm(message);
};