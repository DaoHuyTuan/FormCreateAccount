///next function 
var current_fs , next_fs , prev_fs ;
$(".next").click(function()  {
    current_fs = $(this).parent();
    next_fs = $(this).parent().next();
    current_fs.hide();
    next_fs.show();
    $("")

    //stepProgess change
 
    $(".stepProgess div").eq($("fieldset").index(next_fs)).addClass("active");
});
$(".back").click(function(){
    current_fs = $(this).parent();
    prev_fs = $(this).parent().prev();
    current_fs.hide();
    prev_fs.show();
    $(".stepProgess div").eq($("fieldset").index(current_fs)).removeClass("active");
})
