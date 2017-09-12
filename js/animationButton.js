$(".Btn-login").click(function (){
    $(".Btn-login").addClass("loader");
    $(".Btn-login").removeClass("Btn-login");
    $(".loader").text("");
    setInterval(function (){
        $(".loader").addClass("Btn-login");
        $(".loader").removeClass("loader");  
        $(".Btn-login").html('<i class="ion-checkmark-round"></i>');
    },2000);
    
});