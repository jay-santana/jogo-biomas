// scripts/levels/atlantic-levels.js
const atlanticLevels = {
    biome: "atlantic",
    name: "Mata Atlântica",
    colorPalette: {
        path: '#e9d985',
        obstacle: '#8B4513', 
        start: '#4CAF50',
        end: '#2196F3', 
        item: '#FFD700', 
        blocked: '#3a5a3a'
    },
    levels: {
        1: {
            title: "Floresta Tropical",
            description: "Primeiros passos na Mata Atlântica",
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
            title: "Caminho da Onça-pintada",
            description: "Desvie dos obstáculos da floresta",
            grid: { width: 10, height: 12 },
            inicio: { x: 3, y: 4 },
            fim: { x: 5, y: 6 },
            itens: [{x: 4, y: 5}, {x: 5, y: 5}],
            obstaculos: [{x: 3, y: 5}],
            accessibleCells: [
                {x: 3, y: 4}, {x: 4, y: 4}, {x: 5, y: 4},
                {x: 3, y: 6}, {x: 4, y: 6}, {x: 5, y: 6}
            ]
        },
        3: {
            title: "Trilha do Mico-leão",
            description: "Encontre o caminho entre as árvores",
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
            title: "Cachoeiras da Serra",
            description: "Navegue pelas corredeiras",
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
                // Células acessíveis - seria uma lista completa de todas as células que não são obstáculos
                // Esta é uma versão simplificada
                {x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0}, {x: 3, y: 0}, {x: 6, y: 0}, {x: 7, y: 0}, {x: 8, y: 0}, {x: 9, y: 0},
                {x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1}, {x: 3, y: 1}, {x: 6, y: 1}, {x: 7, y: 1}, {x: 8, y: 1}, {x: 9, y: 1},
                {x: 0, y: 2}, {x: 1, y: 2}, {x: 2, y: 2}, {x: 3, y: 2}, {x: 6, y: 2}, {x: 7, y: 2}, {x: 8, y: 2}, {x: 9, y: 2},
                {x: 0, y: 3}, {x: 1, y: 3}, {x: 2, y: 3}, {x: 3, y: 3}, {x: 6, y: 3}, {x: 7, y: 3}, {x: 8, y: 3}, {x: 9, y: 3},
                // ... continuar para todas as células acessíveis
            ]
        },
        5: {
            title: "Cume da Biodiversidade",
            description: "Desafio final da Mata Atlântica",
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
                // Lista completa de células acessíveis
                // Esta é uma versão simplificada
                {x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0}, {x: 3, y: 0}, {x: 6, y: 0}, {x: 7, y: 0}, {x: 8, y: 0}, {x: 9, y: 0},
                {x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1}, {x: 3, y: 1}, {x: 6, y: 1}, {x: 7, y: 1}, {x: 8, y: 1}, {x: 9, y: 1},
                // ... continuar para todas as células acessíveis
            ]
        }
    }
};