function serVivoDef(props){
	let that = {};

	let enamoradoDe = "Elizabetha :3";
//Muestra los datos
	// for(let key in props){
	// 	that[key] =  props[key];
	// }

	that.getNombre = function(){
		return `${props.nombre} ${props.apellido}`;
	};

	that.getEnamoradoDe = function (){
		return enamoradoDe;
	};
	return that;


};

let serVivo = serVivoDef({ nombre: "Luisillo", apellido: "Santiaguiño", edad: 24});

console.log(serVivo);
console.log(serVivo.getEnamoradoDe());



let persona = (function(props){
	let that = serVivoDef(props);

	that.comer = function(){
		return `${props.nombre} està comiendo...`;
	};

	return that;


})({ nombre: "Alfredo", apellido:"Rosario", edad: 24});
console.log(persona);
console.log(persona.comer());