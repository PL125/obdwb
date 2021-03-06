//Capa
nomeCarga = `Manual Carga -  OBD0013<br />Hilux Prado (chaves)`;
revCarga = `Rev. 6`;
dataManual = `Novembro 2017`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/obdEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Adicionar chaves no sistema de imobilizador: é necessário ter uma chave válida no veículo.`,
`Apagar chaves: cancela todas as chaves, deixando válida apenas a chave que está na ignição, é necessário ter uma chave válida no veículo.`,
`Reset do imobilizador: reseta o imobilizador cancelando todas as chaves, o tempo para realizar o reset é de aproximadamente 30 minutos.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `Toyota`,
model: `Hilux 2.4`,
years: `2005 a 2008`
},
{
manufacturer: `Toyota`,
model: `Hilux 3.0`,
years: `2006 a 2006`
},
{
manufacturer: `Toyota`,
model: `Hilux SW4 3.0`,
years: `2007 a 2008`
},
{
manufacturer: `Toyota`,
model: `Prado 2.4`,
years: `2005 a 2008`
},
];
applicationObs = ``;
applicationObs += createObs(undefined, undefined, undefined);




resources = [
{title: ``, 
description: ``, 
ballon: `Para os veículos Hilux, SW4 e RAV-4 utilize o transponder ID4D-67G (80bits).`, 
image: `/images/Transponders/Hilux 4D67.jpg`},

{title: `Acessórios utilizados:`, 
description: ``, 
ballon: `Cabo universal + adaptador A1.<br />Para realizar o emparelhamento<br />da BSI.`, 
image: `/images/Acessórios/Cabo Universal mais Adaptador A1 CONECTADOS.jpg`},

{title: ``, 
description: ``, 
ballon: `Todos os acessórios conectados no OBDMap para o procedimento via diagnose.`, 
image: `/images/Acessórios/Obdmap mais Cabo Universal mais Adaptador A1 CONECTADOS.jpg`},

{title: `Localizando a tomada de diagnóstico no veículo:`, 
description: `A tomada de diagnósticos da Hilux e Prado ficam localizadas na área D6.<br />`, 
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/D6.jpg`},
];
instruction = [];
lblStep = "Passo";
lblCause = "Causas Prováveis:";
lblSolution = "Soluções:";
lblSummary = "Sumário";
lblErrorMessage = "Mensagens de erros";

obdmap = true;
services = 
[{title: `Realizando a adição de chaves:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>Toyota`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Toyota`, `>Hilux 05-08`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Hilux 05-08`, `>Prog. chaves?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Use&nbsp;no&nbsp;inicio`,
`uma&nbsp;chave&nbsp;valida`,
`<br />`,
],
help: `Tem que haver uma chave já programada para realizar o procedimento.`
},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;&lt;OK&gt;`,
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
`Remova&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;OK!`,
`<br />`,
],
help: `Desligue, remova a chave e Tecle OK em
no máximo 10 segundos.`
},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;OK!`,
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
`Remova&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;OK!`,
`<br />`,
],
help: `Desligue, remova a chave e Tecle OK em
no máximo 10 segundos.`
},
{lines: [
`&nbsp;`,
`Insira&nbsp;nova`,
`chave&nbsp;e&nbsp;tecle&nbsp;OK`,
`<br />`,
],
help: `Insira, ligue a chave e Tecle OK em no
máximo 10 segundos.`
},
{lines: [
`&nbsp;`,
`Aguarde&nbsp;aprox.`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;01&nbsp;minuto!`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Procedimento`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Concluido!`,
`<br />`,
],
help: `Tecle OK!`
},
]
}, {title: `Realizando o apagamento das chaves`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>Toyota`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Toyota`, `>Hilux 05-08`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Hilux 05-08`, `>Apagar chaves?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Use&nbsp;no&nbsp;inicio`,
`uma&nbsp;chave&nbsp;valida`,
`<br />`,
],
help: `Tem que haver uma chave já programada para realizar o procedimento.`
},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;OK!`,
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
`Remova&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;OK!`,
`<br />`,
],
help: `Desligue, remova a chave e Tecle OK em
no máximo 10 segundos`
},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;OK!`,
`<br />`,
],
help: `Insira, ligue a chave e Tecle OK em no
máximo 10 segundos.`
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
`Remova&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;OK!`,
`<br />`,
],
help: `Desligue, remova a chave e Tecle OK em
no máximo 10 segundos.`
},
{lines: [
`&nbsp;`,
`Procedimento`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Concluido!`,
`<br />`,
],
help: `Tecle OK!`
},
]
}, {title: `Realizando o reset do Imobilizador`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>Toyota`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Toyota`, `>Hilux 05-08`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Hilux 05-08`, `>Resetar?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;OK!`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Aguarde...`,
`Tempo&nbsp;-&nbsp;&nbsp;**&nbsp;min.`,
`<br />`,
],
help: `Aguarde aproximadamente 30 minutos.`
},
{lines: [
`&nbsp;`,
`Procedimento`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Concluido!`,
`<br />`,
],
help: `Tecle OK!`
},
]}
];
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
`Defeito no veículo, parte elétrica,`,`Software do OBDMap desatualizado,`,`Má conexão dos acessórios.`,],
solutions: [
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo universal e adaptador A1,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico, talvez esta carga tenha tido alterações.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
