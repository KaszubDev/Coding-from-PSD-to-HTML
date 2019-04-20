/* SEARCH FIELD SCRIPTS */
$("#inputPlaceholder").click(function(){
    $(this).addClass("hidden");
    $("#input1").focus();
});

$("#input1").focus(function() {
    $("#inputPlaceholder").addClass("hidden");})
    .focusout(function() {
    if (!this.value) {
        $("#inputPlaceholder").removeClass("hidden");
    }
});
        
