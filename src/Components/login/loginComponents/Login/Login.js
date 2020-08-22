import React from 'react';
import { Form, Input, Button, Checkbox, Typography } from 'antd';
import {
  WrapperLogin,
  WrapperTitle,
  MainContainer,
  Registrate,
  CustomInput,
  CustomInputPassword,
  CustomCard,
} from './styled';

const { Title, Text } = Typography;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Login = ({ setShowComponent }) => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <MainContainer>
      <Registrate>
        <Text type='secondary' style={{ color: 'red', marginRight: '-10px', marginTop: '-20px' }}>
          No tienes cuenta?
        </Text>{' '}
        <Button type='link' style={{ marginTop: '-25px', color: 'red', marginRight: '-10px' }}>
          Registrate
        </Button>
      </Registrate>
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
            name='username'
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
            <Button type='primary' htmlType='submit' ghost style={{ color: '#111d2c' }}>
              Iniciar Sesión
            </Button>
          </Form.Item>
        </Form>
      </WrapperLogin>

      <WrapperLogin>
        <Button
          style={{ color: '#111d2c' }}
          type='link'
          onClick={() => setShowComponent({ Login: false, Recover: true, Signup: false })}>
          Olvidaste Contrasena?
        </Button>
      </WrapperLogin>
    </MainContainer>
  );
};

export default Login;
