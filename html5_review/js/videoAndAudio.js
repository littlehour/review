/**
 * Created by Administrator on 2018/1/10.
 */

window.onload=function() {
    console.log('test');
    var s1 = document.getElementById('s1');
    var s2 = document.getElementById('s2');
    var v = document.getElementById('video');

    //s1.onerror=function(){
    //    alert("s1 don't load");
    //}
    v.addEventListener('error', function (e) {
        alert(v.error.code);
    }, false);

    //v.onplay=function(){
    //    console.log(this.currentSrc);
    //    v.src='';
    //    //v.removeAttribute('src');//貌似没有用
    //    s1.src='';
    //    s1.removeAttribute('src');
    //    s2.src='';
    //    s2.removeAttribute('src');
    //    console.log(this.currentSrc);
    //};
    v.addEventListener('play', function () {
        console.log(this.currentSrc);
        //v.src='';
        //v.removeAttribute('src');//貌似没有用
        //s1.src='';
        //s1.removeAttribute('src');
        //s2.src='';
        //s2.removeAttribute('src');
        console.log(this.currentSrc);
    }, false);

    //var audio=new Audio('media/周杰伦 - 不能说的秘密.mp3');
    //audio.play();

    console.log(v.canPlayType('video/mp4'));
    console.log(v.canPlayType('video/ogg;codecs=dirac, speex'));

    //测试事件
    //eventTester = function(e){
    //    v.addEventListener(e,function(){
    //        console.log((new Date()).getTime(),e,v.networkState,v.readyState,v.seekable,v.seeking,v.buffered.start(0),v.buffered.end(0),v.bufferingRate,v.defaultPlaybackRate,v.duration,v.played);
    //    });
    //}
    //eventTester("loadstart");           //客户端开始请求数据
    //eventTester("progress");            //客户端正在请求数据 4
    //eventTester("suspend");             //延迟下载 5
    //eventTester("abort");               //客户端主动终止下载（不是因为错误引起），
    //eventTester("error");               //请求数据时遇到网络错误
    //eventTester("empty");               //发生错误阻止媒体下载
    //eventTester("emptied");             //网络连接关闭
    //eventTester("stalled");             //浏览器尝试下载，但未接收到数据
    //eventTester("play");                //play()和autoplay开始播放时触发 10
    //eventTester("pause");               //pause()触发
    //eventTester("loadedmetadata");      //媒体元数据已加载完成 2
    //eventTester("loadeddata");          //媒体第一帧已加载完成 8
    //eventTester("waiting");             //等待数据，并非错误
    //eventTester("playing");             //媒体已实际开始播放 11
    //eventTester("canplay");             //可以播放，但中途可能因为加载而暂停；readyState为3 9
    //eventTester("canplaythrough");      //播放可继续，而且应该不会中断；readyState为4 12
    //eventTester("canshowcurrentframe"); //当前帧已经下载完成；readyState为2
    //eventTester("dataunavailable");     //因为没有数据而不能播放；readyState为0
    //eventTester("seeking");             //寻找中 3
    //eventTester("seeked");              //寻找完毕 7
    //eventTester("timeupdate");          //播放时间改变 6 13
    //eventTester("ended");               //播放结束
    //eventTester("ratechange");          //播放速率改变
    //eventTester("durationchange");      //资源长度改变 1
    //eventTester("volumechange");        //音量改变
};
    //自定义播放器控件，使用js控制播放器
(function() {
    var v2 = document.getElementById('v2');
    if (v2.canPlayType) {
        var progress = document.getElementById('progress');
        var progressBar = document.getElementById('progress-bar');
        var buffer = document.getElementById('buffer');
        var bufferBar = document.getElementById('buffer-bar');
        var playPause = document.getElementById('playPause');
        var stop = document.getElementById('stop');
        var mute = document.getElementById('mute');
        var volume = document.getElementById('volume');
        var volProgress = document.getElementById('volProgress');
        var volProgressBar = document.getElementById('volProgress-bar');
        var fs = document.getElementById('fs');
        var videoContainer = document.getElementById('videoContainer');
        var totalTime = document.getElementById('totalTime');
        var showTime = document.getElementById('showTime');
        var faster = document.getElementById('faster');
        var slower = document.getElementById('slower');
        var controls=document.getElementsByClassName('controls')[0];
        var subtitles=document.getElementById('subtitles');

        v2.removeAttribute('controls');
        v2.controls = false;
        //Check if the browser supports the Fullscreen API
        var fullScreenEnabled = !!(document.fullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled || document.webkitSupportsFullscreen || document.webkitFullscreenEnabled || document.createElement('video').webkitRequestFullScreen);
        // If the browser doesn't support the Fulscreen API then hide the fullscreen button
        if (!fullScreenEnabled) {
            fs.style.display = 'none';
        }
        fs.onclick = function () {
            var isFs = !!(document.fullScreen || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement || document.fullscreenElement);
            if (isFs) {
                //v2.removeAttribute('controls');
                if (document.exitFullscreen) document.exitFullscreen();
                else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
                else if (document.webkitCancelFullScreen) document.webkitCancelFullScreen();
                else if (document.msExitFullscreen) document.msExitFullscreen();
                fs.setAttribute('data-state', 'go-fullscreen');
                videoContainer.setAttribute('data-fullscreen', 'false');
            } else {
                //v2.removeAttribute('controls');
                // ...otherwise enter fullscreen mode
                // (Note: can be called on document, but here the specific element is used as it will also ensure that the element's children, e.g. the custom controls, go fullscreen also)
                if (videoContainer.requestFullscreen) videoContainer.requestFullscreen();
                else if (videoContainer.mozRequestFullScreen) videoContainer.mozRequestFullScreen();
                else if (videoContainer.webkitRequestFullScreen) {
                    // Safari 5.1 only allows proper fullscreen on the video element. This also works fine on other WebKit browsers as the following CSS (set in styles.css) hides the default controls that appear again, and
                    // ensures that our custom controls are visible:
                    // figure[data-fullscreen=true] video::-webkit-media-controls { display:none !important; }
                    // figure[data-fullscreen=true] .controls { z-index:2147483647; }
                    v2.webkitRequestFullScreen();
                }
                else if (videoContainer.msRequestFullscreen) videoContainer.msRequestFullscreen();
                fs.setAttribute('data-state', 'cancel-fullscreen');
                videoContainer.setAttribute('data-fullscreen', 'true');
            }
        };
        document.addEventListener('fullscreenchange', function (e) {
            if (!!(document.fullScreen || document.fullscreenElement)) {
                fs.setAttribute('data-state', 'cancel-fullscreen');
                videoContainer.setAttribute('data-fullscreen', 'true');
            } else {
                fs.setAttribute('data-state', 'go-fullscreen');
                videoContainer.setAttribute('data-fullscreen', 'false');
            }
        });
        document.addEventListener('webkitfullscreenchange', function () {
            if (!!document.webkitIsFullScreen) {
                fs.setAttribute('data-state', 'cancel-fullscreen');
                videoContainer.setAttribute('data-fullscreen', 'true');
            } else {
                fs.setAttribute('data-state', 'go-fullscreen');
                videoContainer.setAttribute('data-fullscreen', 'false');
            }
        });
        document.addEventListener('mozfullscreenchange', function () {
            if (!!document.mozFullScreen) {
                fs.setAttribute('data-state', 'cancel-fullscreen');
                videoContainer.setAttribute('data-fullscreen', 'true');
            } else {
                fs.setAttribute('data-state', 'go-fullscreen');
                videoContainer.setAttribute('data-fullscreen', 'false');
            }
        });
        document.addEventListener('MSFullscreenChange', function () {
            //console.log(document.msFullscreenElement);
            if (!!document.msFullscreenElement) {
                fs.setAttribute('data-state', 'cancel-fullscreen');
                videoContainer.setAttribute('data-fullscreen', 'true');
            } else {
                fs.setAttribute('data-state', 'go-fullscreen');
                videoContainer.setAttribute('data-fullscreen', 'false');
            }
        });
        v2.addEventListener('loadedmetadata', function () {
            progress.setAttribute('max', v2.duration);
            buffer.setAttribute('max', v2.duration);
            var s = Math.round(v2.duration) % 60;
            var m = (Math.round(v2.duration) - s) / 60;
            if (s < 10) {
                s = '0' + s;
            }
            if (m < 10) {
                m = '0' + m;
            }
            totalTime.textContent = '/' + m + ':' + s;
            showTime.textContent = '00:00';
        }, false);
        v2.addEventListener('play', function () {
            v2.volume = 1;
            progress.setAttribute('max', v2.duration);
            buffer.setAttribute('max', v2.duration);
            //playPause.setAttribute('data-state','pause');
            var s = Math.round(v2.duration) % 60;
            var m = (Math.round(v2.duration) - s) / 60;
            if (s < 10) {
                s = '0' + s;
            }
            if (m < 10) {
                m = '0' + m;
            }
            totalTime.textContent = '/' + m + ':' + s;
            showTime.textContent = '00:00';
        }, false);
        v2.addEventListener('ended', function () {
            playPause.setAttribute('data-state', 'play');
            v2.playbackRate = 1;
        }, false);
        v2.addEventListener('timeupdate', function () {
            if (!v2.paused) {
                playPause.setAttribute('data-state', 'pause');
            }
            progress.setAttribute('value', v2.currentTime);
            buffer.setAttribute('value', v2.buffered.end(0));
            var p1 = v2.currentTime * 100 / Number(progress.getAttribute('max'));
            progressBar.style.width = p1 + '%';
            var p2 = v2.buffered.end(0) * 100 / Number(buffer.getAttribute('max'));
            bufferBar.style.width = p2 + '%';
            var time = Math.round(v2.currentTime);
            var s = time % 60;
            var m = (time - s) / 60;
            if (s < 10) {
                s = '0' + s;
            }
            if (m < 10) {
                m = '0' + m;
            }
            showTime.textContent = m + ':' + s;

        }, false);
        progress.onmousedown = function (e) {
            var pos = e.pageX - progress.offsetLeft - progress.parentNode.offsetLeft;
            var percent = pos / progress.offsetWidth;
            console.log(percent * v2.duration);
            v2.currentTime = percent * v2.duration;
            console.log(v2.currentTime);
            progress.setAttribute('value', v2.currentTime);
            progressBar.style.width = percent + '%';
        };
        var playVideo = function () {
            //console.log('click');
            if (v2.paused) {
                v2.play();
                playPause.setAttribute('data-state', 'pause');
            } else {
                v2.pause();
                playPause.setAttribute('data-state', 'play');
            }
        };
        playPause.onclick = playVideo;
        v2.onclick = playVideo;
        stop.onclick = function () {
            v2.currentTime = 0;
            v2.pause();
            playPause.setAttribute('data-state', 'play');
        };
        //var vol=0;
        mute.onclick = function () {
            if (v2.muted) {
                v2.muted = false;
                mute.setAttribute('data-state', 'mute');
                var vol = v2.volume * 100;
                volProgress.setAttribute('value', vol);
                //console.log(vol*volProgress.offsetWidth/100-14);
                volume.style.backgroundPositionX = vol * volProgress.offsetWidth / 100 - 14 + 'px';
                volProgressBar.style.width = vol + '%';
            } else {
                v2.muted = true;
                //vol=v2.volume;
                mute.setAttribute('data-state', 'unmute');
                volProgress.setAttribute('value', 0);
                volume.style.backgroundPositionX = 0;
                volProgressBar.style.width = 0;
            }
        };
        function setVol(vol) {
            if (vol < 0) {
                vol = 0;
            }
            if (vol > 100) {
                vol = 100;
            }
            v2.volume = vol / 100;
            volProgress.setAttribute('value', vol);
            var x = (vol - 7) * volProgress.offsetWidth / 100;
            volume.style.backgroundPositionX = x + 'px';
            if (x <= 0) {
                volume.style.backgroundPositionX = 0;
            }
            if (x >= 73) {
                volume.style.backgroundPositionX = 73 + 'px';
            }
            volProgressBar.style.width = vol + '%';
        }

        volume.onmousedown = function (e) {
            var vol = (e.pageX - volume.offsetLeft) / volume.offsetWidth * 100;
            //console.log(vol);
            setVol(vol);
            volume.onmousemove = function (e) {
                var vol = (e.pageX - volume.offsetLeft) / volume.offsetWidth * 100;
                setVol(vol);
            };
            volume.onmouseup = function () {
                volume.onmousemove = null;
            }
        }
        //播放速率
        faster.onclick = function () {
            v2.playbackRate = 2;
            console.log(v2.playbackRate);
        }
        slower.onclick = function () {
            v2.playbackRate = 0.2;
            console.log(v2.playbackRate);
        }
        //显示音轨文本
        for(var i=0;i<v2.textTracks.length;i++){
            v2.textTracks[i].mode='hidden';
        }
        var subtitlesMenu;
        var buttons=new Array();
        function createItem(id,lang,label){
            var item=document.createElement('li');
            var button=item.appendChild(document.createElement('button'));
            button.setAttribute('id',id);
            if(lang.length>0) {
                button.setAttribute('lang', lang);
            }
            button.setAttribute('value',label);
            button.setAttribute('class','subtitles-button');
            button.setAttribute('data-state','inactive');
            button.appendChild(document.createTextNode(label));
            button.addEventListener('click',function(){
                buttons.map(function(v){
                    v.setAttribute('data-state','inactive');
                });
                var lang=this.getAttribute('lang');
                for(var i=0;i<v2.textTracks.length;i++){
                    if(lang===v2.textTracks[i].language){
                        v2.textTracks[i].mode='showing';
                        this.setAttribute('data-state','active');
                    }else{
                        v2.textTracks[i].mode='hidden';
                    }
                }
                subtitlesMenu.style.display='none'
            });
            buttons.push(button);
            return item;
        }
        if(v2.textTracks){
            subtitlesMenu=document.createElement('ul');
            subtitlesMenu.className = 'subtitles-menu';
            subtitlesMenu.appendChild(createItem('subtitles-off','','off'));
            for(var i=0;i<v2.textTracks.length;i++){
                subtitlesMenu.appendChild(createItem('subtitles-'+v2.textTracks[i].language,v2.textTracks[i].language,v2.textTracks[i].label));
            }
            controls.appendChild(subtitlesMenu);
        }
        subtitles.onclick=function(){
            if(subtitlesMenu){
                subtitlesMenu.style.display==='block'?subtitlesMenu.style.display='none':subtitlesMenu.style.display='block';
            }
        }

    }
})();


//window.onload=function(){
//    (function(window, document){
//        console.log('test');
//        // 获取要操作的元素
//        var video = document.getElementById("video");
//        var videoControls = document.getElementById("videoControls");
//        var videoContainer = document.getElementById("videoContainer");
//        var controls = document.getElementById("video_controls");
//        var playBtn = document.getElementById("playBtn");
//        var fullScreenBtn = document.getElementById("fullScreenBtn");
//        var progressWrap = document.getElementById("progressWrap");
//        var playProgress = document.getElementById("playProgress");
//        var fullScreenFlag = false;
//        var progressFlag;
//
//        // 创建我们的操作对象，我们的所有操作都在这个对象上。
//        var videoPlayer = {
//            init:function(){
//                var that = this;
//                video.removeAttribute("controls");
//                console.log('init');
//                bindEvent(video, "loadeddata", videoPlayer.initControls);
//                videoPlayer.operateControls();
//            },
//            initControls:function(){
//                videoPlayer.showHideControls();
//            },
//            showHideControls:function(){
//                bindEvent(video, "mouseover", showControls);
//                bindEvent(videoControls, "mouseover", showControls);
//                bindEvent(video, "mouseout", hideControls);
//                bindEvent(videoControls, "mouseout", hideControls);
//            },
//            operateControls:function(){
//                bindEvent(playBtn, "click", play);
//                bindEvent(video, "click", play);
//                bindEvent(fullScreenBtn, "click", fullScreen);
//                bindEvent(progressWrap, "mousedown", videoSeek);
//            }
//        };
//
//        videoPlayer.init();
//
//        // 原生的JavaScript事件绑定函数
//        function bindEvent(ele, eventName, func){
//            if(window.addEventListener){
//                ele.addEventListener(eventName, func);
//            }
//            else{
//                ele.attachEvent('on' + eventName, func);
//            }
//        }
//        // 显示video的控制面板
//        function showControls(){
//            videoControls.style.opacity = 1;
//        }
//        // 隐藏video的控制面板
//        function hideControls(){
//            // 为了让控制面板一直出现，我把videoControls.style.opacity的值改为1
//            videoControls.style.opacity = 1;
//        }
//        // 控制video的播放
//        function play(){
//            if ( video.paused || video.ended ){
//                if ( video.ended ){
//                    video.currentTime = 0;
//                }
//                video.play();
//                playBtn.innerHTML = "暂停";
//                progressFlag = setInterval(getProgress, 60);
//            }
//            else{
//                video.pause();
//                playBtn.innerHTML = "播放";
//                clearInterval(progressFlag);
//            }
//        }
//        // 控制video是否全屏，额这一部分没有实现好，以后有空我会接着研究一下
//        function fullScreen(){
//            if(fullScreenFlag){
//                videoContainer.webkitCancelFullScreen();
//            }
//            else{
//                videoContainer.webkitRequestFullscreen();
//            }
//        }
//        // video的播放条
//        function getProgress(){
//            var percent = video.currentTime / video.duration;
//            playProgress.style.width = percent * (progressWrap.offsetWidth) - 2 + "px";
//            showProgress.innerHTML = (percent * 100).toFixed(1) + "%";
//        }
//        // 鼠标在播放条上点击时进行捕获并进行处理
//        function videoSeek(e){
//            if(video.paused || video.ended){
//                play();
//                enhanceVideoSeek(e);
//            }
//            else{
//                enhanceVideoSeek(e);
//            }
//
//        }
//        function enhanceVideoSeek(e){
//            clearInterval(progressFlag);
//            var length = e.pageX - progressWrap.offsetLeft;
//            console.log(length);
//            var percent = length / progressWrap.offsetWidth;
//            console.log(percent);
//            playProgress.style.width = percent * (progressWrap.offsetWidth) - 2 + "px";
//            video.currentTime = video.duration*percent;
//
//            console.log(video.duration);
//            console.log(video.currentTime);
//            progressFlag = setInterval(getProgress, 60);
//        }
//
//    })(this, document);
//};

//(function () {
//    'use strict';
//
//    // Does the browser actually support the video element?
//    var supportsVideo = !!document.createElement('video').canPlayType;
//
//    if (supportsVideo) {
//        // Obtain handles to main elements
//        var videoContainer = document.getElementById('videoContainer');
//        var video = document.getElementById('video');
//        var videoControls = document.getElementById('video-controls');
//
//        // Hide the default controls
//        video.controls = false;
//
//        // Display the user defined video controls
//        videoControls.setAttribute('data-state', 'visible');
//
//        // Obtain handles to buttons and other elements
//        var playpause = document.getElementById('playpause');
//        var stop = document.getElementById('stop');
//        var mute = document.getElementById('mute');
//        var volinc = document.getElementById('volinc');
//        var voldec = document.getElementById('voldec');
//        var progress = document.getElementById('progress');
//        var progressBar = document.getElementById('progress-bar');
//        var fullscreen = document.getElementById('fs');
//        var subtitles = document.getElementById('subtitles');
//
//        // If the browser doesn't support the progress element, set its state for some different styling
//        var supportsProgress = (document.createElement('progress').max !== undefined);
//        if (!supportsProgress) progress.setAttribute('data-state', 'fake');
//
//        // Check if the browser supports the Fullscreen API
//        var fullScreenEnabled = !!(document.fullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled || document.webkitSupportsFullscreen || document.webkitFullscreenEnabled || document.createElement('video').webkitRequestFullScreen);
//        // If the browser doesn't support the Fulscreen API then hide the fullscreen button
//        if (!fullScreenEnabled) {
//            fullscreen.style.display = 'none';
//        }
//
//        // Check the volume
//        var checkVolume = function(dir) {
//            if (dir) {
//                var currentVolume = Math.floor(video.volume * 10) / 10;
//                if (dir === '+') {
//                    if (currentVolume < 1) video.volume += 0.1;
//                }
//                else if (dir === '-') {
//                    if (currentVolume > 0) video.volume -= 0.1;
//                }
//                // If the volume has been turned off, also set it as muted
//                // Note: can only do this with the custom control set as when the 'volumechange' event is raised, there is no way to know if it was via a volume or a mute change
//                if (currentVolume <= 0) video.muted = true;
//                else video.muted = false;
//            }
//            changeButtonState('mute');
//        }
//
//        // Change the volume
//        var alterVolume = function(dir) {
//            checkVolume(dir);
//        }
//
//        // Set the video container's fullscreen state
//        var setFullscreenData = function(state) {
//            videoContainer.setAttribute('data-fullscreen', !!state);
//            // Set the fullscreen button's 'data-state' which allows the correct button image to be set via CSS
//            fullscreen.setAttribute('data-state', !!state ? 'cancel-fullscreen' : 'go-fullscreen');
//        }
//
//        // Checks if the document is currently in fullscreen mode
//        var isFullScreen = function() {
//            return !!(document.fullScreen || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement || document.fullscreenElement);
//        }
//
//        // Fullscreen
//        var handleFullscreen = function() {
//            // If fullscreen mode is active...
//            if (isFullScreen()) {
//                // ...exit fullscreen mode
//                // (Note: this can only be called on document)
//                if (document.exitFullscreen) document.exitFullscreen();
//                else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
//                else if (document.webkitCancelFullScreen) document.webkitCancelFullScreen();
//                else if (document.msExitFullscreen) document.msExitFullscreen();
//                setFullscreenData(false);
//            }
//            else {
//                // ...otherwise enter fullscreen mode
//                // (Note: can be called on document, but here the specific element is used as it will also ensure that the element's children, e.g. the custom controls, go fullscreen also)
//                if (videoContainer.requestFullscreen) videoContainer.requestFullscreen();
//                else if (videoContainer.mozRequestFullScreen) videoContainer.mozRequestFullScreen();
//                else if (videoContainer.webkitRequestFullScreen) {
//                    // Safari 5.1 only allows proper fullscreen on the video element. This also works fine on other WebKit browsers as the following CSS (set in styles.css) hides the default controls that appear again, and
//                    // ensures that our custom controls are visible:
//                    // figure[data-fullscreen=true] video::-webkit-media-controls { display:none !important; }
//                    // figure[data-fullscreen=true] .controls { z-index:2147483647; }
//                    video.webkitRequestFullScreen();
//                }
//                else if (videoContainer.msRequestFullscreen) videoContainer.msRequestFullscreen();
//                setFullscreenData(true);
//            }
//        }
//
//        // Only add the events if addEventListener is supported (IE8 and less don't support it, but that will use Flash anyway)
//        if (document.addEventListener) {
//            // Wait for the video's meta data to be loaded, then set the progress bar's max value to the duration of the video
//            video.addEventListener('loadedmetadata', function() {
//                progress.setAttribute('max', video.duration);
//            });
//
//            // Changes the button state of certain button's so the correct visuals can be displayed with CSS
//            var changeButtonState = function(type) {
//                // Play/Pause button
//                if (type == 'playpause') {
//                    if (video.paused || video.ended) {
//                        playpause.setAttribute('data-state', 'play');
//                    }
//                    else {
//                        playpause.setAttribute('data-state', 'pause');
//                    }
//                }
//                // Mute button
//                else if (type == 'mute') {
//                    mute.setAttribute('data-state', video.muted ? 'unmute' : 'mute');
//                }
//            }
//
//            // Add event listeners for video specific events
//            video.addEventListener('play', function() {
//                changeButtonState('playpause');
//            }, false);
//            video.addEventListener('pause', function() {
//                changeButtonState('playpause');
//            }, false);
//            video.addEventListener('volumechange', function() {
//                checkVolume();
//            }, false);
//
//            // Add events for all buttons
//            playpause.addEventListener('click', function(e) {
//                if (video.paused || video.ended) video.play();
//                else video.pause();
//            });
//
//            // Turn off all subtitles
//            for (var i = 0; i < video.textTracks.length; i++) {
//                video.textTracks[i].mode = 'hidden';
//            }
//
//            // Creates and returns a menu item for the subtitles language menu
//            var subtitleMenuButtons = [];
//            var createMenuItem = function(id, lang, label) {
//                var listItem = document.createElement('li');
//                var button = listItem.appendChild(document.createElement('button'));
//                button.setAttribute('id', id);
//                button.className = 'subtitles-button';
//                if (lang.length > 0) button.setAttribute('lang', lang);
//                button.value = label;
//                button.setAttribute('data-state', 'inactive');
//                button.appendChild(document.createTextNode(label));
//                button.addEventListener('click', function(e) {
//                    // Set all buttons to inactive
//                    subtitleMenuButtons.map(function(v, i, a) {
//                        subtitleMenuButtons[i].setAttribute('data-state', 'inactive');
//                    });
//                    // Find the language to activate
//                    var lang = this.getAttribute('lang');
//                    for (var i = 0; i < video.textTracks.length; i++) {
//                        // For the 'subtitles-off' button, the first condition will never match so all will subtitles be turned off
//                        if (video.textTracks[i].language == lang) {
//                            video.textTracks[i].mode = 'showing';
//                            this.setAttribute('data-state', 'active');
//                        }
//                        else {
//                            video.textTracks[i].mode = 'hidden';
//                        }
//                    }
//                    subtitlesMenu.style.display = 'none';
//                });
//                subtitleMenuButtons.push(button);
//                return listItem;
//            }
//            // Go through each one and build a small clickable list, and when each item is clicked on, set its mode to be "showing" and the others to be "hidden"
//            var subtitlesMenu;
//            if (video.textTracks) {
//                var df = document.createDocumentFragment();
//                var subtitlesMenu = df.appendChild(document.createElement('ul'));
//                subtitlesMenu.className = 'subtitles-menu';
//                subtitlesMenu.appendChild(createMenuItem('subtitles-off', '', 'Off'));
//                for (var i = 0; i < video.textTracks.length; i++) {
//                    subtitlesMenu.appendChild(createMenuItem('subtitles-' + video.textTracks[i].language, video.textTracks[i].language, video.textTracks[i].label));
//                }
//                videoContainer.appendChild(subtitlesMenu);
//            }
//            subtitles.addEventListener('click', function(e) {
//                if (subtitlesMenu) {
//                    subtitlesMenu.style.display = (subtitlesMenu.style.display == 'block' ? 'none' : 'block');
//                }
//            });
//
//            // The Media API has no 'stop()' function, so pause the video and reset its time and the progress bar
//            stop.addEventListener('click', function(e) {
//                video.pause();
//                video.currentTime = 0;
//                progress.value = 0;
//                // Update the play/pause button's 'data-state' which allows the correct button image to be set via CSS
//                changeButtonState('playpause');
//            });
//            mute.addEventListener('click', function(e) {
//                video.muted = !video.muted;
//                changeButtonState('mute');
//            });
//            volinc.addEventListener('click', function(e) {
//                alterVolume('+');
//            });
//            voldec.addEventListener('click', function(e) {
//                alterVolume('-');
//            });
//            fs.addEventListener('click', function(e) {
//                handleFullscreen();
//            });
//
//            // As the video is playing, update the progress bar
//            video.addEventListener('timeupdate', function() {
//                // For mobile browsers, ensure that the progress element's max attribute is set
//                if (!progress.getAttribute('max')) progress.setAttribute('max', video.duration);
//                progress.value = video.currentTime;
//                progressBar.style.width = Math.floor((video.currentTime / video.duration) * 100) + '%';
//            });
//
//            // React to the user clicking within the progress bar
//            progress.addEventListener('click', function(e) {
//                // Also need to take the parents into account here as .controls and figure now have position:relative
//                var pos = (e.pageX  - (this.offsetLeft + this.offsetParent.offsetLeft + this.offsetParent.offsetParent.offsetLeft)) / this.offsetWidth;
//                video.currentTime = pos * video.duration;
//            });
//
//            // Listen for fullscreen change events (from other controls, e.g. right clicking on the video itself)
//            document.addEventListener('fullscreenchange', function(e) {
//                setFullscreenData(!!(document.fullScreen || document.fullscreenElement));
//            });
//            document.addEventListener('webkitfullscreenchange', function() {
//                setFullscreenData(!!document.webkitIsFullScreen);
//            });
//            document.addEventListener('mozfullscreenchange', function() {
//                setFullscreenData(!!document.mozFullScreen);
//            });
//            document.addEventListener('msfullscreenchange', function() {
//                setFullscreenData(!!document.msFullscreenElement);
//            });
//        }
//    }
//
//})();