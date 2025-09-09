const caatingaLevels = {
    biome: "caatinga",
    name: "Caatinga",
    colorPalette: {
        path: '#D2B48C',
        obstacle: '#8B4513', 
        start: '#4CAF50',
        end: '#2196F3', 
        item: '#FFD700', 
        blocked: '#3a5a3a'
    },
    levels: {
        1: {
            title: "Sertão de Pedras",
            description: "Primeiros passos na terra árida",
            grid: { width: 10, height: 12 },
            inicio: { x: 2, y: 5 },
            fim: { x: 7, y: 5 },
            itens: [{x: 5, y: 5}, {x: 6, y: 3}],
            obstaculos: [{x: 4, y: 5}],
            accessibleCells: [
                {x: 3, y: 5}, {x: 3, y: 6},
                {x: 4, y: 6}, {x: 5, y: 6},
                {x: 5, y: 3}, {x: 5, y: 4},
                {x: 6, y: 3}, {x: 6, y: 4},
                {x: 5, y: 5}, {x: 6, y: 5}
            ]
        },
        2: {
            title: "Caminho do Mandacaru",
            description: "Desvie dos cactos espinhosos",
            grid: { width: 10, height: 12 },
            inicio: { x: 3, y: 4 },
            fim: { x: 6, y: 3 },
            itens: [{x: 5, y: 7}, {x: 5, y: 11}, {x: 6, y: 9}, {x: 7, y: 5}],
            obstaculos: [{x: 4, y: 7},{x: 5, y: 8},{x: 6, y: 6},],
            accessibleCells: [
                {x: 6, y: 3}, {x: 6, y: 4},
                {x: 3, y: 4}, {x: 3, y: 5},
                {x: 5, y: 5}, {x: 6, y: 5},
                {x: 7, y: 5}, {x: 5, y: 6},
                {x: 6, y: 6}, {x: 7, y: 6},
                {x: 3, y: 6}, {x: 3, y: 7},
                {x: 3, y: 8}, {x: 4, y: 7},
                {x: 5, y: 7}, {x: 6, y: 7},
                {x: 7, y: 7}, {x: 3, y: 8},
                {x: 4, y: 8}, {x: 5, y: 8},
                {x: 6, y: 8}, {x: 4, y: 9},
                {x: 5, y: 9}, {x: 6, y: 9},
                {x: 4, y: 10}, {x: 5, y: 10},
                {x: 4, y: 11}, {x: 5, y: 11},
            ]
        },
        3: {
            title: "Trilha da Asa-branca",
            description: "Siga o canto do pássaro símbolo",
            grid: { width: 10, height: 12 },
            inicio: { x: 6, y: 9 },
            fim: { x: 8, y: 4 },
            itens: [
                {x: 6, y: 3}, {x: 2, y: 5}, {x: 6, y: 7},{x: 3, y: 10},
            ],
            obstaculos: [{x: 5, y: 6}, {x: 5, y: 7}],
            accessibleCells: [
                {x: 5, y: 3}, {x: 6, y: 3},
                {x: 2, y: 4}, {x: 5, y: 4},
                {x: 6, y: 4}, {x: 8, y: 4},
                {x: 2, y: 5}, {x: 3, y: 5},
                {x: 4, y: 5}, {x: 5, y: 5},
                {x: 6, y: 5}, {x: 7, y: 5},
                {x: 8, y: 5}, {x: 2, y: 6}, {x: 3, y: 6},
                {x: 4, y: 6}, {x: 5, y: 6},
                {x: 6, y: 6}, {x: 7, y: 6},
                {x: 8, y: 6}, {x: 3, y: 7}, {x: 4, y: 7},
                {x: 5, y: 7}, {x: 6, y: 7},
                {x: 7, y: 7}, {x: 4, y: 8},
                {x: 5, y: 8}, {x: 6, y: 8}, {x: 3, y: 9},
                {x: 4, y: 9}, {x: 6, y: 9},
                {x: 3, y: 10}, {x: 4, y: 10}
            ]
        },
        4: {
            title: "Lajedo Solto",
            description: "Cuidado com as pedras instáveis",
            grid: { width: 10, height: 12 },
            inicio: { x: 6, y: 2 },
            fim: { x: 3, y: 8 },
            itens: [
                {x: 3, y: 4}, {x: 3, y: 5},
                {x: 4, y: 8}, {x: 8, y: 8}, {x: 8, y: 9}
            ],
            obstaculos: [
                {x: 4, y: 6}, {x: 8, y: 7}, 
                {x: 6, y: 6}, {x: 7, y: 9}
            ],
            accessibleCells: [
                {x: 6, y: 2}, {x: 6, y: 3},
                {x: 3, y: 4}, {x: 4, y: 4}, {x: 6, y: 4},
                {x: 3, y: 5}, {x: 4, y: 5}, {x: 5, y: 5},
                {x: 6, y: 5}, {x: 4, y: 6}, {x: 5, y: 6},
                {x: 6, y: 6}, {x: 4, y: 7}, {x: 5, y: 7},
                {x: 6, y: 7}, {x: 7, y: 7}, {x: 8, y: 7},
                {x: 3, y: 8}, {x: 4, y: 8}, {x: 6, y: 8},
                {x: 7, y: 8}, {x: 8, y: 8}, {x: 6, y: 9},
                {x: 7, y: 9}, {x: 8, y: 9}, {x: 6, y: 10},
                {x: 7, y: 10}, {x: 8, y: 10}
            ]
        },
        5: {
            title: "Oásis Escondido",
            description: "Encontre a água no sertão",
            grid: { width: 10, height: 12 },
            inicio: { x: 7, y: 10 },
            fim: { x: 2, y: 3 },
            itens: [
                {x: 8, y: 3}, {x: 6, y: 8},
                {x: 3, y: 7}, {x: 3, y: 3}
            ],
            obstaculos: [
                {x: 2, y: 4}, {x: 8, y: 5}, 
                {x: 3, y: 6}, {x: 4, y: 6},
            ],
            accessibleCells: [
                {x: 2, y: 3}, {x: 3, y: 3}, {x: 7, y: 3},
                {x: 8, y: 3}, {x: 2, y: 4}, {x: 3, y: 4},
                {x: 7, y: 4}, {x: 8, y: 4}, {x: 2, y: 5},
                {x: 3, y: 5}, {x: 7, y: 5}, {x: 8, y: 5},
                {x: 2, y: 6}, {x: 3, y: 6}, {x: 4, y: 6},
                {x: 2, y: 7}, {x: 3, y: 7}, {x: 4, y: 7},
                {x: 5, y: 7}, {x: 7, y: 7}, {x: 4, y: 8},
                {x: 5, y: 8}, {x: 6, y: 8}, {x: 7, y: 8},
                {x: 5, y: 9}, {x: 6, y: 9}, {x: 7, y: 9},
                {x: 5, y: 10}, {x: 6, y: 10}, {x: 7, y: 10},
                {x: 7, y: 6}
            ]
        },
        6: {
            title: "Desafio do Sertão",
            description: "Prova final na terra da resistência",
            grid: { width: 10, height: 12 },
            inicio: { x: 2, y: 10 },
            fim: { x: 2, y: 4 },
            itens: [
                {x: 5, y: 4}, {x: 3, y: 6},
                {x: 4, y: 8}, {x: 6, y: 8},
                {x: 5, y: 10}, {x: 3, y: 11}
            ],
            obstaculos: [
                {x: 5, y: 2}, {x: 5, y: 3}, 
                {x: 7, y: 4}, {x: 8, y: 4},
                {x: 2, y: 6}, {x: 2, y: 5},
                {x: 5, y: 6}, {x: 6, y: 6}
            ],
            accessibleCells: [
                {x: 5, y: 2}, {x: 5, y: 3}, {x: 6, y: 3},
                {x: 7, y: 3}, {x: 2, y: 4}, {x: 3, y: 4},
                {x: 5, y: 4}, {x: 6, y: 4}, {x: 7, y: 4},
                {x: 8, y: 4}, {x: 2, y: 5}, {x: 3, y: 5},
                {x: 4, y: 5}, {x: 5, y: 5}, {x: 6, y: 5},
                {x: 7, y: 5}, {x: 2, y: 6}, {x: 3, y: 6},
                {x: 4, y: 6}, {x: 5, y: 6}, {x: 6, y: 6},
                {x: 4, y: 7}, {x: 5, y: 7}, {x: 6, y: 4},
                {x: 3, y: 8}, {x: 4, y: 8}, {x: 5, y: 8},
                {x: 6, y: 8}, {x: 4, y: 9}, {x: 5, y: 9},
                {x: 6, y: 9}, {x: 7, y: 9}, {x: 2, y: 10},
                {x: 3, y: 10}, {x: 4, y: 10}, {x: 5, y: 10},
                {x: 3, y: 11}, {x: 4, y: 11}, {x: 5, y: 11},
                {x: 6, y: 11}
            ]
        }
    }
};