class View {

	constructor(elem){
		this.elem = elem;
	}

		viewDatos(datos) {
		//console.log(datos);
		for(let key in datos){
			const nodeFilds = this.elem.querySelectorAll(`[name= '${key}']`);

			if (nodeFilds.length > 1 ) {

				const fields = Array.from(nodeFilds); //lo convertimos en un array

				const correctFild = fields.find(elem => {
					return elem.value === datos[key];
				});

				correctFild.checked = true;

			}else if(nodeFilds.length > 0){
				nodeFilds[0].value = datos[key];

			}
		}
		
	}
}