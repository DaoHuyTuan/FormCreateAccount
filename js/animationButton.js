$(".Btn-login").click(function (){
    $(".Btn-login").addClass("loader");
    $(".Btn-login").removeClass("Btn-login");
    $(".group-input").hide();
    $(".text-create").hide();
    $(".loader").text("");
    $(".h-tile").text("");
    setInterval(function (){
        $(".loader").addClass("success");
        $(".loader").removeClass("loader");  
        $(".success").html('<i class="ion-checkmark-round"></i>'); 
        $(".h-tile").text("Login Successfull!!");
    },2000);
    
});
