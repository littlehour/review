/**
 * Created by Administrator on 2017/11/16.
 */
$(function(){
    //颜色插件jPicker使用
    $.fn.jPicker.defaults.images.clientPath='plugins/color_picker/jpicker-1.1.6/images/';
    $('#color1').jPicker({
        window:{
            expandable:true,
            alphaSupport:true,
            alphaPrecision:2,
            position:{
                x:'center',
                y:'top'
            },
            title:'pick a color'
        }
    },function(color,context){
        console.log(context);
        console.log(color.val('all'));
        console.log(color.val('r'));
    },function(color,context){
        if(context===$('label[for="color1"]')[0]){
            console.log('label set to red');
        }
        console.log(context);
        console.log(color);
    },function(){
        console.log('cancel');
    });
    $('label[for="color1"]').click(function(){
        //console.log('click');
        $.jPicker.List[0].color.active.val('hex','#ff0000',this);
        //$.jPicker.List[0].color.active.val('hex', 'e2ddcf', this);
    });

    //时间插件datetimepiker使用
    $('label[for="date1"]').click(function(){
        //console.log('click');
        $('#date1').datetimepicker({
            bootcssVer:3,
            language:'zh-CN',
            format: 'yyyy/mm/dd',
            weekStart:0,
            startDate:'2017-1-20',
            endDate:'2018-1-31',
            daysOfWeekDisabled:[3,4],
            autoclose:true,
            startView:2,
            maxView:4,
            minView:2,
            todayBtn:true,
            todayHighlight:false,
            keyboardNavigation:true,
            forceParse:true,
            minuteStep:5,
            pickerPosition:'bottom-right',
            viewSelect:'month',
            showMeridian:true,
            initialDate:'2018-1-20'
        });
    });
    $('label[for="datetimeLocal1"]').click(function(){
        //console.log('click');
        $('#datetimeLocal1').datetimepicker({
            bootcssVer:3,
            language:'zh-CN',
            format: 'yyyy/mm/dd hh:ii',
            weekStart:0,
            startDate:'2017-1-20',
            endDate:'2018-1-31',
            daysOfWeekDisabled:[3,4],
            autoclose:true,
            startView:2,
            maxView:4,
            minView:0,
            todayBtn:true,
            todayHighlight:false,
            keyboardNavigation:true,
            forceParse:true,
            minuteStep:1,
            pickerPosition:'bottom-right',
            viewSelect:'month',
            showMeridian:true,
            initialDate:'2018-1-20'
        });
    });
    $('label[for="month1"]').click(function(){
        //console.log('click');
        $('#month1').datetimepicker({
            bootcssVer:3,
            language:'zh-CN',
            format: 'yyyy年mm月',
            weekStart:0,
            startDate:'2017-1-20',
            endDate:'2018-1-31',
            daysOfWeekDisabled:[3,4],
            autoclose:true,
            startView:2,
            maxView:4,
            minView:2,
            todayBtn:true,
            todayHighlight:false,
            keyboardNavigation:true,
            forceParse:true,
            minuteStep:1,
            pickerPosition:'bottom-right',
            viewSelect:'month',
            showMeridian:true,
            initialDate:'2018-1-20'
        });
    });
    $('label[for="time1"]').click(function(){
        //console.log('click');
        $('#time1').datetimepicker({
            bootcssVer:3,
            language:'zh-CN',
            format: 'hh:ii',
            weekStart:0,
            startDate:'2017-1-20',
            endDate:'2018-1-31',
            daysOfWeekDisabled:[3,4],
            autoclose:true,
            startView:1,
            maxView:1,
            minView:0,
            todayBtn:true,
            todayHighlight:false,
            keyboardNavigation:true,
            forceParse:true,
            minuteStep:1,
            pickerPosition:'top-right',
            viewSelect:'month',
            showMeridian:true,
            initialDate:'2018-1-20'
        });
    });

    //表单验证插件使用
    /*************************插件新功能-设置插件validator的默认参数*****************************************/
    //$.validator.setDefaults({
    //    /*关闭键盘输入时的实时校验*/
    //    onkeyup: null,
    //    /*添加校验成功后的执行函数--修改提示内容，并为正确提示信息添加新的样式(默认是valid)*/
    //    success: function(label){
    //        /*label的默认正确样式为valid，需要通过validClass来重置，否则这里添加的其他样式不能被清除*/
    //        label.text('').addClass('valid');
    //    },
    //    /*重写校验元素获得焦点后的执行函数--增加[1.光标移入元素时的帮助提示,2.校验元素的高亮显示]两个功能点*/
    //    onfocusin: function( element ) {
    //        this.lastActive = element;
    //
    //        /*1.帮助提示功能*/
    //        this.addWrapper(this.errorsFor(element)).hide();
    //        //console.log(this.addWrapper(this.errorsFor(element)));
    //        var tip = $(this.addWrapper(this.errorsFor(element))).html();
    //        //alert(tip);
    //        if(tip && $(element).parent().children(".tip").length === 0){
    //            $(element).parent().append("<label class='tip'>" + tip + "</label>");
    //        }
    //
    //        /*2.校验元素的高亮显示*/
    //        $(element).addClass('highlight');
    //
    //        // Hide error label and remove error class on focus if enabled
    //        if ( this.settings.focusCleanup ) {
    //            if ( this.settings.unhighlight ) {
    //                this.settings.unhighlight.call( this, element, this.settings.errorClass, this.settings.validClass );
    //            }
    //            this.hideThese( this.errorsFor( element ) );
    //        }
    //    },
    //    /*重写校验元素焦点离开时的执行函数--移除[1.添加的帮助提示,2.校验元素的高亮显示]*/
    //    onfocusout: function( element ) {
    //        /*1.帮助提示信息移除*/
    //        $(element).parent().children(".tip").remove();
    //
    //        /*2.校验元素高亮样式移除*/
    //        $(element).removeClass('highlight');
    //
    //        /*3.替换下面注释的原始代码，任何时候光标离开元素都触发校验功能*/
    //        //this.element( element );
    //
    //        if ( !this.checkable( element ) && ( element.name in this.submitted || !this.optional( element ) ) ) {
    //            this.element( element );
    //        }
    //    }
    //});
    $.validator.addMethod('telephone',function(value,ele,param){
        return this.optional(ele)||/^1[3458]\d{9}$/.test(value);
    },'please input valid telephone');
    $('#form').validate({
        //debug:true,
        rules:{
            email1:{
                email:true
            },
            number1:{
                min:0,
                max:20,
                number:true
            },
            tel1:{
                telephone:true
            },
            url1:{
                url:true
            }
        },
        messages:{
            email1:{
                email:'请输入正确的email'
            },
            number1:{
                rangelength: $.validator.format("请输入{0}到{1}之间的数字"),
                min:$.validator.format('输入的数字需大于等于{0}'),
                max:$.validator.format('输入的数字需小于等于{0}'),
                number:'请输入数字'
            },
            tel1:{
                telephone:'请输入合法的电话号码'
            },
            url1:{
                url:'请输入合法的url'
            }
        }
    });

    //web存储
    if(typeof localStorage!=='undefined') {
        $('#choose').jPicker({
            window: {
                expandable: true,
                alphaSupport: true,
                alphaPrecision: 2,
                position: {
                    x: '106px',
                    y: 'top'
                },
                title: 'pick a color'
            }
        }, function (color, context) {
            //console.log(color.val('ahex'));
            $('#div').css('background-color', '#' + color.val('hex'));
            localStorage.setItem('bgColor', '#' + color.val('hex'));
        }, function (color, context) {
            $('#div').css('background-color', '#' + color.val('hex'));
        });
        $('#div').css('background-color', localStorage.getItem('bgColor'));
    }

    if(typeof localStorage!=='undefined') {
        $('#choose1').jPicker({
            window: {
                expandable: true,
                alphaSupport: true,
                alphaPrecision: 2,
                position: {
                    x: '106px',
                    y: 'top'
                },
                title: 'pick a color'
            }
        }, function (color, context) {
            //console.log(color.val('ahex'));
            $('#div1').css('background-color', '#' + color.val('hex'));
            sessionStorage.setItem('bgColor', '#' + color.val('hex'));
        }, function (color, context) {
            $('#div1').css('background-color', '#' + color.val('hex'));
        });
        $('#div1').css('background-color', sessionStorage.getItem('bgColor'));
    }

    //web sql
    //var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);
    //var msg;
    //
    //db.transaction(function (tx) {
    //    tx.executeSql('CREATE TABLE IF NOT EXISTS LOGS (id unique, log)');
    //    tx.executeSql('INSERT INTO LOGS (id, log) VALUES (1, "W3Cschool教程")');
    //    tx.executeSql('INSERT INTO LOGS (id, log) VALUES (2, "www.w3cschool.cn")');
    //    msg = '<p>数据表已创建，且插入了两条数据。</p>';
    //    document.querySelector('#status').innerHTML =  msg;
    //});
    //
    //db.transaction(function (tx) {
    //    tx.executeSql('DELETE FROM LOGS  WHERE id=1');
    //    msg = '<p>删除 id 为 1 的记录。</p>';
    //    document.querySelector('#status').innerHTML =  msg;
    //});
    //
    //db.transaction(function (tx) {
    //    tx.executeSql('UPDATE LOGS SET log=\'www.w3cschool.cn\' WHERE id=2');
    //    msg = '<p>更新 id 为 2 的记录。</p>';
    //    document.querySelector('#status').innerHTML =  msg;
    //});
    //
    //db.transaction(function (tx) {
    //    tx.executeSql('SELECT * FROM LOGS', [], function (tx, results) {
    //        var len = results.rows.length, i;
    //        msg = "<p>查询记录条数: " + len + "</p>";
    //        document.querySelector('#status').innerHTML +=  msg;
    //
    //        for (i = 0; i < len; i++){
    //            msg = "<p><b>" + results.rows.item(i).log + "</b></p>";
    //            document.querySelector('#status').innerHTML +=  msg;
    //        }
    //    }, null);
    //});

    //web worker
    var w;
    $('#startCount').click(function(){
        if(typeof Worker!=='undefined'){
            if(typeof w==='undefined'){
                w=new Worker('js/webWorkerTest.js');
                w.onmessage=function(e){
                    $('#count').html(e.data);
                }
            }
        }else{
            $('#count').html('您的浏览器不支持web worker!');
        }

        //var i=0;
        //function countNumber(){
        //    i+=1;
        //    $('#count').html(i);
        //    w=setTimeout(countNumber,500);
        //}
        //countNumber();
    });
    $('#stopCount').click(function(){
        w.terminate();
        //clearTimeout(w);
    });

    //HTML5服务器发送事件(Server-Sent Events)
    var text;
    if(typeof (EventSource)!=='undefined') {
        var es = new EventSource('server/sseTest.asp');
        //console.log(typeof es.onmessage);
        es.onmessage=function (e) {
            console.log('test');
            $('#sseData')[0].innerHTML+=e.data + "<br>";
        };
        //es.addEventListener('message',function(e){
        //    $('#sseData')[0].innerHTML+=e.data + "<br>";
        //},false);
    }
    //$.ajax({
    //    url:'server/sseTest.asp',
    //    dataType:'text',
    //    type:'post',
    //    data:{
    //        ll:'ll'
    //    },
    //    success:function(data){
    //        console.log(data);
    //    },
    //    error:function(e){
    //        console.log(e);
    //    }
    //});
});