import React from 'react';
import { useHistory } from 'react-router-dom';
import { Menu, Button } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const LeftMenu = () => {
  let history = useHistory();
  const redirect = ({ route }) => {
    history.push(route);
  };
  return (
    <Menu mode='horizontal'>
      <Menu.Item key='Productos'>
        <Button onClick={() => redirect({ route: '/ShoppingsProducts' })}>
          Lista de Productos
        </Button>
      </Menu.Item>
      <Menu.Item key='Compra'>
        <Button onClick={() => redirect({ route: '/ShoppingCart' })}>Carrito de Compra</Button>
      </Menu.Item>
      {/*<SubMenu title={<span>Carrito de Compra</span>}>
        <MenuItemGroup title='Item 1'>
          <Menu.Item key='setting:1'>Option 1</Menu.Item>
          <Menu.Item key='setting:2'>Option 2</Menu.Item>
        </MenuItemGroup>
        <MenuItemGroup title='Item 2'>
          <Menu.Item key='setting:3'>Option 3</Menu.Item>
          <Menu.Item key='setting:4'>Option 4</Menu.Item>
        </MenuItemGroup>
      </SubMenu>*/}
      <Menu.Item key='Profile'>
        <Button onClick={() => redirect({ route: '/Profile' })}>Perfil</Button>
      </Menu.Item>
    </Menu>
  );
};

export default LeftMenu;
