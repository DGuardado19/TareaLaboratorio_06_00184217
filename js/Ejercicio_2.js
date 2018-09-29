class conversor{
    
    constructor(){}

    Longitud(u1, u2, me){
        let we
        if(u1 == "m" && u2 == "cm"){
            we = me*100;
        } else if(u1 == "cm" && u2 == "m"){
            we = me/100;
        } else if(u1 == "km" && u2 == "m"){
            we = me*1000;
        } else if(u1 == "m" && u2 == "km"){
            we = me/1000;
        } else if(u1 == "ft" && u2 == "m"){
            we = me*0.3048;
        } else if(u1 == "m" && u2 == "ft"){
            we = me/0.3048;
        } 
        return we;
    }

    Temperatura(u1, u2, me){
        let we;
        if(u1 == "c" && u2 == "f"){
            we = (me*1.8)+32; 
        } else if(u1 == "f" && u2 == "c"){
            we = (me-32)/1.8; 
        } else if(u1 == "k" && u2 == "f"){
            we = (me-273.15)*1.8 + 32; 
        } else if(un1 == "f" && u2 == "k"){
            we = (me-32)/1.8 + 273.15;
        } else if(u1 == "k" && u2 == "c"){
            we = me-273.15; 
        } else if(u1 == "c" && u2 == "k"){
            we = me+273.15; 
        } 
        return we;
    }

    convertir(me, de, a, tipo){
        switch(tipo){
            case 'L':
                var long = new conversor();
                console.log(long.Longitud(de, a, me));
                break;
            case 'T':
                var long = new conversor();
                console.log(long.Temperatura(de, a, me));
                break;
            default:
                console.log('NO tengo esa krnal, sorry');
                break;
        }
    } 
    
} 

var ja = new conversor(); 
ja.convertir(25, 'c', 'f', 'T');