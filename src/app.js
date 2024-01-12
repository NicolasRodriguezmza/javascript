   import htmlElements from "./elements/html.elements";
   import peliculasManager from "./manager/peliculas.manager";

   
export const app = () => {
 
    //ejecutamos la aplicacion
    console.log("Se ejecuta la aplicacion.");

    htmlElements.formularioParaAgregar.onsubmit = (event) => {

        event.preventDefault();

        peliculasManager.agregarPeliculas();

        console.log("Se ha agregado una pelicula.");


        
    }

}