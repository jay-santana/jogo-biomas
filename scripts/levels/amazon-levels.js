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
            itens: [],
            obstaculos: [{x: 4, y: 6},{x: 6, y: 4}],
            accessibleCells: [
                {x: 3, y: 5}, {x: 4, y: 5}, 
                {x: 5, y: 5}, {x: 6, y: 5},
                {x: 7, y: 5}
            ]
        },
        2: {
            title: "Floresta Densa",
            description: "Encontre o caminho na vegetação fechada",
            grid: { width: 10, height: 12 },
            inicio: { x: 3, y: 4 },
            fim: { x: 5, y: 6 },
            itens: [],
            obstaculos: [{x: 4, y: 5},{x: 6, y: 4}],
            accessibleCells: [
                {x: 3, y: 4}, {x: 4, y: 4}, 
                {x: 5, y: 4}, {x: 5, y: 5},
                {x: 5, y: 6}, 
            ]
        },
        // níveis 3, 4 e 5 seguindo o mesmo padrão
        3: {
            title: "Território Indígena",
            description: "Respeite as terras dos povos originários",
            grid: { width: 10, height: 12 },
            inicio: { x: 7, y: 4 },
            fim: { x: 2, y: 5 },
            itens: [],
            obstaculos: [{x: 5, y: 4},{x: 3, y: 5}],
            accessibleCells: [ 
                {x: 2, y: 4},
                {x: 3, y: 4}, {x: 6, y: 4}, 
                {x: 5, y: 4}, {x: 7, y: 4},
                {x: 2, y: 5}, {x: 3, y: 5},
                {x: 5, y: 5}, {x: 4, y: 5},
                {x: 6, y: 5}, {x: 4, y: 4}
            ]
        },
        4: {
            title: "Várzea",
            description: "Atravesse a planície alagada",
            grid: { width: 10, height: 12 },
            inicio: { x: 3, y: 6 },
            fim: { x: 6, y: 6 },
            itens: [],
            obstaculos: [{x: 4, y: 5},{x: 5, y: 5},
                         {x: 4, y: 6},{x: 5, y: 6}
            ],
            accessibleCells: [
                {x: 3, y: 6}, {x: 3, y: 5}, 
                {x: 3, y: 4}, {x: 4, y: 4},
                {x: 5, y: 4}, {x: 6, y: 4},
                {x: 6, y: 5}, {x: 6, y: 6}
            ]
        },
        5: {
            title: "Coração da Amazônia",
            description: "Desvie de Obstaculos",
            grid: { width: 10, height: 12 },
            inicio: { x: 6, y: 7 },
            fim: { x: 3, y: 4 },
            itens: [],
            obstaculos: [{x: 4, y: 5},{x: 5, y: 5},
                         {x: 4, y: 6},{x: 5, y: 6}, {x: 3, y: 7}
            ],
            accessibleCells: [
                {x: 6, y: 7}, {x: 3, y: 7},
                {x: 3, y: 6}, {x: 3, y: 5}, 
                {x: 3, y: 4}, {x: 4, y: 4},
                {x: 5, y: 4}, {x: 6, y: 4},
                {x: 6, y: 5}, {x: 6, y: 6},
                {x: 4, y: 7}, {x: 5, y: 7}
            ]
        },
        6: {
            title: "Desafio",
            description: "Desafio final na maior floresta tropical",
            grid: { width: 10, height: 12 },
            inicio: { x: 4, y: 8 },
            fim: { x: 2, y: 5 },
            itens: [],
            obstaculos: [{x: 4, y: 5},{x: 6, y: 4},
                         {x: 4, y: 6},, {x: 3, y: 7}, {x: 3, y: 8}, {x: 6, y: 7}, {x: 6, y: 6}
            ],
            accessibleCells: [
                {x: 6, y: 7}, {x: 3, y: 7},
                {x: 3, y: 6}, {x: 3, y: 5}, 
                {x: 3, y: 4}, {x: 4, y: 4},
                {x: 5, y: 4}, {x: 5, y: 3},
                {x: 6, y: 5}, {x: 6, y: 6},
                {x: 4, y: 7}, {x: 5, y: 7},
                {x: 5, y: 6}, {x: 5, y: 5},
                {x: 7, y: 5}, {x: 7, y: 4},
                {x: 7, y: 3}, {x: 6, y: 3},
            ]
        }
    }
};