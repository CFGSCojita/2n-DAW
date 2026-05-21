
let id = 0;

let comptadorProductes = 0;

for (let i = 0; i < 4; i++) {
    id++;
    comptadorProductes++;
    $("#count").html(comptadorProductes);
    productCard(id);
}

function productCard(id) {
    let productCard = `<div class="rounded shadow p-2 hover:bg-gray-50">
        <img src="../assets/img/producte${id}.jpg" alt="Producte ${id}">
        <h3 class="font-semibold">Producte <span>${id}</span></h3>
        <p>Descripció curta</p>
        <button id="btn-favorit-${id}" class="btn-favorit">Favorit</button>
        <button class="btn-eliminar">Eliminar</button>
    </div>`;

    $('#productGrid').append(productCard);

    $(`#btn-favorit-${id}`).on("click", function() {
        $(this).closest('div').toggleClass("product-highlight");
    });
}

$("#menuBtn").on("click", function() {
    // if ($("aside").css("display") === "flex"){
    //     //hide
    // } else {

    // }
    // $("aside").show();
    // $("aside").css("display","flex");
    $("aside").toggleClass("show");
});

$("#addProduct").on("click", function() {
    id++;
    comptadorProductes++;
    $("#count").html(comptadorProductes);
    productCard(id);
});


$("#productGrid").on("click", ".btn-eliminar", function(e) {
    comptadorProductes--;
    $("#count").html(comptadorProductes);
    $(this).closest('div').fadeOut("slow", function() {
        $(this).remove();
    });
});