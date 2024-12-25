import { Card, Row, Col } from 'antd';

const Dashboard = ({ progress, assignments }) => (
  <Row gutter={16}>
    <Col span={8}>
      <Card title="Overall Progress" bordered>
        {progress}%
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Pending Assignments" bordered>
        {assignments}
      </Card>
    </Col>
  </Row>
);

export default Dashboard;
