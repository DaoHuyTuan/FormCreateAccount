$(".next").click(function() {
    $(".login").hide();
    $(".createAccount").show();
});
$(".back").click(function (){
    $(".createAccount").hide();
    $(".login").show();
})