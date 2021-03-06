//Capa
nomeCarga = `Manual Carga -  OBD0011<br />L200 HPE`;
revCarga = `Rev. 3`;
dataManual = `Outubro 2016`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/conEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Programação de até 8 chaves via OBD. `,
`É necessário ter em mãos todas as chaves a serem programadas, inclusive as que já estavam programadas. Caso as chaves que já funcionavam no veículo não sejam programadas, elas não funcionarão mais, necessitando fazer a programação novamente. `,
`<obs>`,
`Observação: Após o procedimento a luz do Code deve acender e apagar indicando que a programação foi concluída.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `Mitsubishi`,
model: `L200 2.5 HPE`,
years: `2004 a 2012`
},
];
applicationObs = ``;
applicationObs += createObs(`Atenção: Nem todos os veículos citados acima fazem parte desta carga. Pode haver veículos sem transponder, ou veículos que possuem chave com telecomando. No caso de chave com telecomando, utilizar a carga OBD0208.`, undefined, undefined);




resources = [
{title: ``, 
description: ``, 
ballon: `Utilize o transponder ID4D-60.`, 
image: `/images/Transponders/4D60 Epox - Sem especificação.jpg`},

{title: ``, 
description: ``, 
ballon: `Chave utilizada.`, 
image: `/images/Chaves e Telecomandos/Chave Mitsubishi Seca.jpg`},

{title: `Acessórios utilizados:`, 
description: ``, 
ballon: `<br />Utilize o cabo universal Connect`, 
image: `/images/Acessórios/Cabo Universal mais Adaptador A1 CONECTADOS.jpg`},

{title: ``, 
description: ``, 
ballon: `Todos os acessórios conectados no OBDMap para o procedimento via diagnose.`, 
image: `/images/Connect/Acessórios/Obdmap mais Cabo Universal mais Adaptador A1 CONECTADOS.jpg`},

{title: `Localizando a tomada de diagnóstico no veículo:`, 
description: `A tomada de diagnósticos da L200 fica localizada na área C5.<br />`, 
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/C5.jpg`},
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
{title: `Realizando a programação de chaves`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Mitsubishi`], help: `Tecle OK`, menu: 1000},
{lines: [`L200`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 1`], help: `Tecle OK`, menu: 1000},
{lines: [`Apagar e Programar chaves`], help: `Tecle OK`, menu: 1000},
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
`Aguarde...`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Chave`,
`Programada!`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Programar&nbsp;`,
`mais&nbsp;chaves?`,
`<br />`,
],
help: `Tecle OK para mais chaves ou VOLTA  para sair.`
},
{lines: [
`Insira&nbsp;a&nbsp;próxima`,
`chave&nbsp;em&nbsp;5&nbsp;segundos&nbsp;`,
`&lt;OK&gt;`,
`<br />`,
],
help: `Insira a proxima chave em no máximo 5 segundos. Tecle OK!`
},
{lines: [
`&nbsp;`,
`Número&nbsp;de&nbsp;chaves:`,
`<br />`,
`<br />`,
],
help: `Quantidade de chaves já programadas no sistema. No máximo 8 chaves.`
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
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo universal e adaptador A1,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico, talvez esta carga tenha tido alterações.`,]
},
{ label: `Chave ja esta programada!`,
screens: [
`&nbsp;`,
`Chave&nbsp;ja&nbsp;programada&nbsp;no&nbsp;veiculo&nbsp;`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
`A chave já está programada para o veículo.`,],
solutions: [
``,]
},
{ label: `Erro no Transponder!`,
screens: [
`&nbsp;`,
`Erro&nbsp;no&nbsp;Transponder!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
`O transponder utilizado está incorreto.`,],
solutions: [
`Utilize o transponder correto de acordo com a página X.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
