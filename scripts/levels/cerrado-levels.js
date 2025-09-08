// scripts/levels/cerrado-levels.js
const cerradoLevels = {
    biome: "cerrado",
    name: "Cerrado",
    colorPalette: {
        path: '#D2B48C',
        obstacle: '#8B4513', 
        start: '#4CAF50',
        end: '#2196F3', 
        item: '#FFD700', 
        blocked: '#654321'
    },
    levels: {
        1: {
            title: "Planície do Cerrado",
            description: "Primeira exploração da savana brasileira",
            grid: { width: 10, height: 12 },
            inicio: { x: 2, y: 5 },
            fim: { x: 7, y: 5 },
            itens: [{x: 5, y: 5}],
            obstaculos: [],
            accessibleCells: [
                {x: 3, y: 5}, {x: 4, y: 5}, 
                {x: 5, y: 5}, {x: 6, y: 5}
            ]
        },
        2: {
            title: "Caminho das Queimadas",
            description: "Evite as áreas afetadas pelo fogo",
            grid: { width: 10, height: 12 },
            inicio: { x: 2, y: 5 },
            fim: { x: 7, y: 5 },
            itens: [{x: 4, y: 5}, {x: 5, y: 5}],
            obstaculos: [{x: 3, y: 5}],
            accessibleCells: [
                {x: 3, y: 4}, {x: 4, y: 4}, {x: 5, y: 4},
                {x: 3, y: 6}, {x: 4, y: 6}, {x: 5, y: 6}
            ]
        },
        // níveis 3, 4 e 5 seguindo o mesmo padrão
        3: {
            title: "Chapada dos Veadeiros",
            description: "Explore o planalto central",
            grid: { width: 10, height: 12 },
            inicio: { x: 1, y: 5 },
            fim: { x: 8, y: 5 },
            itens: [{x: 3, y: 5}, {x: 5, y: 5}, {x: 7, y: 5}],
            obstaculos: [{x: 2, y: 5}, {x: 4, y: 5}, {x: 6, y: 5}],
            accessibleCells: [
                {x: 1, y: 4}, {x: 2, y: 4}, {x: 3, y: 4}, {x: 4, y: 4}, {x: 5, y: 4}, {x: 6, y: 4}, {x: 7, y: 4}, {x: 8, y: 4},
                {x: 1, y: 5}, {x: 3, y: 5}, {x: 5, y: 5}, {x: 7, y: 5}, {x: 8, y: 5},
                {x: 1, y: 6}, {x: 2, y: 6}, {x: 3, y: 6}, {x: 4, y: 6}, {x: 5, y: 6}, {x: 6, y: 6}, {x: 7, y: 6}, {x: 8, y: 6}
            ]
        },
        4: {
            title: "Nascentes do Cerrado",
            description: "Proteja as fontes de água",
            grid: { width: 10, height: 12 },
            inicio: { x: 0, y: 0 },
            fim: { x: 9, y: 11 },
            itens: [{x: 3, y: 3}, {x: 6, y: 6}, {x: 2, y: 9}],
            obstaculos: [
                {x: 4, y: 2}, {x: 5, y: 2}, {x: 4, y: 3}, {x: 5, y: 3},
                {x: 1, y: 5}, {x: 2, y: 5}, {x: 7, y: 5}, {x: 8, y: 5},
                {x: 3, y: 8}, {x: 4, y: 8}, {x: 5, y: 8}, {x: 6, y: 8}
            ],
            accessibleCells: [
                // Lista de células acessíveis
            ]
        },
        5: {
            title: "Santuario da Biodiversidade",
            description: "Desafio final no berço das águas",
            grid: { width: 10, height: 12 },
            inicio: { x: 0, y: 6 },
            fim: { x: 9, y: 6 },
            itens: [{x: 2, y: 2}, {x: 5, y: 5}, {x: 7, y: 9}, {x: 3, y: 10}],
            obstaculos: [
                {x: 4, y: 1}, {x: 5, y: 1}, {x: 4, y: 2}, {x: 5, y: 2},
                {x: 1, y: 4}, {x: 2, y: 4}, {x: 7, y: 4}, {x: 8, y: 4},
                {x: 3, y: 7}, {x: 4, y: 7}, {x: 5, y: 7}, {x: 6, y: 7},
                {x: 2, y: 9}, {x: 3, y: 9}, {x: 6, y: 9}, {x: 7, y: 9}
            ],
            accessibleCells: [
                // Lista de células acessíveis
            ]
        }
    }
};