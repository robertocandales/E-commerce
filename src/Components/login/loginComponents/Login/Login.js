import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Button, Typography } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';
import { authLogin } from '../../../../Api/ProductsApi';
import {
  WrapperLogin,
  WrapperTitle,
  MainContainer,
  Registrate,
  CustomInput,
  CustomInputPassword,
} from './styled';
import { LoginAction } from '../../../../Redux/Actions/LoginAction';
import Notification from '../../../global/Notification';
const { Title, Text } = Typography;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 24 },
};

const Login = ({ setShowComponent }) => {
  const [loading, setloading] = useState(false);
  const [data, setdata] = useState('');
  const dispatch = useDispatch();

  const onFinish = async (values) => {
    setloading(true);
    console.log('Success:', values);
    try {
      const res = await authLogin(values);
      console.log(res, 'res');
      if (!res.data.error) {
        Notification({
          type: 'success',
          message: 'Bienvenidos',
        });
        setdata(res.data);
        //redirect({ route: '/envios-en-curso' });
        await dispatch(LoginAction(res.data));
        console.log(res, 'error');
        setloading(false);
      } else {
        if (res.data.error === 'please enter all fields') {
          Notification({
            type: 'error',
            message: 'Por favor ingrese todos los campos.',
          });
          setloading(false);
        } else {
          Notification({
            type: 'error',
            message: 'El usuario no existe, por favor, Registrarse',
          });
          setloading(false);
        }

        setloading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <MainContainer>
      <Registrate>
        <Text type='secondary' style={{ color: 'red', marginRight: '-10px', marginTop: '-20px' }}>
          ¿No tienes cuenta?
        </Text>{' '}
        <Button
          type='link'
          style={{ marginTop: '-25px', color: 'orange', marginRight: '-30px' }}
          onClick={() => setShowComponent({ Login: false, Recover: false, Signup: true })}>
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

          {/*<Form.Item {...tailLayout} name='remember' valuePropName='checked'>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>*/}

          <Form.Item {...tailLayout}>
            <Button
              type='primary'
              htmlType='submit'
              ghost
              style={{ color: '#111d2c' }}
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
    </MainContainer>
  );
};

export default Login;
