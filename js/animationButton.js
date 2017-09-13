$(".Btn-login").click(function (){
    $(".Btn-login").addClass("loader");
    $(".Btn-login").removeClass("Btn-login");
    $(".loader").text("");
    setInterval(function (){
        $(".loader").addClass("success");
        $(".loader").removeClass("loader");  
        $(".success").html('<i class="ion-checkmark-round"></i>');
        $(".group-input").hide();
        $(".h-tile").text("Login Successfull!!")
    },2000);
    
});
