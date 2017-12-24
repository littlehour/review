/**
 * Created by Administrator on 2017/12/20.
 */
var img=new Image();
img.src='images/04.jpg';
function dragStart_handler1(event){
    console.log('drag start.');
    //console.log(event.target.id);
    event.dataTransfer.setData('text',event.target.id);
    //event.dataTransfer.setDragImage(img,10,10);//ie²»Ö§³Ö
    //event.dataTanster.effectAllowed='move';
    //event.dataTransfer.dropEffect='move';
}
window.onload=function(){
    var p1=document.getElementById('p1');
    p1.ondragstart=dragStart_handler1;
    p1.ondragend=function(){
        console.log('dragend');
    };
    var t1=document.getElementById('t1');
    t1.ondragover=function(event){
        event.preventDefault();
        event.stopPropagation();
        event.dataTransfer.dropEffect='move';
    };
    t1.ondrop=function(event){
        event.preventDefault();
        event.stopPropagation();
        //event.dataTransfer.dropEffect='none';
        var d=event.dataTransfer.getData('text');
        var s=document.getElementById(d);
        this.appendChild(s);
    }
};