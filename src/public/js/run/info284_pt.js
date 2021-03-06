//Capa
nomeCarga = `Manual Carga -  OBD0284<br />OBD0284 - Leitura de senha e programação de chaves de presença Kia Hyundai keyless2 (Sportage Santa Fé)	`;
revCarga = `Rev. 1`;
dataManual = `Novembro 2019`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/obdEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Leitura do número de chaves de presença programadas no veículo.`,
` Programação de até 3 chaves de presença para os veículos contidos na aplicação.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `Kia`,
model: `Sportage 2.0`,
years: `2015 a 2016`
},
{
manufacturer: `Hyundai`,
model: `Santa Fe 3.3`,
years: `2014 a 2015`
},
];
applicationObs = ``;
applicationObs += createObs(undefined, undefined, undefined);




resources = [
{title: `Chave de presença utilizada`, 
description: ``, 
ballon: `Utilize a chave de<br />presença original<br />Hyundai/KIA`, 
image: `/images/Chaves e Telecomandos/chave-presenca-hyundai-santa-fe-azera-codificaco-gratis-sp-D_NQ_NP_937744-MLB27893848344_082018-F.jpg`},

{title: `Acessórios utilizados:`, 
description: ``, 
ballon: `Utilize o cabo universal + adaptador A3.`, 
image: `/images/Acessórios/Cabo Universal Mais Adaptador A3 DESCONECTADOS.jpg`},

{title: ``, 
description: ``, 
ballon: `Todos os acessórios conectados para procedimento via diagnose.`, 
image: `/images/Acessórios/Obdmap mais Cabo Universal mais Adaptador A3 CONECTADOS.jpg`},

{title: `Localizando a tomada de diagnóstico no veículo:`, 
description: ``, 
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/A5.jpg`},
];
instruction = [];
lblStep = "Passo";
lblCause = "Causas Prováveis:";
lblSolution = "Soluções:";
lblSummary = "Sumário";
lblErrorMessage = "Mensagens de erros";

obdmap = true;
services = 
[{lines: [
`Deixe&nbsp;a&nbsp;ignicao`,
`em&nbsp;posicao&nbsp;ON&nbsp;e`,
`&nbsp;&nbsp;&nbsp;tecle&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: ``
},
{lines: [
`Numero&nbsp;de&nbsp;falhas`,
`&nbsp;&nbsp;&nbsp;&nbsp;BSI:&nbsp;**`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
help: `Número de Falhas presentes no módulo BSI`
},
{lines: [
`&nbsp;&nbsp;&nbsp;Testando&nbsp;a`,
`compatibilidade`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;&nbsp;Part&nbsp;Number:`,
`&nbsp;&nbsp;&nbsp;**********`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
help: ``
},
{lines: [
`Numero&nbsp;de&nbsp;chaves`,
`&nbsp;programadas:&nbsp;*`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
help: ``
},
{lines: [
`Deixe&nbsp;a&nbsp;ignicao`,
`&nbsp;em&nbsp;posicao&nbsp;ACC`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`&nbsp;&nbsp;Lendo&nbsp;Senha`,
`&nbsp;&nbsp;&nbsp;Aguarde...`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Desligue&nbsp;e&nbsp;ligue`,
`&nbsp;a&nbsp;ignicao&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: ``
},
{lines: [
`Utilize&nbsp;chave&nbsp;de`,
`&nbsp;&nbsp;&nbsp;&nbsp;presenca`,
`&nbsp;&nbsp;&nbsp;&nbsp;original`,
`Hyundai/KIA&nbsp;&lt;OK&gt;`,
],
help: ``
},
{lines: [
`Deixe&nbsp;a&nbsp;ignicao`,
`em&nbsp;posicao&nbsp;OFF&nbsp;e`,
`&nbsp;&nbsp;&nbsp;tecle&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: ``
},
{lines: [
`Todas&nbsp;as&nbsp;chaves`,
`serao&nbsp;perdidas!`,
`&nbsp;&lt;OK&gt;&nbsp;Continuar`,
`&nbsp;&nbsp;&lt;VOLTA&gt;&nbsp;Sair`,
],
help: `As chaves já programadas serão
   apagadas.`
},
{lines: [
`&nbsp;`,
`Abra&nbsp;a&nbsp;porta&nbsp;do`,
`&nbsp;motorista&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;Insira&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;&nbsp;no&nbsp;slot`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
help: ``
},
{lines: [
`Numero&nbsp;chaves:&nbsp;*`,
`Programar&nbsp;mais?`,
`<br />`,
`(X)NAO&nbsp;&nbsp;&nbsp;(OK)SIM`,
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
`&nbsp;&nbsp;Procedimento`,
`&nbsp;&nbsp;&nbsp;Concluido!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
help: `   Tecle OK!`
},
]}
];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [{ label: `Erro comunicacao ou veiculo incompativel! `,
screens: [
`Erro&nbsp;comunicacao`,
`&nbsp;&nbsp;&nbsp;ou&nbsp;veiculo`,
`&nbsp;incompativel!`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
causes: [
`Defeito no veículo, parte elétrica,`,`Software do OBDMap desatualizado,`,`Má conexão dos acessórios.`,`O sistema do veículo está fora da aplicação, mesmo se o modelo estiver na faixa de anos`,`A função pode estar desatualizada`,],
solutions: [
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Passar um scaner de diagnóstico no veículo`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico.`,`Caso o veículo esteja nos anos de aplicação, contate o suporte`,`Caso não esteja, fique atento as próximas atualizações `,]
},
{ label: `Falha na rede CAN!!! `,
screens: [
`&nbsp;&nbsp;&nbsp;&nbsp;Falha&nbsp;na`,
`&nbsp;&nbsp;rede&nbsp;CAN!!!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
causes: [
`Não foi possível estabelecer uma comunicação com o veículo, devido a falha na rede CAN;`,`O veículo apresenta defeitos elétricos;`,],
solutions: [
`Verificar instalação elétrica;`,`Verificar se os módulos não estão com defeito.`,]
},
{ label: `Senha Incorreta! `,
screens: [
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Senha`,
`&nbsp;&nbsp;&nbsp;Incorreta!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
causes: [
`A senha inserida está incorreta,`,`Veículo está com tempo de espera devido consecutivas tentativas com senhas erradas. (dependendo do sistema)`,],
solutions: [
`Conferir a senha digitada,`,`Aguardar x tempo com a ignição ligada e tentar novamente com a senha correta. (dependendo do sistema)`,]
},
{ label: `Tempo Excedido!`,
screens: [
`&nbsp;`,
`Tempo&nbsp;`,
`&nbsp;&nbsp;Excedido!`,
`<br />`,
],
causes: [
`O botão travar ou destravar não foi pressionado no tempo devido.`,],
solutions: [
`Pressionar o telecomando no momento indicado pelo OBDMap.`,]
},
{ label: `Senha nao Encontrada! `,
screens: [
`&nbsp;&nbsp;&nbsp;Senha&nbsp;nao`,
`&nbsp;&nbsp;Encontrada!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
causes: [
`Arquivo da ECU está corrompido,`,`Arquivo inválido da ECU,`,`A senha da ECU pode estar resetada.`,],
solutions: [
]
},
{ label: `Transponder Incorreto!`,
screens: [
`&nbsp;`,
`Transponder`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Incorreto!`,
`<br />`,
],
causes: [
],
solutions: [
]
},
{ label: `Veiculo incompativel! `,
screens: [
`&nbsp;&nbsp;&nbsp;&nbsp;Veiculo`,
`&nbsp;incompativel!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
causes: [
`O sistema do veículo está fora da aplicação, mesmo se o modelo estiver na faixa de anos`,`A função pode estar desatualizada`,],
solutions: [
`Caso o veículo esteja nos anos de aplicação, contate o suporte`,`Caso não esteja, fique atento as próximas atualizações `,]
},
{ label: `Use o cabo CAN ou adap. A3 CAN!`,
screens: [
`&nbsp;`,
`Use&nbsp;o&nbsp;cabo&nbsp;CAN`,
`ou&nbsp;adap.&nbsp;A3&nbsp;CAN!`,
`<br />`,
],
causes: [
`O cabo que está conectado não é o cabo CAN ou o Adaptador A3`,],
solutions: [
`Conecte o cabo universal e o adaptador A3 ou o cabo CAN e repita o procedimento`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
