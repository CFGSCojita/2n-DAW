$("button").on("click", () => {
    $("p:hidden").show();
});

$("postit").on("click", () => {
    // let id = $(this).attr("id");
    // let data_id = $(this).data("id");
    // console.log(data_id)
    $("selectedPostit").val(data_id);
});

$("radio:checked")
// :disabled, :selected, :text, :radio, :password.

// contains("text")
// :parent
// :empty

{/* <div id="container">
</div> */}

// Millor emprar: .children().length

// :has
// $("div:has(p)") no s'empra

$("div").has("p").addClass("amb-paragraf");

