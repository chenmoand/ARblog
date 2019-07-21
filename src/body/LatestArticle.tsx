import * as React from 'react';
import { Icon } from 'antd';

interface Iprops {
    className?: string,
    style?: object
}


const LatestArticle: React.FC<Iprops> = (props: Iprops) => {
    return(
        <div 
            className={props.className}
            style={props.style} 
        >
            <Icon type="file-text" /> 最新文章 <br /><br />
            <div>
                暂无
            </div>
        </div>
    )
}

export default LatestArticle;