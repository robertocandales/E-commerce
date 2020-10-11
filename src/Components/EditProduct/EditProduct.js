import React, { useEffect, useState } from 'react';
import UploadProduct from '../global/Upload/UploadProduct';
import {
  WrapperTitle,
  CustomInput,
  ProductForm,
  ProductFields,
  CustomCard,
  ButtonWrapper,
} from './styles';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { useHistory } from 'react-router';
import { Form, Button, Typography } from 'antd';
import Notification from '../global/Notification';
import { newProduct } from '../../Api/ProductsApi';
const { Title } = Typography;

const EditProduct = () => {
  const [form] = Form.useForm();
  let history = useHistory();

  const redirect = ({ route }) => {
    history.push(route);
  };
  const { id } = useParams();
  const { products } = useSelector((store) => store.product);
  const { login, token } = useSelector((store) => store.login);
  const [fileList, setFileList] = useState([]);
  const [thumbUrl, setHhumbUrl] = useState('');

  const [loading, setloading] = useState(false);

  const [editProduct, setEditProduct] = useState('');
  console.log(editProduct);

  useEffect(() => {
    const product = products.find((product) => product._id === id);
    setEditProduct(product);
    setFileList(product.image);
    setHhumbUrl(product.image);

    form.setFieldsValue({
      name: product.name,
      description: product.description,
      price: product.price,
      image: product.image,
    });
    setloading(false);
  }, [products, id, form]);

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
          form={form}
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
            <ProductForm direction={'row'}>
              <Form.Item label='Precio'>
                <Form.Item
                  name='price'
                  rules={[{ required: true, message: 'Campo requerido' }]}
                  noStyle>
                  <CustomInput width={'150px'} placeholder='Precio del Producto' />
                </Form.Item>
              </Form.Item>{' '}
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
                    thumbUrl={thumbUrl}
                    edit={true}
                  />
                </Form.Item>
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

export default EditProduct;
