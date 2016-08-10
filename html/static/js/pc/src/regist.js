/**
 * Created by user001 on 2016/6/16.
 */
$("#regist_submit").click(function(){
    $("[data-regist='registnow']").css("display","none");
    $('[data-regist="regfinish"]').css("display","block");
});

function loginFn(){
    $("#loginBox").css("display","block");
    $("#registBox").css("display","none");
}

function registFn(){
    $("#loginBox").css("display","none");
    $("#registBox").css("display","block");
}
