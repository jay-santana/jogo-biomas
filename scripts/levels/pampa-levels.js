const pampaLevels = {
    biome: "pampa",
    name: "Pampa",
    colorPalette: {
        path: '#71cef3ff',
        start: '#4CAF50',
        blocked: '#729772ff'
    },
    levels: {
        1: {
            title: "Caminho dos Campos",
            description: "Inicie sua jornada pelas vastas planícies pampeanas",
            grid: { width: 10, height: 10 },
            inicio: {x: 3, y: 2},
            fim: {x: 7, y: 7},
            fruits: [{x: 7, y: 3},{x: 6, y: 4},{x: 4, y: 6}],
            obstaculos: [],
            accessibleCells: [
                {x: 7, y: 3}, {x: 3, y: 3}, {x: 3, y: 4}, {x: 4, y: 3},
                {x: 5, y: 3}, {x: 6, y: 3}, {x: 7, y: 3}, {x: 5, y: 3},
                {x: 6, y: 4}, {x: 7, y: 4}, {x: 3, y: 5},
                {x: 3, y: 6}, {x: 5, y: 6}, {x: 6, y: 6}, {x: 7, y: 6}, {x: 7, y: 6}
            ]
        },
        2: {
            title: "Trilha do Gado Xucro",
            description: "Siga os rastros dos cavalos selvagens do pampa",
            grid: { width: 10, height: 10 },
            inicio: {x: 2, y: 2},
            fim: {x: 6, y: 1},
            fruits: [{x: 6, y: 3},{x: 4, y: 5},
                    {x: 3, y: 7},{x: 5, y: 7},
            ],
            obstaculos: [{x: 4, y: 4},{x: 5, y: 4}],
            accessibleCells: [
                {x: 6, y: 2},
                {x: 2, y: 3}, {x: 3, y: 3}, {x: 4, y: 3}, {x: 5, y: 3}, {x: 6, y: 3},
                {x: 3, y: 4}, {x: 4, y: 4}, {x: 5, y: 4}, {x: 6, y: 4},
                {x: 3, y: 5}, {x: 4, y: 5}, {x: 5, y: 5}, {x: 6, y: 5},
                {x: 3, y: 6}, {x: 4, y: 6}, {x: 6, y: 6},
                {x: 3, y: 7}, {x: 4, y: 7}, {x: 5, y: 7}, {x: 6, y: 7},
            ]
        },
        3: {
            title: "Rota dos Pampas",
            description: "Atravesse as coxilhas e campos nativos",
            grid: { width: 10, height: 10 },
            inicio: { x: 5, y: 4 },
            fim: { x: 2, y: 7 },
            fruits: [{x: 4, y: 2}, {x: 8, y: 2}, {x: 2, y: 4},
                    {x: 7, y: 4}, {x: 4, y: 6}
            ],
            obstaculos: [{x: 6, y: 2}, {x: 4, y: 4}, {x: 6, y: 4}, {x: 5, y: 5}],
            accessibleCells: [
                {x: 5, y: 2}, {x: 7, y: 2}, {x: 8, y: 2}, {x: 8, y: 3},
                {x: 4, y: 3}, {x: 5, y: 3}, {x: 6, y: 3}, {x: 7, y: 3},
                {x: 3, y: 4}, {x: 4, y: 4}, {x: 5, y: 4}, {x: 6, y: 4}, {x: 7, y: 4},
                {x: 2, y: 5}, {x: 3, y: 5}, {x: 4, y: 5}, {x: 5, y: 5}, {x: 6, y: 5}, {x: 7, y: 5},
                {x: 3, y: 6}, {x: 4, y: 6}, {x: 5, y: 6}, {x: 6, y: 6}, {x: 7, y: 6},
                {x: 3, y: 7}, {x: 4, y: 7}, 

            ]
        },
        4: {
            title: "Vereda dos Bugios",
            description: "Desvie pelos campos de capim nativo",
            grid: { width: 10, height: 10 },
            inicio: { x: 2, y: 7 },
            fim: { x: 7, y: 7 },
            fruits: [{x: 2, y: 2}, {x: 2, y: 3}, {x: 6, y: 2}, {x: 6, y: 4}],
            obstaculos: [{x: 6, y: 3}, {x: 6, y: 5}, {x: 6, y: 7}],
            accessibleCells: [
                {x: 2, y: 2}, {x: 3, y: 2}, {x: 5, y: 2}, {x: 6, y: 2}, {x: 7, y: 2},
                {x: 2, y: 3}, {x: 3, y: 3}, {x: 4, y: 3}, {x: 5, y: 3}, {x: 6, y: 3}, {x: 7, y: 3},
                {x: 4, y: 4}, {x: 5, y: 4}, {x: 6, y: 4}, {x: 7, y: 4},
                {x: 4, y: 5}, {x: 6, y: 5}, {x: 7, y: 5}, {x: 5, y: 5},
                {x: 4, y: 6}, {x: 6, y: 6}, {x: 7, y: 6}, {x: 5, y: 6},
                {x: 3, y: 7}, {x: 4, y: 7}, {x: 6, y: 7}, {x: 7, y: 7},
                {x: 2, y: 7}
            ]

        },
        5: {
            title: "Campo dos Venados",
            description: "Entre no território dos veados-campeiros",
            grid: { width: 10, height: 10 },
            inicio: { x: 7, y: 8 },
            fim: { x: 1, y: 7 },
            fruits: [{x: 3, y: 3}, {x: 2, y: 4}, {x: 3, y: 5}, {x: 4, y: 5}, {x: 8, y: 6}],
            obstaculos: [{x: 4, y: 4}, {x: 6, y: 4}, {x: 8, y: 4}],
            accessibleCells: [
                {x: 2, y: 3}, {x: 3, y: 3}, {x: 4, y: 3}, {x: 5, y: 3}, {x: 6, y: 3}, 
                {x: 7, y: 3}, {x: 8, y: 3}, {x: 2, y: 4}, {x: 3, y: 4}, {x: 8, y: 7}, {x: 7, y: 7}, {x: 2, y: 7},
                {x: 2, y: 6}, {x: 2, y: 5}, {x: 3, y: 5}, {x: 4, y: 5}, {x: 5, y: 5}, {x: 6, y: 5}, {x: 7, y: 5},
                {x: 8, y: 5}, {x: 8, y: 6}, {x: 1, y: 7}, 
            ]
        },
        6: {
            title: "Desafio da Coxilha",
            description: "Prova final nas elevações suaves do pampa gaúcho",
            grid: { width: 10, height: 10 },
            inicio: { x: 2, y: 1 },
            fim: { x: 4, y: 1 },
            fruits: [{x: 5, y: 2}, {x: 7, y: 4}, {x: 7, y: 5}, {x: 2, y: 6}, {x: 2, y: 7}],
            obstaculos: [{x: 3, y: 6}, {x: 5, y: 7}],
            accessibleCells: [
                {x: 2, y: 1}, {x: 4, y: 1}, {x: 5, y: 1}, {x: 6, y: 1}, {x: 7, y: 1},
                {x: 2, y: 2}, {x: 5, y: 2}, {x: 6, y: 2}, {x: 7, y: 2}, {x: 5, y: 5},
                {x: 2, y: 3}, {x: 3, y: 3}, {x: 4, y: 3}, {x: 5, y: 3}, {x: 7, y: 3},
                {x: 5, y: 4}, {x: 7, y: 4}, {x: 2, y: 5}, {x: 3, y: 5}, {x: 4, y: 5},  
                {x: 2, y: 6}, {x: 3, y: 6}, {x: 4, y: 6}, {x: 5, y: 6}, 
                {x: 2, y: 7}, {x: 3, y: 7}, {x: 4, y: 7}, {x: 5, y: 7}, 
                {x: 6, y: 5}, {x: 7, y: 5}, 
            ]
        }
    }
};