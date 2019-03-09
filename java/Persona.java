public class Persona extends SerHumano{
	 String nombre;
	 int edad;
	//sobre cargar
	/* public void caminar(boolean rapido){
		System.out.println("Estoy corriendo");
	}*/

 //Sobre escribir
	public void caminar(){
		System.out.println("Estoy corriendo");
	}

	public static void main (String arg[]){
		Persona luis = new Persona();
		luis.nombre="Santiago";
		luis.edad=24;
		luis.caminar();
		luis.respirar();
		luis.dormir();
	}
}