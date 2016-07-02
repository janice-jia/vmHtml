function getforgetpassword(){
    var arr=$('[data-fgpwd="stepul"]>li');
    return arr;

}
$("#fgpwd_addNextStep").click(function(){
    var arr=getforgetpassword();
    $("#fgpwd_addusername").css("display","none");
    $('#fgpwd_authentication').css("display","block");
    $(arr[1]).attr("data-fgpwd","cur");
    //$('[data-fgpwd="stepul"]>li:nth-child(2)')

});

$("#fgpwd_verNextStep").click(function(){
    var arr=getforgetpassword();
    $("#fgpwd_authentication").css("display","none");
    $('#fgpwd_newpwd').css("display","block");
    $(arr[2]).attr("data-fgpwd","cur");
    //$('[data-fgpwd="stepul"]>li:nth-child(3)').attr("data-fgpwd","cur");
});

$("#fgpwd_btnfinish").click(function(){
    var arr=getforgetpassword();
    $("#fgpwd_newpwd").css("display","none");
    $('[data-fgpwd="form_finish"]').css("display","block");
    $(arr[3]).attr("data-fgpwd","cur");
    //$('[data-fgpwd="stepul"]>li:nth-child(4)').attr("data-fgpwd","cur");
});