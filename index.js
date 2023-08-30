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
     const PRODUCTO_UNO = 200 ;
     const PRODUCTO_DOS = 300 ;
     const PRODUCTO_TRES = 400 ;
    
     cant = prompt("Ingrese cantidad");
     console.log(cant);

     producto= prompt("Ingrese producto 1-Conjunto / 2-Remera / 3-Campera ");
     console.log(producto);

        // switch para la seleccion del producto 
        switch(producto){
            case 1:
                resultado = PRODUCTO_UNO * cant;
                console.log(resultado);
                break;

            case 2:
                resultado= PRODUCTO_DOS * cant;
                console.log(resultado);
                break ;

            case 3:
                resultado= PRODUCTO_TRES * cant;
                console.log(resultado);
                break;

            default:
                console.log(' no es ninguno de los anteriores');
        }


    numero= prompt("Ingrese 1 para realizar otra compra o 2 para finalizar");
    console.log(numero); 
    
}while(parseInt(numero) && numero == 1);
