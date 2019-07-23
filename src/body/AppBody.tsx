import * as React from 'react';
import { Row, Col } from 'antd';
import "./css/body.css"
import ArticleList from './ArticleList';
import PageButton from './PageButton';
import Myself from './Myself';
import Lable from './Label';
import LatestArticle from './LatestArticle';
import { Switch, Route } from 'react-router-dom';
import Article from './Article';


const { useState } = React;

const AppBody:React.FC = () => {
    // 默认页数为1
    const [ page, setPage ] = useState(1);
    const Home = () => ( 
        <div>
            <ArticleList page={page} />
            <PageButton maxpage={10} className="page-button"  />
        </div>
    )
    const WenZhang = (props: { match: { url: string; }; }) => {
        return(
            <>
                <Article 
                url={props.match.url} 
                className="app-Article"
                />
            </>
        )

    }

    return(
        <Row>
            <Col 
                xs={{ span: 18, offset: 3 }} 
                sm={{ span: 12, offset: 2 }}
            >
                <Switch>
                    <Route exact path = {["/","/home"]}  component={Home} />
                    <Route exact path = {"directory"} />
                    <Route exact path = {"time-point"} />
                    <Route exact path = {"about"} />
                    <Route path = {["/w/**/*.html","/w/*.html"]} component={WenZhang} />
                </Switch>
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