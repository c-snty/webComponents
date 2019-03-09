'use strict'
var yo = {
				nombre: 'santi',
				edad: '24',

				completo: function(){
					let nombreCompleto  = "";
					let yoInterno = this;

					function completar(){
						nombreCompleto = `Desde una funcion interna ${yoInterno.nombre} ${yoInterno.edad}`;
						//nombreCompleto = "Interno " + yoInterno.nombre + " " + yoInterno.edad;
						return nombreCompleto;
					}
					return completar();
				}
			};

			let nc = yo.completo();
			console.log(nc);

			const boton = document.getElementById("enviar");
			let saludo = "Hola diste click";
			boton.addEventListener('click', function (e){
				e.preventDefault();
				console.log("Diste click al boton");
				
			});


			//eventos personalisados

			let miCustomEvent = new CustomEvent('miCustomEvent', {detail: yo, bubbles:true });
			document.body.addEventListener('miCustomEvent', function (e){
				console.log(e);
			});

			boton.dispatchEvent(miCustomEvent);

			document.body.addEventListener('click', function(e){
				console.log("Le diste click a mi evento");
			});


			document.addEventListener('mouseup', function(e){
				console.log(`${e.pageX}, ${e.pageY}`);
			});

			class Persona {
				constructor(nombre, apellido, email){
					this.nombre = nombre;
					this.apellido = apellido;
					this.email = email;
				}
				completo (){
					return `${this.nombre} ${this.apellido} ${this.email}`
				}
			}

			const per = new Persona('Luis', 'Santiago', 'luis@ids.com');
			console.log(per);
			console.log(per.completo());







