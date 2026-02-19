document.addEventListener("DOMContentLoaded", function() {

});

$(document).ready(function() {
    // codi
});

$(function() {
    // codi
});

$(()=> {

});

// Selecció elements
document.querySelector("#id");
document.querySelector(".classe");
document.querySelector("header ul li:first-child");

console.log($("h1"));
console.log($("p"));
console.log($("p").length);

$("main p:first-of-type").hide();
$("main p:first-of-type").show();

// Manipulació DOM
// .text(), .html(), .val(), .attr()

// READ
console.log($("h1").text());
// WRITE
$("h1").html("<span>Hola</span>");

// $("a").attr.("href", "https://www.jo.com");

// Esdeveniments

$("input[type=button]").on(() => {
    // $("p").css("color", "red");

    // $("p").addClass("blau");
    // $("p").removeClass("blau");

    $("p").toggleClass("blau");

    console.log($("p").hasClass("blau"));
});

// let boto = $("input[type=button");

// boto.on("mouseover", () => {
//     console.log("hola")
//     $(this).addClass("color", "violet");
// });