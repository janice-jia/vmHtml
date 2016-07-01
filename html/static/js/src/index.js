function loadHeaderFooter()
{
    $("#header").load("./header.html");
    $("#footer").load("./footer.html");
    $("#page").load("./_page.html");
    $("#comments").load("./_comments.html");
}

loadHeaderFooter();


$(document).ready(function(){
    $('#seachRadio input').iCheck({
        radioClass: 'iradio-grey-20',
        increaseArea: '30%' // optional
    });
});
