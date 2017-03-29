var meteor_localtion_url = window.location.pathname;

var closebackground = undefined;

// 哪个页面关闭背景动画
var closebackgrounds = [
    "/small/",
    "/small/time/index.html",
    "/small/AlphaGo/index.html",
]

// 哪个页面开启背景动画，默认开启
var showbackgrounds = [
    
]

// 哪个页面开启捐助
var mypays = [
    "/small/",
    "/small/time/index.html",
    "/small/AlphaGo/index.html",
]

for(var i = 0; i <= closebackgrounds.length; i++){
    if(meteor_localtion_url == closebackgrounds[i]){
        closebackground = true;
    }
}

for(var i = 0; i <= showbackgrounds; i++){
    if(meteor_localtion_url == showbackgrounds[i]){
        closebackground = undefined;
    }
}

for(var i = 0; i <= mypays.length; i++){
    if(meteor_localtion_url == mypays[i]){
        $("#mypay").show();
    }
}