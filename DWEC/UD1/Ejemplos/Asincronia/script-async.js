// Promise, async / await

// Simular un servidor con asincronía.
function fetchProductsAsync() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id:1, name:'Pelota de futbol', price:20},
                { id:2, name:'Raqueta de tenis', price:50}
            ])
        }, 3000); // Simulamos un retraso de 3 segundos.
    });
}

// Mostrar los productos con asincronía
async function displayProducts() {
    const products = document.getElementById('products');
    products.innerHTML = "<p>Cargando productos....</p>";
    
    // Llamada NO bloqueante.
    const productsFunction = await fetchProductsAsync();

    products.innerHTML = productsFunction
        .map((p) => {
            return `<p>${p.name} - ${p.price}€</p>`    
        })
        .join("");
}

document.getElementById('addProductForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById("productName").value;
    const price = document.getElementById("productPrice").value;

    // Simular guardado en servidor.
    await new Promise((resolve) => {
        setTimeout(resolve, 1000);
        console.log(`Producto añadido: ${name} - ${price}€`);
        // alert(`Producto añadido: ${name} - ${price}€`);
        document.getElementById('addProductForm').reset();

        displayProducts();
    });
});

// Ejecutar
displayProducts();
