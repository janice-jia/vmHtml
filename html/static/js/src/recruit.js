
$('#regist_works').delegate("[data-recuit='adddate']","click",function(event){
    $(event.target).attr({ "data-recuit": "deldate" });
    var select="<div><select name='rec_works1'><option value ='1'>小说|文学副本</option><option selected value ='2'>诗歌|散文</option><option value ='3'>搞笑|段子</option></select><button data-recuit='adddate' type='button'></button></div>";
    $("#regist_works").append(select);
});
$('#regist_works').delegate('[data-recuit="deldate"]',"click",function(event){
    console.log($(event.target));
    $(event.target).parent().remove();
});

/** 需求技能 **/

$('#regist_skills').delegate("[data-recuit='addskill']","click",function(event){
    $(event.target).attr({ "data-recuit": "delskill" });
    var select='<div><select name="rec_skills"><option value ="1">美术</option><option value ="2">音乐</option><option value ="3">计算机</option></select><button data-recuit="addskill" type="button"></button></div>';
    $("#regist_skills").append(select);
});
$('#regist_skills').delegate('[data-recuit="delskill"]',"click",function(event){
    console.log($(event.target));
    $(event.target).parent().remove();
});
/** 摸态框 **/
$('[data-recuit="submit"]').click(function(){
    console.log($(this));
    $($(this).attr('data-toggle')).css('display',"block");
});