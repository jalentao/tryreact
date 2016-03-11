/**
 * Created by Administrator on 2015/7/29.
 */
var lo = window.location;

//判断访问终端
var browser={
    versions:function(){
        var u = navigator.userAgent, app = navigator.appVersion;
        return {
            trident: u.indexOf('Trident') > -1, //IE内核
            presto: u.indexOf('Presto') > -1, //opera内核
            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,//火狐内核
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
            iPhone: u.indexOf('iPhone') > -1 , //是否为iPhone或者QQHD浏览器
            iPad: u.indexOf('iPad') > -1, //是否iPad
            webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
            weixin: u.indexOf('MicroMessenger') > -1, //是否微信 （2015-01-22新增）
            qq: u.match(/\sQQ/i) == " qq" //是否QQ
        };
    }(),
    language:(navigator.browserLanguage || navigator.language).toLowerCase()
};
var platform = "";
if(browser.versions.android){
    platform = "android"
}else if(browser.versions.trident){
    platform ="IE"
}else if (browser.versions.presto){
    platform = "Opera"
}else if (browser.versions.webKit){
    platform = "webKit"
}else if (browser.versions.gecko){
    platform = "Firefox"
}else if (browser.versions.mobile){
    platform = "mobile"
}else if (browser.versions.ios){
    platform = "ios"
}else if (browser.versions.iPhone){
    platform = "iPhone"
}else if (browser.versions.iPad){
    platform = "ipad"
}else if (browser.versions.webApp){
    platform = "webApp"
}else if (browser.versions.weixin){
    platform = "weixin"
}else if (browser.versions.qq){
    platform = "qq"
}
document.cookie= "name=1455555444";
console.info(document.cookie)
$.ajax({
    async: false,
    url: "http://mp.miaotu.com/admin/tongji/create",
    type: "GET",
    dataType: 'json',
    data: {url:lo.href,platform:platform,cookie:document.cookie},

})


