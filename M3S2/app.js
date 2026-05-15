const productos = [
  {
    id: 1,
    nombre: "Laptop",
    precio: 2500
  },

  {
    id: 2,
    nombre: "Mouse",
    precio: 80
  },

  {
    id: 3,
    nombre: "Teclado",
    precio: 150
  }
];


console.log("VALIDACIÓN DE PRODUCTOS");

productos.forEach((producto) => {

  // Validar que tenga id
  if (!producto.id) {
    console.log("El producto no tiene id");
  }

  // Validar que tenga nombre
  if (!producto.nombre) {
    console.log("El producto no tiene nombre");
  }

  // Validar que tenga precio
  if (!producto.precio) {
    console.log("El producto no tiene precio");
  }

});



// Crear Set con números repetidos
const numeros = new Set([1, 2, 2, 3, 4, 4, 5]);

// Mostrar Set
console.log("SET ORIGINAL");
console.log(numeros);

// Agregar número
numeros.add(6);

// Verificar si existe un número
console.log(numeros.has(3));

// Eliminar número
numeros.delete(2);

// Recorrer Set
console.log("RECORRER SET");

for (const numero of numeros) {
  console.log(numero);
}




const categorias = new Map();

// Relacionar categoría con producto
categorias.set("Tecnología", "Laptop");
categorias.set("Accesorios", "Mouse");
categorias.set("Periféricos", "Teclado");




// Recorrer objeto con for...in
console.log("RECORRER OBJETOS");

productos.forEach((producto) => {

  for (const propiedad in producto) {
    console.log(propiedad + ": " + producto[propiedad]);
  }

});


// Object.keys()
console.log(Object.keys(productos[0]));

// Object.values()
console.log(Object.values(productos[0]));

// Object.entries()
console.log(Object.entries(productos[0]));


// Recorrer Map con forEach
console.log("RECORRER MAP");

categorias.forEach((valor, clave) => {
  console.log(clave + ": " + valor);
});



// Lista completa de productos
console.log("LISTA DE PRODUCTOS");
console.log(productos);

// Lista de números únicos
console.log("NÚMEROS ÚNICOS");
console.log(numeros);

// Categorías y productos
console.log("CATEGORÍAS");

categorias.forEach((valor, clave) => {
  console.log(clave + " -> " + valor);
});