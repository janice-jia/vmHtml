/** 删除评论 **/
$('#demdet_comment').delegate("button[data-demdet='answerdel']", "click", function (event) {
    var e = event || window.event;
    var target=e.target;


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
    $('#demdet_isdelanswer').fadeIn();
    /** 弹出框绝对定位 **/
    $('#demdet_isdelanswer').css({
        top:(getMousePos().y)-100-14-20+"px",
        left:(getMousePos().x)-220+"px"
    });
    /** 点击确认框按钮获取按钮的值 判断是否删除评论 **/
    $('#demdet_isdelanswer').delegate("button", "click", function (event) {
        var e = event || window.event;
        var val=e.target.value;
        if(val == 'true'){
            /**  目标所在祖先元素  **/
            var tarparent=$(target).parents('[ data-demdet="content"]');
            console.log(tarparent);
            tarparent.remove();
            $('#demdet_isdelanswer').fadeOut();

        }else{
            $('#demdet_isdelanswer').fadeOut();
            target=null;
        }
    });
});
/**  发布评论 **/
$("#demdet_publish").click(function(){
    var text=$('#demdet_comment textarea').val();
});