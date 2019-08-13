import * as React from 'react';
import AppTop from './top/AppTop';
import AppBody from './body/AppBody';
import AppBottom from './bottom/AppBottom';
import { HashRouter } from 'react-router-dom';

// 日了屎一样的百度根本搜不到教程, 算了我自作聪明一回
// useState最蛋疼的一点就是默认值如果是type声明的赋值过去了不会带类型 所以加了个string
// 这BUG 哔哔哔 (自行想象)

const App: React.FC = () => {
  return (
    <div>
      <HashRouter>
        {/* 页面顶部 */}
        <AppTop />
        {/* 页面身体 */}
        <AppBody />
      </HashRouter>
    {/* 页面底部 不给他全局参数了,毕竟没他啥事情 */}
    <AppBottom />
    </div>
      
  );
}
export default App;
