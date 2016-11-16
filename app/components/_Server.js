import React from 'react'
import {List, Grid, Col} from 'amazeui-touch'


//公用服务列表组件
class _Server extends React.Component {
    render() {
        return <div className="serverList">
            <List className="margin-top-0">
                {this.props.serverList.map((item,i)=>{
                    return(
                        <List.Item
                            title = {item.title}
                            subTitle = {item.subTitle}
                            href = {item.href}
                            desc = {item.desc}
                            target = {item.target}
                            key={i}
                        >
                            <Grid align="between">
                                <Col cols={2} className="padding-0">
                                    <span className="text-size-12 text-color-6">{item.bottomLeft}</span>
                                </Col>
                                <Col cols={2} className=" text-right">
                                    <span className="text-size-12 text-color-4">{item.bottomRight}</span>
                                </Col>
                            </Grid>
                        </List.Item>
                    )
                })}
        </List>
        </div>;
    }
}

export default _Server;

