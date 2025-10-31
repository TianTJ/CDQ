$(function(){

    let audio = $('#bgsound')[0]

    var soundicr = "[00:02.00] 不将就 \n [00:04.00] 歌：李荣浩 \n [00:07.00] 作词：施人诚 作曲：李荣浩 \n [00:10.50] 编曲：李荣浩 \n  [00:13.00] 那时候 我以为爱的是生活 \n [00:19.00] 也算懂得 什么适合什么不可 \n [00:25.00] 最近还是一样努力着 \n [00:29.00] 想要和你在一起 \n [00:32.00] 你的追求者 你的坎坷 \n [00:36.00] 我开的车 算一算 虚度了多少个年头 \n [00:46.00] 仿佛足够写一套错爱的春秋 \n [00:53.00] 如果以后 你还想为谁 浪费美好时候 \n [00:59.00] 眼泪只能在我的胸膛 毫无保留 \n [01:09.00] 互相吸引到白头 悲伤坚决不放手 \n [01:23.70] 开始纠缠之后 才又被人放大了自由 \n [01:36.00] 你的暴烈太温柔 感情又痛又享受 \n [01:50.00] 如果我说不吻你不罢休 \n [01:55.00] 谁能逼我将就 \n [2:06.50] 你问我 为什么顽固而专一 \n [2:12.00] 天下太大 没有人比你更合适 \n [02:19.00] 其实我觉得这样很值 \n [02:22.00] 只想选择你啊 \n [02:26.00] 你一出场别人都显得不过如此 \n [02:35.00] 互相恩爱到白头 悲伤坚决不放手 \n [02:48.00] 开始纠缠之后 才又被人放大了自由 \n [03:01.00] 你的暴烈太温柔 感情又痛又享受 \n [03:14.00] 如果我说不吻你不罢休 \n [03:20.00] 谁能逼我将就 \n [03:57.80] 互相扶持到白头 悲伤坚决不放手 \n [04:10.00] 开始纠缠之后 才又被人放大了自由 \n [04:24.00] 你的暴烈太温柔 感情又痛又享受 \n [04:38.50] 如果我说不吻你不罢休 \n [04:43.00] 谁能逼我将就 \n [04:50.00] 他们不过将就"
    var lyrics = soundicr.split("\n");//this.lrc代表歌词文件内容的引用
    var lrcObj = {};
    for(var i=0;i<lyrics.length;i++){
        var lyric = decodeURIComponent(lyrics[i]);
        var timeReg = /\[\d*:\d*((\.|\:)\d*)*\]/g;
        var timeRegExpArr = lyric.match(timeReg);
        if(!timeRegExpArr)continue;
        var clause = lyric.replace(timeReg,'');
        for(var k = 0,h = timeRegExpArr.length;k < h;k++) {
            var t = timeRegExpArr[k];
            var min = Number(String(t.match(/\[\d*/i)).slice(1)),
                sec = Number(String(t.match(/\:\d*/i)).slice(1));
            var time = min * 60 + sec;
            lrcObj[time] = clause;
        }
    }
    console.log(lrcObj)
    $("#bgsound").ready(function () {
        var oAudio=document.getElementsByTagName('audio')[0];
        oAudio.ontimeupdate = function () { 
            //console.log(oAudio.currentTime)
            let obj = lrcObj[Math.floor(oAudio.currentTime)];
            $("#head .soundstr").text(obj)
            var idx = Math.floor(Math.random()*19);
        }
    })
    $('#login .loginui .sumbit').click(function(){
        audio.play()
        var text = $('#login .loginui .password').val()
        if(text=='15340075949'){
            $('#login').hide()
        }else{

        }
    })

    var getlovetime = function(timestamp1,timestamp2){
         // 确保时间戳是数字类型
        const ts1 = Number(timestamp1);
        const ts2 = Number(timestamp2);
        
        // 计算时间差（毫秒）
        const diff = Math.abs(ts2 - ts1);
        
        // 定义时间单位（毫秒）
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
        const month = day * 30; // 近似值
        const year = day * 365; // 近似值
        
        // 计算各时间单位
        const years = Math.floor(diff / year);
        let remainder = diff % year;
        
        const months = Math.floor(remainder / month);
        remainder = remainder % month;
        
        const days = Math.floor(remainder / day);
        remainder = remainder % day;
        
        const hours = Math.floor(remainder / hour);
        remainder = remainder % hour;
        
        const minutes = Math.floor(remainder / minute);
        remainder = remainder % minute;
        
        const seconds = Math.floor(remainder / second);
        
        // 构建结果字符串 - 始终包含年和月
        const parts = [];
        parts.push(`${years}年`);
        parts.push(`${months}月`);
        if (days > 0) parts.push(`${days}日`);
        if (hours > 0) parts.push(`${hours}时`);
        if (minutes > 0) parts.push(`${minutes}分`);
        if (seconds > 0) parts.push(`${seconds}秒`);
        
        return parts.join('');
    }
    var starttime = 1761361620000
    var endtime = Date.now()
    var str = getlovetime(starttime,endtime)
    $("#content .lovetime .lovetimetime").text(str)
    setInterval(() => {
        var endtime = Date.now()
        var str = getlovetime(starttime,endtime)
        $("#content .lovetime .lovetimetime").text(str)
    }, 1000);
})
