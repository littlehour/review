/**
 * Created by Administrator on 2018/1/24.
 */
var i=0;
function countNumber(){
    i+=1;
    postMessage(i);
    setTimeout(countNumber,500);
}
countNumber();
