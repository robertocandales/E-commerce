import React, { useState } from 'react';
import UploadProduct from '../../global/Upload/UploadProduct';
import {
  WrapperTitle,
  CustomInput,
  ProductForm,
  ProductFields,
  CustomCard,
  ButtonWrapper,
} from './styles';
import { Form, Button, Typography } from 'antd';
import Notification from '../../global/Notification';
const { Title } = Typography;

const NewProduct = () => {
  const [fileList, setFileList] = useState([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
  ]);
  const [loading, setloading] = useState(false);
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    Notification({
      message: 'Verifique los campos',
      type: 'error',
    });
  };
  return (
    <div className='site-card-border-less-wrapper'>
      <CustomCard hoverable>
        <WrapperTitle>
          <Title type='secondary'>Cargar Nuevo Producto </Title>
        </WrapperTitle>
        <Form
          name='Product'
          layout='vertical'
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}>
          <ProductFields>
            <ProductForm>
              <Form.Item
                label='Nombre'
                name='name'
                rules={[{ required: true, message: 'Campo requerido' }]}>
                <CustomInput placeholder='Nombre del Producto' />
              </Form.Item>
              <Form.Item
                label='Descripcion'
                name='description'
                rules={[{ required: true, message: 'Campo requerido' }]}>
                <CustomInput placeholder='Descripcion del Producto' />
              </Form.Item>
            </ProductForm>
            <ProductForm direction={'row'}>
              <Form.Item
                label='Precio'
                name='price'
                rules={[{ required: true, message: 'Campo requerido' }]}>
                <CustomInput width={'150px'} placeholder='Precio del Producto' />
              </Form.Item>{' '}
              <div style={{ display: 'flex' }}>
                <UploadProduct fileList={fileList} setFileList={setFileList} />
              </div>
            </ProductForm>
          </ProductFields>
          <ButtonWrapper>
            <Form.Item>
              <Button
                type='primary'
                ghost
                style={{ color: '#111d2c' }}
                loading={loading}
                htmlType='submit'>
                Cargar Producto{' '}
              </Button>
            </Form.Item>
          </ButtonWrapper>
        </Form>
      </CustomCard>
    </div>
  );
};

export default NewProduct;
