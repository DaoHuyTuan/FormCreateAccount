$(".checkbox").click(function (){
    if($(".checkbox").hasClass("checked")){
        $(".checkbox").removeClass("checked");
        return;
    }
    $(".checkbox").addClass("checked");
    $(".checkbox").html('<i class="ion-checkmark"></i>'); 
});
