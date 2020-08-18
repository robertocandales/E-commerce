import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Menu } from 'antd';
import { ShoppingCartOutlined, AppstoreOutlined, UserOutlined } from '@ant-design/icons';
//const { SubMenu } = Menu;

const NavBar = () => {
  const [current, setcurrent] = useState({ current: 'Cart' });
  //const { current } = current;
  let history = useHistory();
  const redirect = ({ route }) => {
    history.push(route);
  };

  const handleClick = (e) => {
    //console.log('click ', e);
    setcurrent({ current: e.key });
    redirect({ route: `/${e.key}` });
  };
  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode='horizontal' theme='dark'>
      <Menu.Item key='ShoppingsProducts' icon={<AppstoreOutlined />}>
        Productos
      </Menu.Item>
      <Menu.Item key='ShoppingCart' icon={<ShoppingCartOutlined />}>
        Carrito de Compra{' '}
      </Menu.Item>
      <Menu.Item key='Profile' icon={<UserOutlined />}>
        Perfil
      </Menu.Item>
    </Menu>
  );
};

export default NavBar;
