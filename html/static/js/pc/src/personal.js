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


//文字作品--编辑
function showEditText(){
    $(".zcbl-text-edit").css('display','none');
    $(".zcbl-container").css('display','block');
}



