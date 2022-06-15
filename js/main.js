//Base de Carga 
class Books {
    constructor(libro, id, precio, genero, stock) {
        this.libro = libro;
        this.id = id;
        this.precio = precio;
        this.genero = genero;
        this.stock = stock;
    }

    vender(cantidad) {
        this.stock = this.stock - cantidad;
    }
}

//Arrays para los productos
const romances = [];
const dramas = [];
const comedias = [];

//Stock de productos por categoria
//ROMANCES
romances.push(new Books("Una noche en Venecia", 1, 15.50, "Romance Medieval", 85));
romances.push(new Books("Love in Paris", 2, 11.99, "Clasico del Romance", 7));
romances.push(new Books("Locura de Amor", 3, 12.87, "Romance Comico", 89));
romances.push(new Books("Frank", 4, 22.22, "Romance Asiatico", 15));
//DRAMAS
dramas.push(new Books("Crimenes y Poder", 5, 9.99, "Dramas Criminales", 23));
dramas.push(new Books("Tragedia en el Nilo", 6, 10.98, "Dramas Medio Oriente", 5));
dramas.push(new Books("Caidas al vacio", 7, 21.29, "Dramas Psicologia", 41));
//COMEDIAS
comedias.push(new Books("Reir, ¿Fallar? y Soñar", 8, 17.35, "Comedia y Sensualidad", 9));
comedias.push(new Books("Anotomia de una Carcajada", 9, 41.99, "Comedia General", 2));


//Recorrer Arrays
for (const romance of romances) {
    alert("ID (" + romance.id + ") - " + romance.genero + ": " + romance.libro + " - Precio: $" + romance.precio);
}
for (const drama of dramas) {
    alert("ID (" + drama.id + ") - " + drama.genero + ": " + drama.libro + " - Precio: $" + drama.precio);
}
for (const comedia of comedias) {
    alert("ID (" + comedia.id + ") - " + comedia.genero + ": " + comedia.libro + " - Precio: $" + comedia.precio);
}

//Calculo del precio final
function calcularPrecio(precioLibro, cantidadLibro, costoEnvio) {
    return ((precioLibro * 1.21) * cantidadLibro) + costoEnvio;
}

//Solicitar ID y lo almaceno en una nueva variable
let libroSeleccionado = parseInt(prompt("Ingrese el ID de su proxima lectura:"));
const romanceBuscado = romances.find(romance => romance.id === libroSeleccionado);
const dramaBuscado = dramas.find(drama => drama.id == libroSeleccionado);
const comediaBuscado = comedias.find(comedia => comedia.id == libroSeleccionado);

//Solicito de cantidad de libros
let cantidad = parseInt(prompt("Ingrese la cantidad de unidades que desea:"));

//Costo de envio
const envio = 3;

//Salidas de consola indicando el precio
if (libroSeleccionado <= 0) {
    alert("Ingresa un ID valido");
} else if (libroSeleccionado <= 4) {
    alert("Tu compra tiene un precio de: $" + calcularPrecio(romanceBuscado.precio, cantidad, envio));
    alert("Elegiste un " + romanceBuscado.genero + " de nombre " +  romanceBuscado.libro + "\nQuedan: " + (romanceBuscado.stock - 1) + " Libros." + "\n¡Disfruta tu compra!")
    romanceBuscado.vender(cantidad);
} else if (libroSeleccionado <= 7) {
    alert("Tu compra tiene un precio de: $" + calcularPrecio(dramaBuscado.precio, cantidad, envio));
    alert("Elegiste: " + dramaBuscado.genero + " de nombre " + dramaBuscado.libro + "\nQuedan: " + (dramaBuscado.stock - 1) + " Libros." + "\n¡Disfruta tu compra!")
    dramaBuscado.vender(cantidad);
} else if (libroSeleccionado <= 9) {
    alert("Tu compra tiene un precio de: $" + calcularPrecio(comediaBuscado.precio, cantidad, envio));
    alert("Elegiste: " + comediaBuscado.genero + " de nombre " + comediaBuscado.libro + "\nQuedan: " + (comediaBuscado.stock - 1) + " Libros." + "\n¡Disfruta tu compra!")
    comediaBuscado.vender(cantidad);
} else {
    alert("Ingresa un ID valido");
}