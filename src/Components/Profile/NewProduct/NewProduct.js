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
import { newProduct } from '../../../Api/ProductsApi';
import { useSelector } from 'react-redux';
const { Title } = Typography;

const NewProduct = () => {
  const { token } = useSelector((store) => store.login.login);
  const [fileList, setFileList] = useState([]);
  const [thumbUrl, setHhumbUrl] = useState('');

  const [loading, setloading] = useState(false);
  const formatData = (values, fileList) => {
    return {
      name: values.name,
      description: values.description,
      price: values.price,
      image: fileList.thumbUrl,
    };
  };
  const onFinish = async (values) => {
    setloading(true);
    const data = formatData(values, thumbUrl);
    console.log(data);
    const res = await newProduct(data, token);
    console.log(res);
    if (!res.data.error) {
      Notification({
        message: 'Producto guardado de forma existosa',
        type: 'success',
      });
      setloading(false);
    } else {
      if (res.data.error === 'No token, authorization denied') {
        Notification({
          message: 'Debe iniciar sesion para poder cargar productos',
          type: 'error',
        });
        setloading(false);
      }
      if (res.data.error === 'Token is no valid') {
        Notification({
          message: 'Problemas de inicio de sesion, debe inicar sesion nuevamente',
          type: 'error',
        });
        setloading(false);
      }
    }
    setloading(false);
  };

  const onFinishFailed = (errorInfo) => {
    Notification({
      message: 'Verifique los campos',
      type: 'error',
    });
  };
  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }

    return e && e.fileList;
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
              <Form.Item
                name='image'
                label='Imagen'
                valuePropName='fileList'
                getValueFromEvent={normFile}
                extra=''>
                <div style={{ display: 'flex' }}>
                  <UploadProduct
                    fileList={fileList}
                    setFileList={setFileList}
                    action='/upload.do'
                    listType='picture'
                    setHhumbUrl={setHhumbUrl}
                  />
                </div>{' '}
              </Form.Item>
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
