import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import { Button } from 'antd';
import axios from 'axios';
import { ArticleType, BaseProps } from '../util/Stars';
import { IContext } from '../App';



const initial: ArticleType[] = [{
    id : 0,
    articleName: "null",
    describe: "null",
    author: "null",
    lable: "null",
    classification: "null",
    content: "null",
    date: "null"
}]

interface IProps extends BaseProps{
    src : Article;
}

interface Article {
    title : string,
    describe : string,
    url : string
}

const Article:React.FC<IProps> = (props : IProps) => {
    const {title, describe, url} = props.src;
    
    return(
        <div className="app-body-left" style={props.style}>
            <a href={url}>
                <h3>{title}</h3>
            </a>
            <hr className="Article-hr" />
            <ReactMarkdown
                className="Article-md" 
                source={describe}
                escapeHtml={false}
            />
            <Button
                type="dashed"
                style={{float: "right"}}
            >
                浏览更多
            </Button>
        </div>
    )
};

interface ArticleListProps {
    page : number,
    className? : string,
    style?: object
}

const { useState, useEffect, useContext } = React

const ArticleList: React.FC<ArticleListProps> = (props: ArticleListProps ) => {
    const [ article , setArticle] = useState(initial);
    const { value } = useContext(IContext);
    const { page } = props;
    useEffect(() => {
        axios.get(
            // 要8个文章,,老衲不贪
            `http://127.0.0.1:8848/api/article?current=${page<=1?0:page*7}&size=8`
        )
        .then(res => {
            setArticle(res.data as ArticleType[])
            
            
        })
        .catch(err => {
            console.log(err);
        }) 
    },[page, value])
    // console.log(article);
    return(
        <div>
            {
            article.map((item,key) => {
            return(
                <React.Fragment key={key}>
                    <Article 
                        src={{title: item.articleName, describe: item.describe, url: " "}}
                    />
                </React.Fragment>
            )})
            }
        </div>
    )

    
}
export default ArticleList;