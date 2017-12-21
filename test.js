/**
 * Created by Administrator on 2017/11/10.
 */
var snack='Meow Mix';
function getFood(food){
    if(food){
        var snack='Friskies';
        return snack;
    }
    return snack;
}
getFood(false);
//document.domain='localhost';
window.onload=function(){
    //window.onmessage=function(e){
    //    console.log(e.data);
    //}
    //var iframe=document.getElementsByTagName('iframe')[0];
//        console.log(iframe.src);
//    iframe.contentWindow.postMessage('hello parent','http://localhost/index.html');
//    console.log(window.frames[0].a);
    alert('ww');
    for(var i=0;i<=100;i++){
        console.log(i);
    }
}