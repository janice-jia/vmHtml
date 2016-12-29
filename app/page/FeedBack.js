import React from 'react'
import {View, Container, Group} from 'amazeui-touch';
import _Header from './../components/_Header'
import FeedBackStore from '../stores/FeedBackStore'
import FeedBackActions from '../actions/FeedBackActions'

export default React.createClass({
    getInitialState : function () {
        return {}
    },

    //监听意见反馈内容，更改state
    changeContent : function(event){
        this.setState({content: event.target.value});
    },

    //监听手机号码，更改state
    changeMoile : function(event){
        this.setState({mobile: event.target.value});
    },

    //监听QQ，更改state
    changeQQ : function(event){
        this.setState({qq: event.target.value});
    },

    subFeedBack(){
        var mobileReg =  /^[1][3-9][0-9]{9}$/;
        if(!this.state.content){
            alert('请输入意见反馈内容！');
        }else if(this.state.mobile && !mobileReg.test(this.state.mobile)){
            alert('请输入正确的手机号码！');
        }else {
            FeedBackActions.feedBack({
                content : this.state.content,
                mobile : this.state.mobile,
                qq : this.state.qq,
            });
        }
    },
    render() {
        return (
            <View>
                <_Header/>
                <Container scrollable>
                    <Group className="margin-0" noPadded>
                        <div className="feedBack margin-h-xs">
                            <textarea name="" id="" cols="30" rows="10" placeholder="请填写反馈内容"  onChange={this.changeContent}></textarea>
                            <input className="margin-bottom-0" type="number" placeholder="请填写联系手机（选填）" onChange={this.changeMoile}/>
                            <input type="number" placeholder="请填写联系QQ（选填）" onChange={this.changeQQ}/>
                        </div>
                    </Group>
                    <div className="feedBack-btn padding-h-xs">
                        <button className="btn-gray padding-0" onClick={this.subFeedBack}>提交</button>
                    </div>
                </Container>
            </View>
        )
    }
})
