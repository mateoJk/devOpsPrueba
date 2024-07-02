

// const precioFinal = productos => productos.map(producto => ({nombre: producto.nombre, precio:producto.precio - (producto.precio / producto.descuento),}));

// const mayorA = (productos,price) => productos.filter(producto => producto.precio>price);

// const primerDesc = (productos,desc) => {
//     const busqProd = productos.find(producto => producto.descuento === desc);
//     if (busqProd){
//         return busqProd;
//     }else if(busqProd === undefined || busqProd === null){
//         return("No se han encontrado productos con ese descuento");
//     }
// }

// const precioDesc = precioFinal(productos);
// const mayoresA = mayorA(precioDesc,50);
// const descuentoEncontrado = primerDesc(productos,20);
// console.log(precioDesc);
// console.log(mayoresA);
// console.log(descuentoEncontrado);

 

// Dado un array de objetos que representan productos, donde cada objeto tiene las propiedades nombre, 
// precio y descuento,crea una función para calcular el precio final de cada producto después de aplicar el descuento, 
// luego filtrar solo los productos con un precio final mayor que 50, y finalmente utilice 
// una función para  encontrar el primer producto que tenga un descuento del 20%.

let productos = [
    { nombre: "Camisa", precio: 30, descuento: 10 },
    { nombre: "Pantalón", precio: 50, descuento: 15 },
    { nombre: "Zapatos", precio: 80, descuento: 20 },
    { nombre: "Chaqueta", precio: 100, descuento: 25 },
    { nombre: "Bufanda", precio: 20, descuento: 5 },
    { nombre: "Gorra", precio: 15, descuento: 0 },
    { nombre: "Calcetines", precio: 10, descuento: 0 },
    { nombre: "Reloj", precio: 120, descuento: 30 },
    { nombre: "Bolsa", precio: 40, descuento: 10 },
    { nombre: "Gafas de sol", precio: 60, descuento: 15 }
  ];

const precioFinal = productos => productos.map(producto => ({nombre: producto.nombre , precio:producto.precio = producto.precio - (producto.precio / producto.descuento)}))

const precioFinalMayorA = (productos,precio) => productos.filter(producto =>  producto.precio > precio)

const descuentoIgualA = (productos,descuento) => {
    const descuentoIgual = productos.find(producto => producto.descuento === descuento)
    if(descuentoIgual){
        return descuentoIgual
    }
    else{
        return "No se han encontrado productos con el descuento especificado"
    }
}

// 1
console.log("Productos con descuento ya aplicado: ")
const productosConDescuento = precioFinal(productos) 
console.log(productosConDescuento)

// 2
console.log("Productos con precio final mayor a 50: ")
const mayoresA = precioFinalMayorA(productosConDescuento, 50)
console.log(mayoresA)

// 3
console.log("Primer producto con descuento del 20%: ")
const primerDesc = descuentoIgualA(productos, 20)
console.log(primerDesc)

