import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Menu } from 'antd';
import {
  ShoppingCartOutlined,
  AppstoreOutlined,
  UserOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { LogoutAction } from '../../Redux/Actions/LoginAction';

const { SubMenu } = Menu;

const NavBar = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  const { login } = useSelector((store) => store.login);

  const [current, setcurrent] = useState({ current: 'ShoppingsProducts' });
  //const { current } = current;

  const redirect = ({ route }) => {
    history.push(route);
  };

  const handleClick = (e) => {
    //console.log('click ', e);
    setcurrent({ current: e.key });
    redirect({ route: `/${e.key}` });
  };
  const logoutHandler = () => {
    dispatch(LogoutAction());
  };
  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode='horizontal' theme='dark'>
      <Menu.Item key='ShoppingsProducts' icon={<AppstoreOutlined />}>
        Productos
      </Menu.Item>
      <Menu.Item key='ShoppingCart' icon={<ShoppingCartOutlined />}>
        Carrito de Compra{' '}
      </Menu.Item>
      {login?.status === 'success' ? (
        <Menu.Item key='CreateProduct' icon={<SettingOutlined />}>
          Publicar Producto
        </Menu.Item>
      ) : null}

      {/*<Menu.Item key='Profile' icon={<UserOutlined />}>
        Perfil
      </Menu.Item>
      <Menu.Item key='Login1' icon={<UserOutlined />}>
        Login
      </Menu.Item>
      <Menu.Item key='Login' icon={<UserOutlined />}>
        Login
      </Menu.Item>*/}
      {login?.status === 'success' ? (
        <SubMenu key='SubMenu' icon={<UserOutlined />} title={login?.user.name}>
          <Menu.ItemGroup title='Perfil'>
            <Menu.Item key='Profile'>Perfil</Menu.Item>
            <Menu.Item onClick={logoutHandler}>Cerrar sesión</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
      ) : (
        <Menu.Item key='Login' icon={<UserOutlined />}>
          Iniciar sesión
        </Menu.Item>
      )}
    </Menu>
  );
};

export default NavBar;
