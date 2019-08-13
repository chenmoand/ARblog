import './css/github.css';
import axios from 'axios';
import * as React from 'react';
import NProgress from "nprogress";
import { Link } from 'react-router-dom';
import { BaseProps, MoreArticle } from '../util/Stars';

import 'highlight.js/styles/github.css';
import marked from 'marked';
import hljs from 'highlight.js';

export const Markdown:React.FC<MProps> = (props) => {
    
    marked.setOptions({
        renderer: new marked.Renderer(),
        highlight: function(code) {
          return require('highlight.js').highlightAuto(code).value;
        },
        pedantic: false,
        gfm: true,
        tables: true,
        breaks: false,
        sanitize: false,
        smartLists: true,
        smartypants: false,
        xhtml: false
    });
    const stm: string = marked(props.source)
    // ts又抽风了 如果不这样写 stm 式boolean
    return(
        <div 
            className={props.className}
            dangerouslySetInnerHTML = {{__html: stm}}
        >
        </div>
    )

}
interface MProps extends BaseProps {
    source: string
}

interface AProps extends BaseProps {
    url: string
}
const init: MoreArticle = {
    id : 0,
    articleName: "服务器好像出了点差错",
    describe: "服务器好像出了点差错",
    author: "null",
    lable: "null",
    classification: "null",
    content: "服务器好像出了点差错",
    date: "null",
    url: "null"
}

hljs.initHighlightingOnLoad();
const { useState, useEffect } = React;
const Article: React.FC<AProps> = (props: AProps) => {
    NProgress.done();
    const [ article , setArticle] = useState(init);
    const { url, className, style } = props;
    // 将url转成浏览器看的懂的编码
    
    let text_url: string = `http://bargeast.com${url}`

    useEffect(()=>{
        const str = encodeURIComponent(url).toLowerCase();
        axios.get(
            `http://127.0.0.1:8848/api/article/f?url=${str}`
        )
        .then(res =>{
            setArticle(res.data as MoreArticle)
        })
        .catch(() => {
            console.log("文章内容或取失败")
        })
    },[url])
    

    return(
        <div className={className +" app-body-left"} style={style}>
            <h2 style={{padding: "5px"}} >{article.articleName}</h2>
            <div className="article-text-top">
                <span>作者: {article.author}</span>
                <span>标签: {article.lable}</span>
                <span>类别: {article.classification}</span>
            </div>
            {
                article.content == null ? 
                <Markdown 
                    source="ERR 404 !! 服务器没有此文章内容" 
                    className="article-text-bottom "
                />
                :
                <Markdown 
                    source={article.content} 
                    className="article-text-bottom "
                />
            }
            
            <div className="article-statement">
                注: 如需转载请附带链接地址
                <Link to={url}>{text_url}</Link>
            </div>
        </div>
    )
}
export default Article;