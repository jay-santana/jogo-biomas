const cerradoLevels = {
    biome: "cerrado",
    name: "Cerrado",
    colorPalette: {
        path: '#CD853F',
        start: '#4CAF50',
        blocked: '#3a5a3a'
    },
    levels: {
        1: {
            title: "Chapada dos Veadeiros",
            description: "Início na terra das cachoeiras",
            grid: { width: 10, height: 10 },
            inicio: { x: 2, y: 5 },
            fim: { x: 7, y: 5 },
            itens: [{x: 4, y: 5}, {x: 5, y: 5}],
            obstaculos: [],
            accessibleCells: [
                {x: 3, y: 5}, {x: 4, y: 5}, 
                {x: 5, y: 5}, {x: 6, y: 5}
            ]
        },
        2: {
            title: "Caminho do Lobo-guará",
            description: "Siga a trilha do animal símbolo",
            grid: { width: 10, height: 10 },
            inicio: { x: 3, y: 4 },
            fim: { x: 5, y: 6 },
            itens: [{x: 4, y: 5}],
            obstaculos: [{x: 4, y: 4}, {x: 4, y: 6}],
            accessibleCells: [
                {x: 3, y: 4}, {x: 3, y: 5}, 
                {x: 3, y: 6}, {x: 4, y: 5},
                {x: 5, y: 4}, {x: 5, y: 5},
                {x: 5, y: 6}
            ]
        },
        3: {
            title: "Trilha das Flores do Cerrado",
            description: "Colete as espécies únicas",
            grid: { width: 10, height: 10 },
            inicio: { x: 3, y: 6 },
            fim: { x: 6, y: 6 },
            itens: [{x: 4, y: 4}, {x: 5, y: 4}, {x: 4, y: 5}],
            obstaculos: [
                {x: 4, y: 6},
                {x: 3, y: 4}, {x: 6, y: 4}
            ],
            accessibleCells: [
                {x: 3, y: 6}, {x: 3, y: 5}, 
                {x: 4, y: 4}, {x: 4, y: 5},
                {x: 5, y: 4}, {x: 5, y: 5},
                {x: 6, y: 5}, {x: 6, y: 6},
                {x: 2, y: 5}, {x: 7, y: 5},
                {x: 5, y: 6}
            ]
        },
        4: {
            title: "Vereda dos Buritis",
            description: "Navegue entre as palmeiras típicas",
            grid: { width: 10, height: 10 },
            inicio: { x: 3, y: 4 },
            fim: { x: 7, y: 4 },
            itens: [
                {x: 4, y: 3}, {x: 6, y: 3}, 
                {x: 5, y: 5}, {x: 4, y: 6}
            ],
            obstaculos: [
                {x: 5, y: 4}, {x: 3, y: 5}, {x: 7, y: 3}, 
                {x: 7, y: 5}
            ],
            accessibleCells: [
                {x: 3, y: 4}, {x: 2, y: 4}, {x: 1, y: 4},
                {x: 4, y: 3}, {x: 5, y: 3}, {x: 6, y: 3},
                {x: 4, y: 5}, {x: 5, y: 5}, {x: 6, y: 5},
                {x: 4, y: 6}, {x: 5, y: 6}, {x: 6, y: 6},
                {x: 7, y: 4}, {x: 8, y: 4}, {x: 4, y: 4}, {x: 6, y: 4}
            ]
        },
        5: {
            title: "Canyon do Espelho d'Água",
            description: "Desça os cânions em busca de água",
            grid: { width: 10, height: 10 },
            inicio: { x: 6, y: 7 },
            fim: { x: 1, y: 3 },
            itens: [
                {x: 4, y: 5}, {x: 5, y: 5}, 
                {x: 4, y: 7}, {x: 5, y: 3}
            ],
            obstaculos: [
                {x: 3, y: 3}, {x: 6, y: 4},
                {x: 3, y: 5}, {x: 4, y: 6}, 
                {x: 6, y: 6}, {x: 7, y: 5}
            ],
            accessibleCells: [
                {x: 6, y: 7}, {x: 5, y: 7}, {x: 4, y: 7},
                {x: 3, y: 7}, {x: 2, y: 7}, {x: 2, y: 6},
                {x: 2, y: 5}, {x: 2, y: 4}, {x: 3, y: 4},
                {x: 4, y: 5}, {x: 5, y: 5}, {x: 6, y: 5},
                {x: 5, y: 3}, {x: 4, y: 3}, {x: 3, y: 3},
                {x: 2, y: 3}, {x: 1, y: 3}, {x: 5, y: 6},
                {x: 4, y: 6}, {x: 5, y: 4}, {x: 4, y: 4},
                {x: 7, y: 6}, {x: 7, y: 7}, {x: 3, y: 6},
            ]
        },
        6: {
            title: "Desafio do Planalto",
            description: "Prova final no coração do Brasil",
            grid: { width: 10, height: 10 },
            inicio: { x: 4, y: 7 },
            fim: { x: 1, y: 4 },
            itens: [
                {x: 3, y: 6}, {x: 5, y: 6}, 
                {x: 6, y: 5}, {x: 7, y: 4},
                {x: 2, y: 6}, {x: 1, y: 5}
            ],
            obstaculos: [
                {x: 3, y: 4}, {x: 7, y: 4},
                {x: 3, y: 5}, {x: 3, y: 6}, 
                {x: 5, y: 6}, {x: 5, y: 7}, {x: 7, y: 3},
            ],
            accessibleCells: [
                {x: 4, y: 7}, {x: 3, y: 7}, {x: 2, y: 7}, 
                {x: 1, y: 6}, {x: 1, y: 5}, {x: 1, y: 4}, 
                {x: 2, y: 4}, {x: 1, y: 7}, {x: 6, y: 4},
                {x: 2, y: 5}, {x: 3, y: 6}, {x: 4, y: 6}, 
                {x: 2, y: 6}, {x: 5, y: 6}, {x: 6, y: 5},
                {x: 6, y: 6}, {x: 7, y: 6}, {x: 7, y: 5},  
                {x: 5, y: 5}, {x: 4, y: 5}, {x: 3, y: 5},
                {x: 3, y: 4}, {x: 4, y: 4}, {x: 5, y: 4}, 
                {x: 7, y: 4}
            ]
        }
    }
};