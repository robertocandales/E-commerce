import React, { useState } from 'react';
import { Form, Button, Typography, Checkbox } from 'antd';
import Notification from '../global/Notification';
import { UpdateUser } from '../../Api/UserApi';

import { WrapperLogin, WrapperTitle, MainContainer, CustomCard, CustomInput } from './styles';
import { useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { LoginAction } from '../../Redux/Actions/LoginAction';
const { Title } = Typography;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const Profile = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  const [form] = Form.useForm();
  const { login } = useSelector((store) => store.login);
  const { user } = login;

  const [loading, setloading] = useState(false);

  form.setFieldsValue({
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin || false,
  });

  const onFinish = async (values) => {
    setloading(true);
    console.log('Success:', values);
    try {
      const res = await UpdateUser(values, user._id, login.token);
      console.log(res, 'res');
      if (!res.data.error) {
        Notification({
          type: 'success',
          message: 'Los datos fueron actualizados',
        });
        await dispatch(LoginAction(res.data));
        setloading(false);
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
      const err = error.response.data;
      Notification({
        type: 'error',
        message: { err },
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
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '90vh',
      }}>
      <MainContainer>
        <CustomCard hoverable>
          <br />
          <WrapperTitle>
            <Title type='secondary'>Editar Perfil</Title>
          </WrapperTitle>
          <br />
          <WrapperLogin>
            <Form
              {...layout}
              form={form}
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
              {user.isAdmin ? (
                <Form.Item>
                  <Form.Item label='' name='isAdmin' valuePropName='checked' noStyle>
                    <Checkbox>Usuario administrador</Checkbox>
                  </Form.Item>
                </Form.Item>
              ) : null}

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
                  Actualizar Datos
                </Button>
              </Form.Item>
            </Form>
          </WrapperLogin>
        </CustomCard>
      </MainContainer>
    </div>
  );
};

export default Profile;
