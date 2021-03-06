//Capa
nomeCarga = `Manual Carga -  OBD0150<br />Leitura de senha Bosch ME 7.4.9 (Peugeot 206 e 307) via pinça`;
revCarga = `Rev. 3`;
dataManual = `Junho 2018`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/conEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Leitura de senha de 4 dígitos da ECU ME 7.4.9 via pinça.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `Peugeot`,
model: `206 1.4 16V`,
years: `2008 a 2012`
},
{
manufacturer: `Peugeot`,
model: `206 1.6 16V`,
years: `2008 a 2012`
},
{
manufacturer: `Peugeot`,
model: `207 1.4 16V`,
years: `2008 a 2012`
},
{
manufacturer: `Peugeot`,
model: `207 1.6 16V`,
years: `2008 a 2012`
},
{
manufacturer: `Peugeot`,
model: `307 1.4 16V`,
years: `2008 a 2012`
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

{title: `Identificando e desmontando a ECU ME 7.4.9:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0150 Leitura de senha Bosch ME 7.4.9 (Peugeot 206 e 307)/Identificando a ECU 1.jpg`},

{title: ``, 
description: ``, 
ballon: `Utilize uma chave torx para retirar os parafusos fixadores que prendem a tampa da ECU.`, 
image: `/images/Funções Específicas/OBD0150 Leitura de senha Bosch ME 7.4.9 (Peugeot 206 e 307)/Identificando a ECU 2.jpg`},

{title: ``, 
description: ``, 
ballon: `Com o auxílio de uma chave de fenda, faça uma alavanca para ter acesso à placa.`, 
image: `/images/Funções Específicas/OBD0150 Leitura de senha Bosch ME 7.4.9 (Peugeot 206 e 307)/Identificando a ECU 3.jpg`},

{title: `Localizando e conectando a pinça na memória 95320:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0150 Leitura de senha Bosch ME 7.4.9 (Peugeot 206 e 307)/Localizando a memória 95320 1.jpg`},

{title: ``, 
description: ``, 
ballon: `O pino 1 da pinça deve coincidir com o pino 1 da memória.`, 
image: `/images/Funções Específicas/OBD0150 Leitura de senha Bosch ME 7.4.9 (Peugeot 206 e 307)/Localizando a memória 95320 2.jpg`},

{title: `Todos os acessórios conectados:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0150 Leitura de senha Bosch ME 7.4.9 (Peugeot 206 e 307)/Todos os acessórios conectados.jpg`},
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
{title: `Realizando a leitura de senha via pinça:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Peugeot`], help: `Tecle OK`, menu: 1000},
{lines: [`206`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`BSI - 1`], help: `Tecle OK`, menu: 1000},
{lines: [`Bosch Me7.4.9`], help: `Tecle OK`, menu: 1000},
{lines: [`Leitura de senha`], help: `Tecle OK`, menu: 1000},
{lines: [
`Conecte&nbsp;a&nbsp;&nbsp;pinça`,
`na&nbsp;memória&nbsp;95320`,
`segundo&nbsp;o&nbsp;manual`,
`&lt;OK&gt;`,
],
help: `Tecle OK`
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
`Senha:&nbsp;&nbsp;****`,
`<br />`,
`<br />`,
],
help: `Anote a senha`
},
]}];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [
{ label: `Pinca invertida! Verifique...`,
screens: [
`&nbsp;`,
`Pinça&nbsp;invertida!`,
`<br />`,
`<br />`,
],
causes: [
`A pinça realmente foi conectada invertida na memória, ou seja, o pino 1 da pinça não coincide com o pino 1 da memória (o pino 1 fica do lado vermelho do cabo).`,],
solutions: [
`Conferir a correta posição da pinça na memória.`,]
},
{ label: `Curto! Verifique...`,
screens: [
`&nbsp;`,
`Curto!`,
`Verifique...`,
`<br />`,
],
causes: [
`A pinça não foi conectada corretamente,`,`A ECU ou memória está com problema.`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória.`,]
},
{ label: `Arquivo da ECU Invalido!`,
screens: [
`&nbsp;`,
`Arquivo&nbsp;da`,
`ECU&nbsp;Inválido!`,
`<br />`,
],
causes: [
`A ECU está com o arquivo corrompido.`,],
solutions: [
]
},
{ label: `Erro na leitura!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na`,
`leitura!`,
`<br />`,
],
causes: [
`Mau contato na pinça com a memória,`,`Mau contato da pinça com o OBDMap,`,`ECU ou memória com problema.`,],
solutions: [
`Verificar a conexão da pinça na memória,`,`Verificar se os parafusos que prendem a pinça no OBDMap estão bem fixos.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
