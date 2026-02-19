// 1. Afegir elements score amb text i botons de + i -
// 2. Sumar i restar emprant delegació.
// 3. Calcular total emprant .each

// Exemple:
// let arr = ["A", "B", "C"];

// $.each(arr, function(index, valor) {
//     console.log(index);
//     console.log(valor);
// });

// $(".score-item").each(function(i, v) {
//     // Codi.
// });

// let persona = {
//     nom: "Stefan",
//     modul: "DIW"
// };

// $.each(persona, function(clau, valor) {
//     console.log(clau);
//     console.log(valor);
// });

// Exercici:
$("#add").on("click", function() {
    let nova_fila = '<div class="score-item"> <span class="comptador">0</span> <button class="sumar">+</button> <button class="restar">-</button> </div>';

    $("#scores").append(nova_fila);
});

$("#scores").on("click", ".sumar", function() {
    let comptador = $(this).parent().find('.comptador');
    
    let valor_actual = parseInt(comptador.text());
    comptador.text(valor_actual + 1);
});

$("#scores").on("click", ".restar", function() {
    let comptador = $(this).parent().find('.comptador');
    
    let valor_actual = parseInt(comptador.text());
    comptador.text(valor_actual - 1);
});

$("#total").on("click", function() {
    let suma = 0;

    $(".comptador").each(function() {
        let valor = parseInt($(this).text());
        suma += valor;
    });

    $("#resultat").text("El resultat és: " + suma);
});