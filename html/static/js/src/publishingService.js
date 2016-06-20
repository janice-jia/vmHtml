/** 删除作品 **/
$('[data-pubservice="close"]').click(function(event){
    $(event.target).parent().remove();
    var modal=$($(this).attr('data-toggle'));
    modal.fadeIn();
    var t=setTimeout(function(){
        modal.fadeOut();
    },1000);
});
/** 发布 **/
$('[data-toggle="#pubservice_success"]').click(function(){
    $($(this).attr('data-toggle')).fadeIn();
});
/** 获取上传文件 **/
$('#pubservice_upfile').change(function(){
    console.log($(this).val());
    var newfile=$(this).val();
    
});