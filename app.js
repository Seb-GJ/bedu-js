/* var hora = prompt("¿Que hora tienes?");
var saludo; 

if (hora >= 1 && hora < 12){
    saludo = "Buenos días";

}else if(hora >= 12 && hora < 20) {
    saludo = "Tardes ya";

}else if (hora >= 20 && hora <= 24){
    saludo = "Se te hizo de noche";

} else{
    saludo = "hora no válida";
}

console.log(saludo);
 */

 /* var dia = prompt("ingresa un numero para saber dia de la semana");
 var dia = Number(dia);
 var texto;
 

 switch(dia){

     case 0:
         texto = "lunes";
         break;

         case 1:
             texto ="martes";
             break;

        case 2:
            texto ="miercoles";
            break;

        case 3:
            texto ="jueves";
            break;

        case 4:
            texto ="viernes";
            break;

        case 5:
            texto ="sabado";
            break;

        case 6:
            texto ="domingo";
            break;

        default:
            texto ="no existe tu dia brother";
 }

 console.log(texto);
 */


/* var speed = 46; 
var message; 

if (speed > 45){
    message = "you're really fast";

}else{
    message="you can do better";
}

console.log(message); */

/* var speed = 44; 
var mensaje = speed > 45 ? "You're super fast" : "You can do better"; 
console.log(mensaje);  */

/* for (var i = 0; i <= 50; i++){
    console.log("Hello " + i);
}  */

var materias = ["Español", "Mate", "Historia", "Ingles"]
var texto = "";
var mor;

for (var mor = 0; mor <= materias.length ; mor++){
    texto += materias[mor] + "<br>";
    console.log(texto);
   
}   

for(var i = 1; i <= 50; i++ ){

    i = i++ + 1
   console.log(i)
}

