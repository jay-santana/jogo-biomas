// scripts/informacoes.js
document.addEventListener('DOMContentLoaded', function() {
    const backBtn = document.getElementById('back-btn');
    
    backBtn.addEventListener('click', function() {
        window.location.href = 'index.html';
    });

    // ========== CÓDIGO DO MODAL ==========
    
    // Dados detalhados para cada habilidade
    const habilidadesDetalhadas = {
        'PENSAMENTO COMPUTACIONAL': {
            titulo: 'PENSAMENTO COMPUTACIONAL',
            subtitulo: 'DETALHES PARA O PROFESSOR',
            conteudo: `
                <p>Esta habilidade desenvolve competências fundamentais para a resolução de problemas:</p>
                <ul>
                    <li><strong>Decomposição:</strong> Quebrar problemas complexos em partes menores e gerenciáveis</li>
                    <li><strong>Reconhecimento de Padrões:</strong> Identificar similaridades e padrões em diferentes situações</li>
                    <li><strong>Abstração:</strong> Focar apenas nos detalhes relevantes para a solução</li>
                    <li><strong>Design de Algoritmos:</strong> Criar sequências lógicas de passos para resolver problemas</li>
                </ul>
                <p><strong>Sugestão de Atividade Complementar:</strong> Peça aos alunos que criem algoritmos para atividades do dia a dia, como escovar os dentes ou preparar um lanche.</p>
            `
        },
        'MATEMÁTICA': {
            titulo: 'MATEMÁTICA',
            subtitulo: 'DETALHES PARA O PROFESSOR',
            conteudo: `
                <p>Conceitos matemáticos trabalhados no jogo:</p>
                <ul>
                    <li><strong>Sistemas de Coordenadas:</strong> Localização e movimentação em grades bidimensionais</li>
                    <li><strong>Orientação Espacial:</strong> Compreensão de direções (cima, baixo, esquerda, direita)</li>
                    <li><strong>Operações Básicas:</strong> Contagem, adição e subtração implícitas nos desafios</li>
                    <li><strong>Geometria:</strong> Noções de posição, direção e distância</li>
                </ul>
                <p><strong>Dica Pedagógica:</strong> Use o sistema de coordenadas do jogo para introduzir conceitos de plano cartesiano.</p>
            `
        },
        'GEOGRAFIA': {
            titulo: 'GEOGRAFIA',
            subtitulo: 'DETALHES PARA O PROFESSOR',
            conteudo: `
                <p>Conteúdos geográficos abordados nos biomas brasileiros:</p>
                <ul>
                    <li><strong>Localização e Distribuição:</strong> Onde cada bioma se localiza no território nacional</li>
                    <li><strong>Características Físicas:</strong> Clima, relevo, solo e hidrografia específicos</li>
                    <li><strong>Biodiversidade:</strong> Espécies vegetais e animais características de cada bioma</li>
                    <li><strong>Conservação Ambiental:</strong> Importância da preservação dos ecossistemas</li>
                </ul>
                <p><strong>Atividade Sugerida:</strong> Pesquisa sobre as ameaças enfrentadas por cada bioma e possíveis soluções.</p>
            `
        },
        'LÍNGUA PORTUGUESA': {
            titulo: 'LÍNGUA PORTUGUESA',
            subtitulo: 'DETALHES PARA O PROFESSOR',
            conteudo: `
                <p>Habilidades linguísticas desenvolvidas durante o jogo:</p>
                <ul>
                    <li><strong>Interpretação de Texto:</strong> Compreensão de instruções e objetivos dos desafios</li>
                    <li><strong>Vocabulário Técnico:</strong> Aprendizado de termos específicos de programação e ecologia</li>
                    <li><strong>Comunicação Clara:</strong> Organização do pensamento para expressar ideias</li>
                    <li><strong>Sequência Lógica:</strong> Estruturação coerente de instruções e comandos</li>
                </ul>
                <p><strong>Dica Pedagógica:</strong> Peça aos alunos que expliquem oralmente suas estratégias de resolução.</p>
            `
        },
        'CIÊNCIAS': {
            titulo: 'CIÊNCIAS',
            subtitulo: 'DETALHES PARA O PROFESSOR',
            conteudo: `
                <p>Conceitos científicos abordados nos diferentes biomas:</p>
                <ul>
                    <li><strong>Ecossistemas:</strong> Relações entre seres vivos e meio ambiente</li>
                    <li><strong>Cadeias Alimentares:</strong> Interdependência entre produtores, consumidores e decompositores</li>
                    <li><strong>Adaptações:</strong> Características que permitem a sobrevivência em cada ambiente</li>
                    <li><strong>Sustentabilidade:</strong> Uso consciente dos recursos naturais</li>
                </ul>
                <p><strong>Atividade Complementar:</strong> Debate sobre como nossas ações diárias impactam os diferentes biomas.</p>
            `
        }
    };

    // Elementos do modal
    const skillModal = document.getElementById('skillModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalSubtitle = document.getElementById('modalSubtitle');
    const modalContent = document.getElementById('modalContent');
    const closeModal = document.getElementById('closeModal');

    // Adicionar evento de clique em todos os cards de habilidade
    const skillCards = document.querySelectorAll('.skill-card');
    
    skillCards.forEach(card => {
        card.addEventListener('click', function() {
            const skillTitle = this.querySelector('h3').textContent.trim();
            
            if (habilidadesDetalhadas[skillTitle]) {
                modalTitle.textContent = habilidadesDetalhadas[skillTitle].titulo;
                modalSubtitle.textContent = habilidadesDetalhadas[skillTitle].subtitulo;
                modalContent.innerHTML = habilidadesDetalhadas[skillTitle].conteudo;
                skillModal.style.display = 'flex';
            }
        });
    });

    // Fechar modal
    closeModal.addEventListener('click', function() {
        skillModal.style.display = 'none';
    });

    // Fechar modal clicando fora do conteúdo
    skillModal.addEventListener('click', function(e) {
        if (e.target === skillModal) {
            skillModal.style.display = 'none';
        }
    });

    // Fechar modal com tecla ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            skillModal.style.display = 'none';
        }
    });
    // ========== FIM DO CÓDIGO DO MODAL ==========
});