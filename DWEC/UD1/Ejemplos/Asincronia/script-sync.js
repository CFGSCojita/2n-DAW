
// Simulación de un servidor con tiempo de espera
function fetchProductsSync() {
    
    const start = Date.now();

    while(Date.now() - start < 10000) {
        console.log("Cargando...");
    }
    return [
        { id:1, name:'Pelota de futbol', price:20},
        { id:2, name:'Raqueta de tenis', price:50}
    ];

}

// Mostrar los productos SIN asincronía.
function displayProducts() {
    const products = document.getElementById('products');
    products.innerHTML = "<p>Cargando productos....</p>";
    
    // Llamada bloqueante.
    const productsFunction = fetchProductsSync();

    products.innerHTML = productsFunction
        .map((p) => {
            return `<p>${p.name} - ${p.price}€</p>`    
        })
        .join("");
}

document.getElementById('addProductForm').addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("No se pueden añadir productos mientras se cargan los existentes.");
});

// Ejecutar.
displayProducts();
