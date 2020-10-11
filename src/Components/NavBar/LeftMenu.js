import React from 'react';
import { useHistory } from 'react-router-dom';
import { Menu, Button } from 'antd';
import { ShoppingCartOutlined, AppstoreOutlined, UserOutlined } from '@ant-design/icons';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const LeftMenu = () => {
  let history = useHistory();
  const redirect = ({ route }) => {
    history.push(route);
  };
  return (
    <Menu mode='horizontal'>
      <Menu.Item key='ShoppingsProducts' icon={<AppstoreOutlined />}>
        Productos
      </Menu.Item>
      <Menu.Item key='ShoppingCart' icon={<ShoppingCartOutlined />}>
        Carrito de Compra{' '}
      </Menu.Item>
      <Menu.Item key='CreateProduct' icon={<ShoppingCartOutlined />}>
        Publicar Producto
      </Menu.Item>
      <Menu.Item key='Profile' icon={<UserOutlined />}>
        Perfil
      </Menu.Item>
      <Menu.Item key='Login' icon={<UserOutlined />}>
        Login
      </Menu.Item>
      <Menu.Item key='Login' icon={<UserOutlined />}>
        Login
      </Menu.Item>
    </Menu>
  );
};

export default LeftMenu;
