/** 删除作品 **/
/**$('[data-pubservice="close"]').click(function(event){
    $(event.target).parent().remove();
    var modal=$($(this).attr('data-toggle'));
    modal.fadeIn();
    var t=setTimeout(function(){
        modal.fadeOut();
    },1000);
});**/

$('#pubservice_file').delegate("span[data-pubservice='close']", "click", function (event) {
    console.log(1111111111111);
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