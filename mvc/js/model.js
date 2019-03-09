class Persona {
	cosntructor(endpoint, elem){
	
	fetch(endpoint)
	.then(response => {
	return response.json();
	})
	.then(json => {
	const onloadData = new CustomEvent("onloadData", { 	detail: json, bubbles: true});
	elem.dispatchEvent(onloadData);
	})
	.catch(console.log)
	}
}
/*class Persona {
	constructor(endpoint, idElem) { // controler encuentra el constructor enviamos datos
		this.endpoint = endpoint;
		const elem = document.getElementById(idElem);

		fetch(endpoint) // hace peticiones a servicio
		.then(response => { // llamada asincrona se ejecuta y puede seguir el funcinamiento
			return response.json();
		})


		.then(json => {
			const onloadData = new CustomEvent("onloadData", {detail: json, bubbles: true}); // creamos un evento

			elem.dispatchEvent(onloadData);
		})
		.catch(console.log)
	}
}*/






/* @TODO: Almacenar las personas que enviamos desde el formuario e imprimirlo en la consola
class Envios {
	constructor() {
		this.people = []
	}
} */	