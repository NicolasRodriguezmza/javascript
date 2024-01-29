import{crearPelicula } from "../models/peliculas.models";
import htmlElements from "../elements/html.elements";
import Swal from "sweetalert2";

let peliculas = JSON.parse(localStorage.getItem("peliculas")) || [];


const mostrarPeliculas = () => {

    htmlElements.listaPeliculas.innerHTML = "";

    peliculas.forEach( pelicula => {

        let tarjeta = document.createElement("div");

        tarjeta.className = "contenedor";

        tarjeta.innerHTML = `<p class = "peliculass" >${pelicula.nombre}</p>`;
   
        //botones

        let btnContenedor = document.createElement("div"); //se crea el espacio para botones
        let btnEliminar = document.createElement("button"); //se crea el boton


        btnEliminar.innerText = "Eliminar";                //se le asigna el nombre del boton
        btnEliminar.className= "botonParaEliminar";        //se le asigna los estilos

        btnEliminar.onclick =() => eliminarPeliculas(pelicula.id);

        //se agrega al conteneddor creado "tarjeta"

        btnContenedor.appendChild(btnEliminar);
        tarjeta.appendChild(btnContenedor);

       

        htmlElements.listaPeliculas.appendChild(tarjeta);
        

        
    });


    console.log(peliculas);

}

const agregarPeliculas = (event)=>{   //se agregan las peliculas
 
    let peliculaNueva = crearPelicula(htmlElements.peliculaInput.value);

    peliculas.push(peliculaNueva);

    localStorage.setItem("peliculas", JSON.stringify(peliculas));

    console.log(peliculas);
    mostrarPeliculas();

}

const eliminarPeliculas = (idPelicula) => {  //se eliminan las peliculas

    Swal.fire({
        title: "¿Deseas eliminar la pelicula?",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Si",
        cancelButtonText: "No",
        
    }).then ( resp => {
        if(resp.isConfirmed){
            
        peliculas = peliculas.filter ((pelicula) => pelicula.id !== idPelicula);
        localStorage.setItem("peliculas", JSON.stringify(peliculas));
        mostrarPeliculas();

        Swal.fire({
            title: "Eliminada con exito",
            icon: "success",
        })

        }

    })



}

export default{    //se exportan las funciones
    mostrarPeliculas,
    agregarPeliculas,
    eliminarPeliculas
    
}