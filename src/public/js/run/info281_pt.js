//Capa
nomeCarga = `Manual Carga -  OBD0281<br />Leitura de senha e programação de chaves de presença Jeep Compass 2017-2018`;
revCarga = `Rev. 1`;
dataManual = `Maio 2019`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/obdEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Apaga as falhas passadas da BC`,
`Leitura do número de falhas presentes da BC`,
`Testa a compatibilidade do sistema`,
`Realiza a leitura de senha via OBD para os modelos da aplicação`,
`Apaga chaves antigas`,
`Adiciona novas chaves`,
`A programação do telecomando é automática, desde que compatível com o carro`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `Jeep`,
model: `Compass 2.0`,
years: `2017 a 2018`
},
];
applicationObs = ``;
applicationObs += createObs(undefined, undefined, undefined);




resources = [
{title: `Acessórios utilizados:`, 
description: ``, 
ballon: `Utilize o cabo universal + adaptador A3.`, 
image: `/images/Acessórios/Cabo Universal Mais Adaptador A3 DESCONECTADOS.jpg`},

{title: `Todos os acessórios conectados:`, 
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
[{title: `Realizando teste de compatibilidade`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>Jeep`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Jeep`, `>FCA-1 Compass`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`FCA-1 Compass`, `>Compativel?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Aperte`,
`&nbsp;&nbsp;&nbsp;start/stop`,
`&nbsp;&nbsp;&nbsp;para&nbsp;ligar`,
`&nbsp;&nbsp;ignicao&nbsp;&lt;OK&gt;`,
],
help: ``
},
{lines: [
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Aperte`,
`&nbsp;&nbsp;&nbsp;start/stop`,
`&nbsp;para&nbsp;desligar`,
`&nbsp;&nbsp;ignicao&nbsp;&lt;OK&gt;`,
],
help: ``
},
{lines: [
`&nbsp;ATENCAO!&nbsp;Ligue`,
`&nbsp;o&nbsp;pisca&nbsp;alerta`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
help: ``
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
`Numero&nbsp;de&nbsp;chaves`,
`&nbsp;programadas:&nbsp;*`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
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
`&nbsp;&nbsp;&nbsp;&nbsp;Veiculo`,
`&nbsp;&nbsp;compativel!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
help: `Veículo compativel com o software!`
},
]
}, {title: `Realizando a adição de chaves`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>Jeep`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Jeep`, `>FCA-1 Compass`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`FCA-1 Compass`, `>Prog Proximity`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;Remova&nbsp;o&nbsp;botao`,
`&nbsp;&nbsp;&nbsp;START/STOP`,
`(segundo&nbsp;manual)`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
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
`&nbsp;Ligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
help: `   Tecle OK!`
},
{lines: [
`Desligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
help: `Se for a última chave a ser gravada o
passo seguinte será o Passo`
},
{lines: [
`&nbsp;Ligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
help: `   Tecle OK!`
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
`Numero&nbsp;de&nbsp;Falhas`,
`&nbsp;&nbsp;&nbsp;&nbsp;ECU:&nbsp;**`,
`&nbsp;&nbsp;&nbsp;&nbsp;Imob:&nbsp;**`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
help: ``
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
`&nbsp;`,
`&nbsp;&nbsp;Lendo&nbsp;Senha`,
`&nbsp;&nbsp;&nbsp;Aguarde...`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;&nbsp;Senha:&nbsp;****`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
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
`Chassi:*********`,
`&nbsp;&nbsp;&nbsp;&nbsp;********`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
help: `O chassi é utilizado para confirmar se a
ECU é original do veiculo.`
},
{lines: [
`Selecione:`,
`Adicionar&nbsp;chave`,
`Apagar&nbsp;chaves`,
`Sair`,
],
help: ``
},
{lines: [
`&nbsp;`,
`&nbsp;Programando..`,
`&nbsp;&nbsp;&nbsp;Aguarde...`,
`<br />`,
],
help: ``
},
{lines: [
`Chave&nbsp;programada`,
`&nbsp;com&nbsp;sucesso!!!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
help: ``
},
{lines: [
`Deseja&nbsp;Programar`,
`&nbsp;o&nbsp;Keyless&nbsp;GO?`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&lt;X&gt;NAO&nbsp;&lt;OK&gt;SIM`,
],
help: ``
},
{lines: [
`&nbsp;&nbsp;Programando`,
`&nbsp;&nbsp;&nbsp;Keyless&nbsp;GO`,
`&nbsp;&nbsp;&nbsp;Aguarde..`,
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
help: `Volte para o Passo XX    Tecle OK!`
},
]}
];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [{ label: `Erro de Comunicacao! `,
screens: [
`&nbsp;&nbsp;&nbsp;&nbsp;Erro&nbsp;de`,
`&nbsp;&nbsp;Comunicacao!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
causes: [
`Defeito no veículo, parte elétrica,`,`Software do OBDMap desatualizado,`,`Má conexão dos acessórios.`,],
solutions: [
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo universal e adaptador A3,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar bateria, aguardar 10 segundos e conectar novamente,`,`Scaneie os erros apresentados no veículos, principalmente nos módulos de ECU, carroceria/conforto, ABS, airbag, painel e imobilizador (o veículo pode não conter todos os módulos),`,`Repita o procedimento,`,`Caso o erro persista, informe ao suporte as questões acima.`,``,]
},
{ label: `Erro na Programacao! `,
screens: [
`&nbsp;&nbsp;&nbsp;&nbsp;Erro&nbsp;na`,
`&nbsp;&nbsp;Programacao!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
causes: [
`A programação não foi completada,`,`Defeito no carro, parte elétrica, módulos, condição não esperada`,],
solutions: [
`Refazer o procedimento novamente,`,`Conferir parte elétrica do carro, fusíveis, sensores de aproximação, etc.`,`Scaneie os erros apresentados no veículos, principalmente nos módulos de ECU, carroceria/conforto, ABS, airbag, painel e imobilizador, caso o veículo possua`,`Caso o erro persista, informe ao suporte as questões acima`,]
},
{ label: `Senha Incorreta! `,
screens: [
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Senha`,
`&nbsp;&nbsp;&nbsp;Incorreta!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
causes: [
`Problemas com o veículo`,`BC não compatível com a aplicação,`,`OBDMAP desatualizado`,],
solutions: [
`Verificar aplicação.`,`Verificar com suporte técnico uma possível atualização`,`Scaneie os erros apresentados no veículos, principalmente nos módulos de ECU, carroceria/conforto, ABS, airbag, painel e imobilizador, caso o veículo possua`,`Repita o procedimento`,`Caso o erro persista, informe ao suporte as questões acima`,]
},
{ label: `Tempo Excedido! `,
screens: [
`Tempo&nbsp;Excedido!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
causes: [
`Indica que o tempo para realizar o procedimento de programação foi excedido.`,`O procedimento não foi realizado corretamente, nos tempos indicados`,`A chave não é compatível com o veículo`,`A bateria da chave está fraca`,`A BC está com defeito`,``,],
solutions: [
`Verifique o procedimento correto e tente novamente`,`Use uma chave confiável`,`Verifique a bateria da chave`,`Scanie o módulo BC para tentar identificar algum problema`,``,]
},
{ label: `Acesso Negado! ** `,
screens: [
`&nbsp;Acesso&nbsp;Negado!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
causes: [
`BC não compatível com a aplicação.`,`OBDMAP desatualizado`,],
solutions: [
`Verificar aplicação.`,`Verificar com suporte técnico uma possível atualização`,``,]
},
{ label: `Falha na rede CAN!!! `,
screens: [
`&nbsp;&nbsp;&nbsp;&nbsp;Falha&nbsp;na`,
`&nbsp;&nbsp;rede&nbsp;CAN!!!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
causes: [
` `,`Não foi possível estabelecer uma comunicação com o veículo, devido a falha na rede CAN;`,`O veículo apresenta defeitos elétricos;`,``,],
solutions: [
`Verificar instalação elétrica;`,`Verificar se os módulos não estão com defeito.`,]
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
` `,]
},
{ label: `Sem comunicacao com o veiculo ou veiculo incompativel!`,
screens: [
`Sem&nbsp;comunicacao`,
`&nbsp;com&nbsp;o&nbsp;veiculo`,
`&nbsp;&nbsp;&nbsp;ou&nbsp;veiculo`,
`&nbsp;incompativel!`,
],
causes: [
`O veículo pode não estar na aplicação`,`O veículo pode estar com defeito`,`O OBDMAP ou acessórios podem estar com defeito`,`A função escolhida pode estar desatualizada`,],
solutions: [
`Verifique a aplicação (isso implica nos modelos, anos, sistemas e hardware)`,`Confira a Rede CAN do veículo`,`Confira parte elétrica, fusíveis, etc`,`Scaneie os erros apresentados no veículos, principalmente nos módulos de ECU, carroceria/conforto, ABS, airbag, painel e imobilizador, caso o veículo possua`,`Repita o procedimento`,`Caso o erro persista, informe ao suporte as questões acima`,]
},
{ label: `Transponder ja Programado! `,
screens: [
`&nbsp;&nbsp;Transponder`,
`&nbsp;ja&nbsp;Programado!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
causes: [
`O transponder já foi inserido no mesmo processo de programação`,],
solutions: [
`Organize os transponders e repita o procedimento`,]
},
{ label: `Erro interno codigo: ** `,
screens: [
`&nbsp;&nbsp;Erro&nbsp;interno`,
`&nbsp;&nbsp;&nbsp;codigo:&nbsp;**`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
causes: [
`Ocorreu um erro inesperado internamente no OBDMAP`,`O veículo pode estar com defeito`,`O OBDMAP pode estar com defeito`,`A função escolhida pode estar desatualizada`,],
solutions: [
`Confira a Rede CAN do veículo`,`Confira parte elétrica, fusíveis, etc`,`Scaneie os erros apresentados no veículos, principalmente nos módulos de ECU, carroceria/conforto, ABS, airbag, painel e imobilizador, caso o veículo possua`,`Repita o procedimento`,`Caso o erro persista, informe ao suporte as questões acima, bem como o código do "Erro Interno"`,]
},
{ label: `USB conectado!`,
screens: [
`&nbsp;`,
`&nbsp;USB&nbsp;conectado!`,
`<br />`,
`<br />`,
],
causes: [
`O OBDMAP pode estar com defeito`,`O cabo USB pode estar conectado, sem necessidade`,],
solutions: [
`Se o cabo USB estiver conectado, retire-o e repita o procedimento`,`Caso não esteja, envio o OBDMAP para a assistência técnica`,]
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
{ label: `Alerta! Nao dar partida com o OBDMAP Conectado `,
screens: [
`Alerta!&nbsp;Nao&nbsp;dar`,
`&nbsp;partida&nbsp;com&nbsp;o`,
`OBDMAP&nbsp;Conectado`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
causes: [
`Informação para evitar falhas nos módulos CAN devido a pico de tensão`,],
solutions: [
]
},
{ label: `Erro no codigo de Seguranca!`,
screens: [
`&nbsp;`,
`Erro&nbsp;no&nbsp;codigo`,
`&nbsp;&nbsp;de&nbsp;Seguranca!`,
`<br />`,
],
causes: [
],
solutions: [
]
},
{ label: `Erro ao apagar chaves! `,
screens: [
`&nbsp;Erro&nbsp;ao&nbsp;apagar`,
`&nbsp;&nbsp;&nbsp;&nbsp;chaves!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
causes: [
],
solutions: [
]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
