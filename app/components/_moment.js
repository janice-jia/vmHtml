import React from 'react'
import $ from 'jquery'

//公用时间控件
class _Moment extends React.Component {
    constructor(props) {
        super(props);
        this.momentTime = this.props.momentTime;
        this.onChange = this.onChange.bind(this);
        var minute = 1000 * 60;
        var hour = minute * 60;
        var day = hour * 24;
        var month = day * 30;

        var now = new Date().getTime();
        var diffValue = now - this.props.momentTime;
        if(diffValue < 0){
            //结束日期不能小于开始日期！
            this.momentTime = '';
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
        this.momentTime = result;
    }

    onChange(state) {
        this.setState(state)
    }

    render() {
        return <span>{this.momentTime}</span>;
    }
}

export default _Moment;

