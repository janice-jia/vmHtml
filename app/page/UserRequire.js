import React from 'react'
import {View, Container, Tabs} from 'amazeui-touch';
import _Header from './../components/_Header'
import _Require from './../components/_Require'
import UserRequireStore from './../stores/UserRequireStore'
import UserRequireActions from './../actions/UserRequireActions'

//需求数据
const requireList = [
    {
        title: '12345元',
        subTitle: '名称',
        href: '/require/info/01',
        desc: '需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述',
        target: '_blank',
        after:'保证金300元',
        bottomLeft:'招募创作人',
        bottomRight:'剩余50天'
    },
    {
        title: "女爵",
        subTitle: "发行公司：环球唱片",
        href: "/require/info/01",
        desc: "需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述",
        target: "_blank",
        bottomLeft:'征集作品',
        bottomRight:'剩余50天'
    }
];

class UserRequire extends React.Component{
    constructor(props){
        super(props);
        this.state = UserRequireStore.getState();
        this.state.currentPage = 1;
        this.state.itemsPerPage = 10;
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount(){
        UserRequireStore.listen(this.onChange);
        UserRequireActions.getRuquireList({uid:this.props.params.uid, currentPage: this.state.currentPage,itemsPerPage: this.state.itemsPerPage})
        UserRequireActions.getApplyRuquireList({uid:this.props.params.uid, currentPage: this.state.currentPage,itemsPerPage: this.state.itemsPerPage});
    }

    componentWillUnmount() {
        UserRequireStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }
    handleAction(key){
        //this.state.type = key+1;
        //
        //this.onChange(this);
    }

    render() {
        return (
            <View>
                <_Header/>
                <Container scrollable>
                    <div className="require-tabs-list">
                    <Tabs onAction={this.handleAction.bind(this)}  className="margin-0">
                        <Tabs.Item title='发布的需求' key='1' className="padding-0">
                            <_Require requireList={this.state.requireList}></_Require>
                        </Tabs.Item>
                        <Tabs.Item title='参与的需求' key='2' className="padding-0">
                            <_Require requireList={this.state.applyRequireList}></_Require>
                        </Tabs.Item>
                    </Tabs>
                    </div>
                </Container>
            </View>
        )
    }
}
export default UserRequire;