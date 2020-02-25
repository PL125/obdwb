//Capa
nomeCarga = `Manual Software -  OBD0044<br />GM Remote Control Programming (GM Alarme 2, GM Alarme 2009  and GM Alarme Meriva systems)`;
revCarga = `Rev. 1`;
dataManual = `January 2016`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/obdEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdution`;
introSubtitle = `This software performs the following functions:`;
lstFunc = [
`Remote control erasing.`,
`Remote control programming.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplication`;
applicationTable = `<th>Manufacturer</th><th>Model</th><th>Year</th>`;
models = [
{
manufacturer: `GM`,
model: `Astra 1.8`,
years: `2002 a 2011`
},
{
manufacturer: `GM`,
model: `Astra 2.0`,
years: `2002 a 2011`
},
{
manufacturer: `GM`,
model: `Celta 1.0`,
years: `2009 a 2011`
},
{
manufacturer: `GM`,
model: `Corsa 1.0`,
years: `2009 a 2011`
},
{
manufacturer: `GM`,
model: `Meriva 1.8`,
years: `2002 a 2010`
},
{
manufacturer: `GM`,
model: `Meriva 1.8 16V`,
years: `2002 a 2010`
},
{
manufacturer: `GM`,
model: `Montana 1.4`,
years: `2009 a 2011`
},
{
manufacturer: `GM`,
model: `Montana 1.4 New`,
years: `2010 a 2011`
},
{
manufacturer: `GM`,
model: `Prisma`,
years: `2009 a 2011`
},
{
manufacturer: `GM`,
model: `Vectra C 2.0`,
years: `2005 a 2011`
},
{
manufacturer: `GM`,
model: `Vectra C 2.4`,
years: `2005 a 2011`
},
{
manufacturer: `GM`,
model: `Zafira 2.0`,
years: `2002 a 2011`
},
{
manufacturer: `GM`,
model: `Zafira 2.0 16V`,
years: `2002 a 2011`
},
];
applicationObs = ``;
applicationObs += createObs(undefined, undefined, undefined);




resources = [
{title: `Accessories used:`, 
description: ``, 
ballon: `Connect the universal cable to the A1 adapter.`, 
image: `/images/Acessórios/Cabo Universal mais Adaptador A1 CONECTADOS.jpg`},

{title: ``, 
description: ``, 
ballon: `All accessories are connected to perform the procedure by OBDII.`, 
image: `/images/Acessórios/Obdmap mais Cabo Universal mais Adaptador A1 CONECTADOS.jpg`},

{title: `Locating the diagnosis connector in the vehicle:`, 
description: `The diagnostic socket of the Celta and Prisma vehicles is located at position A4.<br />The diagnostic socket of the Vectra vehicle is located at position A5.<br />The diagnostic socket of the Montana vehicle is located at position F5 or F9.<br />The diagnostic socket of the Astra and Zafira is located at position F9.<br />`, 
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/A4 - A5 - F5 - F9.jpg`},
];
lblStep = "Step";
lblCause = "Probable causes:";
lblSolution = "Solutions:";
lblSummary = "Summary";
lblErrorMessage = "Error Messages";

obdmap = true;
services = 
[{title: ``,
description: `After all connected accessories, follow the following steps on the OBDMap display:`,
screens: [
{lines: [`Select:`, `>Diagnostico`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`Diagnostico`, `>GM / OPEL`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`GM / OPEL`, `>Remote2`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`Remote2`, `>Clear Control`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`<br />Loading...<br />Please<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Enter&nbsp;the&nbsp;PIN:`,
`****`,
`<br />`,
],
help: `Insert the PIN read and press OK!`
},
{lines: [
`&nbsp;`,
`Switch&nbsp;ignition`,
`ON&nbsp;and&nbsp;press&nbsp;OK!`,
`<br />`,
],
help: `Press OK!`
},
{lines: [
`&nbsp;`,
`Wait...`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Remote`,
`&nbsp;&nbsp;&nbsp;&nbsp;Erased!`,
`<br />`,
],
help: ``
},
]
}, {title: ``,
description: `After all connected accessories, follow the following steps on the OBDMap display:`,
screens: [
{lines: [`Select:`, `>Diagnostico`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`Diagnostico`, `>GM / OPEL`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`GM / OPEL`, `>Remote2`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`Remote2`, `>Prog. control?`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`<br />Loading...<br />Please<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Enter&nbsp;the&nbsp;PIN:`,
`****`,
`<br />`,
],
help: `Insert the PIN read and press OK!`
},
{lines: [
`&nbsp;`,
`Switch&nbsp;ignition`,
`ON&nbsp;and&nbsp;press&nbsp;OK!`,
`<br />`,
],
help: `Press OK!`
},
{lines: [
`&nbsp;`,
`Wait...`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`Press&nbsp;`,
`the&nbsp;Remote&nbsp;`,
`Control`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Remote&nbsp;Control`,
`&nbsp;&nbsp;&nbsp;&nbsp;Programed!`,
`<br />`,
],
help: ``
},
]
}, {title: ``,
description: `After all connected accessories, follow the following steps on the OBDMap display:`,
screens: [
{lines: [`Select:`, `>Diagnostico`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`Diagnostico`, `>GM / OPEL`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`GM / OPEL`, `>Remote2`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`Remote2`, `>Prog. control?`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`<br />Loading...<br />Please<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Enter&nbsp;the&nbsp;PIN:`,
`****`,
`<br />`,
],
help: `Insert the PIN read and press OK!`
},
{lines: [
`&nbsp;`,
`Switch&nbsp;&nbsp;ignition`,
`&nbsp;ON&nbsp;and&nbsp;press&nbsp;OK`,
`<br />`,
],
help: `Press OK!`
},
{lines: [
`&nbsp;`,
`Wait...`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Remote`,
`&nbsp;&nbsp;&nbsp;&nbsp;Erased!`,
`<br />`,
],
help: ``
},
]
}, {title: ``,
description: `After all connected accessories, follow the following steps on the OBDMap display:`,
screens: [
{lines: [`Select:`, `>Diagnostico`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`Diagnostico`, `>GM / OPEL`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`GM / OPEL`, `>Remote2`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`Remote2`, `>Prog. control?`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`<br />Loading...<br />Please<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Enter&nbsp;the&nbsp;PIN:`,
`****`,
`<br />`,
],
help: `Insert the PIN read and press OK!`
},
{lines: [
`&nbsp;`,
`Switch&nbsp;&nbsp;ignition`,
`&nbsp;ON&nbsp;and&nbsp;press&nbsp;OK`,
`<br />`,
],
help: `Press OK!`
},
{lines: [
`&nbsp;`,
`Wait...`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`&nbsp;&nbsp;Press&nbsp;*&nbsp;the`,
`remote&nbsp;control!`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Remote&nbsp;Control`,
`&nbsp;&nbsp;&nbsp;&nbsp;Programed!`,
`<br />`,
],
help: ``
},
]
}, {title: ``,
description: `After all connected accessories, follow the following steps on the OBDMap display:`,
screens: [
{lines: [`Select:`, `>Diagnostico`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`Diagnostico`, `>GM / OPEL`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`GM / OPEL`, `>Remote2`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`Remote2`, `>Prog. control?`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`<br />Loading...<br />Please<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Enter&nbsp;the&nbsp;PIN:`,
`****`,
`<br />`,
],
help: `Insert the PIN read and press OK!`
},
{lines: [
`&nbsp;`,
`Switch&nbsp;&nbsp;ignition`,
`&nbsp;ON&nbsp;and&nbsp;press&nbsp;OK`,
`<br />`,
],
help: `Press OK!`
},
{lines: [
`&nbsp;`,
`Wait...`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Remote`,
`&nbsp;&nbsp;&nbsp;&nbsp;Erased!`,
`<br />`,
],
help: ``
},
]
}, {title: ``,
description: `After all connected accessories, follow the following steps on the OBDMap display:`,
screens: [
{lines: [`Select:`, `>Diagnostico`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`Diagnostico`, `>GM / OPEL`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`GM / OPEL`, `>Remote2`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`Remote2`, `>Prog. control?`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`<br />Loading...<br />Please<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Enter&nbsp;the&nbsp;PIN:`,
`****`,
`<br />`,
],
help: `Insert the PIN read and press OK!`
},
{lines: [
`&nbsp;`,
`Switch&nbsp;&nbsp;ignition`,
`&nbsp;ON&nbsp;and&nbsp;press&nbsp;OK`,
`<br />`,
],
help: `Press OK!`
},
{lines: [
`&nbsp;`,
`Wait...`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`Press&nbsp;`,
`the&nbsp;Remote&nbsp;`,
`Control`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Remote&nbsp;Control`,
`&nbsp;&nbsp;&nbsp;&nbsp;Programed!`,
`<br />`,
],
help: ``
},
]}
];
//Outras mensagens
othersMessageTitle = `Other messages`;
othersMessage = [{ label: `Communication ERROR!`,
screens: [
`&nbsp;`,
`Communication`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ERROR!`,
`<br />`,
],
causes: [
`Vehicle fault, electrical part,`,`OBDMap software has expired,`,`Accessories bad connection.`,],
solutions: [
`Check if the battery is connected,`,`Check the electrical part of the vehicle, fuses, etc,`,`Check if the universal cable and A1 adapter are being used,`,`Check the OBDMap connection in the diagnostic socket and other connections,`,`Disconnect all the cables, wait for 10 seconds and connect it again,`,`Check the more recent update with the technical support, maybe this function has been altered.`,]
},
{ label: `Invalid PIN!`,
screens: [
`&nbsp;`,
`Invalid`,
`&nbsp;&nbsp;&nbsp;PIN!`,
`<br />`,
],
causes: [
`The PIN code inserted is incorrect.`,``,],
solutions: [
`Check the PIN code that was entered.`,]
},
{ label: `Waiting time:`,
screens: [
`&nbsp;`,
`Waiting&nbsp;time:`,
`<br />`,
`<br />`,
],
causes: [
`Waiting time by attempts with incorrect PIN.`,``,],
solutions: [
`Contact technical support.`,``,``,]
},
{ label: `Time Exceeded!`,
screens: [
`&nbsp;`,
`Time`,
`&nbsp;&nbsp;Exceeded!`,
`<br />`,
],
causes: [
`The lock and unlock button was not pressed in due time.`,],
solutions: [
`Press the remote control in correct time.`,]
},

];
//Last Message
lastMsg = `If the above errors persist, or for other messages consult technical support`;
