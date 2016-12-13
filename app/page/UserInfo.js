import React from 'react'
import {View, Container, Group, List, Icon, Field, Button} from 'amazeui-touch';
import _Header from './../components/_Header'

class UserInfo extends React.Component{

    constructor(props){
        super(props);
        //console.info('props',props);
        //console.info('this.props',this.props);
        //console.info('this.location',this.location);
    }

    render() {
        return (
            <View>
                <_Header/>
                <Container scrollable>
                    <Group noPadded className="bgNone  userInfo margin-0">
                        <List className="padding-0">
                            <List.Item key="1" media={<Icon name="">用户名</Icon>}>
                                <p>{this.props.location.query.nickName}</p>
                            </List.Item>
                        </List>
                        <List>
                            <List.Item key="1" media={<Icon name="">年龄</Icon>}>
                                <p>{this.props.location.query.birthday ? this.props.location.query.birthday : '未知'}</p>
                            </List.Item>
                        </List>
                        <List>
                            <List.Item key="1" media={<Icon name="">所在地区</Icon>}>
                                <p>{this.props.location.query.city ? this.props.location.query.city : '未知'}</p>
                            </List.Item>
                        </List>
                        <List>
                            <List.Item key="1" media={<Icon name="">个人简介</Icon>}>
                                <p>{this.props.location.query.desc ? this.props.location.query.desc : '未填写'}</p>
                            </List.Item>
                        </List>
                    </Group>
                </Container>
            </View>
        )
    }
}

export default UserInfo
