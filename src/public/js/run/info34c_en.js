//Capa
nomeCarga = `Manual Software -  OBD0034<br />PIN Code Reading ME 7.9.9 (Astra\Vectra\Zafira 2010) by OBDII`;
revCarga = `Rev. 1`;
dataManual = `January 2014`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/conEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdution`;
introSubtitle = `This software performs the following functions:`;
lstFunc = [
`PIN code reading by OBDII: to perform the key programming use the function OBD0045.`,
`VIN writing: In cases of the defect ECU, this function can perform the synchronization of the VIN information.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplication`;
applicationTable = `<th>Manufacturer</th><th>Model</th><th>Year</th>`;
models = [
{
manufacturer: `GM`,
model: `Astra 2.0 Flex`,
years: `2009 a 2010`
},
{
manufacturer: `GM`,
model: `Vectra C 2.0`,
years: `2009 a 2010`
},
{
manufacturer: `GM`,
model: `Vectra C 2.4`,
years: `2009 a 2010`
},
{
manufacturer: `GM`,
model: `Zafira 2.0 Flex`,
years: `2009 a 2010`
},
];
applicationObs = ``;
applicationObs += createObs(`Attention: This function perform the procedure only in the vehicles with  year of manufacture 2009 and 2010.`, undefined, undefined);




resources = [
{title: `Accessories used:`, 
description: ``, 
ballon: `Use the Connect universal cable`, 
image: `/images/Acessórios/Cabo Universal mais Adaptador A1 DESCONECTADOS.jpg`},

{title: ``, 
description: ``, 
ballon: `All accessories are connected to perform the procedure by OBDII.`, 
image: `/images/Connect/Acessórios/Obdmap mais Cabo Universal mais Adaptador A1 CONECTADOS.jpg`},

{title: `Locating the diagnosis connector in the vehicle:`, 
description: ``, 
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/A5-E9-F9.jpg`},
];
lblStep = "Step";
lblCause = "Probable causes:";
lblSolution = "Solutions:";
lblSummary = "Summary";
lblErrorMessage = "Error Messages";

obdmap = false;
services = 
[
{title: `PIN code reading`,
description: `After all connected accessories, follow the following steps on the OBDMap display:`,
screens: [
{lines: [
`&nbsp;`,
`Switch&nbsp;&nbsp;ignition`,
`ON&nbsp;and&nbsp;press&nbsp;OK`,
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
`PIN..:`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`VIN:`,
`<br />`,
`<br />`,
],
help: `VIN read of the ECU.`
},
]
}, {title: `VIN writing`,
description: `After all connected accessories, follow the following steps on the OBDMap display:`,
screens: [
{lines: [
`&nbsp;`,
`Switch&nbsp;&nbsp;ignition`,
`ON&nbsp;and&nbsp;press&nbsp;OK`,
`<br />`,
],
help: `Press OK!`
},
{lines: [
`&nbsp;`,
`Enter:`,
`<br />`,
`<br />`,
],
help: `Use the buttons to up and to down to insert the VIN that will be written in the vehicle.`
},
{lines: [
`&nbsp;`,
`Confirm?`,
`<br />`,
`<br />`,
],
help: `Press OK to confirm or VOLTA to correct.`
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
`VIN`,
`Programmed!`,
`<br />`,
],
help: ``
},
]}];
//Outras mensagens
othersMessageTitle = `Other messages`;
othersMessage = [
{ label: `Communication ERROR!`,
screens: [
`&nbsp;`,
`Communication&nbsp;ERROR!`,
`Press&nbsp;&lt;OK&gt;&nbsp;to&nbsp;continue`,
`<br />`,
],
causes: [
`Vehicle fault, electrical part,`,`OBDMap software has expired,`,`Accessories bad connection.`,],
solutions: [
`Check if the battery is connected,`,`Check the electrical part of the vehicle, fuses, etc,`,`Check if the universal cable and A1 adapter are being used,`,`Check the OBDMap connection in the diagnostic socket and other connections,`,`Disconnect all the cables, wait for 10 seconds and connect it again,`,`Check the more recent update with the technical support, maybe this function has been altered.`,]
},

];
//Last Message
lastMsg = `If the above errors persist, or for other messages consult technical support`;
