let nombre  = 'luis';
let apellido = 'Santiago';
// function saludo( saludo){
// 	return `${getNombre()} ${saludo}`;
// }

let saludo = saludo => `${getNombre()} ${saludo}`;  //	funcion flecha

/*function getNombre(){
	return `${nombre} ${apellido}`;
	****otra forma ***
	let getNombre = () => { 
	return `${nombre} ${apellido}`;
	}
}*/
let getNombre = () => `${nombre} ${apellido}`;


//alert(saludo(' ve por agua o cafe'));

let persona = {
	nombre: 'Luis',
	apellido: 'Santiago',
	edad: 24,
	fuerza: null,
	sexo:'H',
	vivo: true,
	fechaNacimiento: new Date('1995-02-10').toUTCString(),
	hijo: [{
		nombre: 'luisito jr',
		apellido: 'Santiago',
		edad: 1,
		fuerza: 'super fuerte'
	},
	{
		nombre: 'alfredito jr',
		apellido: 'Santiago',
		edad: 1,
		fuerza: 'extremadamente fuerte'
	},
	{
		nombre: 'santiaguito jr',
		apellido: 'Santiago',
		edad: 10,
		fuerza: 'poco fuerte'
	}],
	direccion: {
		calle: 'Plutarco Elias Calles',
		numero: 14,
		colonia: 'Luis Donaldo Colosio'
	},


}

persona.hijo.forEach(hijoActual => console.log(hijoActual));


let nombreCompleto = `${persona.nombre} ${persona.apellido} tiene un ${persona.hijo[0].nombre} tiene ${persona.hijo[0].edad} año y es ${persona.hijo[0].fuerza}`;
document.write(nombreCompleto);
console.log(nombreCompleto);

/*CALLBACK*/

function saludarDia(texto){
	return `Buenos dias ${texto}`;
}

function saludarFinal(fnSaludo, nombre){
	let saludoCompleto = fnSaludo(nombre);

	return saludoCompleto;
}

console.log(saludarFinal(saludarDia, 'Luis :D'));


// 			CLASES

class SerVivo2{
	/*constructor(nombre, edad){
		this.nombre = nombre;
		this.edad = edad;
	}*/
	//	ARREGLO PARA RECORRER OBJETOS
	constructor (props){
		for(let key in props){
			this[key] = props[key];
		}
	}

	respirar(){
		return "Respirando...";
	}

	caminar(){
		return "Caminando...";
	}
}

const sv2 = new SerVivo2('Luis','24');
console.log(sv2);

class Persona extends SerVivo2{
	/*constructor(nombre, edad){
		super(nombre, edad);
	}*/

	constructor(props){
		super(props);
	}

	comer(){
		return 'Comiendo...';
	}
}

const p2 = new Persona(persona);
console.log(p2);






