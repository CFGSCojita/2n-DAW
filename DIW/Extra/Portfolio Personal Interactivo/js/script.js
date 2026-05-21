
$(".btn-todos").on("click", function() {
    $(".proyecto").fadeIn();
});

$(".btn-diseño").on("click", function() {
    $(".proyecto").fadeOut();
    $(".diseño").fadeIn();
});

$(".btn-codigo").on("click", function() {
    $(".proyecto").fadeOut();
    $(".codigo").fadeIn();
});