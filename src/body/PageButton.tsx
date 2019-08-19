import * as React from 'react';
import { Pagination } from 'antd';
import { BaseProps } from '../util/Stars';

interface Pprors extends BaseProps{
    maxpage: number;
    setPage: (page: number) => void
}

const PageButton: React.FC<Pprors> = (props: Pprors) => {
    const { maxpage, className, style, setPage } = props;


    return(
        <div className={className} style={style}>
            {/* <Row>
                <Col xs={{span: 9, offset: 3}}
                    sm={0}
                >
                    <Button>上一页</Button>
                </Col>
                <Col 
                    xs={0}
                    sm={24}
                > */}
                    <Pagination
                        style={{textAlign: "center"}} 
                        defaultCurrent={1} 
                        total={maxpage*8} 
                        onChange={
                            (page, pageSize) => setPage(page)
                        }
                    />
                {/* </Col>
                <Col 
                xs={{span: 9, offset: 3}}
                    sm={0}
                >
                    <Button>下一页</Button>
                </Col> */}
            {/* </Row> */}
          </div>
    )
}


export default PageButton;