import React, { useState } from 'react';
import { Form, Button, Typography } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';
import Notification from '../../../global/Notification';
import { RegisterUser } from '../../../../Api/ProductsApi';

import {
  WrapperLogin,
  WrapperTitle,
  MainContainer,
  Registrate,
  CustomCard,
  CustomInput,
  CustomInputPassword,
} from './styled';

const { Title, Text } = Typography;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Signup = ({ setShowComponent }) => {
  const [loading, setloading] = useState(false);

  const onFinish = async (values) => {
    setloading(true);
    console.log('Success:', values);
    try {
      const res = await RegisterUser(values);
      console.log(res, 'res');
      if (!res.data.error) {
        Notification({
          type: 'success',
          message: 'El usuario fue registrado de forma exitosa',
        });

        setloading(false);
        setShowComponent({ Login: true, Recover: false, Signup: false });
      } else {
        if (res.data.error === 'User already exist') {
          Notification({
            type: 'error',
            message: 'El usuario ya existe.',
          });
          setloading(false);
        } else {
          Notification({
            type: 'warning',
            message: 'Por favor, ingrese todos los campos',
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
      <CustomCard>
        <Registrate>
          <Text type='secondary' style={{ color: 'red', marginRight: '-10px', marginTop: '-20px' }}>
            Ya tienes una cuenta?
          </Text>{' '}
          <Button
            type='link'
            style={{ marginTop: '-25px', color: 'red', marginRight: '-10px' }}
            onClick={() => setShowComponent({ Login: true, Recover: false, Signup: false })}>
            Iniciar Sesion
          </Button>
        </Registrate>{' '}
        <br />
        <br />
        <WrapperTitle>
          <Title type='secondary'>Registrarse</Title>
        </WrapperTitle>
        <br />
        <br />
        <WrapperLogin>
          <Form
            {...layout}
            name='basic'
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}>
            <Form.Item
              label=''
              name='name'
              rules={[{ required: true, message: 'Ingrese nombre de usuario' }]}>
              <CustomInput placeholder='Nombre' />
            </Form.Item>

            <Form.Item
              label=''
              name='email'
              rules={[
                {
                  type: 'email',
                  message: 'No tiene formato de email',
                },
                { required: true, message: 'Ingrese email' },
              ]}>
              <CustomInput placeholder='Email' />
            </Form.Item>

            <Form.Item
              label=''
              name='password'
              rules={[{ required: true, message: 'Ingrese contraseña' }]}>
              <CustomInputPassword placeholder='Contraseña' />
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button
                type='primary'
                htmlType='submit'
                ghost
                style={{ color: '#111d2c' }}
                icon={<PoweroffOutlined />}
                loading={loading}>
                Registrarse
              </Button>
            </Form.Item>
          </Form>
        </WrapperLogin>
      </CustomCard>
    </MainContainer>
  );
};

export default Signup;
