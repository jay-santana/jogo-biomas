// scripts/levels/amazon-levels.js
const amazonLevels = {
    biome: "amazon",
    name: "Amazônia",
    colorPalette: {
        path: '#8DB600',
        obstacle: '#3D550C', 
        start: '#4CAF50',
        end: '#2196F3', 
        item: '#FFD700', 
        blocked: '#1e3f1e'
    },
    levels: {
        1: {
            title: "Rio Amazonas",
            description: "Navegue pelas águas do grande rio",
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
            title: "Floresta Densa",
            description: "Encontre o caminho na vegetação fechada",
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
            title: "Território Indígena",
            description: "Respeite as terras dos povos originários",
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
            title: "Várzea",
            description: "Atravesse a planície alagada",
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
            title: "Coração da Amazônia",
            description: "Desafio final na maior floresta tropical",
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