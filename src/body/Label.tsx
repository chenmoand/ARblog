import * as React from 'react';
import { Icon } from 'antd';
import { BaseProps } from '../util/Stars';

// const { useState, useEffect} = React
const Lable: React.FC<BaseProps> = (props: BaseProps) => {
    return(
        <div 
            className={props.className}
            style={props.style} 
        >
            <Icon type="tag" /> 标签 <br /><br />
            <div>
                暂无
            </div>
        </div>
    )
}

export default Lable;