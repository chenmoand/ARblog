import * as React from 'react';
import { Icon } from 'antd';
import { BrInterface } from '../util/Stars';
import { Link } from 'react-router-dom';

interface Iprops {
    className?: string,
    style?: object
    src: BrInterface[]
}


const LatestArticle: React.FC<Iprops> = (props: Iprops) => {
    return(
        <div 
            className={props.className}
            style={props.style} 
        >
            <Icon type="file-text" /> 最新文章 
            <div style={{padding: 10, margin: 0, paddingLeft: 0}}>
                {props.src.map((itme, key)=>{
                    return(
                        <React.Fragment key={key}>
                            <Icon 
                                style={{fontSize: 15, color: "gray"}}
                                type="caret-right" 
                            /> &nbsp;
                            <Link to={itme.ttype}>
                                {itme.etype}
                            </Link>
                            <br />
                        </React.Fragment>
                    )
                })}
            </div>
        </div>
    )
}

export default LatestArticle;