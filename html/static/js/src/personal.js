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

/*编辑图片start*/
var spa = 40; //缩略图区域补充数值
var w = 0;

//设置当前选中
function setChecked(checkedObj){
    $('#showArea img').each(function(){
        $(this).removeClass('hoverMax');
    });
    $('#mainphoto').attr('src',checkedObj.attr('rel'));
    checkedObj.addClass('hoverMax');
}

function goLeft(){
    if($(".hoverMax").prevAll().length > 0){
        setChecked($(".hoverMax").prev('img'));
        if($(".hoverMax").nextAll().length>4){
            var marginLeft = parseInt($('#showArea').css('marginLeft'));
            if(isNaN(marginLeft)){
                marginLeft = 0;
            }
            $('#showArea').css('marginLeft',(marginLeft+170)+'px');
        }
    }
}

function goRight(){
    if($(".hoverMax").nextAll().length > 0){
        setChecked($(".hoverMax").next());
        if($(".hoverMax").prevAll().length>4){
            var marginLeft = parseInt($('#showArea').css('marginLeft'));
            if(isNaN(marginLeft)){
                marginLeft = 0;
            }
            $('#showArea').css('marginLeft',(marginLeft-170)+'px');
        }
    }
}

$(function() {
    var rHtml = '';
    $('#showArea img').each(function(){
        w += parseInt($(this).attr('width')) + spa;
        $(this).click(function() {
            setChecked($(this));
        });
        rHtml += '<img src="' + $(this).attr('rel') + '" width="0" height="0" alt="" />';
    });
    $('#showArea').css('width',parseInt(w) + 'px');
    var rLoad = document.createElement("div");
    $('#photos').append(rLoad);
    rLoad.style.width = "1px";
    rLoad.style.height = "1px";
    rLoad.style.overflow = "hidden";
    rLoad.innerHTML = rHtml;
});
/*编辑图片end*/



//编辑iframe显示、隐藏
function showEditIframe(event){
    $('#per-view-popup').css('display','block');
    $(document).keyup(function(e){
        var key =  e.which;
        if(key == 27){
            //关闭
            $("#per-view-popup").hide();
            return false;
        }
    });
    $('body', window.parent.document).css('overflow','hidden');
    $("#editIframe").contents().find("html").click(function(event){
        $('#per-view-popup', window.parent.document).hide();
        $('body', window.parent.document).css('overflow','auto');
        $("#popup-public").hide();
    });

    $("#editIframe").contents().find(".per-view-box").click(function(event){
        if (event.stopPropagation) {
            event.stopPropagation();
        }else if (window.event) {
            window.event.cancelBubble = true;
        }
    });
    if (event.stopPropagation) {
        event.stopPropagation();
    }else if (window.event) {
        window.event.cancelBubble = true;
    }
}

//文字作品--编辑
function showEditText(){
    $(".zcbl-text-edit").css('display','none');
    $(".zcbl-container").css('display','block');
}

