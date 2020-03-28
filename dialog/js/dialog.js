function appendIOSDialog1() {
    $("body").append(
        '<div class="js_dialog" id="iosDialog1" >' +
        '        <div class="weui-mask"></div>' +
        '        <div class="weui-dialog">' +
        '            <div class="weui-dialog__hd"><strong class="weui-dialog__title" id="iosdialog1-title">提示</strong></div>' +
        '            <div class="weui-dialog__bd" id="iosdialog1-message"></div>' +
        '            <div class="weui-dialog__ft">' +
        '                <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_default" id="iosdialog1-cancel">取消</a>' +
        '               <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary" id="iosdialog1-confirm">确定</a>' +
        '            </div>' +
        '      </div>' +
        '    </div>'
    );
}

function appendIOSDialog2() {
    var appendHtml = '   <div class="js_dialog" id="iosDialog2" ">\n' +
        '        <div class="weui-mask"></div>\n' +
        '        <div class="weui-dialog">\n' +
        '            <div class="weui-dialog__bd" id="iosdialog2-message"></div>\n' +
        '            <div class="weui-dialog__ft">\n' +
        '                <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary" id="iosdialog2-confirm">知道了</a>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>'
    $("body").append(appendHtml);
}


function showIOSDialog(message, confirm) {
    appendIOSDialog1();
    $('#iosdialog1-message').text(message)
    $('#iosdialog1-confirm').click(confirm)
}

function showIOSDialog1(options) {
    options = options || {};
    if (options.title != undefined) {
        $('#iosdialog1-title').text(options.title)
    }
    if (options.message != undefined) {
        $('#iosdialog1-message').text(options.message)
    }
    if (options.cancelText != undefined) {
        $('#iosdialog1-cancel').text(options.cancelText)
    }
    if (options.confirmText != undefined) {
        $('#iosdialog1-confirm').text(options.confirmText)
    }
    if (options.confirm != undefined) {
        $('#iosdialog1-confirm').click(options.confirm)
    }
    if (options.cancel != undefined) {
        $('#iosdialog1-cancel').click(options.cancel)
    }
    $("#iosDialog1").show();
}

function hideIOSDialog() {
    $("#iosDialog1").remove();

}


function showIOSDialog2(message, cancel, confirmText) {
    appendIOSDialog2();
    $('#iosdialog2-message').text(message);
    $('#iosdialog2-confirm').click(function () {
        hideIOSDialog2()
    });
    $('#iosdialog2-confirm').click(cancel);
    $('#iosdialog2-confirm').text(confirmText)
}

function hideIOSDialog2() {
    $("#iosDialog2").remove();
}


function appendAndroidDialog1() {
    var appendHtml = '<div class="js_dialog" id="androidDialog1" ">\n' +
        '        <div class="weui-mask"></div>\n' +
        '        <div class="weui-dialog weui-skin_android">\n' +
        '            <div class="weui-dialog__hd"><strong class="weui-dialog__title">弹窗标题</strong></div>\n' +
        '            <div class="weui-dialog__bd">\n' +
        '                弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内\n' +
        '            </div>\n' +
        '            <div class="weui-dialog__ft">\n' +
        '                <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_default">辅助操作</a>\n' +
        '                <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary">主操作</a>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>';
    $("body").append(appendHtml);
}

function showAndroidDialog1() {
    appendAndroidDialog1();
}

function hideAndoridDialog1() {
    $("#androidDialog1").remove();
}


function appendAndroidDialog2() {
    var appendHtml = '<div class="js_dialog" id="androidDialog2" >\n' +
        '    <div class="weui-mask"></div>\n' +
        '    <div class="weui-dialog weui-skin_android">\n' +
        '    <div class="weui-dialog__bd">\n' +
        '    弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内\n' +
        '</div>\n' +
        '<div class="weui-dialog__ft">\n' +
        '    <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_default">辅助操作</a>\n' +
        '    <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary">主操作</a>\n' +
        '    </div>\n' +
        '    </div>\n' +
        '    </div>';
    $("body").append(appendHtml);
}

function showAndroidDialog2() {
    appendAndroidDialog2();
}

function hideAndoridDialog2() {
    $("#androidDialog2").remove();
}

function appendLoadingDialog() {
    var appendHtml = '<div id="loadingToast" ">\n' +
        '        <div class="weui-mask_transparent"></div>\n' +
        '        <div class="weui-toast">\n' +
        '            <i class="weui-loading weui-icon_toast"></i>\n' +
        '            <p class="weui-toast__content" id="loadingdailog-message" style="color: white">数据加载中</p>\n' +
        '        </div>\n' +
        '    </div>';
    $("body").append(appendHtml);
}

function showLoadingDialog(message) {
    appendLoadingDialog();
    $("#loadingdailog-message").text(message)
}

function hideLoadingDialog() {
    $("#loadingToast").remove();
}


function appendToast() {
    var appendHtml = '<div id="toast" >\n' +
        '    <div class="weui-mask_transparent"></div>\n' +
        '    <div class="weui-toast">\n' +
        '    <i class="weui-icon-success-no-circle weui-icon_toast"></i>\n' +
        '    <p class="weui-toast__content" id="toast-text"  style="color:#FFFFFF;">已完成</p>\n' +
        '    </div>\n' +
        '    </div>';
    $("body").append(appendHtml);
}

function showToast(message) {
    appendToast();
    setTimeout(function () {
        hideToast()
    }, 2000);
    $("#toast-text").text(message)
}
function hideToast() {
    $("#toast").remove();
}










