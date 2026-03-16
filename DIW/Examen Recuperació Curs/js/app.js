
// Variables globals
let id = 0;
let contador = 0;

for (let i = 0; i < 4; i++) {
    id++;
    productCard(id);
}

function productCard(id) {
    let productCard = `
        <div>
            <img src="../assets/producte${id}.jpg" />
            <h4 class="font-bold">Producte <span>${id}</span></h4>
            <p class="text-gray-300">Descripció curta</p>
        </div>
    `

    $("#productGrid").append(productCard);
}

// Menú button
$("#menuBtn").on("click", function () {
    $("aside").toggleClass("mostra");
});

// Buttó per afegir producte
$("#addProduct").on("click", function () {
    
});