/**
 * Created by Administrator on 2017/12/29.
 */
window.onload=function(){
    var show=document.getElementById("show");
    function getLocation(){
        if (navigator.geolocation){
            navigator.geolocation.watchPosition(showPosition,showError);
        }
        else{
            show.innerHTML="该浏览器不支持获取地理位置。";
        }
    }
    function showError(error){
        switch(error.code){
            case error.PERMISSION_DENIED:
                show.innerHTML="用户拒绝对获取地理位置的请求。";
                break;
            case error.POSITION_UNAVAILABLE:
                show.innerHTML="位置信息是不可用的。";
                break;
            case error.TIMEOUT:
                show.innerHTML="请求用户地理位置超时。";
                break;
            case error.UNKNOWN_ERROR:
                show.innerHTML="未知错误。";
                break;
        }
    }
    function showPosition(position){
        show.innerHTML="纬度: " + position.coords.latitude +"<br>经度: " + position.coords.longitude;
    }
    var btn=document.getElementById('btn');
    btn.onclick=getLocation;
};