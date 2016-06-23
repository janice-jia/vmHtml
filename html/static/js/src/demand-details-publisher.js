/** 删除评论 **/
$('#demdetpub_comment').delegate("button[data-demdetpub='answerdel']", "click", function (event) {
    /**  目标所在祖先元素  **/
    var tarparent=$(event.target).parents('[ data-demdetpub="content"]');
    /** 获取点击位置在文档中的坐标 给弹出框赋值 **/
    function getMousePos(event) {
        var e = event || window.event;
        var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
        var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
        var x = e.pageX || e.clientX + scrollX;
        var y = e.pageY || e.clientY + scrollY;
        return { 'x': x, 'y': y };
    }
    /**   显示弹出框 **/
    $('#demdetpub_isdelanswer').fadeIn();
    /** 弹出框绝对定位 **/
    $('#demdetpub_isdelanswer').css({
        top:(getMousePos().y)-100-14-20+"px",
        left:(getMousePos().x)-220+"px"
    });
    /** 点击确认框按钮获取按钮的值 判断是否删除评论 **/
    $('#demdetpub_isdelanswer').delegate("button", "click", function (event) {
        var e = event || window.event;
        var val=e.target.value;
        if(val == 'true'){
            tarparent.remove();
            $('#demdetpub_isdelanswer').fadeOut();
        }else{
            $('#demdetpub_isdelanswer').fadeOut();
        }
    });
});
/**  发布评论 **/
$("#demdetpub_publish").click(function(){
    var text=$('#demdetpub_comment textarea').val();
    //$('#demdetpub_comment ')
});