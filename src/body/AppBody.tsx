import * as React from 'react';
import { Row, Col } from 'antd';
import "./css/body.css"
import ArticleList from './ArticleList';
import Myself from './Myself';
import Lable from './Label';
import LatestArticle from './LatestArticle';
import { Switch, Route } from 'react-router-dom';
import Article from './Article';
import axios from 'axios';
import { API, BrInterface } from '../util/Stars';
import Comment from './Comment';


const { useState, useEffect } = React;

const AppBody:React.FC = () => {
    // 默认页数为1
    const Home = () => ( 
        <div>
            <ArticleList />
        </div>
    )

    const WenZhang = (props: { match: { url: string; }; }) => {    
        
        return(
            <>
                <Article 
                    url={props.match.url} 
                    className="app-Article"
                />
                <Comment />
            </>
        )

    }

    const WzReturn = (props: { location: { search: string; }; history: string[]; }) => {
        const { search } = props.location
        let value: string = ''; 
        const wSession = window.sessionStorage.getItem('wSession')
        const fc = () => {
            if(search != null && search.startsWith('?code=')) {
                search.split('?').forEach((val: string) => {
                    if(val === 'code=') {
                        return value = val;
                    } 
                })
                 
            }
            if(value==='' || wSession == null) {
                // setTimeout(() => {
                props.history.push("/")
                // }, 1000);
            } else {
                axios.get(API + 'api/user/github?'+ value)
                .then(res => {
                    
                })
                .catch(e => {
                    console.log(e);
                })
            }
            return(
                <>
                    正在跳转页面
                </>
            )
        }
        console.log(search);
        return(
            <div>
                {fc()}
            </div>
        )
    }


    return(
        <Row>
            <Col 
                xs={{ span: 22, offset: 1 }} 
                sm={{ span: 12, offset: 2 }}
            >
                <Switch>
                    <Route exact path = {["/","/home"]}  component={Home} />
                    <Route exact path = {"directory"} />
                    <Route exact path = {"time-point"} />
                    <Route exact path = {"about"} />
                    <Route path = {["/w/**/*.html","/w/*.html"]} component={WenZhang} />
                    <Route exact path = {"/w/return"} component={WzReturn}/>
                </Switch>
            </Col>
            <Col 
                xs={{ span: 0, offset: 1 }} 
                sm={{ span: 7, offset: 1, push: 0 }}
                style={{marginTop: 30}}
            >
                <BodyRight />
            </Col>
        </Row>
    )
};



const BodyRight: React.FC = () => {
    const init: BrInterface[] = [
        {etype :'正在加载ING....', ttype :'./home'}
    ]
    const [latest, setLatest] = useState(init)
    const [ lables, setLables ] = useState([])
    useEffect(() => {
        axios.get(API+'api/article/latest')
        .then(res => {
            if(res.data.code === 200) {
                setLatest(res.data.data as BrInterface[])
                // console.log(res.data.data);              
            }
        })
        .catch(e =>{
            console.log(e);
        })
        axios.get(API+'api/article/lables')
        .then(res => {
            setLables(res.data)
            
        })
        .catch(e =>{
            console.log(e);
        })
    },[])
    
    return(
        <>
            <Myself className="app-body-right" />
            <Lable src={lables} className="app-body-right lable" />
            <LatestArticle src={latest} className="app-body-right lable" />
        </>
    )
}


export default AppBody;