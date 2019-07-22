import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';


const TopMenu:React.FC = () => {
    return(
        <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode= "horizontal"
        >   
            <Menu.Item key="1">
                <Link to="/home" >
                    <Icon type="home" style={{fontSize: '16px', color: '#08c'}}/>
                    <span className="app-top-font">主页</span>
                </Link>
            </Menu.Item>
            <Menu.Item key="2">
                <Link to="/directory" >
                    <Icon type="bars" style={{fontSize: '16px', color: '#08c'}}/>
                    <span className="app-top-font">目录</span>
                </Link>
            </Menu.Item>
            <Menu.Item key="3">
                <Link to="/time" >
                    <Icon type="carry-out" style={{fontSize: '16px', color: '#08c'}}/>
                    <span className="app-top-font">时间轴</span>
                </Link>
            </Menu.Item>
            <Menu.Item key="4">
                <Link to="/about" >
                    <Icon type="code" style={{fontSize: '16px', color: '#08c'}}/>
                    <span className="app-top-font">关于我</span>
                </Link>
            </Menu.Item>
        </Menu>
    )
}

export default TopMenu;