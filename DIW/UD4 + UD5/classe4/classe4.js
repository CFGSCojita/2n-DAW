
$(".postit").draggable({
    // revert: "invalid"
})

$(".postit").draggable();

$(".container").droppable({
    // accept: ".groc",
    accept: function(draggable) {
        return $(draggable).data("color") == $(this).data("color");
    },
    drop: function(event, ui) {
        // console.log($(this));
        // console.log(ui);
        let counter = $(this).data("counter");
        console.log(counter);
        $(this).data("counter", counter + 1);
        console.log(counter);
        console.log($(this).attr("counter"));
        console.log($(this).attr("data-counter"));
    },
    out: function(event, ui) {
        
    }   
});