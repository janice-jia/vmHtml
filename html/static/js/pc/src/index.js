function loadHeaderFooter() {
    $("#header").load("./header.html");
    $("#footer").load("./footer.html");
    $("#page").load("./_page.html");
    $("#comments").load("./_comments.html");
}
loadHeaderFooter();

function scroll(obj)
{
    var tmp = (obj.scrollLeft)++;
    //当滚动条到达右边顶端时
    if (obj.scrollLeft == tmp)
        obj.innerHTML += obj.innerHTML;
    //当滚动条滚动了初始内容的宽度时滚动条回到最左端
    if (obj.scrollLeft >= obj.firstChild.offsetWidth)
        obj.scrollLeft = 0;
}

// window.onload = function() {
//     var pic = document.getElementById("scrollobj");
//     if(pic){
//         var myRoll = setInterval(function(){
//             scroll(document.getElementById('scrollobj'));
//         }, 30);
//         pic.onmouseover = function() { clearInterval(myRoll); };
//         pic.onmouseout = function() {
//             setInterval(
//                 myRoll = setInterval(function(){
//                     scroll(document.getElementById('scrollobj'));
//                 }, 30)
//             );
//         };
//     }
// };