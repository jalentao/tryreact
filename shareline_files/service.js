//var model = "DEV";
var model = "PRD";
//轮播图初始化
function slider_init() {
    var slider_width = $(window).width();
    var slider_height = 65 * slider_width / 108;
    $("#slides").slidesjs({
        width: slider_width,
        height: slider_height,
        start: 1,
        navigation: {
            active: false
        }
    });
}


//与IOS客户端通讯
function connectWebViewJavascriptBridge(callback) {
    if (window.WebViewJavascriptBridge) {
        callback(WebViewJavascriptBridge);
    } else {
        document.addEventListener('WebViewJavascriptBridgeReady', function () {
            callback(WebViewJavascriptBridge);
        }, false);
    }
}

//判断是否苹果设备
function isAppleMobileDevice() {
    return (/iphone|ipod|ipad|Macintosh/i.test(navigator.userAgent.toLowerCase()));
}

//判断是否安卓设备
function isAndroidMobileDevice() {
    return (/android/i.test(navigator.userAgent.toLowerCase()));
}

//获取token
function getToken() {
    if (model == "DEV") {
        return ("22e8362a-fa0c-11e4-b09e-00163e003b1d");
    } else {
        return window.native.getToken();
    }
}

//获取红包余额
function getLuckyMoney() {
    if (model == "DEV") {
        return 100;
    } else {
        return window.native.getLuckyMoney();
    }
}

//客户端改变title
function setTitle(title) {
    if (model == "DEV") {
        console.log(title);
    } else {
        if (isAndroidMobileDevice()) {
            window.native.setTitle(title);
        } else {
            console.log(title);
        }

    }
}

//客户端显示报错信息
function showMsg(msg) {
    if (model == "DEV") {
        console.log(msg);
    } else {
        if (isAndroidMobileDevice()) {
            window.native.showTip(msg);
        } else {
            console.log(msg);
        }
    }
}

//喜欢、取消喜欢
function NativeLike(flag) {
    if (model == "DEV") {
        console.log(flag);
    } else {
        if (isAndroidMobileDevice()) {
            window.native.like(flag);
        } else {
            console.log(flag);
        }
    }
}

//金额纯数字
function testNo(testStr) {
    var reg = new RegExp("^[0-9.]*$");
    if (!reg.test(testStr)) {
        return false;
    } else if (!/^[0-9.]*$/.test(testStr)) {
        return false;
    } else {
        return true;
    }
}

//IOS阻止浏览器跳转
function stopDefault(e) {
    if (isAppleMobileDevice()) {
        if (e && e.preventDefault) {
            e.preventDefault();
        } else {
            window.event.returnValue = false;
        }
        return false;
    }
}


//错误检查
function checkErr(data) {
    if (data.Err != 0) {
        return true;
    } else {
        return false;
    }
}

function log(msg) {
    console.log(msg);
}

//获取当前日期的前几天或后几天
function getIntervalDate(interval) {
    var baseDate = new Date();
    var baseYear = baseDate.getFullYear();
    var baseMonth = baseDate.getMonth();
    var baseDate = baseDate.getDate();
    var newDate = new Date(baseYear, baseMonth, baseDate);
    newDate.setDate(newDate.getDate() + interval);
    var temMonth = newDate.getMonth();
    temMonth++;
    var lastMonth = temMonth >= 10 ? temMonth : ("0" + temMonth);
    var temDate = newDate.getDate();
    var lastDate = temDate >= 10 ? temDate : ("0" + temDate);
    newDate = newDate.getFullYear() + "-" + lastMonth + "-" + lastDate;
    return newDate;
}

//日期比较
function compareDate(a, b) {
    var arr = a.split("-");
    var starttime = new Date(arr[0], arr[1], arr[2]);
    var starttimes = starttime.getTime();
    var arrs = b.split("-");
    var lktime = new Date(arrs[0], arrs[1], arrs[2]);
    var lktimes = lktime.getTime();
    if (starttimes > lktimes) {
        return false;
    } else {
        return true;
    }
}

//特殊字符校验
function testSpec(testStr) {
    var reg = new RegExp("^[a-zA-Z0-9\u4e00-\u9fa5]+$");
    if (!reg.test(testStr)) {
        return false;
    } else if (!/^[a-zA-Z0-9\u4e00-\u9fa5]+$/.test(testStr)) {
        return false;
    } else {
        return true;
    }
}

//姓名错误样式
function testName() {
    var testStr = $("#contacts").val();
    var reg = new RegExp("^[a-zA-Z0-9\u4e00-\u9fa5]+$");
    if (!reg.test(testStr)) {
        $("#contacts").css("color", "#f00");
    } else if (!/^[a-zA-Z0-9\u4e00-\u9fa5]+$/.test(testStr)) {
        $("#contacts").css("color", "#f00");
    } else {
        $("#contacts").css("color", "#000");
    }
}

//身份证错误样式
function testId() {
    var testStr = $("#card").val();
    var reg = new RegExp("^[0-9]*$");
    if (!reg.test(testStr)) {
        $("#card").css("color", "#f00");
    } else if (!/^[0-9]*$/.test(testStr)) {
        $("#card").css("color", "#f00");
    } else {
        $("#card").css("color", "#000");
    }
}

//手机号错误样式
function testPhone() {
    var testStr = $("#phone").val()
    var reg = new RegExp("^[0-9]*$");
    if (!reg.test(testStr)) {
        $("#phone").css("color", "#f00")
    } else if (!/^[0-9]*$/.test(testStr)) {
        $("#phone").css("color", "#f00")
    } else {
        $("#phone").css("color", "#000")
    }
}

function isWeixin() {
    var ua = navigator.userAgent.toLowerCase();
    //微信
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
        return true;
    } //普通浏览器
    else {
        return false
    }
}

function CurentTime() {
    var now = new Date();
    var year = now.getFullYear();
    //年
    var month = now.getMonth() + 1;
    //月
    var day = now.getDate();
    //日
    var hh = now.getHours();
    //时
    var mm = now.getMinutes();
    //分
    var ss = now.getSeconds();
    //秒
    var clock = year + "-";
    if (month < 10) {
        clock += "0";
    }
    clock += month + "-";
    if (day < 10) {
        clock += "0";
    }
    clock += day + " ";
    return (clock);
}