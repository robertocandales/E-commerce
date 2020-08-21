import React from 'react'
import { Form, Input, Button, Checkbox, Typography } from 'antd';
import {WrapperLogin,WrapperTitle,MainContainer,Registrate} from "./styled";



const { Title } = Typography;



const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

const Login = ({setShowComponent}) => {
    const onFinish = values => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
      };
    return (
        <MainContainer>
            <Registrate>
                <h2>No tienes cuenta?</h2> <Button type="primary">Registrate</Button>
            </Registrate>
            <WrapperTitle>
            <Title>Iniciar Sesion</Title>
            </WrapperTitle>
            <br />
            <br />
        <WrapperLogin>
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label=""
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input placeholder="Usuario" />
          </Form.Item>
    
          <Form.Item
            label=""
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password placeholder="Clave" />
          </Form.Item>
    
          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
    
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
        </WrapperLogin>

        <WrapperLogin>
        <Button type="link" onClick = {() => setShowComponent({Login:false,
         Recover:true,
         Signup:false})} >Olvidaste Contrasena?</Button>
        </WrapperLogin>
        </MainContainer>
      );
}

export default Login
