function SerVivo(nombre, edad){
	this.nombre = nombre;
	this.edad = edad;

}

SerVivo.prototype.respirar = function(){
	return 'Respirando...';
}

SerVivo.prototype.caminar = function(){
	return 'Caminando...';
}

function Persona(nombre ,edad){
	SerVivo.call(this, nombre, edad);
}

Persona.prototype = Object.create(SerVivo.prototype);

Persona.prototype.comer = function (){
	return 'Comiendo...';
}

const p = new Persona('Luis', 2444);
console.log(p);
console.log(p.comer());

document.write('<h1>'+p.comer + '</h1>');