MVC.Model = class Persona {
	constructor(endpoint, elem) {

		fetch(endpoint)
		.then(response => {
			return response.json();
		})
		.then(json => {
			const onloadData = new CustomEvent("onLoadData", { detail: json , bubbles: true });

			elem.dispatchEvent(onloadData);
		})
		.catch(console.log)
	}
}


/** @TODO: Almacenar las personas que enviamos desde el formuario e imprimirlo en la consola
class Envios {
	constructor() {
		this.people = []
	}
} */