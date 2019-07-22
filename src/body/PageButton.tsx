import * as React from 'react';
import { Button, Row, Col, Pagination } from 'antd';
import { BaseProps } from '../util/Stars';

interface Pprors extends BaseProps{
    maxpage: number;
}

const PageButton: React.FC<Pprors> = (props: Pprors) => {
    const { maxpage, className, style } = props;


    return(
        <div className={className} style={style}>
            <Row>
                <Col xs={{span: 9, offset: 3}}
                    sm={0}
                >
                    <Button>上一页</Button>
                </Col>
                <Col xs={0}
                    sm={24}
                >
                    <Pagination defaultCurrent={1} total={maxpage*8} />
                </Col>
                <Col xs={{span: 9, offset: 3}}
                    sm={0}
                >
                    <Button>下一页</Button>
                </Col>
            </Row>
          </div>
    )
}


export default PageButton;