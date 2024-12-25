import { Layout, Menu } from 'antd';

const { Sider } = Layout;

const Sidebar = ({ items }) => (
  <Sider collapsible>
    <Menu theme="dark" mode="inline" items={items} />
  </Sider>
);

export default Sidebar;
