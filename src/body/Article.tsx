import * as React from 'react';
import { BaseProps, MoreArticle } from '../util/Stars';
import axios from 'axios';
import NProgress from "nprogress";
import ReactMarkdown from 'react-markdown';
import "./css/github.css"


interface AProps extends BaseProps {
    url: string
}
const init: MoreArticle = {
    id : 0,
    articleName: "服务器好像除了点差错",
    describe: "null",
    author: "null",
    lable: "null",
    classification: "null",
    content: "服务器好像除了点差错",
    date: "null",
    url: "null"
}

const { useState, useEffect } = React;
const Article: React.FC<AProps> = (props: AProps) => {
    NProgress.done();
    const [ article , setArticle] = useState(init);

    const { url, className, style } = props;
    // 将url转成浏览器看的懂的编码
    useEffect(()=>{
        const str = encodeURIComponent(url).toLowerCase();
        axios.get(
            `http://127.0.0.1:8848/api/article?url=${str}`
        )
        .then(res =>{
            setArticle(res.data as MoreArticle)
        })
        .catch(() => {
            console.log("文章内容或取失败")
        })
    },[url])
    

    return(
        <div className={className+" app-body-left"} style={style}>
            <h1>
                {article.articleName}
            </h1>
            <ReactMarkdown 
                source={article.content}
                escapeHtml={false}
            />
        </div>
    )
}

export default Article;