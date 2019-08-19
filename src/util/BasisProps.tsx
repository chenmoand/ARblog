// 由于TypeScript编写React props自带属性没有,,我自己写一份, 可能是我没找到
// ...... 凑合这用

interface BasicProps {
    history : History,
    location : Location,
    match : Match,
    staticContext : any
}

interface History {
    atction : string,
    block : any, // any 猜不出来 大部分是方法
    createHeref: any ,
    go : any,
    goBack : any,
    goForward : any,
    length : number,
    listen : any,
    location : Location
    push : any,
    replace : any

}

interface Location {
    hash : string,
    pathname: string,
    search: string,
    state: any
}

interface Match {
    isExact : boolean,
    params : string[],
    path : string,
    url : string
}

export default BasicProps;