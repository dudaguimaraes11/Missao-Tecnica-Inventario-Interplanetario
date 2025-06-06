// 01. Um item duplicado foi detectado no final do inventário Alpha. Remova a cópia.

let inventarioAlpha = [
    ["Cristal Rubion", "Plutão", 4500],
    ["Cápsula de Éter", "Júpiter", 7800],
    ["Nanofibra Luminosa", "Saturno", 12000],
    ["Minério Dourado", "Marte", 8500],
    ["Flor de Andrômeda", "Andrômeda", 13000],
    ["Ampulheta Galáctica", "Vênus", 2200],
    ["Fóssil Estelar", "Lua", 9000],
    ["Orbe do Caos", "Netuno", 9100],
    ["Lente do Vazio", "Buraco Negro X-1", 14300],
    ["Chave de Fóton", "Sol", 2300],
    ["Esfera Sombria", "Nêmesis", 13400],
    ["Granada de Íons", "Marte", 4100],
    ["Tecido Estelar", "Urano", 5300],
    ["Engrenagem Sombria", "Plutão", 6600],
    ["Fragmento Prismático", "Kepler-22b", 6400],
    ["Núcleo de Plasma", "Kepler-452b", 9100],
    ["Anel de Chronos", "Terra", 4900],
    ["Bateria Quântica", "Terra", 4000],
    ["Areia do Tempo", "Terra", 3100],
    ["Escudo de Luz", "Vênus", 4700],
    ["Catalisador Estelar", "Sirius", 12500],
    ["Pó de Cometa", "Netuno", 3000],
    ["Relógio Quântico", "Terra", 5000],
    ["Vórtice Gravitacional", "Saturno", 8800],
    ["Cristal Ômega", "Andrômeda", 13900],
    ["Cristal Ômega", "Andrômeda", 13900]
  ];

  
let itemRemovido = inventarioAlpha.pop();

console.log("Após a remoção da cópia:", inventarioAlpha);
console.log("Item removido:", itemRemovido);

// 2. Um artefato obsoleto foi removido do final da lista Beta após avaliação técnica.

let inventarioBeta = [
    ["Lâmina Solar", "Mercúrio", 6700],
    ["Cometa Engarrafado", "Netuno", 7600],
    ["Relíquia de Zordon", "Elysium", 25000],
    ["Pó Lunar", "Lua", 2900],
    ["Nevoeiro Encapsulado", "Júpiter", 3800],
    ["Chip de Matéria", "Ceres", 4100],
    ["Chave de Portais", "Júpiter", 5900],
    ["Globo de Plasma", "Terra", 7200],
    ["Mapa Estelar", "Vênus", 2100],
    ["Pedra Temporal", "Lua", 7800],
    ["Lanterna Estelar", "Sol", 3200],
    ["Fragmento de Eclipse", "Eclipse E-9", 8300],
    ["Ponte de Gelo", "Hoth", 3900],
    ["Fluido de Saturno", "Saturno", 4400],
    ["Fenda de Tempo", "Marte", 8700],
    ["Condutor Fotônico", "Sol", 3600],
    ["Memória Galáctica", "Terra", 5500],
    ["Livro de Nebulosa", "Andrômeda", 9200],
    ["Túnel Quântico", "Netuno", 4100],
    ["Canhão de Luz", "Vênus", 6800],
    ["Orbe Incandescente", "Sol", 9300],
    ["Matriz de Propulsão", "Vênus", 4500],
    ["Partícula Livre", "Urano", 5400],
    ["Capa de Invisibilidade", "Terra", 3900],
    ["Terminal de Dobra", "Alpha Centauri", 10500]
  ];
  
let artefatoRemovido = inventarioBeta.pop();

console.log("Após a remoção da cópia:", inventarioBeta);
console.log("Artefato obsoleto removido após avaliação técnica:", artefatoRemovido);

// 3. Três novos artefatos da Terra foram entregues à nave Alpha. Adicione-os ao final.

inventarioAlpha.push(["Cristal azul", "Terra", 4600], ["Máquina Quântica", "Terra", 9000], ["Relógio de plasma", "Terra", 3090]);
console.log("Inventário atualizado com três novos artefatos entregues à nave Alpha:", inventarioAlpha);

// 4. Dois artefatos especiais de Kepler foram coletados e adicionados à nave Beta.

inventarioBeta.push(["Partícula de luz azul", "Kepler", 8600], ["Pó Solar", "Kepler", 3820], ["Orbe Temporal", "kepler", 5700]);
console.log("Inventário atualizado com dois novos artefatos coletados de Kepler entregues à nave Beta:", inventarioBeta);

// 5. Um item da Alpha precisa aparecer no topo da lista para ser destacado na vitrine.

let itemDestacado = inventarioAlpha [14]; 
inventarioAlpha.unshift(itemDestacado); 
inventarioAlpha.splice (15,1); 
console.log ("Inventário com item destacado:" , inventarioAlpha);

// 6. Um item da Beta deve ser promovido para o início da lista para estudo prioritário.

let itemPrioritario = inventarioBeta[5];  
inventarioBeta.unshift(itemPrioritario); 
inventarioBeta.splice (6,1); 
console.log ("Inventário com item prioritário no início:" , inventarioBeta);

// 7. Um artefato incorreto foi inserido no topo da Alpha por engano. Ele deve ser excluído.

let artefatoExcluido = inventarioAlpha.shift();

console.log("Inventário corrigido após remoção de elemento incorreto:", inventarioAlpha);

console.log("Artefato removido:", artefatoExcluido);

// 8. O primeiro item da Beta pertence a um museu e deve ser removido.

let primeiroElementoExcluido = inventarioBeta.shift();

console.log("Inventário corrigido após remoção do item que pertence a um museu :", inventarioBeta);

console.log("Item removido:", primeiroElementoExcluido);

// 12. Crie um texto com os nomes dos 10 primeiros itens da Beta, separados por vírgulas.

console.log(`Os 10 primeiros itens do Inventário Beta (índices 0 a 11): ${inventarioBeta.slice(0, 10)}`);

// 13. Gere uma nova lista com os 5 primeiros itens da nave Beta para inspeção.

let novoInventario = inventarioBeta.splice(0, 5); 
console.log (`Novo inventário para inspeção com os 5 primeiros itens do Inventário Beta`, novoInventario)

// 14. Separe os 10 últimos itens do inventário Alpha para estudo temporal.

console.log(`Os 10 últimos itens do Inventário Alpha para estudo temporal: ${inventarioAlpha.slice(17, 28)}`);

// 15. O quinto item da Alpha foi substituído por uma versão mais moderna. Atualize.

let elementoAlterado = inventarioAlpha.splice(5, 1, ["Ampulheta Galáctica 2.0", "Vênus", 2200]);

console.log(`Inventário após a substituição: ${inventarioAlpha.join(', ')}`);
console.log(`Elementos removido e alterado: ${elementoAlterado.join(', ')}`);

// 16. Dois itens no meio do inventário Beta foram contaminados e precisam ser removidos

inventarioBeta.splice(4, 2); 
console.log(`Novo inventário:`, inventarioBeta);


// 17. Unifique os inventários Alpha e Beta em uma única estrutura.

console.log(`Inventários Alpha e Beta combinados: ${inventarioAlpha.concat(inventarioBeta)}`);

// 18. Junte os cinco primeiros itens de cada nave em uma nova vitrine de destaques.

let novoInventarioBeta = inventarioBeta.splice(0, 5); 
let novoInventarioAlpha = inventarioAlpha.splice(0,5); 

console.log(`Nova vitrine de destaques: ${novoInventarioAlpha.concat(novoInventarioBeta)}`);

// 26. Inverta a ordem dos 15 primeiros itens da Alpha como simulação de viagem no tempo

let inventarioAlphaInvertido = inventarioAlpha.slice(0,16); 
let ultimosItens = inventarioAlpha.slice(17, 28);
console.log("Inventário invertido:", inventarioAlphaInvertido.reverse()); 
console.log(`Inventário Alpha com os 15 primeiros itens invertidos: ${inventarioAlphaInvertido.concat(ultimosItens)}`);
