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
import { useHistory } from 'react-router';
const { Title } = Typography;

const NewProduct = () => {
  const { login } = useSelector((store) => store.login);
  const [fileList, setFileList] = useState([]);
  const [thumbUrl, setHhumbUrl] = useState('');
  let history = useHistory();

  const [loading, setloading] = useState(false);
  const formatData = (values, fileList) => {
    return {
      name: values.name,
      description: values.description,
      price: values.price,
      image: fileList.thumbUrl,
      countInStock: values.countInStock,
    };
  };
  const onFinish = async (values) => {
    setloading(true);

    const data = formatData(values, thumbUrl);
    if (data.image) {
      const res = await newProduct(data, login.token);
      console.log(res);
      if (!res.data.error) {
        Notification({
          message: 'Producto guardado  existosamente',
          type: 'success',
        });
        setloading(false);
        redirect({ route: '/ShoppingsProducts' });
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
    } else {
      Notification({
        message: 'Agregar imagen del producto',
        type: 'error',
      });
      setloading(false);
    }
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
  const redirect = ({ route }) => {
    history.push(route);
  };
  return (
    <div className='site-card-border-less-wrapper'>
      <CustomCard hoverable>
        <WrapperTitle>
          <Title type='secondary'> Nuevo Producto </Title>
        </WrapperTitle>
        <Form
          name='Product'
          layout='vertical'
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}>
          <ProductFields>
            <ProductForm>
              <Form.Item label='Nombre'>
                <Form.Item
                  name='name'
                  rules={[{ required: true, message: 'Campo requerido' }]}
                  noStyle>
                  <CustomInput placeholder='Nombre del Producto' />
                </Form.Item>
              </Form.Item>
              <Form.Item label='Descripcion'>
                <Form.Item
                  name='description'
                  rules={[{ required: true, message: 'Campo requerido' }]}
                  noStyle>
                  <CustomInput placeholder='Descripcion del Producto' />
                </Form.Item>
              </Form.Item>
            </ProductForm>
            <ProductForm>
              <Form.Item label='Precio'>
                <Form.Item
                  name='price'
                  rules={[{ required: true, message: 'Campo requerido' }]}
                  noStyle>
                  <CustomInput type='number' placeholder='Precio del Producto' />
                </Form.Item>
              </Form.Item>{' '}
              <Form.Item label='Cantidad en stock'>
                <Form.Item
                  name='countInStock'
                  rules={[{ required: true, message: 'Campo requerido' }]}
                  noStyle>
                  <CustomInput type='number' placeholder='Cantidad disponible' />
                </Form.Item>
              </Form.Item>{' '}
            </ProductForm>
            <Form.Item label='Imagen'>
              <Form.Item
                name='image'
                valuePropName='fileList'
                getValueFromEvent={normFile}
                extra=''
                style={{ display: 'flex' }}>
                <UploadProduct
                  fileList={fileList}
                  setFileList={setFileList}
                  action='/upload.do'
                  listType='picture'
                  setHhumbUrl={setHhumbUrl}
                />
              </Form.Item>
            </Form.Item>
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
