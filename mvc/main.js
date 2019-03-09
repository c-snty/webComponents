const controllerInst = new Controller({
	model: Persona,
	view: View,
	contentElem: document.querySelector('#contact_form'),
	endpoint: './models/persona.json'
});

/*const controllerInst = new Controller(Persona);
controllerInst.eventHandler();	
const personaInst = controllerInst.getPersona('./models/persona.json', "contact_form");

*/


//console.log(personaInst);

