import React, {useContext, useState, useEffect} from 'react';
import Context from '../utils/context';
import 'antd/dist/antd.css';
import {Button, Form, Input, Table} from 'antd';
import Api from "../utils/api";

const Core = () => {
    const [form] = Form.useForm();
    const context = useContext(Context)
    const [stateLocal, setState] = useState({messages: []})

    useEffect(() => {
        if(!context.messages) {
            Api.get(`${context.apiUrl}/api/get/messages`)
                .then(res => {
                    context.handleAddMessages(res.data)
                })
                .catch((err) => console.log(err))
        }

    }, [])

    useEffect(() => {
        if (context.messages ){
            setState({...stateLocal,
                messages: context.messages})
        }

    }, [context.messages])

    const layout = {
        labelCol: {
            span: 2,
        },
        wrapperCol: {
            span: 3,
        },
    };
    const tailLayout = {
        wrapperCol: {
            offset: 2,
            span: 3,
        },
    };

    const onFinish = values => {
        Api.post(`${context.apiUrl}/api/post/message`, {message: values.message})
            .then(Api.get(`${context.apiUrl}/api/get/messages`)
                .then(res => {
                    context.handleAddMessages(res.data)
                    form.resetFields();
                }))
            .catch((err) => {
                console.log(err)
            })
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key:'id'
        },
        {
            title: 'Message',
            dataIndex: 'message',
            key:'message'
        },

    ];
    return (
      <div>
          <Form
              form={form}
              {...layout}
              name="basic"
              initialValues={{
                  remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
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
                  <Input />
              </Form.Item>
              <Form.Item {...tailLayout}>
                  <Button type="primary" htmlType="submit">
                      Submit
                  </Button>
              </Form.Item>
          </Form>
          <Table columns={columns} dataSource={stateLocal.messages} />
      </div>
    )
}


export default Core;
