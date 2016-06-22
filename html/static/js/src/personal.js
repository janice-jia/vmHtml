//个人页面-账号设置
function showHideSet(showHideID){
    var  showHide = $("#"+showHideID+'-up').css('display');
    if(showHide == 'block'){
        $("#"+showHideID+'-up').css('display','none');
        $("#"+showHideID+'-down').css('display','block');
    }else{
        $("#"+showHideID+'-up').css('display','block');
        $("#"+showHideID+'-down').css('display','none');
    }
}

//创建作品集弹层显示隐藏
function showHidePopup(popupId){
    var  popupDis = $('#'+popupId).css('display');
    if(popupDis == 'block'){
        $('#'+popupId).css('display','none');
    }else{
        $('#'+popupId).css('display','block');
    }
}