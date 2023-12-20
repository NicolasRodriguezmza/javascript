
console.log("LISTADO DE PELICULAS DISPONIBLES.");

let estado = true;

let peliculaid = 1;
let peliculas = [];

class Pelicula{
    constructor(nombre){
        this.nombre=nombre;
        this.id = peliculaid;    
    }
}

const agregarPelicula = (pelicula) => {
    peliculas.push(pelicula);
    peliculaid ++;

}

const eliminarPelicula = (id)=>{

    let existe = peliculas.some( pelicula => pelicula.id == id);

    if(existe){
        peliculas = peliculas.filter(pelicula => pelicula.id !== id);
        alert("Se ha eliminado con exito!");
    }else{
        alert("No exite pelicula con ese ID.")
    }
}

const mostrarPelicula = () => {
    let nombresPeliculas = peliculas.map( pelicula => pelicula.id + " - Nombre: " + pelicula.nombre);

    if(nombresPeliculas.length > 0){
        alert(nombresPeliculas.join("\n"));
    }else{
        alert("No hay Peliculas agregadas.");
    }
 
}

const buscarPelicula = (id) => {

    let buscar = peliculas.some(pelicula => pelicula.id == id);

    if(buscar){
        peliculas = peliculas.find( pelicula => pelicula.id !== id);º

    }
}

const menuPrincipal = () => {

    while(estado){

   let opc = parseInt(prompt('Ingrese una opcion.'));
   console.log("1_ Mostrar Peliculas En grilla.");  
   console.log("2_ Agregar pelicula.");
   console.log("3_ Eliminar Pelicula.");
   console.log("4_ Salir.");

   switch(opc){
        case 1: mostrarPelicula();
        break;

        case 2: 
        let nombre = prompt("Ingrese el Nombre.");
        
        let pelicula = new Pelicula(nombre);
 
        agregarPelicula(pelicula);
        
        break;

        case 3:
            let idpeliculas = parseInt(prompt("Ingrese el ID de la Pelicula a eliminar."));
            eliminarPelicula(idpeliculas);

        break;

        case 4:
            console.log("Muchas Gracias!");
            estado=false;
        break;
    
   }
}

};

menuPrincipal();

