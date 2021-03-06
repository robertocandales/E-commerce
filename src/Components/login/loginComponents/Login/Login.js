import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Button, Typography } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';
import { authLogin } from '../../../../Api/UserApi';
import {
  WrapperLogin,
  WrapperTitle,
  MainContainer,
  Registrate,
  CustomInput,
  CustomInputPassword,
  CustomCard,
} from './styled';
import { LoginAction } from '../../../../Redux/Actions/LoginAction';
import Notification from '../../../global/Notification';
import { useHistory } from 'react-router';
const { Title, Text } = Typography;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const Login = ({ setShowComponent }) => {
  const [loading, setloading] = useState(false);
  const [data, setdata] = useState('');
  const dispatch = useDispatch();
  let history = useHistory();

  const onFinish = async (values) => {
    setloading(true);

    try {
      const res = await authLogin(values);

      if (!res.data.error) {
        Notification({
          type: 'success',
          message: `Bienvenidos ${res.data.user.name}`,
        });
        setdata(res.data);
        await dispatch(LoginAction(res.data));

        setloading(false);
        redirect({ route: '/ShoppingsProducts' });
      } else {
        if (res.data.error === 'user not found') {
          Notification({
            type: 'error',
            message: 'El usuario no existe, por favor, Registrarse.',
          });
          setloading(false);
        }

        setloading(false);
      }
    } catch (error) {
      console.log(error);
      if (error.response.status === 401)
        Notification({
          type: 'error',
          message: 'Usuario o contraseña invalida',
        });

      setloading(false);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const redirect = ({ route }) => {
    history.push(route);
  };
  return (
    <MainContainer>
      <CustomCard hoverable>
        <Registrate>
          <Text type='secondary' style={{ marginRight: '-0px', marginTop: '-20px' }}>
            ¿No tienes cuenta?
          </Text>{' '}
          <Button
            type='link'
            style={{ marginTop: '-25px', color: 'orange', marginRight: '-0px' }}
            onClick={() => redirect({ route: '/Register' })}>
            Registrate
          </Button>
        </Registrate>
        <br />

        <WrapperTitle>
          <Title type='secondary'>Iniciar Sesion</Title>
        </WrapperTitle>

        <WrapperLogin>
          <Form
            {...layout}
            name='basic'
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}>
            <Form.Item
              label=''
              name='email'
              rules={[{ required: true, message: 'Please input your username!' }]}>
              <CustomInput placeholder='Usuario' />
            </Form.Item>

            <Form.Item
              label=''
              name='password'
              rules={[{ required: true, message: 'Please input your password!' }]}>
              <CustomInputPassword placeholder='Clave' />
            </Form.Item>

            <Form.Item
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center',
                width: '100%',
              }}>
              <Button
                type='primary'
                htmlType='submit'
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignContent: 'center',
                  width: '100%',
                }}
                loading={loading}>
                Iniciar Sesión
              </Button>
            </Form.Item>
          </Form>

          <Button
            style={{ color: 'orange' }}
            type='link'
            onClick={() => setShowComponent({ Login: false, Recover: true, Signup: false })}>
            ¿Olvidaste Contrasena?
          </Button>
        </WrapperLogin>
      </CustomCard>
    </MainContainer>
  );
};

export default Login;
