
let currentStep = $(".stepItem.active");
let nextStep = $(".stepItem.active").next().index();
$(".next").click(function() {
    
    
    $(".stepProgess div").eq(nextStep).addClass("active");
    nextStep = $(".stepProgess div").eq(nextStep).index() +1;
    alert(currentStep);
    
})


