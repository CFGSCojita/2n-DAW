
// Cream una funció per comprovar si un valor és numèric
function isNumeric(valor) {
    return !isNaN(valor) && !isNaN(parseFloat(valor)); // Retornem true si és numèric, false en cas contrari.
}

// Cream una funció per calcular la suma dels dos números introduïts.
function calcularSuma() {

    // Obtenim els valors dels camps d'entrada i els guardem en una variable.
    let n1 = $("#num1").val(); 
    let n2 = $("#num2").val();

    // Estructura de control 'if'.
    // Si ambdós valors són numèrics, calculem la suma.
    // Si no, mostrem un missatge d'error.
    if (isNumeric(n1) && isNumeric(n2)) {

        // Convertim els valors a tipus numèric (float).
        n1 = parseFloat(n1); 
        n2 = parseFloat(n2);

        let suma = n1 + n2; // Calculem la suma i guardem el resultat en una variable.

        $("#resultat").text(suma); // Mostrem el resultat a l'usuari.

        // Eliminem qualsevol classe d'error prèviament afegida.
        $("#num1").removeClass("error"); 
        $("#num2").removeClass("error");
        $("#resultat").removeClass("error");
    } else {
        $("#resultat").text("Un dels valors introduïts no és un número."); // Mostrem missatge d'error.

        // Afegim una classe d'error als camps d'entrada i al resultat.
        $("#num1").addClass("error");
        $("#num2").addClass("error");
        $("#resultat").addClass("error");
    } 

}

$("#btnCalcular").on("click", calcularSuma); // Assignem l'esdeveniment 'click' al botó per calcular la suma quan es prem.
$("#num1, #num2").on("input", calcularSuma); // Assignem l'esdeveniment 'input' als camps d'entrada per calcular la suma en temps real quan l'usuari escriu.