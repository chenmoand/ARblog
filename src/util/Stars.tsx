// 基础props偷懒用
export interface BaseProps {
    className? : string,
    style?: object
}
// 能有儿子的props
export interface ChildProps extends BaseProps{
    children?: React.ReactNode
}

// 文章0.0
export interface ArticleType {
    id: number,
    articleName: string,
    describe: string,
    author: string,
    lable?: string,
    classification: string,
    content: string,
    date: Date | string
}
