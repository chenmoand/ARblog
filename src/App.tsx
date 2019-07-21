import * as React from 'react';
import AppTop from './top/AppTop';
import AppBody from './body/AppBody';
import AppBottom from './bottom/AppBottom';

// 日了屎一样的百度根本搜不到教程, 算了我自作聪明一回
// useState最蛋疼的一点就是默认值如果是type声明的赋值过去了不会带类型 所以加了个string
// 这BUG 哔哔哔 (自行想象)
type IContextValue = "主页"| "目录"| "时间轴"| "关于我" | string
/**
 * 大致思路如下,把name和setname暴露到外面
 * 通过setName 更新 name
 * 例如app 的按钮触发onClick body在判断name是否改变
 */
interface IContextType {
  value: IContextValue,
  setValue: (val: IContextValue) => void
}

const { useState } = React;

const Init: IContextType = {
  value : "主页",
  setValue: (val) => {}
}

// 导出这玩意好用useContext拿取value
export const IContext = React.createContext(Init);

const App: React.FC = () => {
  const [name, setName] = useState("主页") 
  function setValue(val: IContextValue): void{
    setName(val);
  }
  return (
    <div>
    <IContext.Provider value={{value: name,setValue: setValue}}>
      {/* 页面顶部 */}
      <AppTop />
      {/* 页面身体 */}
      <AppBody />
    </IContext.Provider>
    {/* 页面底部 不给他全局参数了,毕竟没他啥事情 */}
    <AppBottom />
    </div>
      
  );
}
export default App;
