import { Table, Button } from 'antd';

const ManageUsers = ({ users }) => {
  const columns = [
    { title: 'Name', dataIndex: 'name' },
    { title: 'Role', dataIndex: 'role' },
    {
      title: 'Action',
      render: (_, record) => (
        <Button type="danger" onClick={() => handleDelete(record.key)}>
          Remove
        </Button>
      ),
    },
  ];
  return <Table columns={columns} dataSource={users} />;
};

export default ManageUsers;
