	MVC.Controller = class Controller {
	constructor(props) {
		this.eventHandler();
		this.model = new props.model(props.endpoint, props.contentElem);
		this.view = new props.view(props.contentElem);
	}

	eventHandler () {
		document.body.addEventListener('onLoadData', (event) => {
			this.view.updateView(event.detail);
		});
	}

	// TODO: Este metodo debe guardar la informacion enviado del formulario y agregarlo al objeto envios en la propiedad people
	savePerson () {

	}
};