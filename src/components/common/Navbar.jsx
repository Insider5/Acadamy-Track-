import { Menu } from 'antd';

const Navbar = ({ userRole }) => {
  const menuItems = userRole === 'student'
    ? ['Dashboard', 'Assignments', 'Notes', 'Progress']
    : userRole === 'faculty'
    ? ['Dashboard', 'Student Progress', 'Assignments']
    : ['Admin Dashboard', 'Manage Users'];
  
  return (
    <Menu mode="horizontal" theme="dark">
      {menuItems.map(item => (
        <Menu.Item key={item}>{item}</Menu.Item>
      ))}
    </Menu>
  );
};

export default Navbar;
