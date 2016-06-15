
$("#fgpwd_addNextStep").click(function(){
    $("#fgpwd_addusername").css("display","none");
    $('#fgpwd_authentication').css("display","block");
    $('[data-fgpwd="stepul"]>li:nth-child(2)').attr("data-fgpwd","cur");
});

$("#fgpwd_verNextStep").click(function(){
    $("#fgpwd_authentication").css("display","none");
    $('#fgpwd_newpwd').css("display","block");
    $('[data-fgpwd="stepul"]>li:nth-child(3)').attr("data-fgpwd","cur");
});

$("#fgpwd_btnfinish").click(function(){
    $("#fgpwd_newpwd").css("display","none");
    $('[data-fgpwd="form_finish"]').css("display","block");
    $('[data-fgpwd="stepul"]>li:nth-child(4)').attr("data-fgpwd","cur");
});