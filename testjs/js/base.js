//设备环境判断
var u = navigator.userAgent;
var	app = navigator.appVersion;
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器
var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
var isWeChat = u.toLowerCase().indexOf("micromessenger") > -1; //微信端




/**
 * localStorage数据存储
 * @param {localStorage的key} key
 * @param {localStorage的value} value
 */
function saveToLocalStorage(key, value) {
    value = JSON.stringify(value);
    localStorage.setItem(key.toString(), value);
}
/**
 * 从localStorage取数据
 * @param {localStorage的key} key
 */
function getDataFromLocalStorage(key) {
    var value = localStorage.getItem(key.toString());
    try{return value ? JSON.parse(value) : null;}catch(e){return null;}
}

/**
 * sessionStorage数据存储
 * @param {sessionStorage的key} key
 * @param {sessionStorage的value} value
 */
function saveTosessionStorage(key, value) {
    value = JSON.stringify(value);
    sessionStorage.setItem(key.toString(), value);
}
/**
 * 从sessionStorage取数据
 * @param {sessionStorage的key} key
 */
function getDataFromsessionStorage(key) {
    var value = sessionStorage.getItem(key.toString());
    try{return value ? JSON.parse(value) : null;}catch(e){return null;}
}

//获取url参数
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if(r != null)
        return decodeURIComponent(r[2]);
    return null;
}

/**
 * 自动获取参数，该参数可能来自url、bridge
 */
function getAutoParam(key,args){
    if(getQueryString(key) != undefined && getQueryString(key) != null && getQueryString(key) != ""){
        return getQueryString(key);
    }else {
        var param = "";
        try{
            param = args[key];
        }catch(e){
            //TODO handle the exception
            param = "";
        }
        return param;
    }
}
