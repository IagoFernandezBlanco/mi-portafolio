let menuVisible = false;
// Función que oculta el menu o lo muestra

function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="",
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    // oculta el menu al seleccionar una imagen
    document.getElementById("nav").classList ="";
    menuVisible= false;
}

// Funció que aplica las animaciones a las habilidades
// REVISAR POR QUE NO FUNCIONA LA BARRA DE HABILIDADES
function efectoHabilidades(){
    var skills = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >=300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("java");
        habilidades[1].classList.add("c-plus-plus");
        habilidades[2].classList.add("php");
        habilidades[3].classList.add("linux");
        habilidades[4].classList.add("git");
        habilidades[5].classList.add("html");
        habilidades[6].classList.add("comunicacion");
        habilidades[7].classList.add("autodidactismo");
        habilidades[8].classList.add("trabajo-en-equipo");
        habilidades[9].classList.add("profesionalidad");
        habilidades[10].classList.add("estres");
        habilidades[11].classList.add("compañerismo");
    }
}

//detecto el scrolling para apalicar la animación
window.onscroll = function(){
    efectoHabilidades();
}