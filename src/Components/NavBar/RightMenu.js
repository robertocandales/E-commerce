import React from 'react';
import { useHistory } from 'react-router-dom';
import { Menu, Button } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const RightMenu = () => {
  let history = useHistory();
  const redirect = ({ route }) => {
    history.push(route);
  };
  return (
    <Menu mode='horizontal'>
      <Menu.Item key='mail'>
        <Button>Signin</Button>
      </Menu.Item>
      <Menu.Item key='app'>
        <Button>Signup</Button>
      </Menu.Item>
    </Menu>
  );
};

export default RightMenu;
