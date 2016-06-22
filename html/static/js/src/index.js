function loadHeaderFooter()
{
    $("#header").load("./header.html");
    $("#footer").load("./footer.html");
}

loadHeaderFooter();



//我要发布
function publish(event){
    console.info($('#popup-public').css('display'));
    $('#popup-public').show();
    $(document).one("click", function(){
        $("#popup-public").hide();
    });
    $(document).keyup(function(e){
        var key =  e.which;
        if(key == 27){
            //关闭
            $("#popup-public").hide();
            return false;
        }
    });
    event.stopPropagation();
}

