import * as React from 'react';
import weichat from './img/weichat.png';
import { Avatar, Icon, Button, Row, Col } from 'antd';
import { BaseProps, API } from '../util/Stars';
import axios from 'axios';

interface Quantity {
    Qlabel : number, // 标签数量
    QCategory : number // 文章数量
}

const { useEffect, useState } = React;

const Myself: React.FC<BaseProps> = (props : BaseProps) => {
    const init: Quantity ={
        Qlabel : 0,
        QCategory : 0
    }
    const [ quantity, setQuantity] = useState(init);

    useEffect(()=>{
        axios.get(API+'api/article/wz')
        .then(res => {  
            console.log(res.data);
            
            setQuantity({
                Qlabel : res.data.ttype, 
                QCategory : res.data.etype
            })
            
            
        })
        .catch(e => {
            console.log(e)
        })
    },[]);
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
                        {quantity.QCategory}
                    </Col>
                    <Col span={12} className="myself-data-right">
                        标签<br />
                        {quantity.Qlabel}
                    </Col>
                </Row>
                <Button
                    style={{marginTop: "20px"}}
                    type="primary" 
                    size="large"
                    shape="round"
                >
                    <a href="https://github.com/chenmoand">点击关注我</a>
                </Button>
                <Row style={{marginTop: "20px"}}>
                    <Col span={12} >
                        <a href="https://github.com/chenmoand/ARblog">
                            <Icon type="github" theme="filled" />
                        </a>
                    </Col>
                    <Col span={12} >
                        <a href="email:2010557767@qq.com">
                            <Icon type="mail" theme="filled" />
                        </a>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Myself;