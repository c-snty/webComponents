	class Controller {
		constructor(props){
		this.eventHandler();
		this.model = new props.model(props.endpoint, props.contentElem);
		this.view = new props.view(props.contentElem);
		}
		eventHandler(){
		document.body.addEventListener('onloadData', (event) =>{
		this.view.viewDatos(event.detail);
		});
		}


		// TODO: Este metodo debe guardar la informacion enviado del formulario y agregarlo al objeto envios en la propiedad people
		savePerson () {

		}


	}/*class Controller {
	constructor(model) { 
		this.model = model;
	}

	getPersona (endpoint, idElem) {
		return new this.model(endpoint, idElem);
	}

	eventHandler(){ //recibe o escucha los eventos 
		document.body.addEventListener('onloadData', (event) =>{
			
			this.viewDatos(event.detail) // this hace referencia donde este declarado en este caso al controller
		});
	}


	viewDatos(datos){

		//console.log(datos);
		for(let x in datos){
			let nodeFilds = document.querySelectorAll(`[name= '${x}']`);

			if (nodeFilds.length > 1 ) {

				const fields = Array.from(nodeFilds);

				const correctFild = fields.find(elem => {
					return elem.value === datos[x];
				});

				correctFild.checked = true;

			}else if(nodeFilds.length > 0){
				nodeFilds[0].value = datos[x];

			}
		}
		
	} */




