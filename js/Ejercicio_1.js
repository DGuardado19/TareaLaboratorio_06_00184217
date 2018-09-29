var VentasRealizadas = [];
var Prod = [];
function Ejercicio12(codigo, descripcion, tipo, costo, precio, stock) {
    this.codigo = codigo;
    this.descripcion = descripcion;
    this.tipo = tipo;
    this.costo = costo;
    this.precio = precio;
    this.stock = stock;
}

function Agregar(a, b, c, d, e, f) {
    var Productos = new Ejercicio12(a, b, c, d, e);
    Prod.push(Productos);

}

function Modificar() {
    var cod = prompt("COdigo que deseaa modificar ");
    for (let x of Prod) {
        if (x.codigo == cod) {
            x.stock = prompt("Ingrese el nuevo valor del precio: ");
        }
    }
}

function Registrar() {
    var c = prompt("COdigo del producto vedido: ");
    for (let x of Prod) {
        if (x.codigo == c) {
            if (x.stock == 0) {
                console.log("Ya no hay stock");
            }
            else {
                VentasRealizadas.push(x.precio);
                x.stock -= 1;
            }
        }
    }
}

function Promedio() {
    var sum = 0;
    if (VentasRealizadas.length > 0) {
        for (let i of VentasRealizadas) {
            sum = sum + i;
        }
        let prom = sum / VentasRealizadas.length;
        console.log(prom);
    }
    else {
        console.log("AUn no se vende nada");
    }
}

function Mostrar() {
    var aux = 0;
    for (let i of Prod) {
        if (i.stock == 0) {
            console.log(i.tipo);
            aux += 1;
        }
    }
    if (aux == 0) {
        console.log("Existe stock para todos los productos");
    }
}

function menu() {
    var bandera = true;
        var variable = parseInt(prompt("'1-Agregar\n 2- modificar  \n 3- registrar venta  \n 4- promedio \n 5- Mostrar todos \n 6  - Salir'"));
        switch (variable) {
            case 1:
                var a = prompt("codigo: ");
                var b = prompt("describe el producto: ");
                var c = prompt("tipo de producto: ");
                var d = prompt("precio");
                var e = prompt("pa vender: ");
                var f = prompt("stock qe queda: ");
                Agregar(a, b, c, d, e, f);
                menu();
                break;
            case 2:
                Modificar();
                menu();
                break;
            case 3:
                Registrar();
                menu();
                break;
            case 4:
                Promedio();
                menu();
                break;
            case 5:
                Mostrar();
                menu();
                break;
            case 6:
                bandera = false;
                break;
            default:
                console.log("NO tengo esta opcion wey, sorry");
                menu();
                break;
        }
    }


menu();