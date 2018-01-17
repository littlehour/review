/**
 * Created by Administrator on 2017/12/20.
 */
var img=new Image();
img.src='images/04.jpg';
function dragStart_handler1(event){
    console.log('drag start.');
    //alert(event.target.id);

    //测试setData
    //event.dataTransfer.setData('text',event.target.id);
    //event.dataTransfer.setData('text','ff');
    //event.dataTransfer.setData("application/x-bookmark", 'bookmarkString');
    //测试多链接
    //var s="http://www.mozilla.org\n#mozilla\nhttp://www.baidu.com\n#baidu";
    //console.log(s);
    //event.dataTransfer.setData("text/uri-list", "http://www.mozilla.org\n#mozilla\nhttp://www.baidu.com\n#baidu");
    //event.dataTransfer.setData('text/plain',"http://www.mozilla.org\nhttp://www.baidu.com");

    //测试html数据
    //event.dataTransfer.setData('text/html','<strong>测试html数据</strong>');
    //event.dataTransfer.setData('text/plain','测试html数据');

    //测试image数据
    ////var canvas=document.createElement('canvas');
    ////canvas.height=50;
    ////canvas.width=200;
    ////var ctx=canvas.getContext('2d');
    ////ctx.moveTo(0,0);
    ////ctx.lineTo(200,50);
    ////ctx.stroke();
    ////var imgData=ctx.getImageData(0,0,200,50);
    ////console.log(imgData);
    ////event.dataTransfer.mozSetDataAt('image/jpg',img,0);
    //event.dataTransfer.setData('text/uri-list','images/04.jpg');
    //event.dataTransfer.setData('text/plain','images/04.jpg');

    //测试node数据
    event.dataTransfer.mozSetDataAt('application/x-moz-node',this,0);

    //测试自定义数据
    //event.dataTransfer.setData('xx','test custom');

    //测试clearData
    //event.dataTransfer.clearData();

    //测试setDragImage，ie不支持
    //event.dataTransfer.setDragImage(img,10,10);
    //var canvas = document.createElement("canvas");
    //canvas.width = canvas.height = 50;
    //var ctx = canvas.getContext("2d");
    //ctx.lineWidth = 4;
    //ctx.moveTo(0, 0);
    //ctx.lineTo(50, 50);
    //ctx.moveTo(0, 50);
    //ctx.lineTo(50, 0);
    //ctx.stroke();
    //event.dataTransfer.setDragImage(canvas,25,25);

    //测试effectAllowed和dropEffect
    //event.dataTransfer.effectAllowed='copyMove';
    //event.dataTransfer.dropEffect='move';
}
function contains(list,type){
    for(var i=0;i<list.length;i++){
        if(list[i]===type) return true;
    }
    return false;
}
window.onload=function(){
    var p1=document.getElementById('p1');
    p1.ondragstart=dragStart_handler1;
    p1.ondragend=function(event){
        console.log('dragend');
        document.getElementById('t1').style.border='none';
        //event.dataTransfer.dropEffect='none';
    };

    //var a1=document.getElementById('a1');
    //a1.ondragstart=dragStart_handler1;

    var t1=document.getElementById('t1');
    t1.ondragenter=function(event){
        //event.preventDefault();
        //event.stopPropagation();
        this.style.border='2px solid blueviolet';
        var p11=document.getElementById('p1').cloneNode(true);
        p11.id='p11';
        if(!this.contains(document.getElementById('p11'))) {
            this.appendChild(p11);
        }
        //console.log(event.dataTransfer.getData('text'));
        //return false;
    };
    t1.ondragleave=function(event){
        this.style.border='none';
        this.removeChild(document.getElementById('p11'));
    };
    t1.ondragover=function(event){
        //if(contains(event.dataTransfer.types,'text')){
        //if(event.dataTransfer.types.includes('text/uri-list')){
            event.preventDefault();
            event.stopPropagation();
            event.dataTransfer.dropEffect='none';
            //console.log(event.dataTransfer.getData('text'));
            //event.dataTransfer.setData('text',event.target.id);
            return false;
        //}
    };
    t1.ondrop=function(event){
        //if(contains(event.dataTransfer.types,'text/uri-list')){
            event.preventDefault();
            event.stopPropagation();

            //event.dataTransfer.dropEffect='none';

            //演示move操作
            //var d=event.dataTransfer.getData('text');
            //var s=document.getElementById(d);
            //this.appendChild(s);

            //测试types属性值和拖放的默认拖放数据
            console.log(event.dataTransfer.getData('text'));
            //alert(event.dataTransfer.types);
            console.log(event.dataTransfer.types);
            //alert('kk');
            //window.location.href=event.dataTransfer.getData('text/uri-list');


            return false;
        //}
    }

    //测试拖放文件
    var t2=document.getElementById('t2');
    t2.ondragover=function(event){
        event.preventDefault();
        event.stopPropagation();
    };
    t2.ondragend=function(event){
        event.dataTransfer.clearData();
    };
    t2.ondrop=function(event){
        event.preventDefault();
        event.stopPropagation();
        var dt=event.dataTransfer;
        console.log(dt.items[0]);
        console.log(dt.items[1]);
        dt.items[0].getAsString(function(m){
            console.log(m);
        });
        dt.items[1].getAsString(function(m){
            console.log(m);
        });
        if(dt.items){
            for(var i=0;i<dt.items.length;i++){
                if(dt.items[0].kind=='file'){
                    var f=dt.items[i].getAsFile();
                    console.log("... file[" + i + "].name = " + f.name);
                }
            }
        }else{
            for(var i=0;i<dt.files.length;i++){
                console.log("... file[" + i + "].name = " + dt.files[i].name);
            }
        }
    };

    //测试拖放可以使用的数据类型
    var t3=document.getElementById('t3');
    t3.ondragenter=function(event){
        //if(event.dataTransfer.types.includes('text/uri-list')){
        //if(event.dataTransfer.types.includes('text/html')){
            event.preventDefault();
            event.stopPropagation();
        //}
    };
    t3.ondragover=function(event){
        //if(event.dataTransfer.types.includes('text/uri-list')){
        //if(event.dataTransfer.types.includes('text/html')){
            //event.dataTransfer.dropEffect='copy';
            event.preventDefault();
            event.stopPropagation();
        //}
    };
    t3.ondrop=function(event){
        console.log('drop');
        event.preventDefault();
        event.stopPropagation();
        //测试多链接数据
        //console.log(event.dataTransfer.dropEffect);
        //console.log(event.dataTransfer.getData("text"));
        //if(event.dataTransfer.dropEffect==='copy'){
        //    var lines = event.dataTransfer.getData("text/uri-list").split("\n");
        //    for (let line of lines) {
        //        if (line.startsWith("#"))
        //            continue;
        //
        //        let link = document.createElement("a");
        //        link.href = line;
        //        link.textContent = line;
        //        event.target.appendChild(link);
        //    }
            //console.log('drop');
            //event.preventDefault();
            //event.stopPropagation();
        //};
        //if(event.dataTransfer.dropEffect==='move'){
        //    var lines = event.dataTransfer.getData("text/uri-list").split("\n");
        //    for (let line of lines) {
        //        if (line.startsWith("#"))
        //            continue;
        //
        //        let link = document.createElement("a");
        //        link.href = line;
        //        link.textContent = line;
        //        event.target.appendChild(link);
        //    }
        //    document.body.removeChild(document.getElementById(event.dataTransfer.getData('text')));
        //    console.log('drop');
        //    event.preventDefault();
        //    event.stopPropagation();
        //}

        //测试html类型数据
        //console.log(event.dataTransfer.getData('text/html'));
        //event.target.innerHTML=event.dataTransfer.getData('text/html');

        //测试文件数据
        //event.target.innerHTML="<p>"+event.dataTransfer.files[0].name+"</p>";

        //测试图像数据
        ////console.log(event.dataTransfer.mozGetDataAt('image/jpg',0));
        //console.log(event.dataTransfer.getData('text/uri-list')||event.dataTransfer.getData('text/plain'));
        //var s=event.dataTransfer.getData('text/uri-list')||event.dataTransfer.getData('text/plain');
        //event.target.innerHTML="<img src='"+s+"' />";

        //测试node数据
        console.log(event.dataTransfer.mozGetDataAt('application/x-moz-node',0));

        //测试自定义数据
        //console.log(event.dataTransfer.getData('xx'));
    }
    //firefox的application/x-moz-file...等类型的不安全提示？？？
};