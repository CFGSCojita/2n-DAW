// Empram el mètode 'on()' de jQuery per afegir un gestor d'esdeveniments al botó de crear post-it:
$("#btnCrearPostit").on("click", () => {
    const esVermell = Math.random() > 0.5; // Assignam aleatòriament el color del post-it. 50% vermell, 50% blau.

    const color = esVermell ? "bg-red-500" : "bg-blue-500"; // Determinam la classe CSS segons el color i guardam el color triat en una variable.

    // Cream el nou post-it com un element jQuery i emprant Tailwind per a l'estilització:
    let nouPostit = $(`
        <div class="postit w-fit min-w-[12rem] max-w-[18rem] min-h-[8rem] h-auto ${color} text-black m-2 border border-black flex flex-col shadow-lg">
            <div class="handle h-7 bg-black/20 cursor-move flex justify-between px-2 items-center gap-1">
                
                <textarea class="input-titol bg-transparent border-none outline-none resize-none text-[15px] font-bold text-black/80 placeholder:text-black/40 overflow-hidden min-w-[2rem] w-[96px] mt-1 whitespace-nowrap" 
                        placeholder="Títol..." rows="1"></textarea>

                <div class="flex items-center gap-1">
                    <span class="btn-min text-black cursor-pointer font-black text-xl hover:text-white -translate-y-[7px]">🗕</span>
                    <span class="btn-max text-black cursor-pointer font-bold text-lg hover:text-white -translate-y-[1px]">🗖</span>
                    <span class="btn-tancar text-black cursor-pointer font-bold text-base hover:text-white">X</span>
                </div>
            </div>

            <div class="p-3 flex-grow">
                <textarea class="w-full h-full text-black bg-transparent resize-none outline-none overflow-hidden" 
                        placeholder="Escriu aquí..."></textarea>
            </div>
        </div>
    `);

    // Seleccionam tots els elements 'textarea' dins el nou post-it i afegim un gestor d'esdeveniments per ajustar la mida automàticament:
    nouPostit.find("textarea").on("input", function () {

        // Estructura de control 'if'.
        // Si l'element actual té la classe 'input-titol', ajustam l'amplada automàticament.
        // Si no, només ajustam l'alçada.
        if ($(this).hasClass("input-titol")) {
            $(this).css("width", "auto"); 
            $(this).css("width", this.scrollWidth + "px");
        }

        $(this).css("height", "auto"); // Restablirem l'alçada a 'auto' abans de calcular la nova alçada.
        $(this).css("height", this.scrollHeight + "px"); // Ajustam l'alçada segons el contingut.
    });

    // Seleccionam el botó de minimitzar i afegim un gestor d'esdeveniments per ocultar el contingut del post-it:
    nouPostit.find(".btn-min").on("click", function () {
        const contingut = nouPostit.find(".p-3"); // Seleccionam el contingut del post-it (la part de padding 3 concretament).

        // Empram el mètode 'slideUp()' de jQuery per ocultar el contingut amb una animació suau:
        contingut.slideUp(400, function () {
            nouPostit.css("min-height", "2.5rem"); // Ajustam l'alçada mínima del post-it quan està minimitzat.
            nouPostit.addClass("opacity-50"); // Eliminam la classe per assegurar que el post-it manté l'opacitat correcta després de minimitzar.
        });
    });

    // Seleccionam el botó de maximitzar i afegim un gestor d'esdeveniments per mostrar el contingut del post-it:
    nouPostit.find(".btn-max").on("click", function () {
        const contingut = nouPostit.find(".p-3"); // Seleccionam el contingut del post-it (la part de padding 3 concretament).

        // Empram el mètode 'slideDown()' de jQuery per mostrar el contingut amb una animació suau:
        contingut.slideDown(400, function () {
            nouPostit.css("min-height", "8rem"); // Restablirem l'alçada mínima del post-it quan està maximitzat.
            nouPostit.removeClass("opacity-50"); // Afegim una classe per assegurar que el post-it manté l'opacitat correcta després de maximitzar.
        });
    });

    // Seleccionam el botó de tancar i afegim un gestor d'esdeveniments per eliminar el post-it amb confirmació:
    nouPostit.find(".btn-tancar").on("click", function () {
        // Empram el mètode 'dialog()' de jQuery UI per mostrar un diàleg de confirmació:
        $("#dialog-confirmacio").dialog({
            modal: true, // Modal per evitar interaccions amb la resta de la pàgina mentre el diàleg està obert.
            // Definim els botons del diàleg:
            buttons: { 
                // Botó per eliminar el post-it:
                "Eliminar": function() {
                    let contenidorPare = nouPostit.parent();
                    nouPostit.remove();
                    actualitzarComptador(contenidorPare);
                    $(this).dialog("close");
                },
                // Botó per cancel·lar l'eliminació:
                "Cancel·lar": function() {
                    $(this).dialog("close");
                }
            }
        });
    });

    $("#tauler").append(nouPostit); // Afegim el nou post-it al tauler principal.

    // Fem que el nou post-it sigui draggable emprant jQuery UI:
    nouPostit.draggable({
        handle: ".handle", // Només es pot arrossegar des de la barra superior (handle).
        helper: "clone", // Cream una còpia del post-it mentre s'arrossega.
        appendTo: "body", // Afegim el post-it arrossegat al cos del document per evitar problemes de z-index.
        start: function() { $(this).hide(); }, // Amaguem l'original mentre s'arrossega.
        stop: function() { $(this).show(); } // Mostram l'original quan s'acaba d'arrossegar.
    });
});

// Fem que els contenidors siguin droppables emprant jQuery UI:
$("#tauler").droppable({
    accept: ".postit", // Acceptam tots els post-its.
    // Definim la funció que s'executa quan un post-it es deixa anar dins el contenidor:
    drop: function(event, ui) { 
        let contenidorAntic = ui.draggable.parent(); // Guardam el contenidor antic per actualitzar el comptador després.
        $(this).append(ui.draggable); // Afegim el post-it al nou contenidor (tauler principal).
        ui.draggable.removeAttr("style"); // Restablirem l'estil per evitar problemes de posició.
        actualitzarComptador(contenidorAntic); // Actualitzam el comptador del contenidor antic.
    }
});

// Feim que el contenidor vermell sigui droppable:
$("#contenidor-vermell").droppable({
    accept: ".bg-red-500", // Acceptam només post-its vermells.
    // Definim la funció que s'executa quan un post-it es deixa anar dins el contenidor:
    drop: function (event, ui) { 
        let contenidorAntic = ui.draggable.parent(); // Guardam el contenidor antic per actualitzar el comptador després.
        $(this).append(ui.draggable); // Afegim el post-it al nou contenidor (vermell).
        ui.draggable.css({ top: "0px", left: "0px" }); // Restablirem la posició del post-it dins el nou contenidor.
        actualitzarComptador($(this)); // Actualitzam el comptador del nou contenidor.
        actualitzarComptador(contenidorAntic); // Actualitzam el comptador del contenidor antic.
    }
});

// Feim que el contenidor blau sigui droppable:
$("#contenidor-blau").droppable({
    accept: ".bg-blue-500", // Acceptam només post-its blaus.
    // Definim la funció que s'executa quan un post-it es deixa anar dins el contenidor:
    drop: function (event, ui) {
        let contenidorAntic = ui.draggable.parent(); // Guardam el contenidor antic per actualitzar el comptador després.
        $(this).append(ui.draggable); // Afegim el post-it al nou contenidor (blau).
        ui.draggable.css({ top: "0px", left: "0px" }); // Restablirem la posició del post-it dins el nou contenidor.
        actualitzarComptador($(this)); // Actualitzam el comptador del nou contenidor.
        actualitzarComptador(contenidorAntic); // Actualitzam el comptador del contenidor antic.
    }
});

// Cream una funció per actualitzar el comptador de post-its dins un contenidor:
function actualitzarComptador(contenidor) {
    const quantitat = contenidor.find(".postit").length; // Comptam els post-its dins el contenidor.
    contenidor.find(".comptador").text(quantitat); // Actualitzam el text del comptador amb la nova quantitat.
}