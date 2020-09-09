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

/* Sesion 2
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
} */


/* SESION 3

function nacimiento(){

    nombre = prompt("cual es tu nombre");
    edad = Number(prompt("que edad tienes"));
    año = 2020 - edad; 

    resultado = `Hola tu nombre es ${nombre} y\ tu año de nacimiento es ${año}`;

    return resultado

}

console.log(nacimiento()); */

// var num1 = Number(prompt("Ingresa el primer numero"));

// var num2 = Number(prompt("Ingresa el segundo numero"));

// function comparative(){


//     if(num1 > num2){
        
//         return `${num1} es mayor a ${num2}`;

//     }else if(num1 < num2){

//         return `${num2} es mayor a ${num1}`;

//     }else{

//         return `${num1} es igual a ${num2}`;
//     }

// }

// console.log(comparative());


// var queHaces = function(trabajo, nombre){
//     switch(trabajo){
//         case 'programador':
//             return nombre + "Debes de tener mucha paciencia";

//         case 'diseñador':
//             return nombre + "Para ser diseñador necesitas ser creativo.";

//         default:
//             return nombre + "No se que es " + trabajo + "pero cuentame mas";
//     }

// }

// console.log(queHaces('arquitecto', 'Sebastian '));

// (function calculaEdad(nacimiento, nombre){
//     let edad = 2020 - nacimiento;
//     let infoUsuario = edad + nombre; 
//     console.log(infoUsuario);
//     return infoUsuario;
// }(1996, " Seba"));


function fibonacci(num) {
    if (num <= 1) return 1;
  
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
  
  function fibonacciSequence(limit) {
    if(limit < 1) return console.log('Limit must be greater than 0');
  
    for(var i = 0; i < limit; i++ ) {
      console.log( fibonacci(i) );
    }
  }

  console.log(fibonacciSequence(9));