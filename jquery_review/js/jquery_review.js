/**
 * Created by Administrator on 2018/2/19.
 */
$(function(){
    //.ajaxComplete()
    $('#trigger1').click(function(){
        $('#result1').load('test.html');
    });
    $('#trigger2').click(function(){
        $('#result2').load('../test1.html');
    });
    var count=0;
    $(document).ajaxComplete(function(event,xhr,settings){
        count++;
        var $log=$('#log');
        var text=$log.text();
        $log.text(text+'ajax request complete '+count+'\n');
        //console.log(settings);
        console.log('complete');
        console.log(xhr);
    });
    //.ajaxError()
    $(document).ajaxError(function(event,xhr,settings,thrownError){
        var $errLog=$('#errLog');
        var text=$errLog.text();
        $errLog.text(text+'error request page '+settings.url+'. error message '+thrownError+'\n');
        console.log('error');
        console.log(thrownError);
        console.log(xhr);
    });
    //.ajaxSend()
    $(document).ajaxSend(function(event,xhr,settings){
        var $sendLog=$('#sendLog');
        var text=$sendLog.text();
        $sendLog.text(text+'send ajax request at '+settings.url+'\n');
        console.log('send');
        console.log(xhr);
    });
    //.ajaxStart()
    $(document).ajaxStart(function(){
        var $startLog=$('#startLog');
        var text=$startLog.text();
        $startLog.text(text+'start ajax request'+'\n');
        console.log('start');
    });
    //.ajaxStop()
    $(document).ajaxStop(function(){
        var $stopLog=$('#stopLog');
        var text=$stopLog.text();
        $stopLog.text(text+'stop ajax request'+'\n');
        console.log('stop');
    });
    //.ajaxSuccess()
    $(document).ajaxSuccess(function(event,xhr,settings,data){
        var $successLog=$('#successLog');
        var text=$successLog.text();
        $successLog.text(text+'ajax request success at '+settings.url+'. response is '+xhr.responseText+'\n');
        console.log('success');
        console.log(xhr);
        console.log(data);
    });
    //jQuery.ajax()
    $('#trigger3').click(function(){
        $.ajax({
            accepts:{
                mycustomtype:'application/x-some-custom-type'  //�Զ���������ֻ��Сд
                //'html':'text/html'
            },
            //accepts:{
            //    'html':'text/html'
            //},
            //accepts:'application/html',   //undefined
            converters:{
                //'text mycustomtype':function(result){
                //    console.log(result);   //resultΪAjax���󷵻ص�����
                //    return 'application/x-some-custom-type';
                //    //return new result;
                //}
                'html mycustomtype':true
            },
            dataType:'mycustomtype',
            //dataType:'html',
            url:'test.html',
            async:true,  //����Ϊfalse����ͬ����ʽ���ǹ�ʱ�ģ���Ϊ����Ϊͬ����Ӱ���û�����
            beforeSend:function(xhr,settings){
                xhr.setRequestHeader('test','xml');
                console.log('before send');
                //return false;
            },
            //type:'get',
            cache:false,
            complete:[function(xhr,status){
                console.log('complete event as ajax setting...');
            },function(xhr,status){
                console.log(xhr);
                console.log(status);
            }],
            contents:{
                mycustomtype:/html/
            }
        })
    });
});