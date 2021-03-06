//Capa
nomeCarga = `Manual Carga -  OBD0061<br />FORD PATS DIESEL V2 (chaves e casamento)`;
revCarga = `Rev. 1`;
dataManual = `Maio 2017`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/conEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Apagar todas as chaves via diagnóstico.`,
`Adicionar até cinco transponders no mesmo veículo via procedimento, utilizando o transponder ID4D.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `Ford`,
model: `F-150`,
years: `2007 a 2010`
},
{
manufacturer: `Ford`,
model: `F-250`,
years: `2007 a 2010`
},
{
manufacturer: `Ford`,
model: `F-350`,
years: `2007 a 2010`
},
];
applicationObs = ``;
applicationObs += createObs(`Observação: A aplicação só é possível em veículos com bomba elétrica.`, undefined, undefined);




resources = [
{title: `Acessórios utilizados:`, 
description: ``, 
ballon: `Adaptador A1.`, 
image: `/images/Connect/Acessórios/Adaptador A1.jpg`},

{title: ``, 
description: ``, 
ballon: `Cabo Universal.`, 
image: `/images/Acessórios/Cabo Universal.jpg`},

{title: ``, 
description: ``, 
ballon: `<br />Utilize o cabo universal Connect`, 
image: `/images/Acessórios/Cabo Universal mais Adaptador A1 CONECTADOS.jpg`},

{title: ``, 
description: ``, 
ballon: `Todos os acessórios conectados no OBDMap para o procedimento via diagnose.`, 
image: `/images/Connect/Acessórios/Obdmap mais Cabo Universal mais Adaptador A1 CONECTADOS.jpg`},

{title: `Localizando a tomada de diagnóstico do veículo:`, 
description: `A tomada de diagnóstico dos veículos está localizada na área D6.<br /><br /><br /><br />`, 
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/D6.jpg`},

{title: `Procedimento para adicionar chaves:`, 
description: ``, 
ballon: `1º: Insira a primeira chave na ignição.`, 
image: `/images/Funções Específicas/OBD0061 - Ford PATS Diesel V2/add 1.jpg`},

{title: ``, 
description: ``, 
ballon: `2º: Ligue a ignição.`, 
image: `/images/Funções Específicas/OBD0061 - Ford PATS Diesel V2/add 2.jpg`},

{title: ``, 
description: ``, 
ballon: `3º: Desligue a ignição e remova a primeira chave.`, 
image: `/images/Funções Específicas/OBD0061 - Ford PATS Diesel V2/add 3.jpg`},

{title: ``, 
description: ``, 
ballon: `1º: Insira a segunda chave na ignição.`, 
image: `/images/Funções Específicas/OBD0061 - Ford PATS Diesel V2/add 4.jpg`},

{title: ``, 
description: ``, 
ballon: `2º: Ligue a ignição.`, 
image: `/images/Funções Específicas/OBD0061 - Ford PATS Diesel V2/add 5.jpg`},

{title: ``, 
description: ``, 
ballon: `3º: Desligue a ignição e remova a segunda chave.`, 
image: `/images/Funções Específicas/OBD0061 - Ford PATS Diesel V2/add 6.jpg`},

{title: ``, 
description: ``, 
ballon: `4º: Insira a primeira chave na ignição.`, 
image: `/images/Funções Específicas/OBD0061 - Ford PATS Diesel V2/add 7.jpg`},

{title: ``, 
description: ``, 
ballon: `5º: Ligue a ignição com a primeira chave.`, 
image: `/images/Funções Específicas/OBD0061 - Ford PATS Diesel V2/add 8.jpg`},

{title: ``, 
description: ``, 
ballon: `6º: Desligue a ignição e remova a primeira chave.`, 
image: `/images/Funções Específicas/OBD0061 - Ford PATS Diesel V2/add 9.jpg`},
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
{title: `Apagando todas as chaves:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Ford`], help: `Tecle OK`, menu: 1000},
{lines: [`F250`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Pats 2`], help: `Tecle OK`, menu: 1000},
{lines: [`Diesel Tipo 2`], help: `Tecle OK`, menu: 1000},
{lines: [`By pass`], help: `Tecle OK`, menu: 1000},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave`,
`e&nbsp;tecle&nbsp;OK`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Aguarde:&nbsp;&nbsp;&nbsp;&nbsp;min.`,
`<br />`,
`<br />`,
],
help: `Aguarde aproximadamente 8 minutos.`
},
{lines: [
`&nbsp;`,
`Procedimento&nbsp;Concluído!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `Tecle OK!`
},
]}];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [
{ label: `Erro de Comunicacao!`,
screens: [
`&nbsp;`,
`Erro&nbsp;de&nbsp;Comunicação!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
`Defeito no veículo, parte elétrica,`,`Software do OBDMap desatualizado,`,`Má conexão dos acessórios.`,],
solutions: [
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo universal e adaptador A1,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
