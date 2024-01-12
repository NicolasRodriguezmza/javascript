import{crearPelicula } from "../models/peliculas.models";
import htmlElements from "../elements/html.elements";

let peliculas = [];

const mostrarPeliculas = ()=>{ // se muestran las peliculas

    

}

const agregarPeliculas = (event)=>{   //se agregan las peliculas
 
    let peliculaNueva = crearPelicula(htmlElements.peliculaInput.value);

    peliculas.push(peliculaNueva);

    localStorage.setItem("peliculas", JSON.stringify(peliculas));

    console.log(peliculas);

}

const eliminarPeliculas = () => {  //se eliminan las peliculas

}

export default{    //se exportan las funciones
    mostrarPeliculas,
    agregarPeliculas,
    eliminarPeliculas
    
}