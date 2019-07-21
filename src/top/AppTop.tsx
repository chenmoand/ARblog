import React from 'react';
import './css/top.css';
import { Avatar, Col, Row } from 'antd';
import TopMenu from './TopMenu';
import TopSeach from './TopSeach';

// 头像地址
const IMGURL: string = 'https://i.loli.net/2019/07/15/5d2c9366b72e626510.png'

const AppTop: React.FC = (props) => {

    return (
        <div className="app-top">
            <Row>
                <Col 
                    xs={20}
                    sm={6}
                    className="top-split"
                >
                    <div className="top-img">
                        <Avatar src={IMGURL} alt="CM" />
                        <span>战士ChenMo</span>
                    </div>
                </Col>
                <Col 
                    xs={4}
                    sm={12}
                >
                    <TopMenu />
                </Col>
                <Col 
                    xs={0}
                    sm={6}
                >
                    <TopSeach />
                </Col>
            </Row>
        </div>
    )
}

export default AppTop;