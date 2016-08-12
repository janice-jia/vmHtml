/**
 * Created by dhj on 8/5/16.
 */
//显示吐槽列表
$('#tribe-img-aside-top').click(function(){
    $('#tribe-img-aside-comment').css({
        right:'0'
    });
});
//判断一个元素是否是另一个元素的子元素
function isInComment (obj,parentObj){
    while (obj != undefined && obj != null && obj.tagName.toUpperCase() != 'BODY'){
        if (obj == parentObj){
            return true;
        }
        obj = obj.parentNode;
    }
    return false;
}
//判断event是否是吐槽区域内
$(document).click(function(event){
    if(! isInComment(event.target, $("#tribe-img-aside-top")[0])){
        $('#tribe-img-aside-comment').css({
            right:'-210px'
        });
    }
});
// 查看图片 /查看漫画 亮灯效果
$('#tribe-img-changebg').click(function(){
    //        切换背景
    $('#tribe-img').toggleClass('lightbg');
    //        切换面包屑导航
    $('.breadcrumb').toggleClass('breadcrumb-dar');
});
