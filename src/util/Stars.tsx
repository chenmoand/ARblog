// 基础props偷懒用
export interface BaseProps {
    className? : string,
    style?: object
}
// 能有儿子的props
export interface ChildProps extends BaseProps{
    children?: React.ReactNode
}

// 基础文章类型
export interface BaseArticle {
    
    articleName: string,
    describe: string,
    // author: string,
    // lable?: string,
    // classification: string,
    // content: string,
    // date: Date | string,
    url: string
}
// 打开文章类型 
export interface MoreArticle extends BaseArticle {
    id: number
    author: string,
    lable?: string,
    classification: string,
    content: string,
    date: Date | string,
}
export const API_IP = '127.0.0.1';
export const API_PORT = '8848';
export const API = 'http://' + API_IP + ':' + API_PORT + '/';

export const DNJAME = 'https://www.brageast.com/'

export interface BrInterface {
    etype: string, // url
    ttype: string; // name 
}