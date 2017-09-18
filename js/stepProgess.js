
let currentStep = $(".stepItem.active");
let nextStep = $(".stepItem.active").next().index();
let backStep = $(".stepItem.active").prev().index();
$(".next").click(function() {
    $(".stepProgess div").eq(nextStep).addClass("active");
    nextStep = $(".stepProgess div").eq(nextStep).index() +1;
    alert(currentStep); 
});
$(".back").click(function() {
    $(".stepProgess div").eq(backStep).removeClass("active");
    backStep = $(".stepProgess div").eq(backStep).index() -1;
    alert(currentStep); 
})

