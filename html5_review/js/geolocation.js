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
            x.innerHTML="���������֧�ֻ�ȡ����λ�á�";
        }
    }
    function showPosition(position){
        show.innerHTML="γ��: " + position.coords.latitude +"<br>����: " + position.coords.longitude;
    }
    var btn=document.getElementById('btn');
    btn.onclick=getLocation;
};