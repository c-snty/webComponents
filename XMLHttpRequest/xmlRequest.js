const request = new XMLHttpRequest();

request.open('GET', './persona.json', true);


request.addEventListener('load', () => {
	if (request.status === 200) {

	console.log(JSON.parse(request.response));
	}else{
		console.log(request.status, request.statusText);
	}
});

//error

request.addEventListener('error', () => {
	console.log('Algun error en la Web');
});

request.send(null);

/* peticiones asincronas: no sabemos cuando termina, mienras uno puede hacer otra cosa 
	CALLBACK: funcion que no se ejecuta inmediatamente solo cuando la requeramos (FUNCION dentro de otra funcion)
	se ejecuta cuando se dispara el evento
	PROMESAS: para manejar llamadas azincronas sin hacer muchos callbacks * ESTADOS: RESUELTO(fullfilled), PENDIENTE Y RECHAZADO *

*/


//CON PROMESAS
function getRes(url){
	const miPromesa = new Promise(function(resolve, reject){
		const request = new XMLHttpRequest();

		request.open('GET', url, true);


		request.addEventListener('load', () => {
			if (request.status === 200) {

			resolve(request.response);
			}else{
				reject(request.statusText);
			}
		});

		//error

		request.addEventListener('error', () => {
			reject('Algun error en la Web');
		});

		request.send(null);

	});
	return miPromesa;
}
getRes('./persona.json')

.then(asd => {
	return JSON.parse(asd);
})
.then(snti =>{
	console.log(snti);
})
.catch(errorws => {
	console.log(errorws);
})










