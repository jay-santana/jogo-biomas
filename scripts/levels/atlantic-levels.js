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
            itens: [],
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
            itens: [],
            obstaculos: [],
            accessibleCells: [
                {x: 3, y: 4}, {x: 4, y: 4}, 
                {x: 5, y: 4}, {x: 5, y: 5}
            ]
        },
        3: {
            title: "Trilha do Mico-leão",
            description: "Encontre o caminho entre as árvores",
            grid: { width: 10, height: 12 },
            inicio: { x: 3, y: 6 },
            fim: { x: 6, y: 6 },
            itens: [],
            obstaculos: [],
            accessibleCells: [
                {x: 3, y: 6}, {x: 3, y: 5}, 
                {x: 3, y: 4}, {x: 4, y: 4},
                {x: 5, y: 4}, {x: 6, y: 4},
                {x: 6, y: 5}, {x: 6, y: 6}
            ]
        },
        4: {
            title: "Cachoeiras da Serra",
            description: "Navegue pelas corredeiras",
            grid: { width: 10, height: 12 },
            inicio: { x: 3, y: 5 },
            fim: { x: 7, y: 5 },
            itens: [],
            obstaculos: [],
            accessibleCells: [
                {x: 3, y: 6}, {x: 3, y: 5}, 
                {x: 3, y: 4}, {x: 4, y: 4},
                {x: 5, y: 4}, {x: 6, y: 4},
                {x: 6, y: 5}, {x: 4, y: 6}
            ]
        },
        5: {
            title: "Cume da Biodiversidade",
            description: "Desvie de Obstaculos",
            grid: { width: 10, height: 12 },
            inicio: { x: 3, y: 6 },
            fim: { x: 6, y: 4 },
            itens: [],
            obstaculos: [],
            accessibleCells: [
                {x: 3, y: 5}, {x: 4, y: 5}, 
                {x: 5, y: 5}, {x: 4, y: 4},
                {x: 6, y: 4}, {x: 5, y: 6},
                {x: 6, y: 5},
            ]
        },
        6: {
            title: "Desafio",
            description: "Desafio final da Mata Atlântica",
            grid: { width: 10, height: 12 },
            inicio: { x: 2, y: 4 },
            fim: { x: 6, y: 7 },
            itens: [],
            obstaculos: [],
            accessibleCells: [
                {x: 2, y: 4}, {x: 3, y: 4}, 
                {x: 3, y: 5}, {x: 4, y: 5},
                {x: 4, y: 6}, {x: 5, y: 6},
                {x: 5, y: 7}, {x: 6, y: 7}
            ]
        }
    }
};