import React, { useEffect, useState } from 'react';
import { Card, Input, Skeleton, Button, Form } from 'antd';
import { request } from '../services/request';
import { getOne, update, create } from '../services';
import { useParams } from 'react-router-dom';
import { LeftOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
export default function UserForm() {
  const params = useParams();
  const id = params.id;
  const history = useHistory();
  const [form] = Form.useForm();
  const [loader, setLoader] = useState(false);

  const getData = () => {
    setLoader(true);
    request(getOne(id))
      .then((res) => {
        res.json().then(({ data }) => {
          form.setFieldsValue(data.User);
        });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoader(false));
  };

  const onFinish = (values) => {
    let selectedAction = id !== 'create' ? update : create;
    request(selectedAction(values, id))
      .then((res) => {
        history.push('/');
      })
      .catch((err) => {});
  };

  useEffect(() => {
    if (id !== 'create') getData();
  }, []);

  if (loader)
    return (
      <Card>
        <Skeleton active />
      </Card>
    );

  return (
    <Card
      title={
        <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
          <LeftOutlined onClick={() => history.goBack()} />
          Form
        </div>
      }
    >
      <Form
        form={form}
        name='basic'
        initialValues={{
          name: '',
        }}
        onFinish={onFinish}
      >
        <Form.Item
          label='Name'
          name='name'
          rules={[
            {
              required: true,
              message: 'Please input your name!',
            },
          ]}
          width={100}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='Age'
          name='age'
          rules={[
            {
              required: true,
              message: 'Please input your age!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='Address'
          name='address'
          rules={[
            {
              required: true,
              message: 'Please input your address!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='Phone'
          name='phone'
          rules={[
            {
              required: true,
              message: 'Please input your phone!',
            },
          ]}
        >
          <Input type='number' />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 23,
            span: 16,
          }}
        >
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}
