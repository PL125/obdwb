//Capa
nomeCarga = `Manual Carga -  OBD0052<br />Reset ECU Denso - Toyota Corolla`;
revCarga = `Rev. 1`;
dataManual = `Março 2016`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/conEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Reset da ECU Denso.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `Toyota`,
model: `Corolla 1.6 16V`,
years: `2004 a 2008`
},
{
manufacturer: `Toyota`,
model: `Corolla 1.8 16V`,
years: `2004 a 2008`
},
];
applicationObs = ``;
applicationObs += createObs(undefined, undefined, undefined);




resources = [
{title: `Acessórios utilizados:`, 
description: ``, 
ballon: `Fonte de alimentação. Necessária para utilizar o OBDMap em bancada.`, 
image: `/images/Acessórios/Fonte de Alimentacao.jpg`},

{title: ``, 
description: ``, 
ballon: `Pinça soic 8`, 
image: `/images/Acessórios/Pinça SOIC8.jpg`},

{title: `Localizando a ECU do veículo`, 
description: ``, 
ballon: `A tomada de diagnóstico do veículo fica localizada na área L4.`, 
image: `/images/Tomada de Diagnostico/Carro/I4.jpg`},

{title: `Localizando e conectando a pinça soic na memória:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0052 - Reset Denso Corolla Toyota/Localizando a memória.jpg`},

{title: ``, 
description: ``, 
ballon: `Conectando a pinça na memória.`, 
image: `/images/Funções Específicas/OBD0052 - Reset Denso Corolla Toyota/Conectando a pinça.jpg`},
];
instruction = [];
lblStep = "Passo";
lblCause = "Causas Prováveis:";
lblSolution = "Soluções:";
lblSummary = "Sumário";
lblErrorMessage = "Mensagens de erros";

obdmap = false;
services = 
[
{title: `Realizando o Reset da ECU`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Toyota`], help: `Tecle OK`, menu: 1000},
{lines: [`Corola`], help: `Tecle OK`, menu: 1000},
{lines: [`Emparelhamento`], help: `Tecle OK`, menu: 1000},
{lines: [`Denso`], help: `Tecle OK`, menu: 1000},
{lines: [`Reset da ECU`], help: `Tecle OK`, menu: 1000},
{lines: [
`Conecte&nbsp;a&nbsp;&nbsp;pinça`,
`na&nbsp;memória&nbsp;93C56`,
`segundo&nbsp;o&nbsp;manual`,
`&lt;OK&gt;`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Aguarde...`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Operação`,
`Concluida!`,
`<br />`,
],
help: `Operação concluída com sucesso.`
},
]}];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [
{ label: `Pinca invertida! Verifique...`,
screens: [
`&nbsp;`,
`Pinça&nbsp;invertida!`,
`Verifique...`,
`<br />`,
],
causes: [
`A pinça foi conectada invertida na memória, ou seja, o pino 1 da pinça não coincide com o pino 1 da memória (o pino 1 fica do lado vermelho do cabo).`,`Memória ou ECU com problema.`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória,`,`Conferir bom estado da ECU e memória.`,]
},
{ label: `Erro na Gravacao!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na`,
`Gravação!`,
`<br />`,
],
causes: [
`Mau contato da pinça com a memória,`,`Mau contato da pinça com o OBDMap,`,`Memória ou módulo com problema,`,`A pinça foi conectada em outro componente,`,`Os terminais da memória ou da própria pinça podem estar com resina ou sujeira.`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória,`,`Conferir se os parafusos que prendem a pinça no OBDMap estão bem fixos,`,`Conferir bom estado da ECU e memória,`,`Conferir se os terminais da memória e da pinça estão limpos, sem resina ou sujeira.`,]
},
{ label: `Curto! Verifique...`,
screens: [
`&nbsp;`,
`Curto!`,
`Verifique...`,
`<br />`,
],
causes: [
`Mau contato na pinça com a memória,`,`Módulo com problema,`,`A pinça foi conectada em outro componente.`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória,`,`Conferir bom estado da ECU e memória.`,]
},
{ label: `Erro na leitura!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na`,
`leitura!`,
`<br />`,
],
causes: [
`Mau contato da pinça com a memória,`,`Mau contato da pinça ou cabo MCU com o OBDMap,`,`Módulo com problema,`,`A pinça foi conectada em outro componente,`,`Os terminais da memória ou da própria pinça podem estar com resina ou sujeira.`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória,`,`Conferir se os parafusos que prendem a pinça ou o cabo MCU no OBDMap estão bem fixos,`,`Conferir bom estado da ECU e memória,`,`Conferir se os terminais da memória e da pinça estão limpos, sem resina ou sujeira.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
