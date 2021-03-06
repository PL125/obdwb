//Capa
nomeCarga = "Programação de chaves Ford Pats4 Tipo6 (Fusion 10 - 12)";
revCarga = "Rev. 1";
dataManual = "Maio 2017";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/conEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Programação de chaves para o veículo. `,
`Adiciona chaves para o veículo. `,
`<obs>`,
`Observações: `,
`- No procedimento de programação de chaves todas as chaves existentes são apagadas;`,
`- Ainda no procedimento de programação de chaves, é necessário ter no mínimo duas chaves em mãos.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Ford",
model: "Fusion 2.5",
years: "2010 a 2012"
},
{
manufacturer: "Ford",
model: "Fusion 3.0",
years: "2010 a 2012"
},
];
applicationObs = createObs(undefined, undefined, undefined)



resources = [
{title: "Transponder utilizado:", 
description: "Observações:<br />- Para verificação da dedicação do transponder utilize a carga básica identificar do módulo de transponder;<br />- Para dedicação do transponder utilize a carga OBD0206.<br /><br /><br /><br /><br /><br />", 
ballon: "Utilize um transponder ID 4D63 especial (40 bits).", 
image: "/images/Transponders/ID 4D63 T32 especial.jpg"},

{title: "Acessórios utilizados:", 
description: "", 
ballon: "Usado para realizar o procedimento via diagnóstico.", 
image: "/images/Acessórios/Cabo Universal Mais Adaptador A3 DESCONECTADOS.jpg"},

{title: "", 
description: "", 
ballon: "Todos os acessórios conectados para procedimento via diagnose.", 
image: "/images/Acessórios/Obdmap mais Cabo Universal mais Adaptador A3 CONECTADOS.jpg"},

{title: "Localizando a tomada de diagnóstico no veículo:", 
description: "A tomada de diagnóstico do veículo está localizada na área C5. <br /><br />", 
ballon: "", 
image: "/images/Tomada de Diagnostico/Carro/C5.jpg"},
];
instruction = [];
obdmap = false;
services = 
[
{title: `Realizando a programação de chaves`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Ford`], help: `Tecle OK`, menu: 1000},
{lines: [`Fusion`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Pats 4`], help: `Tecle OK`, menu: 1000},
{lines: [`Tipo 6`], help: `Tecle OK`, menu: 1000},
{lines: [`Apagar e Programar chaves`], help: `Tecle OK`, menu: 1000},

]},{title: `Realizando a adição de chaves`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Ford`], help: `Tecle OK`, menu: 1000},
{lines: [`Fusion`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Pats 4`], help: `Tecle OK`, menu: 1000},
{lines: [`Tipo 6`], help: `Tecle OK`, menu: 1000},
{lines: [`Apagar e Programar chaves`], help: `Tecle OK`, menu: 1000},

]},{title: `Realizando a programação de chaves`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [

]},{title: `Realizando a adição de chaves`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [

]},{title: `Realizando a programação de chaves`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [

]},{title: `Realizando a adição de chaves`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [

]},{title: `Realizando a programação de chaves`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [

]},{title: `Realizando a adição de chaves`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [

]},{title: `Realizando a programação de chaves`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [

]},{title: `Realizando a adição de chaves`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [

]},{title: `Realizando a programação de chaves`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [

]},{title: `Realizando a adição de chaves`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [

]},{title: `Realizando a programação de chaves`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [

]},{title: `Realizando a adição de chaves`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [

]},{title: `Realizando a programação de chaves`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [

]},];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [{ label: `Erro de Comunicacao!`,
screens: [
`&nbsp;`,
`Erro&nbsp;de&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;Comunicacao!`,
`<br />`,
],
causes: [
`Defeito no veículo, parte elétrica, `,`Software do OBDMap desatualizado, `,`Má conexão dos acessórios. `,],
solutions: [
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo universal e adaptador A3,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico.`,``,``,``,]
},

{ label: `Acesso Negado!`,
screens: [
`&nbsp;`,
`Acesso&nbsp;Negado!`,
`<br />`,
`<br />`,
],
causes: [
`Veículo fora da aplicação.`,``,``,``,],
solutions: [
`Verificar aplicação.`,]
},

{ label: `Tempo Excedido!`,
screens: [
`&nbsp;`,
`Tempo&nbsp;`,
`&nbsp;&nbsp;Excedido!`,
`<br />`,
],
causes: [
`O tempo limite de 10 minutos foi esgotado.`,``,``,``,``,``,],
solutions: [
`Repita o procedimento.`,``,``,]
},

{ label: `Erro na Programacao!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na`,
`&nbsp;&nbsp;&nbsp;&nbsp;Programacao!`,
`<br />`,
],
causes: [
`Bateria do veículo está fraca,`,`Veículo fora da aplicação.`,``,``,],
solutions: [
`Conferir se a bateria está carregada,`,`Verificar aplicação.`,``,``,``,]
},

{ label: `Erro no Transponder!`,
screens: [
`&nbsp;`,
`Erro&nbsp;no`,
`&nbsp;&nbsp;&nbsp;&nbsp;Transponder!`,
`<br />`,
],
causes: [
`Transponder inválido. `,`O transponder já se encontra programado e travado. `,`O transponder utilizado não está dedicado para Ford conforme a carga OBD0206 . `,``,],
solutions: [
`Utilize um transponder correto conforme solicitado no manual,`,`Utilize transponder dedicado para Ford novo conforme a carga OBD0206,`,`Utilize a carga OBD0206 para realizar a dedicação do transponder. `,``,]
},

{ label: `Use o cabo CAN ou adap. A3 CAN!`,
screens: [
`&nbsp;`,
`Use&nbsp;o&nbsp;cabo&nbsp;CAN`,
`ou&nbsp;adap.&nbsp;A3&nbsp;CAN!`,
`<br />`,
],
causes: [
`Cabo CAN ou A3 com defeito. `,],
solutions: [
`Contate o suporte técnico. `,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
