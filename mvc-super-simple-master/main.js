new MVC.Controller({
	model: MVC.Model,
	view: MVC.View,
	contentElem: document.querySelector('#contact_form'),
	endpoint: './models/persona.json'
});