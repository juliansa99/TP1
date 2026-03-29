const productos = [
  { id: 1, nombre: "Remera", precio: 1500, categoria: "Ropa" },
  { id: 2, nombre: "Pantalón", precio: 2500, categoria: "Ropa" },
  { id: 3, nombre: "Zapatillas", precio: 8000, categoria: "Calzado" },
  { id: 4, nombre: "Gorra", precio: 1200, categoria: "Accesorios" },
  { id: 5, nombre: "Campera", precio: 9500, categoria: "Ropa" }
];

console.log("EJERCICIO 1.1")
console.log(productos[0].nombre);

console.log("EJERCICIO 1.2")
for (const producto of productos) {
  console.log(`Producto: ${producto.nombre} - Precio: $${producto.precio}`);
}

console.log("EJERCICIO 1.3")
productos.forEach(producto => {
  console.log(`Producto: ${producto.nombre} - Precio: $${producto.precio}`);
});


console.log("EJERCICIO 2.4")
const nombres = productos.map(producto => producto.nombre);
console.log(nombres)

console.log("EJERCICIO 2.5")
const ropa = productos.filter(producto => producto.categoria == "Ropa")
console.log(ropa)

console.log("EJERCICIO 2.6")
const mayoresA3000 = productos.filter(producto => producto.precio >= 3000)
console.log(mayoresA3000)

console.log("EJERCICIO 2.7")
const encontrado = productos.find(producto => producto.nombre == "Gorra")
console.log(encontrado)


console.log("EJERCICIO 3.8")
console.log(productos.some(producto => producto.precio >= 10000))

console.log("EJERCICIO 3.9")
console.log(productos.every(producto => producto.precio >= 1000));

console.log("EJERCICIO 3.10")
console.log(nombres.includes("Campera"));

console.log("EJERCICIO 4.11")
const ordenados = [...productos].sort((a, b) => a.precio - b.precio);
console.log(ordenados);


console.log("EJERCICIO 4.12")
const mensajes = productos.map(producto =>
  `El producto ${producto.nombre} cuesta $${producto.precio} y pertenece a la categoría ${producto.categoria}.`
);

console.log(mensajes);
[
  "El producto Remera cuesta $1500 y pertenece a la categoría Ropa.",
  "El producto Pantalón cuesta $2500 y pertenece a la categoría Ropa",
  "El producto Zapatillas cuesta $8000 y pertenece a la categoría Calzado",
  "El producto Gorra cuesta $1200 y pertenece a la categoría Accesorios",
  "El producto Campera cuesta $9500 y pertenece a la categoría Ropa"
]

console.log("EJERCICIO 4.13")
const productos2 = [
  { id: 6, nombre: "Buzo", precio: 2500, categoria: "Ropa" },
  { id: 7, nombre: "Medias", precio: 500, categoria: "Ropa" },
  { id: 8, nombre: "Ojotas", precio: 5000, categoria: "Calzado" },
  { id: 9, nombre: "Reloj", precio: 2200, categoria: "Accesorios" },
  { id: 10, nombre: "Camperón", precio: 12500, categoria: "Ropa" }
]

const combinado = [...productos, ...productos2]
console.log(combinado)
