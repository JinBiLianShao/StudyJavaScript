/*
    说明：该脚本仅适用于江苏师范大学科文学院的校园网
    需要工具：tampermonkey（其实不用tampermonkey也行，只不过用这个方便一点）
 */

// ==UserScript==
// @name         江苏师范大学科文学院校园网自动登录
// @namespace    http://tampermonkey.net/
// @version      2021.6.21
// @author       小鑫
// @match        http://10.110.6.251/*
// @grant        none
// ==/UserScript==

(function() {

    var type1 = '';
    var type2 = '@telecom';
    var type3 = '@unicom';
    var type4 = '@cmcc';

//使用前请选择运营商以及填写账号密码

//type1 -> 校园网，type2 -> 中国电信，type3 -> 中国联通，type4 -> 中国移动
    var type = type4 ; //这里记得改成你的运行商
    var username = '你的校园网账号';
    var password = '你的校园网密码';



    setTimeout(() => {


        if (document.getElementsByClassName('edit_lobo_cell')[2])
        {
            document.getElementsByClassName('edit_lobo_cell')[2].value = username;
        }

        if (document.getElementsByClassName('edit_lobo_cell')[3])
        {
            document.getElementsByClassName('edit_lobo_cell')[3].value = password;
        }

        if (document.getElementsByClassName('edit_lobo_cell edit_select')[0])
        {
            document.getElementsByClassName('edit_lobo_cell edit_select')[0].value=type;
        }

        if (document.getElementsByClassName('edit_lobo_cell')[1] && document.getElementsByClassName('edit_lobo_cell')[1].name !== 'logout')
        {
            document.getElementsByClassName('edit_lobo_cell')[1].click();
        }


    }, 500);
})();