import React, { useEffect, useState } from 'react';
import { deleteUser, getAll } from '../services';
import { request } from '../services/request.js';
import { Space, Table, Button, Card, Skeleton } from 'antd';
import { Header } from 'antd/es/layout/layout';

export default function index() {
  const [users, setUsers] = useState([]);
  const [loader, setLoader] = useState(true);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: "Number",
      dataIndex: 'phone',
      key: 'phone'
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size='middle'>
          <a
            onClick={() => {
              window.location.replace(`/users/${record.id}`);
            }}
          >
            Edit
          </a>
          <a
            onClick={() => {
              onDelete(record.id);
            }}
          >
            Delete
          </a>
        </Space>
      ),
    },
  ];

  const getAllUsers = () => {
    setLoader(true);
    request(getAll).then((res) => {
      res
        .json()
        .then(({ data }) => {
          setUsers(data.allUsers);
        })
        .finally(() => {
          setLoader(false);
        });
    });
  };

  const onDelete = (id) => {
    setLoader(true);
    request(deleteUser(id))
      .then((res) => {
        getAllUsers();
      })
      .finally(() => {
        setLoader(false);
      });
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  if (loader) {
    return (
      <div>
        <Card>
          <Skeleton active />
        </Card>
      </div>
    );
  }

  return (
    <div>
      <Card>
        <Header>
          <div className='header'>
            <h1>Users</h1>
            <Button
              onClick={() => window.location.replace('/users/create')}
              type='primary'
            >
              Add User
            </Button>
          </div>
        </Header>
        <Table columns={columns} dataSource={users} />
      </Card>
    </div>
  );
}
