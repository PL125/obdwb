//Capa
nomeCarga = `Manual Carga -  OBD0224<br />Programação de Chaves e Telecomandos Nissan UCH Renault (March 1.0 2011-2015)`;
revCarga = `Rev. 6`;
dataManual = `Janeiro 2020`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/conEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Programação de até 4 chaves.`,
`Programação de telecomando. `,
`<obs>`,
`Observações:`,
`- É necessário ter em mãos todas as chaves a serem programadas, inclusive as que já estavam programadas. Caso elas não sejam programadas elas não funcionarão no veículo.`,
`- Para programar chaves não é necessário possuir a senha do veículo. É necessário apenas ter o código de 12 dígitos (localizado no interior do porta-luvas do veículo), com ele, o OBDMap realiza a programação de chaves de maneira automática.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `Nissan`,
model: `March 1.0`,
years: `2011 a 2014`
},
];
applicationObs = ``;
applicationObs += createObs(`Atenção: Esta carga aplica-se aos veículos que possuem motor Renault.`, undefined, undefined);




resources = [
{title: `Transponder utilizado:`, 
description: ``, 
ballon: `Utilize transponder PCF7936 (ID46) virgem.`, 
image: `/images/Transponders/PCF7936 Philips Virgem.jpg`},

{title: ``, 
description: ``, 
ballon: `Telecomando utilizado.`, 
image: `/images/Chaves e Telecomandos/Telecomando March.jpg`},

{title: `Acessórios utilizados:`, 
description: ``, 
ballon: `Uitlilze o cabo universal do Connect`, 
image: `/images/Acessórios/Cabo Universal mais Adaptador A3 CONECTADOS.jpg`},

{title: ``, 
description: ``, 
ballon: `Todos os acessórios conectados para procedimento via diagnose.`, 
image: `/images/Connect/Acessórios/Obdmap mais Cabo Universal mais Adaptador A3 CONECTADOS.jpg`},

{title: `Localizando a etiqueta:`, 
description: `A etiqueta com o código, está localizada área I4, colada dentro do porta luvas na parte superior.<br /><br /><br />`, 
ballon: `A tomada de diagnóstico do veículo fica localizada na área L4.`, 
image: `/images/Tomada de Diagnostico/Carro/I4.jpg`},

{title: ``, 
description: `A etiqueta com o código, está localizada área I4, colada dentro do porta luvas na parte superior.<br /><br /><br />`, 
ballon: `Etiqueta com o código de 12 caracteres.`, 
image: `/images/Funções Específicas/OBD0224 - Leitura de Senha e Programação de Chaves NissanRenault UCH-3 (March 1.0 e Livina 1.6)/Etiqueta.jpg`},

{title: `Localizando a tomada de diagnóstico no veículo:`, 
description: `A tomada de diagnóstico do veículo está localizada na área A5. <br /><br /><br /><br /><br />`, 
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/A5.jpg`},
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
{title: `Realizando programação de chaves`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Nissan`], help: `Tecle OK`, menu: 1000},
{lines: [`March 1.0`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`UCH March 1.0`], help: `Tecle OK`, menu: 1000},
{lines: [`Programação de chaves`], help: `Tecle OK`, menu: 1000},
{lines: [
`&nbsp;`,
`Selecione:`,
`Inserir&nbsp;etiqueta`,
`<br />`,
],
help: `Selecione inserir etiqueta ou selecione inserir senha e tecle OK!`
},
{lines: [
`&nbsp;`,
`Código&nbsp;Etiqueta:`,
`000000000000`,
`<br />`,
],
help: `Se selecionou inserir etiqueta, digite o código de 12 caracteres. Se selecionou inserir senha, a senha de 12 caracteres deve ser inserida.`
},
{lines: [
`ATENCAO!&nbsp;Siga`,
`corretamente&nbsp;os`,
`passos&nbsp;descritos`,
`pelo&nbsp;OBDMap&nbsp;&lt;OK&gt;`,
],
help: `Tecle OK!`
},
{lines: [
`Qualquer&nbsp;erro&nbsp;no`,
`procedimento`,
`poderá&nbsp;bloquear`,
`a&nbsp;BC&nbsp;&lt;OK&gt;`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Use&nbsp;transponder&nbsp;PCF7936&nbsp;virgem!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
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
help: `As chaves já programadas serão apagadas.`
},
{lines: [
`&nbsp;`,
`&nbsp;Insira&nbsp;a&nbsp;chave`,
`&nbsp;sem&nbsp;ligar&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`Atenção!`,
`Ligue&nbsp;o&nbsp;pisca&nbsp;&nbsp;alerta&nbsp;`,
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
`Identificacao&nbsp;da`,
`ECU:&nbsp;*****&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Remova&nbsp;a&nbsp;chave&nbsp;da&nbsp;ignição`,
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
`Maximo&nbsp;de`,
`4&nbsp;chaves&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`&nbsp;Insira&nbsp;a&nbsp;chave`,
`&nbsp;sem&nbsp;ligar&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave&nbsp;em&nbsp;10&nbsp;`,
`segundos`,
`<br />`,
],
help: `Ligue a chave dentro de 10 segundos.`
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
`Chave&nbsp;programada&nbsp;com&nbsp;&nbsp;sucesso!!!&nbsp;`,
`Tecle&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Programar&nbsp;mais?`,
`(X)Não&nbsp;/&nbsp;(OK)Sim`,
`<br />`,
],
help: `Tecle (OK) para programar outra chave ou tecle (Volta) para finalizar o procedimento.`
},
{lines: [
`&nbsp;`,
`Insira&nbsp;proxima&nbsp;chv`,
`sem&nbsp;ligar&nbsp;OK`,
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
`Procedimento&nbsp;Concluído!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Desconecte&nbsp;o&nbsp;OBDMap!!`,
`<br />`,
`<br />`,
],
help: `Desconecte o OBDMap da tomada de diagnóstico.`
},
]
}, {title: `Realizando a programação de telecomando`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Nissan`], help: `Tecle OK`, menu: 1000},
{lines: [`March 1.0`], help: `Tecle OK`, menu: 1000},
{lines: [`Telecomandos`], help: `Tecle OK`, menu: 1000},
{lines: [`UCH March 1.0`], help: `Tecle OK`, menu: 1000},
{lines: [`Programação de telecomandos`], help: `Tecle OK`, menu: 1000},
{lines: [
`Deseja&nbsp;apagar&nbsp;os`,
`telecomandos&nbsp;já`,
`programados?`,
`(X)Não&nbsp;/(OK)Sim`,
],
help: `Tecle (OK) para apagar os telecomandos já programados no veículo, ou tecle (Volta) para não apagar.`
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
`Aperte&nbsp;o&nbsp;botao`,
`LOCK&nbsp;do`,
`telecomando`,
`<br />`,
],
help: `Nessa etapa, aperte o Botão LOCK do telecomando para programá-lo.`
},
{lines: [
`&nbsp;`,
`Telecomando&nbsp;Programado!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `Telecomando programado com sucesso.`
},
{lines: [
`&nbsp;`,
`Programar&nbsp;mais?`,
`(X)Não&nbsp;/&nbsp;(OK)Sim`,
`<br />`,
],
help: `Tecle (OK) para programar outro telecomando ou tecle (Volta) para finalizar o procedimento.`
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
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo universal e adaptador A3,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico.`,]
},
{ label: `Atencao! ECU Desconectada`,
screens: [
`&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;Atencao!`,
`ECU&nbsp;Desconectada`,
`<br />`,
],
causes: [
`Defeito na ECU.`,`ECU desconectada.`,`Mal contato nos conectores da ECU.`,``,],
solutions: [
`Verificar bom estado da ECU.`,`Verificar conexão da ECU.`,``,]
},
{ label: `Acesso Negado!`,
screens: [
`Acesso&nbsp;Negado!`,
`**`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
`Senha ou código da etiqueta inválido para o veículo.`,`Veículo não compatível com a aplicação.`,``,``,],
solutions: [
`Verificar senha/código da etiqueta.`,`Verificar aplicação.`,`Entrar em contato com o suporte.`,``,]
},
{ label: `Erro Time OUT!`,
screens: [
`&nbsp;`,
`Erro`,
`Time&nbsp;OUT!`,
`<br />`,
],
causes: [
`Não foi seguido as sequências descritas no manual.`,`Ocorreu um atraso para ligar a chave no tempo especificado pelo Passo 19.`,],
solutions: [
`Desligar o veículo e aguardar alguns minutos, tentar novamente o procedimento.`,`Ligar a chave dentro de 10 segundos como pede no Passo 19.`,`Entrar em contato com o suporte.`,]
},
{ label: `Erro no Transponder!`,
screens: [
`&nbsp;`,
`Erro&nbsp;no&nbsp;Transponder!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
`É necessário que o transponder tenha passado pelo procedimento de geração, ou que ele já esteja válido no veículo antes da apresentação. `,],
solutions: [
]
},
{ label: `Erro! Dado nao disponivel no Banco de Dados*!`,
screens: [
`<br />`,
`<br />`,
`<br />`,
`<br />`,
],
causes: [
`Código da etiqueta inválido.`,],
solutions: [
`Verificar o código da etiqueta.`,`Realizar mais uma tentativa.`,`Entrar em contato com o suporte.`,``,]
},
{ label: `Erro no Transponder! `,
screens: [
`&nbsp;`,
`Erro&nbsp;no&nbsp;Transponder!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
`O transponder não é válido`,`A chave não tem transponder`,`O transponder pode estar com defeito`,`A identificação do transponder não está correta`,],
solutions: [
`Realize uma leitura do transponder e confira se é o mesmo indicado pelo manual`,`Verifique a procedência do transponder e se o mesmo é de boa qualidade`,`Tente realizar a codificação com outro transponder de lote diferente`,`Repita o procedimento`,`Em caso de dúvida, contate o suporte`,``,]
},
{ label: `Erro ao apagar Telecomando!`,
screens: [
`&nbsp;`,
`Erro&nbsp;ao&nbsp;apagar&nbsp;Telecomando!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
`O OBDMap não conseguiu realizar o procedimento.`,``,],
solutions: [
`Desligue e ligue a bateria, e repita o procedimento.`,``,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
