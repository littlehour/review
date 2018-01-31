/**
 * Created by Administrator on 2018/1/27.
 */
$(function(){
    //console.log(navigator.userAgent);
    var dm=document.documentMode;
    console.log(dm);
    if(dm&&(dm===10||dm===11)){
        console.log('ie10 or 11')
    }
    var $collapse1=$('#collapse1');
    var $wrap1=$('#wrap1');
    $collapse1.css('height',document.documentElement.clientHeight+'px');
    //console.log($('#collapse1').css('height'));
    window.onresize=function(){
        //console.log('resize');
        $collapse1.css('height',document.documentElement.clientHeight+'px');
    };
    //$('#collapse1').on('show.bs.collapse',function(){
    //    //console.log('ss');
    //    //$('#collapse1').css('width','270px');
    //    $(this).animate({
    //        width:'270px'
    //    },500);
    //    $('#wrap').fadeIn(500);
    //}).on('hide.bs.collapse',function(){
    //    $('#wrap').fadeOut(500);
    //    //$('#collapse1').css('width','0px');
    //    $(this).animate({
    //        width:'0px'
    //    },500);
    //}).click(function(e){
    //    e.stopPropagation();
    //    //console.log('menu');
    //});
    $('.dropdown-toggle').click(function(e){
        e.preventDefault();
        $(this).next('.dropdown-menu').slideToggle(500);
    });
    $('#wrap').click(function(){
        $collapse1.animate({
            width:'0'
        },500,function(){
            $collapse1.css('display','none');
        });
        $('#wrap').fadeOut(500);
        //$collapse1.css('display','none');
    });

    $collapse1.click(function(e){
        e.stopPropagation();
    });

    $('#toggle').click(function(e){
        //var $collapse1=$('#collapse1');

        var $display=$collapse1.css('display');
        //console.log($width);
        if(!$display||$display==='none'){
            $collapse1.css('display','block');
            $collapse1.animate({
                width:'270px'
            },500);
            $('#wrap').fadeIn(500);
        }else{
            $collapse1.animate({
                width:'0'
            },500,function(){
                $collapse1.css('display','none');
            });
            $('#wrap').fadeOut(500);
            //$collapse1.css('display','none');
        }
    });

    var beforeScroll=document.documentElement.scrollTop||document.body.scrollTop;
    var load=true;
    //console.log(beforeScroll);
    $(document).on('scroll',function(){
        //console.log(load);
        //console.log(document.readyState);
        if(!load){
            //console.log('scroll');
            if($collapse1.css('display')==='block'){
                $collapse1.animate({
                    width:'0'
                },500,function(){
                    $collapse1.css('display','none');
                });
                $('#wrap').fadeOut(500);
            }
            //console.log(document.documentElement.scrollTop);
            var afterScroll=document.documentElement.scrollTop||document.body.scrollTop;
            var dealt=afterScroll-beforeScroll;
            //console.log(beforeScroll);
            beforeScroll=afterScroll;
            console.log(dealt);
            if(dealt>0){
                //console.log('down');
                if(afterScroll>100){
                    $('#header').addClass('down');
                }
            }else if(dealt<0){
                $('#header').removeClass('down');
                $('#collapse1').css('top',-103+afterScroll+'px');
                if(afterScroll!==0){
                    $('#header').addClass('not-to-top');
                }else{
                    $('#header').removeClass('not-to-top');
                }
            }
        }else{
            var loadScroll=document.documentElement.scrollTop||document.body.scrollTop;
            if(loadScroll>0){
                //console.log('00');
                //console.log((document.documentElement.scrollTop||document.body.scrollTop));
                $('#collapse1').css('top',-103+loadScroll+'px');
                $('#header').addClass('not-to-top');
            }
        }
        if(document.readyState==='complete'){
            load=false;
        }
    });

    $('.item-title').click(function(){
        var $itemContent=$(this).next('.item-content');
        if(!$itemContent.css('display')||$itemContent.css('display')==='none'){
            $itemContent.slideDown(500);
            $(this).addClass('active');
        }else{
            $itemContent.slideUp(500);
            $(this).removeClass('active');
        }
        return false;
    })
});
