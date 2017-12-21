/**
 * Created by Administrator on 2017/11/18.
 */
function drawline(ctx){
    ctx.moveTo(30,30);
    //ctx.rect(1.5,1.5,100,20);
    ctx.lineTo(100,100);
    //ctx.rect(1,1.5,100,20);
    ctx.stroke();
}
function drawrect(ctx){
    ctx.rect(1.5,1.5,100,20);

    ctx.rect(1,25,100,20);
    ctx.stroke();

    //ctx.rect(1,49,120,20);
    //ctx.fill();

    ctx.strokeRect(1,73,100,20);

    ctx.fillRect(1,97,100,20);
    //ctx.fill();
}
function drawtext(ctx){
    //ctx.strokeText('给我一首歌的时间',1,12);
    //ctx.fillText('给我一首歌的时间',1,24);
    //ctx.fillText('pqrstuvwxyz',0,0);
    //测试文字垂直对齐，textBaseline
    ctx.font="20px Arial";
    ctx.textBaseline='alphabetic';
    ctx.strokeText('alphabetic',0,20);

    ctx.textBaseline="ideographic";
    ctx.fillText('ideographic',100,20);

    ctx.textBaseline='hanging';
    ctx.fillText('hanging',210,20);

    ctx.textBaseline='top';
    ctx.fillText('top',290,20);

    ctx.textBaseline='bottom';
    ctx.fillText('bottom',320,20);

    ctx.textBaseline='middle';
    ctx.fillText('middle',390,20);

    ctx.moveTo(0,20.5);
    ctx.lineTo(500,20.5);
    //测试文字字体样式font
    ctx.font='oblique small-caps bold 20px 微软雅黑';
    ctx.textBaseline='top';
    ctx.strokeText('文本样式测试okyes',0,30);

    //ctx.fontSize='10px';font属性不能分开设置
    //测试文字水平对齐方式textAlign
    ctx.font='normal small-caps bold 20px 微软雅黑';
    ctx.strokeStyle='#00ff33';
    ctx.fillStyle='#00aa99';
    ctx.textAlign='right';
    ctx.fillText('文本right对齐',150,50);

    ctx.textAlign='left';
    ctx.strokeText('文本left对齐',150,70);

    ctx.textAlign='center';
    ctx.fillText('文本center对齐',150,90);

    ctx.textAlign='end';
    ctx.fillText('文本end对齐',150,110);

    ctx.textAlign='start';
    ctx.strokeText('文本start对齐',150,130);

    ctx.moveTo(150.5,50.5);
    ctx.lineTo(150.5,150.5);

    ctx.stroke();
    //测试文字阴影效果
    ctx.shadowBlur=3;
    ctx.shadowColor='#779200';
    ctx.shadowOffsetX=2;
    ctx.shadowOffsetY=-10;
    ctx.strokeText('文本阴影效果展示',0,150);
    //测试计算文字宽的方法
    var text='计算文字宽度';
    var w=ctx.measureText(text).width;
    ctx.shadowBlur=3;
    ctx.shadowColor='#779200';
    ctx.shadowOffsetX=0;
    ctx.shadowOffsetY=0;
    ctx.fillText(text,0,170);
    //ctx.lineWidth=2;
    ctx.strokeText('我的宽度是:'+w+'px',150,170);


}
function testAnotherAttributeFunc(ctx){
    //测试样式污染，及使用beginPath()和closePath()避免样式污染
    //第一个三角
    //ctx.beginPath();
    ctx.strokeStyle = 'red';
    ctx.beginPath();
    ctx.moveTo(20,20);
    //ctx.moveTo(40,20);
    ctx.lineTo(50,50);
    ctx.lineTo(20,70);
    //ctx.lineTo(20,20);
    ctx.closePath();
    ctx.stroke();
    //第二个三角
    ctx.beginPath();
    ctx.strokeStyle = 'green';
    ctx.moveTo(60,20);
    ctx.lineTo(90,50);
    ctx.lineTo(60,70);
    //ctx.lineTo(60,20);
    //ctx.stroke();
    ctx.closePath();
    ctx.stroke();

    //测试lineWidth属性的使用
    //var timer = null;
    //var num = 1;
    //ctx.beginPath();
    //ctx.moveTo(100,10);
    //ctx.strokeStyle = 'gold';
    //setInterval(function(){
    //    if(num == 20){
    //        clearInterval(null);
    //        num=1;
    //    }else{
    //        num++;
    //    };
    //    ctx.lineTo(100,30+num*2);
    //    ctx.lineWidth = num;
    //    ctx.closePath();
    //    ctx.stroke();
    //},100)
    //lineWidth取负值和0无效果
    //ctx.beginPath();
    //ctx.moveTo(20,80);
    //ctx.lineTo(20,120);
    //ctx.lineWidth=0;
    //ctx.stroke();
    //ctx.closePath();

    //测试lineJoin的使用
    ctx.beginPath();
    ctx.lineWidth=10;
    ctx.lineJoin='miter';
    ctx.strokeRect(80,10,20,20);
    ctx.lineJoin='bevel';
    ctx.strokeRect(130,10,20,20);
    ctx.lineJoin='round';
    ctx.strokeRect(180,10,20,20);

    ctx.beginPath();
    ctx.lineJoin='miter';
    ctx.lineWidth=20;
    ctx.miterLimit=2;
    ctx.moveTo(20,100);
    ctx.lineTo(150,150);
    ctx.lineTo(20,200);
    //ctx.lineTo(150,150);
    console.log(ctx.miterLimit);
    ctx.stroke();

    //测试lineCap的使用
    ctx.beginPath();
    ctx.lineCap='butt';
    ctx.moveTo(220,10);
    ctx.lineTo(220,80);
    ctx.stroke();

    ctx.beginPath();
    ctx.lineCap='round';
    ctx.moveTo(245,10);
    ctx.lineTo(245,80);
    ctx.stroke();

    ctx.beginPath();
    ctx.lineCap='square';
    ctx.moveTo(270,10);
    ctx.lineTo(270,80);
    ctx.stroke();

}
function drawcircle(ctx){
    //使用arc(x,y,r,sAngle,eAngle,counterclockwise)绘制弧
    ctx.arc(10,10,10,Math.PI,2*Math.PI,false);
    ctx.moveTo(60,5);
    ctx.arc(40,10,10,Math.PI,7*Math.PI/4,true);//前一段弧的终点会和现在这段弧的起点相连
    //ctx.lineTo(0,0);
    //ctx.closePath();
    ctx.fill();
    ctx.beginPath();
    ctx.arc(30,5,5,Math.PI/3,Math.PI,true);
    //ctx.fill();//填充弧会将弧的起点和终点相连，构成一个封闭图形，进行填充

    //使用arcTo(x1,y1,x2,y2,r)绘制弧
    ctx.beginPath();
    ctx.moveTo(20,20);
    ctx.lineTo(220,20);
    //ctx.arc(20,20,10,Math.PI,2*Math.PI,true);
    //ctx.arc(40,20,10,Math.PI,0,true);
    ctx.arcTo(150,20,150,30,50);
    //ctx.lineTo(150,120);
    ctx.stroke();
    //ctx.fill();

    //ctx.beginPath();
    //ctx.fillRect(100,100,5,5);
    //ctx.fillRect(180,80,5,5);
    //ctx.fillRect(160,180,5,5);
    //ctx.moveTo(62,112);
    //ctx.lineTo(182,82);
    //ctx.lineTo(162,182);
    //这里是绘制切线弧
    //ctx.moveTo(103,103);
    //ctx.arcTo(183,83,162,182,40);
    //ctx.stroke();

    ctx.beginPath();
    ctx.arc(100,100,40,0,2*Math.PI,true);
    //ctx.rect(5,100,60,60);
    //ctx.fill();
    //ctx.moveTo(120,100);
    ctx.arc(180,100,20,0,2*Math.PI,false);
    //ctx.rect(80,80,40,40);
    //ctx.rect(35,130,30,30);
    ctx.fill();
    //ctx.stroke();
}

function drawcurve(ctx){
    //使用quadraticCurveTo绘制二次贝塞尔曲线
    ctx.moveTo(10,10);
    ctx.lineTo(50,50);
    ctx.lineTo(70,10);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(10,10);
    ctx.quadraticCurveTo(50,50,70,10);
    //ctx.stroke();
    ctx.fill();

    //使用bezierCurveTo()绘制三次贝塞尔曲线
    ctx.beginPath();
    ctx.moveTo(80,10);
    ctx.lineTo(90,100);
    ctx.lineTo(150,80);
    ctx.lineTo(160,10);
    ctx.moveTo(80,10);
    ctx.bezierCurveTo(90,100,150,80,160,10);
    ctx.stroke();
    //ctx.fill();

    //绘制类似正弦图
    ctx.beginPath();
    ctx.moveTo(10,150);
    ctx.bezierCurveTo(10,100,90,100,90,150);
    ctx.bezierCurveTo(90,200,180,200,180,150);
    ctx.stroke();
}

function testGradient(ctx) {
    //测试linearGradient
    var gradient = ctx.createLinearGradient(5, 5, 105, 5);
    gradient.addColorStop(0, 'red');//0处为红色
    gradient.addColorStop(0.2, '#ee8833');//从0到0.2，红色渐变为#ee8833这个颜色，到0.2处为#ee8833这个颜色
    gradient.addColorStop(0.5, 'rgba(11,23,45,0.5)');//从0.2到0.5，#ee8833这个颜色渐变为rgba(11,23,45,0.5)这个颜色，到0.5处为rgba(11,23,45,0.5)这个颜色
    gradient.addColorStop(0.7, 'pink');//从0.5到0.7，rgba(11,23,45,0.5)这个颜色渐变为pink色，到0.7处为pink色
    gradient.addColorStop(1, 'blue');//从0.7到1，pink色渐变为blue色，到1处为blue色
    ctx.fillStyle = gradient;
    ctx.fillRect(5, 5, 100, 50);
    //ctx.strokeStyle=gradient;
    //ctx.strokeRect(5,5,100,50);
    ctx.moveTo(25, 5);
    ctx.lineTo(25, 60);
    ctx.moveTo(55, 5);
    ctx.lineTo(55, 60);
    ctx.moveTo(75, 5);
    ctx.lineTo(75, 60);
    ctx.stroke();

    ctx.beginPath();
    var gradient1 = ctx.createLinearGradient(110, 5, 210, 55);
    gradient1.addColorStop(0, 'red');
    gradient1.addColorStop(0.2, '#76fedb');
    gradient1.addColorStop(0.5, 'rgba(130,112,15,1)');
    gradient1.addColorStop(0.7, '#ee8833');
    gradient1.addColorStop(1, 'pink');
    ctx.fillStyle = gradient1;
    ctx.fillRect(110, 5, 100, 50);
    //ctx.strokeStyle=gradient1;
    //ctx.strokeRect(110,5,100,50);

    //测试radialGradient
    ctx.beginPath();
    var gradient2 = ctx.createRadialGradient(130, 115, 20, 80, 115, 50);
    gradient2.addColorStop(0, 'red');
    gradient2.addColorStop(0.2, '#76fedb');
    gradient2.addColorStop(0.5, 'rgba(130,112,15,1)');
    gradient2.addColorStop(0.7, '#ee8833');
    gradient2.addColorStop(1, 'pink');
    ctx.fillStyle = gradient2;
    ctx.fillRect(5, 65, 150, 100);
    //ctx.strokeStyle=gradient2;
    ctx.strokeRect(5,65,150,100);
    ctx.arc(130, 115, 20, 0, 2 * Math.PI, false);
    ctx.arc(80, 115, 50, 0, 2 * Math.PI, false);
    ctx.stroke();

    //渐变应用于文字
    ctx.beginPath();
    ctx.font='20px 微软楷书';
    ctx.textBaseline='top';
    //var gradient3=ctx.createLinearGradient(5,170,200,170);
    var gradient3=ctx.createRadialGradient(95,180,0,95,180,90);
    gradient3.addColorStop(0, 'red');
    gradient3.addColorStop(0.2, '#76fedb');
    gradient3.addColorStop(0.5, 'rgba(130,112,15,1)');
    gradient3.addColorStop(0.7, '#ee8833');
    gradient3.addColorStop(1, 'pink');
    ctx.fillStyle=gradient3;
    ctx.fillText('测试渐变应用于文字',5,170);
}
function testGlobalAlpha(ctx){
    //ctx.fillStyle='red';
    //ctx.fillRect(5,5,50,50);
    ////ctx.lineTo(0,0);
    ////ctx.stroke();
    //ctx.beginPath();
    //ctx.globalAlpha=0.5;
    ////ctx.beginPath();
    //ctx.fillStyle='blue';
    //ctx.fillRect(30,30,50,50);
    //ctx.closePath();
    //ctx.fillStyle='green';
    //ctx.rect(55,55,50,50);
    ////ctx.lineTo(0,0);
    ////ctx.stroke();
    //ctx.fill();
    //ctx.save();
    //ctx.beginPath();
    //ctx.fillRect(110,5,50,50);
    //ctx.closePath();
    //ctx.restore();
    //ctx.fillRect(160,55,50,50);

    ctx.globalAlpha = 0.5;
    //ctx.fillStyle='green';
    ctx.save();
    ctx.beginPath();
    ctx.globalAlpha = 1;
    ctx.fillStyle = "red";
    ctx.rect(5,5,50,50);
    ctx.fill();
    ctx.save();
    //ctx.moveTo(110,5);
    //ctx.lineTo(180,5);
    //ctx.closePath();
    //ctx.restore();

    ctx.fillStyle='gray';
    ctx.beginPath();
    //ctx.fillStyle = "green";
    ctx.rect(30,30,50,50);
    ctx.restore();
    ctx.fill();
    //ctx.closePath();
    ctx.restore();
    ctx.beginPath();
    ctx.fillStyle = "blue";
    ctx.fillRect(55,55,50,50);
    ctx.closePath();

    ctx.strokeStyle='red';
    ctx.font='20px 微软雅黑';
    ctx.globalAlpha=0.3;
    ctx.strokeText('测试对文字使用透明',5,150);
}
function drawTool(ctx,canvas){
    var inputs=document.getElementsByTagName('input');
    for(var i=0;i<inputs.length;i++){
        inputs[i].onclick=function(){
            var id=this.getAttribute('id');
            switch (id){
                case 'red':ctx.strokeStyle='red';break;
                case 'green':ctx.strokeStyle='green';break;
                case 'blue':ctx.strokeStyle='blue';break;
                case 'default':ctx.strokeStyle='black';break;
                case 'eraser':ctx.strokeStyle='#fff';break;
                case 'clear':ctx.clearRect(0,0,canvas.clientWidth,canvas.clientHeight);
            }
        }
    }
    draw();
    function draw(){
        canvas.onmousedown=function(ev){
            var ev=ev||event;
            //ctx.beginPath();
            ctx.moveTo(ev.pageX-this.offsetLeft,ev.pageY-this.offsetTop);
            canvas.onmousemove=function(ev){
                var ev=ev||event;
                ctx.lineTo(ev.pageX-this.offsetLeft,ev.pageY-this.offsetTop);
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(ev.pageX-this.offsetLeft,ev.pageY-this.offsetTop);
            }
            canvas.onmouseup=function(ev){
                canvas.onmousemove=canvas.onmouseup=null;
            }
        }
        //canvas.onmouseup=function(ev){
        //    canvas.onmousemove=null;
        //}
    }
}
function testTransform(ctx,canvas){
    //测试scale()
    //ctx.strokeStyle='red';
    //ctx.arc(10,10,10,0,Math.PI,false);
    //ctx.stroke();
    //ctx.save();
    //ctx.scale(2,1);
    ////ctx.strokeStyle='blue';
    //ctx.beginPath();
    //ctx.arc(10,10,10,0,Math.PI,false);
    //ctx.stroke();
    //ctx.restore();
    //ctx.beginPath();
    //ctx.fillStyle='red';
    //ctx.arc(20,20,20,0,2*Math.PI,false);
    //ctx.fill();
    //ctx.strokeRect(0,0,150,150);
    //ctx.strokeStyle='red';
    //ctx.strokeRect(5,5,50,50);
    //var timer=null,num=1;
    //timer=setInterval(function(){
    //    if(parseInt(num)>=5){//浮点数在进行运算时可能会不精确
    //        clearInterval(timer);
    //        num=5;
    //    }else{
    //        num+=0.1;
    //    }
    //    ctx.save();
    //    ctx.scale(num,num);
    //    ctx.clearRect(0,0,canvas.clientWidth,canvas.clientHeight);
    //    ctx.lineWidth=1;
    //    ctx.strokeRect(5,5,50,50);
    //    ctx.restore();
    //    ctx.lineWidth=5;
    //    ctx.moveTo(25,5);
    //    ctx.lineTo(25,26);
    //    ctx.stroke();
    //},500);

    //测试rotate()
    //ctx.fillStyle='red';
    //ctx.fillRect(0,0,100,50);
    ////ctx.rotate(Math.PI/6);
    //ctx.transform(Math.cos(Math.PI/6),Math.sin(Math.PI/6),-Math.sin(Math.PI/6),Math.cos(Math.PI/6),0,0);
    //ctx.strokeRect(0,0,100,50);
    ////ctx.rotate(Math.PI/6);
    //ctx.transform(Math.cos(Math.PI/6),Math.sin(Math.PI/6),-Math.sin(Math.PI/6),Math.cos(Math.PI/6),0,0);
    //ctx.strokeRect(0,0,100,50);

    //测试translate()
    //ctx.fillStyle='red';
    //ctx.fillRect(5,5,100,100);
    //ctx.translate(105,105);
    //ctx.fillRect(0,0,100,100);
    //ctx.save();
    //ctx.translate(100,100);
    //ctx.restore();
    //ctx.fillStyle='blue';
    //ctx.fillRect(0,0,50,50);

    //测试transform()
    //ctx.strokeRect(10,10,100,100);
    //ctx.transform(2,0,0,2,0,0);
    //ctx.transform(Math.cos(Math.PI/6),Math.sin(Math.PI/6),-Math.sin(Math.PI/6),Math.cos(Math.PI/6),0,0);
    //ctx.transform(1,0,0,1,10,10);
    //ctx.transform(1,Math.tan(30*Math.PI/180),0,1,0,0);
    //ctx.strokeStyle="red";
    //ctx.strokeRect(10,10,100,100);
    //ctx.setTransform(2*Math.cos(Math.PI/6)-2*Math.sin(Math.PI/6)*Math.tan(Math.PI/6),2*Math.sin(Math.PI/6)+2*Math.cos(Math.PI/6)*Math.tan(Math.PI/6),-2*Math.sin(Math.PI/6),2*Math.cos(Math.PI/6),20*Math.cos(Math.PI/6)-20*Math.sin(Math.PI/6),20*Math.sin(Math.PI/6)+20*Math.cos(Math.PI/6));
    //ctx.fillStyle='blue';
    //ctx.fillRect(10,10,100,100);

    //画扇形
    //1、
    //ctx.arc(100,100,100,Math.PI/6,Math.PI/3,false);
    //ctx.lineTo(100,100);
    //ctx.closePath();
    //ctx.stroke();
    //2、
    //ctx.save();
    //ctx.translate(100,100);
    //ctx.arc(0,0,100,Math.PI/6,Math.PI/3,false);
    //ctx.save();
    //ctx.rotate(Math.PI/6);
    //ctx.moveTo(100,0);
    //ctx.lineTo(0,0);
    //ctx.restore();
    //ctx.rotate(Math.PI/3);
    //ctx.lineTo(100,0);
    //ctx.stroke();
    //ctx.restore();
    //3、
    //ctx.save();
    //ctx.translate(100,100);
    //ctx.arc(0,0,100,Math.PI/6,Math.PI/3,false);
    //ctx.lineTo(0,0);
    //ctx.rotate(Math.PI/6);
    //ctx.lineTo(100,0);
    //ctx.stroke();
    //ctx.restore();

    //在绘图环境上封装画扇形的方法
    CanvasRenderingContext2D.prototype.sector=function(x,y,r,sdeg,edeg){
        this.beginPath();
        this.arc(x,y,r,sdeg*Math.PI/180,edeg*Math.PI/180,false);
        this.lineTo(x,y);
        this.closePath();
        return this;
    };
    //ctx.sector(100,100,100,30,60).stroke();
    //ctx.sector(100,100,100,90,120).stroke();
    //ctx.sector(100,100,100,180,210).stroke();

    //ctx.fillStyle='red';
    //ctx.sector(100,100,100,30,150).fill();
    //ctx.fillStyle='green';
    //ctx.sector(100,100,100,150,270).fill();
    //ctx.fillStyle='blue';
    //ctx.sector(100,100,100,270,30).fill();

    //扇形倒计时效果
    var timer=null,deg=-90;
    timer=setInterval(function(){
        if(deg==270){
            clearInterval(timer);
        }else{
            ctx.fillStyle='green';
            ctx.sector(100,100,100,-90,deg+=5).fill();
            ctx.fillStyle='#fff';
            ctx.sector(100,100,80,-90,270).fill();
        }
    },100);
}
function drawPic(ctx){
    //使用drawImage()绘制图片
    var pic=document.getElementById('pic');
    ctx.drawImage(pic,0,0,300,300);
    //使用drawImage()绘制画布
    //var pic=document.getElementById('canvas1');
    //ctx.drawImage(pic,0,0);

    //var img=new Image();
    //img.src='../04.jpg';
    //设置目标像素点的颜色
    function setXYPixColor(imgData,x,y,color){//(x,y)为imgdata表示的图像的像素点坐标
        var width=imgData.width;
        var height=imgData.height;
        var pos=y*width+x;
        imgData.data[pos*4]=color[0];
        imgData.data[pos*4+1]=color[1];
        imgData.data[pos*4+2]=color[2];
        imgData.data[pos*4+3]=color[3];
    }
    //img.onload=function(){
    //    //ctx.drawImage(this,90,67.5,90,67.5,50,10,90,67.5);//需要在图片加载后在调用这个方法，否则报错
    //    ctx.drawImage(this,35,15,50,65,10,10,50,60);
    //    //ctx.drawImage(this,10,146);
    //    var imgData=ctx.getImageData(10,10,50,60);
    //    console.log(imgData);
    //    //var imgData1=ctx.createImageData(50,60);
    //    var imgData1=ctx.createImageData(imgData);
    //    console.log(imgData1);
    //    console.log(imgData1.data.length);
    //    //将imgData的某一点设置为红色
    //    //setXYPixColor(imgData,10,10,[255,0,0,255]);
    //    //将imgData的某一行一列设置为红色
    //    for(var i=0;i<imgData.width;i++){
    //        setXYPixColor(imgData,i,10,[255,0,0,255]);
    //    }
    //    for(i=0;i<imgData.height;i++){
    //        setXYPixColor(imgData,10,i,[255,0,0,255]);
    //    }
    //    //ctx.putImageData(imgData,10,80,25,30,20,20);
    //    ctx.putImageData(imgData,10,80);
    //};

    //制作粒子图
    //function getRandomArr(all,random){
    //    var arr=new Array();
    //    var newArr=new Array();
    //    for(var i=0;i<all;i++){
    //        arr.push(i);
    //    }
    //    for(i=0;i<random;i++){
    //        newArr.push(arr.splice(Math.floor(Math.random()*arr.length),1))
    //    }
    //    return newArr;
    //}
    //
    //ctx.fillStyle='red';
    //ctx.arc(100,100,100,0,2*Math.PI);
    //ctx.fill();
    //var sImgData=ctx.getImageData(10,10,180,135);
    //ctx.clearRect(0,0,300,300);
    ////console.log(sImgData);
    //var w=sImgData.width;
    //var h=sImgData.height;
    //var arr=getRandomArr(w*h,w*h/2);
    ////console.log(arr);
    //var dImgData=ctx.createImageData(sImgData);
    //for (var i=0;i<arr.length;i++){
    //    dImgData.data[arr[i]*4]=sImgData.data[arr[i]*4];
    //    dImgData.data[arr[i]*4+1]=sImgData.data[arr[i]*4+1];
    //    dImgData.data[arr[i]*4+2]=sImgData.data[arr[i]*4+2];
    //    dImgData.data[arr[i]*4+3]=sImgData.data[arr[i]*4+3];
    //}
    //ctx.putImageData(dImgData,0,0);

    //制作反色图加倒影
    //var sImageData=ctx.getImageData(10,10,180,135);
    //var w=sImageData.width;
    //var h=sImageData.height;
    //var pos= 0,pos1=0;
    //var oImgData=ctx.createImageData(sImageData);
    //for(var i=0;i<h;i++){
    //    for(var j=0;j<w;j++){
    //        pos=i*w+j;
    //        pos1=w*(h-1-i)+j;
    //        oImgData.data[pos1*4]=255-sImageData.data[pos*4];
    //        oImgData.data[pos1*4+1]=255-sImageData.data[pos*4+1];
    //        oImgData.data[pos1*4+2]=255-sImageData.data[pos*4+2];
    //        oImgData.data[pos1*4+3]=255*i/h;
    //    }
    //}
    //ctx.putImageData(oImgData,10,150);

    //马赛克
    var imgData=ctx.getImageData(75,0,150,250);
    var w=imgData.width;
    var h=imgData.height;
    var num=10;
    var wNum=w/num,hNum=h/num,r1= 0,r2= 0,color=new Array();
    var newImgData=ctx.createImageData(imgData);
    function getXYPixColor(imgData,x,y){
        var w=imgData.width;
        var h=imgData.height;
        var pos=y*w+x;
        var color=new Array();
        color[0]=imgData.data[pos*4];
        color[1]=imgData.data[pos*4+1];
        color[2]=imgData.data[pos*4+2];
        color[3]=imgData.data[pos*4+3];
        return color;
    }
    for(var i=0;i<hNum;i++){
        for(var j=0;j<wNum;j++){
            r1=Math.floor(Math.random()*num);
            r2=Math.floor(Math.random()*num);
            color=getXYPixColor(imgData,(j*num+r2),(i*num+r1));
            for(var m=0;m<num;m++){
                for(var n=0;n<num;n++){
                    setXYPixColor(newImgData,(j*num+n),(i*num+m),color);
                }
            }
        }
    }
    ctx.drawImage(pic,300,0,300,300);
    ctx.putImageData(newImgData,375,0);


    //测试clip()
    //ctx.save();
    //ctx.fillRect(105,0,5,5);
    //ctx.beginPath();
    //ctx.arc(50,50,50,-Math.PI/2,3*Math.PI/2);
    ////ctx.lineTo(105,0);
    ////ctx.closePath();
    //ctx.rect(110,0,100,100);
    ////ctx.closePath();
    //ctx.fillStyle='pink';
    //ctx.fill();
    ////ctx.moveTo(0,0);
    ////ctx.lineTo(200,200);
    ////ctx.stroke();
    ////ctx.beginPath();
    //ctx.clip();
    ////ctx.restore();
    ////ctx.beginPath();
    //ctx.arc(105,50,50,0,2*Math.PI);
    //ctx.fillStyle='rgba(99,56,89,0.1)';
    //ctx.stroke();

}
function drawVideo(ctx){
    //绘制视频
    var video=document.getElementById('video');

    //var timer=null;
    //timer=setInterval(function(){
    //    ctx.drawImage(video,10,10,300,400);
    //},20);
    ctx.drawImage(video,10,10,300,400);
}

function testOther(ctx,canvas){
    //var canvas=document.getElementById('canvas1');
    var pic=document.getElementById('pic');

    //var pattern=ctx.createPattern(canvas,'no-repeat');
    var pattern=ctx.createPattern(pic,'repeat');
    //var pattern=ctx.createPattern(canvas,'repeat-x');
    //var pattern=ctx.createPattern(canvas,'repeat-y');

    ctx.fillStyle=pattern;
    //ctx.fillRect(5,5,400,400);

    ctx.strokeStyle=pattern;
    //ctx.strokeRect(5,5,400,400);

    ctx.font='40px 微软雅黑';
    ctx.textBaseline='top';
    ctx.fillText('测试模式',5,5);

    //测试setLineDash()与getLineDash
    ctx.moveTo(0,60);
    ctx.lineTo(400,60);
    ctx.arc(100,100,30,0,2*Math.PI);
    ctx.setLineDash([10,20,30]);
    ctx.stroke();
    var txt=ctx.getLineDash();
    console.log(txt);
    //ctx.setLineDash([0]);
    ctx.fillStyle='red';
    //ctx.fillText(txt,0,60);

    //测试isPointInPath(x,y)
    ctx.beginPath();
    ctx.rect(150,150,100,100);
    //ctx.stroke();
    ctx.fill();
    canvas.onclick=function(ev){
        var ev=ev||event;
        ctx.clearRect(150,260,250,140);
        var l=ev.pageX-this.offsetLeft;
        var t=ev.pageY-this.offsetTop;
        var txt='('+l+','+t+')';
        //console.log(txt);
        //console.log(ev.pageY);
        //console.log(ev.clientY);
        //console.log(this.offsetTop);
        //if(ctx.isPointInPath(l,t)){
        if(ctx.isPointInStroke(l,t)){
            ctx.fillText(txt,150,260);
        }
    }

}

function drawClock(ctx,canvas){
    function drawCircle(){
        ctx.save();
        ctx.translate(200,200);
        ctx.beginPath();
        ctx.save();
        ctx.shadowOffsetX=1;
        ctx.shadowOffsetY=1;
        ctx.shadowBlur=5;
        ctx.shadowColor='black';
        ctx.arc(0,0,100,0,2*Math.PI,false);
        ctx.stroke();
        ctx.restore();
        ctx.clip();
        ctx.beginPath();
        //ctx.save();
        ctx.rotate(-Math.PI/2);
        var num=0;
        for(var deg=0;deg<360;deg+=6){
            ctx.save();
            ctx.rotate(deg*Math.PI/180);
            ctx.beginPath();
            //ctx.moveTo(100,0);
            if(deg%30==0){
                num=deg/30==0?12:deg/30;
                ctx.save();
                ctx.translate(80,0);
                ctx.rotate((-deg-270)*Math.PI/180);
                ctx.textBaseline='middle';
                ctx.font='18px Arial';
                if(num<10) {
                    ctx.fillText(num, -4.5, 0);
                }else{
                    ctx.fillText(num, -9, 0);
                }
                ctx.restore();
                ctx.moveTo(100,0);
                ctx.lineWidth=4;
                ctx.lineTo(90,0);
            }else{
                ctx.moveTo(100,0);
                ctx.lineWidth=2;
                ctx.lineTo(95,0);
            }
            ctx.stroke();
            ctx.restore();
        }
        //ctx.textBaseline='middle';
        //ctx.font='18px Arial';
        //ctx.fillText('12',-9,-80);
        //ctx.fillText('1',35.5,-40*Math.sqrt(3));
        //ctx.fillText('2',40*Math.sqrt(3)-4.5,-40);
        //ctx.fillText('3',75.5,0);
        //ctx.fillText('4',40*Math.sqrt(3)-4.5,40);
        //ctx.fillText('5',35.5,40*Math.sqrt(3));
        //ctx.fillText('6',-4.5,80);
        //ctx.fillText('7',-44.5,40*Math.sqrt(3));
        //ctx.fillText('8',-40*Math.sqrt(3)-4.5,40);
        //ctx.fillText('9',-84.5,0);
        //ctx.fillText('10',-40*Math.sqrt(3)-9,-40);
        //ctx.fillText('11',-49,-40*Math.sqrt(3));
    }
    function drawPin(){
        ctx.clearRect(0,0,400,400);
        drawCircle();
        //ctx.rotate(-Math.PI/2);
        var date=new Date();
        var h=date.getHours();
        var m=date.getMinutes();
        var s=date.getSeconds();
        var ms=date.getMilliseconds();
        //var hDeg=h%12*Math.PI/6;
        var hDeg=(h*30+m/60*30)*Math.PI/180;
        ctx.save();
        ctx.rotate(hDeg);
        ctx.beginPath();
        //ctx.lineWidth=4;
        ctx.moveTo(0,-4);
        //ctx.lineTo(50,0);
        ctx.bezierCurveTo(75,-4,75,2,0,4);
        ctx.fill();
        ctx.restore();
        //var mDeg=m%60*6*Math.PI/180;
        var mDeg=(m*6+s/60*6)*Math.PI/180;
        ctx.save();
        ctx.rotate(mDeg);
        ctx.beginPath();
        //ctx.lineWidth=3;
        ctx.moveTo(0,-3);
        //ctx.lineTo(78,0);
        ctx.bezierCurveTo(88,-3,88,3,0,3);
        ctx.fill();
        ctx.restore();
        //var sDeg=s%60*6*Math.PI/180;
        var sDeg=(s*6+ms/1000*6)*Math.PI/180;
        ctx.save();
        ctx.rotate(sDeg);
        ctx.beginPath();
        ctx.lineWidth=3;
        ctx.strokeStyle='red';
        ctx.moveTo(0,0);
        ctx.lineTo(75,0);
        ctx.stroke();
        ctx.restore();
        ctx.beginPath();
        ctx.fillStyle='#999';
        ctx.arc(0,0,5,0,2*Math.PI);
        ctx.fill();
        ctx.restore();
    }
    //drawCircle();
    drawPin();
    var timer=setInterval(drawPin,50);
}

function simpleGame(ctx,canvas){
    var hero={x:0,y:0,speed:256};
    var monster={x:0,y:0};
    var keyCodes={};
    var monstersCaught=0;
    var bgImg,heroImg,monsterImg;
    function loadImg(src){
        var img=new Image();
        img.ready=false;
        img.onload=function(){
            this.ready=true;
        };
        img.src=src;
        return img;
    }
    var bgImg=loadImg('images/background.png');
    var heroImg=loadImg('images/hero.png');
    var monsterImg=loadImg('images/monster.png');
//    var bgReady = false;
//    var bgImage = new Image();
//    bgImage.onload = function () {
//        bgReady = true;
//    };
//    bgImage.src = "images/background.png";
//
//// Hero image
//    var heroReady = false;
//    var heroImage = new Image();
//    heroImage.onload = function () {
//        heroReady = true;
//    };
//    heroImage.src = "images/hero.png";
//
//// Monster image
//    var monsterReady = false;
//    var monsterImage = new Image();
//    monsterImage.onload = function () {
//        monsterReady = true;
//    };
//    monsterImage.src = "images/monster.png";
    var reset=function(){
        hero.x=canvas.width/2;
        hero.y=canvas.height/2;
        monster.x=32+Math.random()*(canvas.width-64);
        monster.y=32+Math.random()*(canvas.height-64);
    };
    document.body.onkeydown=function(ev){
        var ev=ev||event;
        keyCodes[ev.keyCode]=true;
    };
    document.body.onkeyup=function(ev){
        var ev=ev||event;
        delete keyCodes[ev.keyCode];
    };
    function update(modify){
        if(38 in keyCodes){
            hero.y-=modify*hero.speed;
        }
        if(40 in keyCodes){
            hero.y+=modify*hero.speed;
        }
        if(37 in keyCodes){
            hero.x-=modify*hero.speed;
        }
        if(39 in keyCodes){
            hero.x+=modify*hero.speed;
        }
        if(hero.x<=(monster.x+32)&&monster.x<=(hero.x+32)&&hero.y<=(monster.y+32)&&monster.y<=(hero.y+32)){
            ++monstersCaught;
            reset();
        }
    }
    function render(){
        if(bgImg.ready){
            ctx.drawImage(bgImg,0,0);
        }
        if(heroImg.ready){
            ctx.drawImage(heroImg,hero.x,hero.y);
            //ctx.drawImage(heroImage,100,100);
        }
        if(monsterImg.ready){
            ctx.drawImage(monsterImg,monster.x,monster.y);
            //ctx.drawImage(monsterImage,20,20);
        }
        ctx.fillStyle='rgb(250,250,250)';
        ctx.font="24px Helvetica";
        ctx.textAlign='left';
        ctx.textBaseline='top';
        ctx.fillText('Goblins caught:'+monstersCaught,32,32);
    }
    var main=function(){
        var now=Date.now();
        var delta=now-then;
        //render();
        update(delta/1000);
        render();
        then=now;
    };
    reset();
    //console.log(hero.x);
    //console.log(hero.y);
    //console.log(monster.x);
    //console.log(canvas.width);
    var then=Date.now();
    setInterval(main,1);
}

function testGlobalCompositeOperation(){
    var arr = ['source-over','source-atop','source-in','source-out','destination-over','destination-atop','destination-in','destination-out','lighter','copy','xor','multiply','screen','overlay','darken','lighten','color-dodge','color-burn','hard-light','soft-light','difference','exclusion','hue','saturation','color','luminosity'];
    for(var i=0;i<arr.length;i++){
        document.write("<div id='p_" + i + "' style='float:left;'>" + arr[i] + ":<br>");
        var canvas = document.createElement("canvas");
        canvas.width = 120;
        canvas.height = 100;
        canvas.style.border = "1px solid #000";
        canvas.style.marginRight = '10px';
        document.getElementById("p_" + i).appendChild(canvas);
        var ctx = canvas.getContext("2d");
        ctx.fillStyle="red";
        ctx.fillRect(10,10,50,50);
        ctx.globalCompositeOperation=arr[i];
        ctx.beginPath();
        ctx.fillStyle="green";
        ctx.fillRect(30,30,50,50);
        ctx.fill();
        document.write("</div>");

    }
}
testGlobalCompositeOperation();

//var iframe='iframe';
window.onload=function(){
    var canvas1=document.getElementById('canvas1');
    var ctx1=canvas1.getContext('2d');//3d webGL ,getContext("2d")是canvas的绘图环境，只有引入它才能进行绘图
    drawline(ctx1);

    var canvas2=document.getElementById('canvas2');
    var ctx2=canvas2.getContext('2d');
    drawrect(ctx2);

    var canvas3=document.getElementById('canvas3');
    var ctx3=canvas3.getContext('2d');
    drawtext(ctx3);

    var canvas4=document.getElementById('canvas4');
    var ctx4=canvas4.getContext('2d');
    testAnotherAttributeFunc(ctx4);

    var canvas5=document.getElementById('canvas5');
    var ctx5=canvas5.getContext('2d');
    drawcircle(ctx5);

    var canvas6=document.getElementById('canvas6');
    var ctx6=canvas6.getContext('2d');
    drawcurve(ctx6);

    var canvas7=document.getElementById('canvas7');
    var ctx7=canvas7.getContext('2d');
    testGradient(ctx7);

    var canvas8=document.getElementById('canvas8');
    var ctx8=canvas8.getContext('2d');
    testGlobalAlpha(ctx8);

    var canvas9=document.getElementById('canvas9');
    var ctx9=canvas9.getContext('2d');
    drawTool(ctx9,canvas9);

    var canvas10=document.getElementById('canvas10');
    var ctx10=canvas10.getContext('2d');
    testTransform(ctx10,canvas10);

    var canvas11=document.getElementById('canvas11');
    var ctx11=canvas11.getContext('2d');
    drawPic(ctx11);

    var canvas12=document.getElementById('canvas12');
    var ctx12=canvas12.getContext('2d');
    drawVideo(ctx12);

    var canvas13=document.getElementById('canvas13');
    var ctx13=canvas13.getContext('2d');
    testOther(ctx13,canvas13);

    var canvas14=document.getElementById('canvas14');
    var ctx14=canvas14.getContext('2d');
    drawClock(ctx14,canvas14);

    var canvas15=document.getElementById('canvas15');
    var ctx15=canvas15.getContext('2d');
    simpleGame(ctx15,canvas15);


    //alert('iframe');
    //var iframe='iframe';
    //console.log(parentIframe);
    //var i=0;
    //for(;i<=100;i++){
    //    console.log(i);
    //}

    //var i=0;
    //setTimeout(function(){
    //        if(i==10){
    //            setInterval(null);
    //        }else{
    //            i++;
    //            console.log(i);
    //        }
    //    if(i<10){
    //        console.log(i);
    //        i++;
    //        setTimeout(arguments.callee,40);
    //    }
    //},40);

    //window.onmessage=function (event){
    //    console.log(event);
    //    console.log('receive');
    //}

    //var num=1;
    //var timer=null;
    //timer=setInterval(function(){
    //    var tmp;
    //    if(num>1){
    //        clearInterval(timer);
    //        console.log(tmp);
    //    }else{
    //        num++;
    //        tmp=1;
    //        console.log(tmp);
    //    }
    //},1);
    //var a;
    //a=1;
    //var a;
    //console.log(a);
}