import $ from 'jquery'
import React from 'react'
import cookie from 'react-cookie'

module.exports = {

    //返回用户登录状态
    isUser() {
        return !!cookie.load('uid')
    },

    //返回用户id
    getUser() {
        return cookie.load('uid')
    },

    //当前用户信息
    getUserInfo(data){
        //console.info('data',data);
        $.ajax({
                type: 'Get',
                url: '/app/user/'+data.uid+'/infos',
                data:{password:data.password},
                success:function(data){
                    //console.info('data11111111',data);
                    return data;
                }
            })
    },

    //格式化时间
    getFormat(momentTime){
        momentTime = parseInt(momentTime);
        var newDate = new Date(momentTime);
        var year = newDate.getFullYear();
        var month = newDate.getMonth()+1;
        var date = newDate.getDate();
        //var hour = newDate.getHours();
        //var minute = newDate.getMinutes();
        //var second = newDate.getSeconds();
        return year+"."+month+"."+date;
    },

    //相对时间
    getFromNow(momentTime){
        var minute = 1000 * 60;
        var hour = minute * 60;
        var day = hour * 24;
        var month = day * 30;
        var momentTimeTmp = '';

        var now = new Date().getTime();
        var diffValue = now - momentTime;
        if(diffValue < 0){
            //结束日期不能小于开始日期！
            momentTime = '';
        }
        var monthC = diffValue / month;
        var dayC = diffValue / day;
        var hourC = diffValue / hour;
        var minC = diffValue / minute;
        var result = '';

        if(monthC >= 1){
            result = parseInt(monthC) + "个月前";
        }  else if(dayC >= 1){
            result = parseInt(dayC) +"天前";
        } else if(hourC >= 1){
            result = parseInt(hourC) +"个小时前";
        } else if(minC >= 1){
            result = parseInt(minC) +"分钟前";
        } else{
            result="刚刚发表";
        }
        momentTimeTmp = result;
        return <span>{momentTimeTmp}</span>
    },

    //倒计时
    toDou(iNum){
        return iNum<10?'0'+iNum:''+iNum;
    },
    getCountDown(momentTime){
        //得到现在的时间戳
        var oNow = new Date();
        var s = parseInt((momentTime - oNow.getTime())/1000);
        var d = parseInt(s/86400);
        //s = s%86400;
        //var h = parseInt(s/3600);
        //s = s%3600;
        //var m = parseInt(s/60);
        //s = s%60;
        if(d < 0 ){
            d=0;
        }
        return d;
    }
}

