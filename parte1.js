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

