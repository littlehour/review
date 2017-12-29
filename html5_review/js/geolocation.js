/**
 * Created by Administrator on 2017/12/29.
 */
window.onload=function(){
    var show=document.getElementById("show");
    function getLocation(){
        if (navigator.geolocation){
            navigator.geolocation.watchPosition(showPosition);
        }
        else{
            x.innerHTML="该浏览器不支持获取地理位置。";
        }
    }
    function showPosition(position){
        show.innerHTML="纬度: " + position.coords.latitude +"<br>经度: " + position.coords.longitude;
    }
    var btn=document.getElementById('btn');
    btn.onclick=getLocation;
};