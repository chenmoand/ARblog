<h1>
    <center>ARblog</center>
    <h3><center>一个简单的React前端</center><h3>
</h1>

[![GitHub](https://img.shields.io/github/license/chenmoand/ARblog)](https://github.com/chenmoand/ARblog/blob/master/LICENSE)  [![GitHub last commit (branch)](https://img.shields.io/github/last-commit/chenmoand/ARblog/master)](https://github.com/chenmoand/ARblog/commits/master)  [![GitHub stars](https://img.shields.io/github/stars/chenmoand/ARblog)](https://github.com/chenmoand/ARblog/stargazers)  

>  序言: 这是我暑假学的, 可能有不明觉厉的代码别喷啊, 觉得有帮助有点个star呗!  **暂且未完成!**
>
>  后端地址: [ReactBlog](https://github.com/chenmoand/ASSblog) 也是未完成状态
>
>  网站例子: [chick here](http://www.brageast.com) 后端还没有发数据所以有点空

### 一, 如何使用

- git clone https://github.com/chenmoand/ARblog.git下载项目
- cd ARblog 进入项目目录
- npm install 或者 yarn 下载文件依赖
- npm run start 或者 yarn start 启动项目
- npm run build 或者 yarn build 构建项目 后放到一个服务端上即可

### 二, 用到了什嘛

1. React Hook 钩子函数编写
2. TypeScript js超集
3. Antd 一个UI组建库
4. router 路由 

### 三, 项目结构 

```
|-- App.test.tsx
|-- App.tsx
|-- body
|   |-- AppBody.tsx
|   |-- Article.tsx
|   |-- ArticleList.tsx
|   |-- Label.tsx
|   |-- LatestArticle.tsx
|   |-- Myself.tsx
|   |-- PageButton.tsx
|   |-- css
|   |   |-- body.css
|   |   |-- github
|   |   |   |-- 400.woff
|   |   |   |-- 400i.woff
|   |   |   |-- 600i.woff
|   |   |   |-- 700.woff
|   |   |   `-- 700i.woff
|   |   `-- github.css
|   `-- img
|       `-- weichat.png
|-- bottom
|   |-- AppBottom.tsx
|   `-- css
|       `-- bottom.css
|-- index.css
|-- index.tsx
|-- react-app-env.d.ts
|-- serviceWorker.ts
|-- top
|   |-- AppTop.tsx
|   |-- TopMenu.tsx
|   |-- TopSeach.tsx
|   |-- css
|   |   `-- top.css
|   `-- img
|       `-- touxiang.png
|-- tree.md
`-- util
    `-- Stars.tsx
```

~~tree指令生成~~ 2019.8.11 文件目录更新

### 四, 踩坑记录

我把他单独拿到了一个md文件 **[Chick Here](./踩坑.md)**

