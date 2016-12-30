import React from 'react';
import _Header from './../components/_Header'
import {Container, Group, List, View, Badge, Grid, Col, Icon} from 'amazeui-touch';
import publicFn from '../publicFn'
import _DownLoadApp from '../components/_DownLoadApp'

class TribeInfo extends React.Component{
    render() {
        return <View>
            <_Header></_Header>
            <Container scrollable className="tribe">
                <Group noPadded className="bgNone  userInfo margin-0">
                    <List className="padding-0">
                        <List.Item key="1" media={<Icon name="">创建日期</Icon>}>
                            <p>{publicFn.getFormat(this.props.location.query.createDate)}</p>
                        </List.Item>
                    </List>
                    <List>
                        <List.Item key="1" media={<Icon name="">部落名称</Icon>}>
                            <p>{this.props.location.query.title}</p>
                        </List.Item>
                    </List>
                    <List>
                        <List.Item key="1" media={<Icon name="">部落类型</Icon>}>
                            <p>
                                <span>{this.props.location.query.type==1 ? '人物' : ''}</span>
                                <span>{this.props.location.query.type==2 ? '漫画' : ''}</span>
                                <span>{this.props.location.query.type==3 ? '小说' : ''}</span>
                                <span>{this.props.location.query.type ? '' : '未填写'}</span>
                            </p>
                        </List.Item>
                    </List>
                    <List>
                        <List.Item key="1" media={<Icon name="">部落简介</Icon>}>
                            <p>{this.props.location.query.description ? this.props.location.query.description : '未填写'}</p>
                        </List.Item>
                    </List>
                </Group>
                <_DownLoadApp></_DownLoadApp>
            </Container>
        </View>

    }
}


export default TribeInfo

