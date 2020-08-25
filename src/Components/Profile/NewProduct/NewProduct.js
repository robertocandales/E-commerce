import React, { useState } from 'react';
import UploadProduct from '../../global/Upload/UploadProduct';
import { WrapperTitle, CustomInput, ProductForm, ProductFields } from './styles';
import { Form, Button, Typography, Card } from 'antd';
const { Title } = Typography;

const NewProduct = () => {
  const [loading, setloading] = useState(false);
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className='site-card-border-less-wrapper'>
      <Card hoverable>
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
                <UploadProduct />
              </div>
            </ProductForm>
          </ProductFields>
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
        </Form>
      </Card>
    </div>
  );
};

export default NewProduct;
