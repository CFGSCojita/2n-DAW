
$("input").on("keyup", function() {
    let valor = $(this).val().toLowerCase();
    $("ul li").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(valor) > -1);
    })    
});

$(".boton-hamburguesa").on("click", function() {
    $("body").toggleClass("is-collapsed");
});