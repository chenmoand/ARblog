import React, { useContext  } from 'react';
import { Menu, Icon } from 'antd';
import { IContext } from '../App';


const TopMenu:React.FC = () => {
    const { setValue } = useContext(IContext);
    return(
        <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode= "horizontal"
        >
            <Menu.Item key="1" onClick={ () => setValue("主页")} >
                <Icon type="home" style={{fontSize: '16px', color: '#08c'}}/>
                <span className="app-top-font">主页</span>
            </Menu.Item>
            <Menu.Item key="2" onClick={ () => setValue("目录")}>
                <Icon type="bars" style={{fontSize: '16px', color: '#08c'}}/>
                <span className="app-top-font">目录</span>
            </Menu.Item>
            <Menu.Item key="3" onClick={ () => setValue("时间轴")}>
                <Icon type="carry-out" style={{fontSize: '16px', color: '#08c'}}/>
                <span className="app-top-font">时间轴</span>
            </Menu.Item>
            <Menu.Item key="4" onClick={ () => setValue("关于我")}>
                <Icon type="code" style={{fontSize: '16px', color: '#08c'}}/>
                <span className="app-top-font">关于我</span>
            </Menu.Item>
        </Menu>
    )
}

export default TopMenu;