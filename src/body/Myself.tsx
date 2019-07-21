import * as React from 'react';
import weichat from './img/weichat.png';
import { Avatar, Icon, Button, Row, Col } from 'antd';
import { BaseProps } from '../util/Stars';


const Myself: React.FC<BaseProps> = (props : BaseProps) => {
    return(
        <div className={props.className}>
            <div className="myself-data">
                <Avatar 
                    shape="square" 
                    size={128} 
                    src={weichat} 
                    style={{margin: "0 auto"}}
                />
                <div className= "myself-name">
                   <span>ChenMo</span><br />
                   Fishing && Developer<br />
                   <Icon type="environment" theme="filled" />
                   河北 · 廊坊
                </div>
                <Row style={{marginTop: "20px"}}>
                    <Col span={12} className="myself-data-left">
                        文章<br />
                        0
                    </Col>
                    <Col span={12} className="myself-data-right">
                        标签<br />
                        0
                    </Col>
                </Row>
                <Button 
                    style={{marginTop: "20px"}}
                    type="primary" 
                    size="large"
                    shape="round"
                >
                    点击关注我
                </Button>
                <Row style={{marginTop: "20px"}}>
                    <Col span={12} >
                        {/* <a href=""> */}
                            <Icon type="github" theme="filled" />
                        {/* </a> */}
                    </Col>
                    <Col span={12} >
                        {/* <a href=""> */}
                            <Icon type="mail" theme="filled" />
                        {/* </a> */}
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Myself;