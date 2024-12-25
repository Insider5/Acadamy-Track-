import { Table } from 'antd';

const StudentProgress = ({ data }) => {
  const columns = [
    { title: 'Student Name', dataIndex: 'name' },
    { title: 'Overall Progress', dataIndex: 'progress' },
    { title: 'Grades', dataIndex: 'grades' },
  ];
  return <Table columns={columns} dataSource={data} />;
};

export default StudentProgress;
