import React, {Component} from 'react'
import {Table} from "antd";

class MessageTable extends Component {
    columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id'
        },
        {
            title: 'Message',
            dataIndex: 'message',
            key: 'message'
        },

    ];

    render() {
        return (
            <div>
                <Table columns={this.columns} dataSource={this.props.messages}/>
            </div>
        )

    }

}

export default MessageTable
