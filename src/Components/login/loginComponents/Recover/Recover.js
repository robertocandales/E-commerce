import React, { useState } from 'react';
import { Form, Button, Typography } from 'antd';
import {
  WrapperLogin,
  WrapperTitle,
  MainContainer,
  CustomCard,
  CustomInput,
  WrapperButton,
} from './styled';

const { Title } = Typography;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 0, span: 24 },
};

const Recover = ({ setShowComponent }) => {
  const [loading, setloading] = useState(false);
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <MainContainer>
      <CustomCard>
        <WrapperTitle>
          <Title type='secondary'> ¿Olvidaste tu contraseña?</Title>
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
            <Form.Item label='' name='email' rules={[{ required: true, message: 'Ingrese email' }]}>
              <CustomInput placeholder='Email' />
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button
                type='primary'
                ghost
                block
                style={{ color: '#111d2c' }}
                loading={loading}
                htmlType='submit'>
                Restablecer
              </Button>
            </Form.Item>
          </Form>
        </WrapperLogin>

        <br />
        <WrapperButton>
          <Button
            type='link'
            style={{ marginTop: '-25px', color: 'red', marginRight: '-10px' }}
            onClick={() => setShowComponent({ Login: true, Recover: false, Signup: false })}>
            Volver a inicio de sesion
          </Button>
        </WrapperButton>
      </CustomCard>
    </MainContainer>
  );
};

export default Recover;
