import * as React from 'react';
import { Row, Col } from 'antd';
import "./css/body.css"
import ArticleList from './ArticleList';
import PageButton from './PageButton';
import Myself from './Myself';
import Lable from './Label';
import LatestArticle from './LatestArticle';
import { IContext } from '../App';


const { useState, useContext } = React;

const AppBody:React.FC = () => {
    //默认页数为1
    const [ page, setPage ] = useState(1);
    const { value } = useContext(IContext);
    const onPageName = ():JSX.Element => {
        switch (value) {
            case "主页":
                return (
                <div>
                    <ArticleList page={page} />;
                    <PageButton maxpage={10} className="page-button"  />
                </div>
                )
            case "目录":
                return <div></div>
            case "时间轴":
            case "关于我":
            default:
                return (
                <div>
                    <ArticleList page={page} />;
                    <PageButton maxpage={10} className="page-button"  />
                </div>
                )
        }
    }
    return(
        <Row>
            <Col 
                xs={{ span: 18, offset: 3 }} 
                sm={{ span: 12, offset: 2 }}
            >
                {onPageName()}
                
            </Col>
            <Col 
                xs={{ span: 0, offset: 3 }} 
                sm={{ span: 7, offset: 1, push: 0 }}
                style={{marginTop: 30}}
            >
                <Myself className="app-body-right" />
                <Lable className="app-body-right lable" />
                <LatestArticle className="app-body-right lable" />
            </Col>
        </Row>
    )
};


export default AppBody;