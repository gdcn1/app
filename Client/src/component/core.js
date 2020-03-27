import React, {Component} from 'react';
import Context from '../utils/context';
import 'antd/dist/antd.css';
import {Button, Form, Input} from 'antd';
import Api from "../utils/api";
import MessageTable from "./MessageTable";


class Core extends Component {
    formRef = React.createRef()
    static contextType = Context;
    state = {
        messages: []
    }

    layout = {
        labelCol: {
            span: 2,
        },
        wrapperCol: {
            span: 8,
        },
    };
    tailLayout = {
        wrapperCol: {
            offset: 2,
            span: 3,
        },
    };

    componentDidMount() {
        this.getData()
    }

    getData() {
        Api.get(`${this.context.apiUrl}/api/get/messages?record=${this.context.recordNumber}`)
            .then(res => {
                this.setState({
                    messages: res.data.map(val => {
                        return {...val, key: val.id}
                    })
                })
            })
            .catch((err) => console.log(err))
    }

    onFinish = values => {
        Api.post(`${this.context.apiUrl}/api/post/message`, {message: values.message})
            .then(res => {
                this.getData()
                this.formRef.current.resetFields();

            })

            .catch((err) => {
                console.log(err)
            })
    };

    onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };




    render() {
        return (
            <div>
                <br/>
                <br/>
                <Form
                    ref={this.formRef}
                    {...this.layout}
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                >
                    <Form.Item
                        label="Message"
                        name="message"
                        rules={[
                            {
                                required: true
                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item {...this.tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Send
                        </Button>
                    </Form.Item>
                </Form>
                <MessageTable messages={this.state.messages}/>
            </div>
        )
    }

}


export default Core;
