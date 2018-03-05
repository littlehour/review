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
        //eval(xhr.responseText);
        $($(this)[0].body).addClass('success');
        console.log('success');
        console.log(xhr);
        console.log(data);
    });
    //jQuery.ajax()
    var h=function(data){
        //console.log('test jsonp');
        console.log(data);
    };
    $('#trigger3').click(function(){
        $.ajax({
            //accepts:{
            //    mycustomtype:'application/x-some-custom-type'  //�Զ���������ֻ��Сд
            //    //'html':'text/html'
            //},
            //accepts:{
            //    'html':'text/html'
            //},
            //accepts:'application/html',   //undefined
            converters:{
                //'text mycustomtype':function(result){
                //    console.log(result);   //resultΪAjax���󷵻ص�����
                //    return 'application/x-some-custom-type';
                //    //return newresult;  //��text���͵�resultת����mycustomtype���͵�newresult
                //}
                'html mycustomtype':true,
                'json html':function(result){
                    return "<div>"+result.test+"</div>"
                }
            },
            //dataType:'json html',
            dataType:'jsonp',
            //dataType:'mycustomtype',
            //dataType:'html',
            jsonp:false,
            jsonpCallback:function(){
                return 'h';
            },
            //jsonpCallback:function(){
            //    return 'h';
            //},
            //url:'http://localhost:8080/server/jsonp.asp',
            url:'server/jsonp.asp',
            async:true,  //����Ϊfalse����ͬ����ʽ���ǹ�ʱ�ģ���Ϊ����Ϊͬ����Ӱ���û�����
            beforeSend:function(xhr,settings){
                xhr.setRequestHeader('test','xml');
                console.log('before send');
                //return false;
            },
            //type:'get',
            cache:false,
            complete:[function(xhr,status){
                $(this).addClass('complete');
                console.log('complete event as ajax setting...');
            },function(xhr,status){
                console.log(xhr);
                console.log(status);
            }],
            contents:{
                mycustomtype:/mycustomtype/    //��������ʽӦ���Ǳ�ʾ��ν�result����Ϊnewresult(converters��Ҫת��������)
            },
            contentType:'application/json;charset=UTF-8',
            context:document.body,
            //crossDomain:true,   //???
            data:{
                "test1":"test1",
                "test2":"test2",
                "test":["test3","test4"]
            },
            processData:false, //get����ʱ�����ѡ��Ϊfalse�Ļ�����û�в�ѯ�ַ�����
            traditional:true,  //false�Ļ���test��ֵΪtest[]='test3'&test[]='test4';true�Ļ���test��ֵΪtest='test3'&test='test4'
            //type:'post',
            method:'post',
            global:false,
            headers:{
                test:'test',
                hello:'hello',
                "X-Requested-With":'xhr'
            },
            ifModified:'true',   //???
            //mimeType:'text/plain',  //???
            password:'xml',
            username:'xm',
            //timeout:10,
            //dataFilter:function(data,type){
            //    console.log(data);
            //    console.log(type);
            //    return '<div>test</div>';
            //},
            statusCode:{
                200:function(data,status,xhr){
                    console.log('200 response.data is:'+data+'.status is:'+status+'.xhr is:'+xhr);
                    console.log(data);
                    console.log(xhr);
                }
            },
            success:function(data,status,xhr){
                //$('body').html(data);
                //console.log(data.test);
                console.log('success event as Ajax setting.data is:'+data.test+'.status is:'+status);
                console.log(data);

            },
            error:function(xhr,status,errorTrown){
                console.log('error event as Ajax setting.error message:'+status+'.http status:'+errorTrown);
            },
            xhrFields:{
                withCredentials: true
            }
        }).done(function(){
            $(this).addClass('done');
        })
    });
});