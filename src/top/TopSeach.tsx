import * as React from 'react';
import { Input } from 'antd';

const { Search } = Input;

const TopSeach: React.FC = () => {

    return(
        <div>
            <Search
                placeholder = "Seach Content"
                onSearch={value => console.log(value)}
                style={{ width: 200, position: "absolute", top: 8 }}
            />
        </div>
    )
}

export default TopSeach;