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
});

//$(document).ready(
//    function()
//    {
//        $('#color1').jPicker(
//            {
//                window:
//                {
//                    expandable: true
//                },
//                color:
//                {
//                    alphaSupport: true,
//                    active: new $.jPicker.Color({ ahex: '99330099' })
//                }
//            });
//    });