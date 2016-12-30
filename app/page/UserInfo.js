import React from 'react'
import {View, Container, Group, List, Icon, Field, Button} from 'amazeui-touch';
import _Header from './../components/_Header'
import _DownLoadApp from './../components/_DownLoadApp'

class UserInfo extends React.Component{

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
                    <_DownLoadApp></_DownLoadApp>
                </Container>
            </View>
        )
    }
}

export default UserInfo
