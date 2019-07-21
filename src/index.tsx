import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/es/locale-provider/zh_CN';
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import "./index.css"

const app = (
    <LocaleProvider locale={zhCN}>
        <App />
    </LocaleProvider>
)

NProgress.start();

ReactDOM.render(
    app, 
    document.getElementById('root')
);

NProgress.done();
serviceWorker.unregister();
