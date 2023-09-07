// ------ ALGORITMOO CON UN CONDICIONAL ------


function Fnotificacion() {

    let notif= prompt("¿Quieres recibir notificaciones de los proximos descuentos?: SI/ NO");

    if(notif == "SI"){
        let email= prompt("ingrese su email");
    }
    else{
        console.log ("Muchas gracias!");
    }
}

Fnotificacion();

// ---- ALGORITMO POR CONDICIONAL DOWHILE-----


let numero = 0;


do{
    let cant = 0 ;
    let producto = 0;
    let resultado = 0;
    const productoPrecio= [200 , 300 , 400];

    producto= prompt("Ingrese producto pantalon / remera / campera ");
    console.log(producto);

    

        // switch para la seleccion del producto 
        switch(producto){
            case "pantalon":

                cant = prompt("Ingrese cantidad");
                console.log(cant);  

                resultado = productoPrecio[0] * cant;
                console.log(resultado);

                
                break;

            case "remera":

                cant = prompt("Ingrese cantidad");
                console.log(cant);

                resultado = productoPrecio[1] * cant;
                console.log(resultado);
                break ;

            case "campera":

                cant = prompt("Ingrese cantidad");
                console.log(cant);

                resultado = productoPrecio[2] * cant;
                console.log(resultado);

               
                break;

            default:
                console.log(' no es ninguno de los anteriores');
        }


    numero= prompt("Ingrese 1 para realizar otra compra o 2 para finalizar");
    console.log(numero); 

    resultado = 0;
    cant = 0;
    

    
}while(parseInt(numero) && numero == 1);


