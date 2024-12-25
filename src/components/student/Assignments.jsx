import { List, Button } from 'antd';

const Assignments = ({ assignments }) => (
  <List
    itemLayout="horizontal"
    dataSource={assignments}
    renderItem={item => (
      <List.Item
        actions={[
          <Button type="primary">Submit</Button>,
        ]}
      >
        <List.Item.Meta title={item.title} description={item.description} />
      </List.Item>
    )}
  />
);

export default Assignments;
