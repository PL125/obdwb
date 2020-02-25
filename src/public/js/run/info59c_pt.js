//Capa
nomeCarga = `Manual Carga -  OBD0059<br />FORD Pats Ranger Diesel (chaves e casamento)`;
revCarga = `Rev. 4`;
dataManual = `Dezembro 2016`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/conEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Apagar chaves.`,
`Adicionar chaves (máximo 5).`,
`Sincronismo entre a ECU e o painel do veículo.`,
`<obs>`,
`Observações:`,
`Apague todas as chaves do imobilizador e programe 2 novas chaves para que seja possível fazer o sincronismo.`,
`O veículo Ford Ranger 3.0 Eletronic diesel, utiliza o transponder T32 especial (4D ID:63). Depois de programado o transponder é dedicado a um único veículo.`,
`O Pats, módulo de antena responsável pela transmissão Transponder-ECU, é uma peça que apresenta muitos problemas. A partir disso é importante verificar se esse item se encontra acoplado junto ao contato da ignição (peça onde a chave é inserida) onde é necessária a desmontagem para a visualização. (Está verificação é importante, devido ao fato de muitos carros virem de leilões sem esse módulo ou com módulo danificado. Neste caso, embora a programação de chaves não acuse erro, a chave não é programada). DICA: Ter em mãos um ou mais PATS com garantia 100% de funcionamento.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `Ford`,
model: `RANGER 3.0 ELETRONIC DIESEL`,
years: `2005 a 2011`
},
];
applicationObs = ``;
applicationObs += createObs(undefined, undefined, undefined);




resources = [
{title: ``, 
description: ``, 
ballon: `Utilize um transponder ID 4D63 especial (40 bits).`, 
image: `/images/Transponders/ID 4D63 T32 especial.jpg`},

{title: `Acessórios utilizados:`, 
description: ``, 
ballon: `Uitlilze o cabo universal do Connect`, 
image: `/images/Acessórios/Cabo Universal mais Adaptador A3 CONECTADOS.jpg`},

{title: ``, 
description: ``, 
ballon: `Todos os acessórios conectados para procedimento via diagnose.`, 
image: `/images/Connect/Acessórios/Obdmap mais Cabo Universal mais Adaptador A3 CONECTADOS.jpg`},

{title: `Localizando a tomada de diagnóstico no veículo:`, 
description: `A tomada de diagnóstico dos veículos fica localizada na área C5.`, 
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
{title: `Realizando o apagamento de todas as chaves`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Ford`], help: `Tecle OK`, menu: 1000},
{lines: [`Ranger`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Pats 3`], help: `Tecle OK`, menu: 1000},
{lines: [`RANGER D 05-11`], help: `Tecle OK`, menu: 1000},
{lines: [`Apagamento de chaves`], help: `Tecle OK`, menu: 1000},
{lines: [
`&nbsp;`,
`Use&nbsp;o&nbsp;cabo&nbsp;CAN`,
`ou&nbsp;adaptado&nbsp;A3&nbsp;CAN!`,
`<br />`,
],
help: `É necessário utilizar o cabo de diagnóstico CAN ou o cabo universal + adaptador A3.`
},
{lines: [
`&nbsp;`,
`Insira&nbsp;a&nbsp;Chave`,
`e&nbsp;tecle&nbsp;OK!`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave&nbsp;de&nbsp;ignição`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
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
help: `Tempo aproximado necessário para o
procedimento de apagar as chaves.`
},
{lines: [
`&nbsp;`,
`Procedimento&nbsp;Concluído!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `Neste momento todas as chaves do
veículo estão apagadas.`
},
]
}, {title: `Realizando a programação de chaves`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Ford`], help: `Tecle OK`, menu: 1000},
{lines: [`Ranger`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Pats 3`], help: `Tecle OK`, menu: 1000},
{lines: [`RANGER D 05-11`], help: `Tecle OK`, menu: 1000},
{lines: [`Adição de chaves`], help: `Tecle OK`, menu: 1000},
{lines: [
`&nbsp;`,
`Selecione:`,
`Programar&nbsp;Chaves`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`Todas&nbsp;as&nbsp;chaves&nbsp;serão&nbsp;perdidas!`,
`&lt;OK&gt;&nbsp;Continuar`,
`&lt;VOLTA&gt;&nbsp;Sair`,
`<br />`,
],
help: `As chaves já programadas serão apagadas.Tecle OK!`
},
{lines: [
`São&nbsp;necessárias`,
`2&nbsp;chaves&nbsp;para`,
`realizar&nbsp;o`,
`procedimento!`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Use&nbsp;transponder&nbsp;`,
`ID4D&nbsp;DST+&nbsp;Ford`,
`<br />`,
],
help: `Utilize um transponder ID 4D63 DST+
dedicado para Ford.`
},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave&nbsp;de&nbsp;ignição`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
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
`&nbsp;`,
`Desligue&nbsp;e&nbsp;ligue&nbsp;a&nbsp;chave&nbsp;`,
`Tecle&nbsp;&lt;OK&gt;`,
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
`Conectando`,
`no&nbsp;servidor`,
`Chiptronic...`,
`<br />`,
],
help: `Inicialize o aplicativo no dispositivo móvel.`
},
{lines: [
`Obtendo`,
`informacoes`,
`do&nbsp;servico...`,
`<br />`,
],
help: `Aguarde alguns instantes.`
},
{lines: [
`Saldo:&nbsp;***.***c`,
`Parcelas:**/**`,
`Valor&nbsp;do&nbsp;serviço`,
`***c&nbsp;&lt;OK&gt;`,
],
help: `Saldo total disponível, número de parcelas do serviço, valor a ser cobrado pelo serviço.Tecle OK!`
},
{lines: [
`Serão&nbsp;debitados`,
`***c&nbsp;do&nbsp;seu&nbsp;saldo`,
`&lt;OK&gt;&nbsp;Aceitar`,
`&lt;Volta&gt;&nbsp;Negar`,
],
help: `Créditos a serem debitados do saldo.
<OK> para Confirmar.
<VOLTA> para Cancelar.
`
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
`Número&nbsp;de&nbsp;Chaves`,
`Programadas:&nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Chassi:*****************&nbsp;`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `O chassi é utilizado para confirmar se a ECU é original do veiculo.Tecle OK!`
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
`Desligue&nbsp;e&nbsp;ligue&nbsp;a`,
`chave&nbsp;e&nbsp;tecle&nbsp;OK`,
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
`Insira&nbsp;e&nbsp;ligue&nbsp;a`,
`próxima&nbsp;chave&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Insira a chave e tecle OK.`
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
`Número&nbsp;de&nbsp;Chaves`,
`Programadas:&nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Desligue&nbsp;e&nbsp;ligue&nbsp;a&nbsp;chave&nbsp;`,
`Tecle&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Procedimento&nbsp;Concluído!`,
`Desconecte&nbsp;o&nbsp;OBD`,
`<br />`,
],
help: `O procedimento foi concluído com
sucesso. Desconecte o cabo da tomada
de diagnose.`
},
]
}, {title: `Realizando o sincronismo entre a ECU e o painel`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [
`&nbsp;`,
`Use&nbsp;o&nbsp;cabo&nbsp;CAN`,
`ou&nbsp;adaptado&nbsp;A3&nbsp;CAN!`,
`<br />`,
],
help: `É necessário utilizar o cabo de diagnóstico CAN ou o
cabo universal + adaptador A3.`
},
{lines: [
`&nbsp;`,
`Insira&nbsp;a&nbsp;Chave`,
`e&nbsp;tecle&nbsp;OK!`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave&nbsp;de&nbsp;ignição`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
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
help: `Tempo aproximado necessário para o
procedimento de sincronismo.`
},
{lines: [
`&nbsp;`,
`Desligue&nbsp;a&nbsp;chave&nbsp;de&nbsp;ignição`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
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
`Ligue&nbsp;a&nbsp;chave&nbsp;de&nbsp;ignição`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Procedimento&nbsp;Concluído!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: ``
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
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo universal e adaptador A3,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico, talvez esta carga tenha tido alterações.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
