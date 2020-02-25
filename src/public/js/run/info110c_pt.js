//Capa
nomeCarga = `Manual Carga -  OBD0110<br />Leitura de Senha do Calculador 2 Renault (95040)`;
revCarga = `Rev. 2`;
dataManual = `Abril 2016`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/conEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Leitura da senha do calculador 2 95040.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `Renault`,
model: `Clio II 1.0 16v`,
years: `2011 a 2012`
},
{
manufacturer: `Renault`,
model: `Clio II 1.6 16v`,
years: `2011 a 2012`
},
{
manufacturer: `Renault`,
model: `Duster`,
years: `2012 a 2012`
},
{
manufacturer: `Renault`,
model: `Logan 1.0 16v`,
years: `2011 a 2012`
},
{
manufacturer: `Renault`,
model: `Logan 1.6 16v`,
years: `2011 a 2013`
},
{
manufacturer: `Renault`,
model: `Sandero 1.6`,
years: `2011 a 2012`
},
];
applicationObs = ``;
applicationObs += createObs(`Observação: Nem todos os veículos relacionados aos anos citados acima possuem o calculador 2 95040. Verifique o modelo da memória do calculador para identificá-la.`, undefined, undefined);




resources = [
{title: `Acessórios utilizados:`, 
description: ``, 
ballon: `Fonte de alimentação. Necessária para utilizar o OBDMap em bancada.`, 
image: `/images/Acessórios/Fonte de Alimentacao.jpg`},

{title: ``, 
description: ``, 
ballon: `Pinça soic 8`, 
image: `/images/Acessórios/Pinça SOIC8.jpg`},

{title: `Localizando o calculador no veículo`, 
description: `O calculador do veículo está localizado na área A4.<br />`, 
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/A4.jpg`},

{title: `Identificando e desmontando o calculador`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0110 Calculador 2 95040/Desmontando o Calculador.jpg`},

{title: ``, 
description: ``, 
ballon: `Localizando as 4 travas que prendem a tampa do calculador.`, 
image: `/images/Funções Específicas/OBD0110 Calculador 2 95040/Localizando as 4 travas.jpg`},

{title: ``, 
description: ``, 
ballon: `Com auxílio de uma chave de fenda, solte as travas da caixa.`, 
image: `/images/Funções Específicas/OBD0110 Calculador 2 95040/solte as travas.jpg`},

{title: `Identificando a memória 95040:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0110 Calculador 2 95040/Localizando a memória 95040.jpg`},

{title: `Removendo a resina dos terminais da memória`, 
description: `Devem-se raspar todos os terminas da memória antes de conectar a pinça, pois se não ocasionará mau contato e consequentemente erro na leitura.`, 
ballon: `Utilize um estilete para remover a resina dos terminais da memória.`, 
image: `/images/Funções Específicas/OBD0110 Calculador 2 95040/Removendo a resina dos terminais da memória.jpg`},

{title: ``, 
description: ``, 
ballon: `Conecte a pinça na memória 95040.`, 
image: `/images/Funções Específicas/OBD0110 Calculador 2 95040/Conecte a pinça na memoria.jpg`},
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
{title: `Realizando a leitura de senha`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Renault`], help: `Tecle OK`, menu: 1000},
{lines: [`Clio`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`UCH-2`], help: `Tecle OK`, menu: 1000},
{lines: [`Tipo 2`], help: `Tecle OK`, menu: 1000},
{lines: [`Leitura de senha`], help: `Tecle OK`, menu: 1000},
{lines: [
`&nbsp;`,
`Conecte&nbsp;a&nbsp;pinça&nbsp;na&nbsp;`,
`memória&nbsp;95040`,
`<br />`,
],
help: `Tecle OK!`
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
`Senha:`,
`************`,
`<br />`,
],
help: `Anote a senha.`
},
]}];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [
{ label: `Curto! Verifique...`,
screens: [
`&nbsp;`,
`Curto!`,
`<br />`,
`<br />`,
],
causes: [
`A pinça não foi conectada corretamente,`,`O Calculador ou memória está com problema.`,``,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória.`,]
},
{ label: `Pinca invertida! Verifique...`,
screens: [
`&nbsp;`,
`Pinça&nbsp;invertida!`,
`<br />`,
`<br />`,
],
causes: [
`A pinça realmente foi conectada invertida,`,`A pinça foi conectada em outro componente,`,`Memória ou Calculador com problema.`,``,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória,`,`Conferir bom estado do Calculador.`,``,]
},
{ label: `Erro na Gravacao!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na`,
`Gravação!`,
`<br />`,
],
causes: [
`Mau contato da pinça com a memória,`,`Mau contato da pinça com o OBDMap,`,`Memória ou módulo com problema,`,`A pinça foi conectada em outro componente, (se existir outro componente SOIC8 na placa)`,`Os terminais da memória ou da própria pinça podem estar com resina ou sujeira.`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória,`,`Conferir se os parafusos que prendem a pinça no OBDMap estão bem fixos,`,`Conferir bom estado do módulo,`,`Conferir se os terminais da memória e da pinça estão limpos, sem resina ou sujeira.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
