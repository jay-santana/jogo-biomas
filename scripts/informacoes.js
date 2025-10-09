document.addEventListener('DOMContentLoaded', function() {
    const backBtn = document.getElementById('back-btn');
    
    backBtn.addEventListener('click', function() {
        window.location.href = 'index.html';
    });

    // ========== CÓDIGO DO MODAL ==========
    
    // DADOS DETALHADOS PARA CADA CÓDIGO BNCC (EXATOS DO PDF)
    const codigosDetalhados = {
        'EF05MA15': {
            codigo: 'EF05MA15',
            unidade: 'PENSAMENTO COMPUTACIONAL E RESOLUÇÃO DE PROBLEMAS',
            habilidade: 'DESENVOLVER LÓGICA E SEQUENCIAMENTO DE PASSOS PARA RESOLVER PROBLEMAS.',
            conhecimento: 'RACIOCÍNIO LÓGICO E SEQUENCIAMENTO',
            aplicacao: 'O JOGADOR PLANEJA E ORGANIZA OS MOVIMENTOS DE MIGUEL PARA SUPERAR OS DESAFIOS, EXERCITANDO PENSAMENTO COMPUTACIONAL E RESOLUÇÃO DE PROBLEMAS.'
        },
        'PC1EF02': {
            codigo: 'PC1EF02',
            unidade: 'PENSAMENTO COMPUTACIONAL',
            habilidade: 'IDENTIFICAR E DECOMPOR PROBLEMAS EM ETAPAS MENORES E ORGANIZADAS.',
            conhecimento: 'DECOMPOSIÇÃO DE PROBLEMAS',
            aplicacao: 'O JOGADOR ANALISA O PERCURSO E DIVIDE O DESAFIO EM ETAPAS LÓGICAS, PLANEJANDO O CAMINHO DE MIGUEL PASSO A PASSO.'
        },
        'PC2EF03': {
            codigo: 'PC2EF03',
            unidade: 'PENSAMENTO COMPUTACIONAL',
            habilidade: 'PLANEJAR E TESTAR SEQUÊNCIAS LÓGICAS DE INSTRUÇÕES (ALGORITMOS) PARA RESOLVER DESAFIOS.',
            conhecimento: 'ALGORITMOS E SEQUÊNCIAS DE INSTRUÇÕES',
            aplicacao: 'O JOGADOR CRIA E EXECUTA ALGORITMOS COM BLOCOS DE PROGRAMAÇÃO PARA MOVIMENTAR MIGUEL ATÉ O CRISTAL.'
        },
        'PC2EF04': {
            codigo: 'PC2EF04',
            unidade: 'PENSAMENTO COMPUTACIONAL',
            habilidade: 'PLANEJAR E TESTAR SEQUÊNCIAS LÓGICAS DE INSTRUÇÕES (ALGORITMOS) PARA RESOLVER DESAFIOS.',
            conhecimento: 'DEPURAÇÃO E OTIMIZAÇÃO DE CÓDIGO',
            aplicacao: 'O JOGADOR CORRIGE E AJUSTA COMANDOS QUANDO MIGUEL ERRA O CAMINHO, PRATICANDO O PROCESSO DE DEPURAÇÃO.'
        },
        'PC3EF03': {
            codigo: 'PC3EF03',
            unidade: 'PENSAMENTO COMPUTACIONAL',
            habilidade: 'UTILIZAR REPRESENTAÇÕES VISUAIS (COMO BLOCOS DE CÓDIGO) PARA CRIAR SOLUÇÕES COMPUTACIONAIS.',
            conhecimento: 'REPRESENTAÇÃO VISUAL DE ALGORITMOS',
            aplicacao: 'A PROGRAMAÇÃO EM BLOCOS PERMITE REPRESENTAR VISUALMENTE OS PASSOS E DECISÕES DE MIGUEL DE FORMA LÓGICA.'
        },
        'PC4EF05': {
            codigo: 'PC4EF05',
            unidade: 'PENSAMENTO COMPUTACIONAL',
            habilidade: 'RECONHECER QUE DIFERENTES SOLUÇÕES PODEM SER ADOTADAS PARA O MESMO PROBLEMA.',
            conhecimento: 'ESTRATÉGIAS MÚLTIPLAS E CRIATIVIDADE COMPUTACIONAL',
            aplicacao: 'O JOGADOR DESCOBRE VÁRIAS ROTAS POSSÍVEIS PARA RESOLVER O MESMO DESAFIO, DESENVOLVENDO FLEXIBILIDADE E PENSAMENTO CRIATIVO.'
        },
        'EF04MA18': {
            codigo: 'EF04MA18',
            unidade: 'GEOMETRIA',
            habilidade: 'DESCREVER E REPRESENTAR DESLOCAMENTOS NO PLANO, UTILIZANDO NOÇÕES DE DIREÇÃO E SENTIDO.',
            conhecimento: 'LOCALIZAÇÃO E MOVIMENTAÇÃO NO PLANO',
            aplicacao: 'O JOGADOR MOVE MIGUEL POR DIREÇÕES (FRENTE, DIREITA, ESQUERDA), COMPREENDENDO DESLOCAMENTOS E TRAJETOS NO PLANO.'
        },
        'EF05MA22': {
            codigo: 'EF05MA22',
            unidade: 'ÁLGEBRA / PENSAMENTO ALGÉBRICO',
            habilidade: 'RESOLVER E ELABORAR PROBLEMAS QUE ENVOLVAM ESTRATÉGIAS E SEQUÊNCIAS LÓGICAS.',
            conhecimento: 'ESTRATÉGIAS DE RESOLUÇÃO DE PROBLEMAS',
            aplicacao: 'O JOGADOR PLANEJA E ORGANIZA SEQUÊNCIAS LÓGICAS DE COMANDOS PARA ATINGIR O OBJETIVO DA FASE.'
        },
        'EF06MA03': {
            codigo: 'EF06MA03',
            unidade: 'GEOMETRIA',
            habilidade: 'DESCREVER E REPRESENTAR DESLOCAMENTOS NO PLANO CARTESIANO, UTILIZANDO PARES ORDENADOS E COORDENADAS.',
            conhecimento: 'REPRESENTAÇÃO DE POSIÇÕES NO PLANO CARTESIANO',
            aplicacao: 'MIGUEL SE MOVIMENTA POR CÉLULAS EM UMA GRADE, REPRESENTANDO DESLOCAMENTOS E POSIÇÕES EM UM PLANO.'
        },
        'EF06MA16': {
            codigo: 'EF06MA16',
            unidade: 'ÁLGEBRA / PENSAMENTO ALGÉBRICO',
            habilidade: 'RESOLVER E ELABORAR PROBLEMAS UTILIZANDO O PENSAMENTO ALGÉBRICO E ARITMÉTICO PARA IDENTIFICAR REGULARIDADES, PADRÕES E RELAÇÕES.',
            conhecimento: 'PADRÕES E REGULARIDADES EM SEQUÊNCIAS',
            aplicacao: 'O JOGADOR RECONHECE PADRÕES REPETITIVOS NAS SEQUÊNCIAS DE COMANDOS E APLICA RACIOCÍNIO LÓGICO.'
        },
        'EF07MA18': {
            codigo: 'EF07MA18',
            unidade: 'ÁLGEBRA / PENSAMENTO ALGÉBRICO',
            habilidade: 'ANALISAR E DESCREVER ALGORITMOS E FLUXOGRAMAS QUE REPRESENTEM SEQUÊNCIAS DE AÇÕES OU INSTRUÇÕES PARA RESOLVER PROBLEMAS.',
            conhecimento: 'ALGORITMOS E FLUXOGRAMAS',
            aplicacao: 'A MECÂNICA DE PROGRAMAÇÃO EM BLOCOS FUNCIONA COMO UM FLUXOGRAMA INTERATIVO, QUE O JOGADOR ANALISA, EXECUTA E AJUSTA.'
        },
        'EF03CI03': {
            codigo: 'EF03CI03',
            unidade: 'MATÉRIA E ENERGIA / VIDA E EVOLUÇÃO',
            habilidade: 'IDENTIFICAR CARACTERÍSTICAS DE DIFERENTES AMBIENTES, COMO FLORESTAS, CAMPOS E RIOS, E DISCUTIR A IMPORTÂNCIA DA SUA PRESERVAÇÃO.',
            conhecimento: 'AMBIENTES E SUA PRESERVAÇÃO',
            aplicacao: 'O JOGADOR EXPLORA OS SEIS BIOMAS BRASILEIROS, OBSERVANDO CARACTERÍSTICAS NATURAIS E COMPREENDENDO A IMPORTÂNCIA DA CONSERVAÇÃO AMBIENTAL PARA O EQUILÍBRIO DA NATUREZA.'
        },
        'EF03GE09': {
            codigo: 'EF03GE09',
            unidade: 'NATUREZA, AMBIENTES E QUALIDADE DE VIDA',
            habilidade: 'RECONHECER A IMPORTÂNCIA DA CONSERVAÇÃO DOS DIFERENTES BIOMAS BRASILEIROS.',
            conhecimento: 'BIOMAS BRASILEIROS E CONSERVAÇÃO AMBIENTAL',
            aplicacao: 'CADA FASE REPRESENTA UM BIOMA DO BRASIL, INCENTIVANDO A VALORIZAÇÃO DA BIODIVERSIDADE E O COMPROMETIMENTO COM O MEIO AMBIENTE.'
        }
    };

    // ELEMENTOS DO MODAL
    const skillModal = document.getElementById('skillModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalSubtitle = document.getElementById('modalSubtitle');
    const modalContent = document.getElementById('modalContent');
    const closeModal = document.getElementById('closeModal');

    // ADICIONAR EVENTO DE CLIQUE NOS CÓDIGOS BNCC
    const codeLinks = document.querySelectorAll('.code-link');
    
    codeLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.stopPropagation(); // IMPEDE QUE O CLIQUE PROPAGUE PARA O CARD
            const code = this.getAttribute('data-code');
            
            if (codigosDetalhados[code]) {
                const detalhe = codigosDetalhados[code];
                modalTitle.textContent = detalhe.codigo;
                modalSubtitle.textContent = 'DETALHES DA BNCC';
                modalContent.innerHTML = `
                    <div class="code-details">
                        <p><strong>UNIDADE TEMÁTICA:</strong> ${detalhe.unidade}</p>
                        <p><strong>HABILIDADE:</strong> ${detalhe.habilidade}</p>
                        <p><strong>OBJETO DO CONHECIMENTO:</strong> ${detalhe.conhecimento}</p>
                        <p><strong>COMO É TRABALHADA:</strong> ${detalhe.aplicacao}</p>
                    </div>
                `;
                skillModal.style.display = 'flex';
            }
        });
    });

    // FECHAR MODAL
    closeModal.addEventListener('click', function() {
        skillModal.style.display = 'none';
    });

    // FECHAR MODAL CLICANDO FORA DO CONTEÚDO
    skillModal.addEventListener('click', function(e) {
        if (e.target === skillModal) {
            skillModal.style.display = 'none';
        }
    });

    // FECHAR MODAL COM TECLA ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            skillModal.style.display = 'none';
        }
    });
});