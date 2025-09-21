const pantanalLevels = {
    biome: "pantanal",
    name: "Pantanal",
    colorPalette: {
        path: '#20B2AA',
        start: '#4CAF50',
        blocked: '#3a5a3a'
    },
    levels: {
        1: {
            title: "Rio Paraguai",
            description: "Navegue pelo principal rio pantaneiro",
            grid: { width: 10, height: 12 },
            inicio: {x: 5, y: 4},
            fim: {x: 7, y: 10},
            itens: [{x: 3, y: 5},{x: 7, y: 5},{x: 6, y: 6},
                    {x: 4, y: 8}
            ],
            obstaculos: [{x: 4, y: 5},{x: 4, y: 6}],
            accessibleCells: [
                {x: 3, y: 2}, {x: 4, y: 2}, 
                {x: 5, y: 2}, {x: 6, y: 2},
                {x: 7, y: 2}, {x: 3, y: 3},
                {x: 7, y: 3}, {x: 3, y: 4}, 
                {x: 5, y: 4}, {x: 7, y: 4}, 
                {x: 3, y: 5}, {x: 7, y: 10},
                {x: 5, y: 5}, {x: 6, y: 5},
                {x: 7, y: 5}, {x: 4, y: 5},
                {x: 3, y: 6}, {x: 5, y: 6},
                {x: 6, y: 6}, {x: 7, y: 6},
                {x: 3, y: 7}, {x: 4, y: 7},
                {x: 3, y: 8}, {x: 4, y: 8}, 
                {x: 5, y: 8}, {x: 6, y: 8},
                {x: 7, y: 8}, {x: 7, y: 9}
            ]
        },
        2: {
            title: "Caminho das Capivaras",
            description: "Siga os maiores roedores do mundo",
            grid: { width: 10, height: 12 },
            inicio: {x: 3, y: 4},
            fim: {x: 7, y: 2},
            itens: [{x: 5, y: 3},{x: 7, y: 5},{x: 5, y: 7},
                    {x: 4, y: 9},{x: 6, y: 9}, {x: 5, y: 10}
            ],
            obstaculos: [{x: 4, y: 6},{x: 5, y: 6},
                         {x: 6, y: 6},{x: 4, y: 7},
                         {x: 4, y: 8}
                        ],
            accessibleCells: [
                {x: 5, y: 2}, {x: 6, y: 2}, 
                {x: 7, y: 2}, {x: 5, y: 3},
                {x: 3, y: 4}, {x: 5, y: 4},
                {x: 6, y: 4}, {x: 7, y: 4}, 
                {x: 3, y: 5}, {x: 4, y: 5}, 
                {x: 5, y: 5}, {x: 6, y: 5},
                {x: 7, y: 5}, {x: 4, y: 6},
                {x: 5, y: 6}, {x: 6, y: 6},
                {x: 7, y: 6}, {x: 4, y: 7},
                {x: 5, y: 7}, {x: 6, y: 7},
                {x: 7, y: 7}, {x: 4, y: 8},
                {x: 5, y: 8}, {x: 7, y: 8}, 
                {x: 4, y: 9}, {x: 5, y: 9},
                {x: 6, y: 9}, {x: 7, y: 9},
                {x: 3, y: 10}, {x: 4, y: 10},
                {x: 5, y: 10}
                
            ]
        },
        3: {
            title: "Trilha dos Jacarés",
            description: "Cuidado com os donos das águas",
            grid: { width: 10, height: 12 },
            inicio: { x: 5, y: 5 },
            fim: { x: 5, y: 9 },
            itens: [{x: 4, y: 3}, {x: 8, y: 3}, {x: 2, y: 4},
                    {x: 7, y: 5}, {x: 4, y: 7}
            ],
            obstaculos: [
                {x: 6, y: 3}, {x: 4, y: 5},
                {x: 6, y: 5}, {x: 5, y: 6},
             
            ],
            accessibleCells: [
                {x: 5, y: 2}, {x: 7, y: 2}, 
                {x: 8, y: 2}, {x: 2, y: 3},
                {x: 4, y: 3}, {x: 5, y: 3},
                {x: 6, y: 3}, {x: 7, y: 3},
                {x: 2, y: 3}, {x: 3, y: 4}, 
                {x: 4, y: 4}, {x: 5, y: 4},
                {x: 6, y: 4}, {x: 7, y: 4},
                {x: 2, y: 5}, {x: 3, y: 5}, 
                {x: 4, y: 5}, {x: 5, y: 5},
                {x: 6, y: 5}, {x: 7, y: 5},
                {x: 8, y: 5}, {x: 3, y: 6}, 
                {x: 4, y: 6}, {x: 5, y: 6}, 
                {x: 6, y: 6}, {x: 7, y: 6}, 
                {x: 3, y: 7}, {x: 4, y: 7}, 
                {x: 5, y: 7}, {x: 6, y: 7},
                {x: 5, y: 8}, {x: 5, y: 9}
            ]
        },
        4: {
            title: "Vazante das Ariranhas",
            description: "Desvie das lontras gigantes",
            grid: { width: 10, height: 12 },
            inicio: { x: 2, y: 10 },
            fim: { x: 7, y: 10 },
            itens: [
                {x: 2, y: 3}, {x: 2, y: 4}, 
                {x: 5, y: 2}, {x: 6, y: 3},
                {x: 6, y: 5}
            ],
            obstaculos: [
                {x: 6, y: 2}, {x: 6, y: 4}, 
                {x: 6, y: 6}, {x: 6, y: 8}, {x: 6, y: 10}
            ],
            accessibleCells: [
                {x: 5, y: 1},{x: 6, y: 1}, {x: 7, y: 1},
                {x: 5, y: 2},{x: 6, y: 2}, {x: 7, y: 2},
                {x: 2, y: 3},{x: 3, y: 3}, {x: 5, y: 3},
                {x: 6, y: 3},{x: 7, y: 3}, {x: 2, y: 4},
                {x: 3, y: 4},{x: 4, y: 4}, {x: 5, y: 4},
                {x: 6, y: 4},{x: 7, y: 4}, {x: 4, y: 5}, 
                {x: 5, y: 5},{x: 6, y: 5}, {x: 7, y: 5},
                {x: 4, y: 6},{x: 5, y: 6}, {x: 6, y: 6}, 
                {x: 7, y: 6},{x: 4, y: 7}, {x: 6, y: 7}, 
                {x: 7, y: 7},{x: 4, y: 8}, {x: 6, y: 8}, 
                {x: 7, y: 8},{x: 3, y: 9}, {x: 4, y: 9},
                {x: 6, y: 9},{x: 7, y: 9}, {x: 2, y: 10}, 
                {x: 3, y: 10},{x: 6, y: 10},{x: 7, y: 10},
            ]
        },
        5: {
            title: "Baía das Onças-pintadas",
            description: "Entre no território dos grandes felinos",
            grid: { width: 10, height: 12 },
            inicio: { x: 7, y: 10 },
            fim: { x: 5, y: 10 },
            itens: [
                {x: 8, y: 1}, {x: 8, y: 2}, 
                {x: 2, y: 4}, {x: 3, y: 5},
                {x: 4, y: 5}, {x: 8, y: 6}
            ],
            obstaculos: [
                {x: 3, y: 2}, {x: 5, y: 2}, {x: 7, y: 2},
                {x: 4, y: 4}, {x: 6, y: 4}, {x: 8, y: 4},
                 
            ],
            accessibleCells: [
                {x: 2, y: 1},{x: 3, y: 1},{x: 4, y: 1}, 
                {x: 5, y: 1},{x: 6, y: 1},{x: 7, y: 1},
                {x: 8, y: 1},{x: 2, y: 2},{x: 8, y: 2},
                {x: 2, y: 3},{x: 3, y: 3},{x: 4, y: 3}, 
                {x: 5, y: 3},{x: 6, y: 3},{x: 7, y: 3},
                {x: 8, y: 3},{x: 2, y: 4},{x: 3, y: 4},
                {x: 2, y: 5},{x: 3, y: 5},{x: 4, y: 5}, 
                {x: 5, y: 5},{x: 6, y: 5},{x: 7, y: 5},
                {x: 8, y: 5},{x: 8, y: 6},{x: 4, y: 7}, 
                {x: 5, y: 7},{x: 6, y: 7},{x: 7, y: 7},
                {x: 8, y: 7},{x: 4, y: 8},{x: 7, y: 8},
                {x: 4, y: 9},{x: 5, y: 9},{x: 7, y: 9},
                {x: 5, y: 10}
            ]
        },
        6: {
            title: "Desafio da Nhecolândia",
            description: "Prova final na maior planície alagada",
            grid: { width: 10, height: 12 },
            inicio: { x: 2, y: 1 },
            fim: { x: 4, y: 1 },
            itens: [
                {x: 5, y: 2}, {x: 7, y: 4}, 
                {x: 7, y: 5}, {x: 2, y: 6},
                {x: 2, y: 7}, {x: 4, y: 9}
            ],
            obstaculos: [
                {x: 3, y: 6}, {x: 5, y: 7}
            ],
            accessibleCells: [
                {x: 2, y: 1},{x: 4, y: 1},{x: 5, y: 1},
                {x: 6, y: 1},{x: 7, y: 1},{x: 2, y: 2},
                {x: 5, y: 2},{x: 6, y: 2},{x: 7, y: 2},
                {x: 2, y: 3},{x: 3, y: 3},{x: 4, y: 3},
                {x: 5, y: 3},{x: 7, y: 3},{x: 5, y: 4},
                {x: 7, y: 4},{x: 2, y: 5},{x: 3, y: 5},
                {x: 4, y: 5},{x: 5, y: 5},{x: 6, y: 5},
                {x: 7, y: 5},{x: 8, y: 5},{x: 2, y: 6},
                {x: 3, y: 6},{x: 4, y: 6},{x: 5, y: 6},
                {x: 8, y: 6},{x: 2, y: 7},{x: 3, y: 7},
                {x: 4, y: 7},{x: 5, y: 7},{x: 8, y: 7},
                {x: 4, y: 8},{x: 5, y: 8},{x: 6, y: 8},
                {x: 7, y: 8},{x: 8, y: 8},{x: 2, y: 9},
                {x: 3, y: 9},{x: 4, y: 9},{x: 5, y: 9},
                {x: 3, y: 10},{x: 4, y: 10},{x: 5, y: 10},
            ]
        }
    }
};