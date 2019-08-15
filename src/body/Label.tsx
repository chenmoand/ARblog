import * as React from 'react';
import { Icon } from 'antd';
import { BaseProps } from '../util/Stars';
import { Link } from 'react-router-dom';

interface LProps extends BaseProps {
    src: Array<string>
}

// const { useState, useEffect} = React
const Lable: React.FC<LProps> = props => {
    return(
        <div 
            className={props.className}
            style={props.style} 
        >
            <Icon type="tag" /> 标签 <br />
            <div style={{marginTop: 13}}>
                {
                    props.src.map((item, key) => {
                        return(
                            <React.Fragment key={key}>
                                <Link to={"/search/"+item}>
                                    {item}
                                </Link>,&nbsp;
                            </React.Fragment>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Lable;