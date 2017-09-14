import { cookie } from 'vux'

export default {
    isUser () {
        // console.info('uid', cookie.get('uid') ? cookie.get('uid') : '')
        return cookie.get('uid') ? cookie.get('uid') : ''
    },

    // 格式化时间 2017.00.00
    getFormat (momentTime, tag) {
        momentTime = parseInt(momentTime)
        var newDate = new Date(momentTime)
        var year = newDate.getFullYear()
        var month = newDate.getMonth() + 1
        var date = newDate.getDate()
        var returnData = null;
        // var hour = newDate.getHours();
        // var minute = newDate.getMinutes();
        // var second = newDate.getSeconds();
        if (month < 10) {
            month = '0' + month
        } else if (date < 10) {
            date = '0' + date
        }
        if(tag){
          returnData = year + tag + month + tag + date
        }else{
          returnData =  year + '年' + month + '月' + date + '日'
        }
        return returnData
    },

    // 格式化时间 2017-01-01 12-12-12
    getFormatAll (momentTime) {
        momentTime = parseInt(momentTime)
        var newDate = new Date(momentTime)
        var year = newDate.getFullYear()
        var month = newDate.getMonth() + 1
        var date = newDate.getDate()
        var hour = newDate.getHours()
        var minute = newDate.getMinutes()
        var second = newDate.getSeconds()
        if (month < 10) {
            month = '0' + month
        } else if (date < 10) {
            date = '0' + date
        } else if (date < 10) {
            date = '0' + date
        } else if (hour < 10) {
            hour = '0' + hour
        } else if (minute < 10) {
            minute = '0' + minute
        } else if (second < 10) {
            second = '0' + second
        }
        return year + '-' + month + '-' + date + ' ' + hour + '-' + minute + '-' + second
    },

    // 相对时间
    getFromNow (momentTime) {
        var minute = 1000 * 60
        var hour = minute * 60
        var day = hour * 24
        var month = day * 30
        var momentTimeTmp = ''

        var now = new Date().getTime()
        var diffValue = now - momentTime
        if (diffValue < 0) {
            // 结束日期不能小于开始日期！
            momentTime = ''
        }
        var monthC = diffValue / month
        var dayC = diffValue / day
        var hourC = diffValue / hour
        var minC = diffValue / minute
        var result = ''

        if (monthC >= 1) {
            result = parseInt(monthC) + '个月前'
        } else if (dayC >= 1) {
            result = parseInt(dayC) + '天前'
        } else if (hourC >= 1) {
            result = parseInt(hourC) + '个小时前'
        } else if (minC >= 1) {
            result = parseInt(minC) + '分钟前'
        } else {
            result = '刚刚发表'
        }
        momentTimeTmp = result
        return momentTimeTmp
    },

    // 倒计时
    toDou (iNum) {
        return iNum < 10 ? '0' + iNum : '' + iNum
    },
    getCountDown (momentTime) {
        // 得到现在的时间戳
        var oNow = new Date()
        var s = parseInt((momentTime - oNow.getTime()) / 1000)
        var d = parseInt(s / 86400)
        // s = s%86400;
        // var h = parseInt(s/3600);
        // s = s%3600;
        // var m = parseInt(s/60);
        // s = s%60;
        if (d < 0) {
            d = 0
        }
        return d
    },

    // 隐藏手机号中间四位
    hideMobile (mobile) {
        return mobile.substr(0, 3) + '****' + mobile.substr(7)
    },

    // 以万为单位
    thousandFilter (num) {
        if (num > 10000) {
            num = Math.round((num / 10000) * 100) / 100
            num = num + '万'
            return num
        } else {
            return num
        }
    }
}

