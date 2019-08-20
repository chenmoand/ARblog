import * as React from 'react';
import { List, Comment as AntdComment, Input, Form, Button, Avatar } from 'antd';
import { BaseProps } from '../util/Stars';
import moment from 'moment';
import { Markdown } from './Article';


const { TextArea } = Input;
const { useState } = React;


const Comment:React.FC = () => {
    
    const [ comments, setComments ] = useState([{}])
    const [ submitting, setSubmitting ] = useState(false)
    const [ value, setValue ] = useState('')

    const handleSubmit = ():void => {
        if(!value) return;

        setSubmitting(true)
        
        setTimeout(() => {
            setSubmitting(false)
            setValue('')
            setComments([{
                author: 'Han Solo',
                avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                content: <Markdown source={value} />,
                datetime: moment().fromNow(),
            },
            ...comments
            ])
        }, 1000)
    }

    return(
        <div className="comment" style={{marginTop: 20}}>
            {comments.length > 0 && <CommentList commments={comments} />}
            <AntdComment 
                avatar={
                    <Avatar 
                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                        alt="Han Solo"
                    />
                }
                content={
                    <Editor
                      onChange={e => setValue(e.target.value)}
                      onSubmit={handleSubmit}
                      submitting={submitting}
                      value={value}
                    />
                }
            />
        </div>
    )
}

interface CommentType {
    author: string;
    avatar: string;
    content: JSX.Element;
    datetime: string;
}
interface CProps extends BaseProps {
    commments: any[]
}


const CommentList:React.FC<CProps> = props => {
    const { commments } = props;
    return(
        <>
            <List 
                dataSource={ commments }
                header={`${commments.length -1 !== 0 ? `${commments.length - 1}条评论` : '评论区'}`}
                itemLayout="horizontal"
                renderItem={props => <AntdComment {...props} />}
            />
        </>
    )
} 

interface EProps {
    onChange : (event: any) => void 
    value : string | number | string[] | undefined,
    submitting :  boolean | {
        delay?: number | undefined
    } | undefined,
    onSubmit : (event: any) => void 
}

const Editor:React.FC<EProps> = props => {
    const { onChange, value, submitting, onSubmit } = props;
    return(
        <>
            <Form.Item>
                <TextArea rows={4} onChange={onChange} value={value} />
            </Form.Item>
            <Form.Item>
                <Button
                    style={{marginLeft: 15 ,float: "right",}}
                    // 不注释掉会报错!!!!!!?????
                    // href="https://github.com/login/oauth/authorize?client_id=98e07a1e606d561ed02a"
                    type="primary"
                >
                    <a 
                    href="https://github.com/login/oauth/authorize?client_id=98e07a1e606d561ed02a">
                        Github 登陆
                    </a>
                </Button>
                <Button 
                    style={{float: "right",}}
                    htmlType="submit" 
                    loading={submitting} 
                    onClick={onSubmit} 
                    type="primary"
                    // disabled={true}
                    >
                    添加评论
                </Button>
            </Form.Item>
        </>
    )
}

export default Comment;