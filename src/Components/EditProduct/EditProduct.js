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
import { deleteAproduct, updateAproduct } from '../../Api/ProductsApi';
const { Title } = Typography;

const EditProduct = () => {
  const [form] = Form.useForm();
  let history = useHistory();

  const redirect = ({ route }) => {
    history.push(route);
  };
  const { id } = useParams();
  const { products } = useSelector((store) => store.product);
  const { login } = useSelector((store) => store.login);
  const { token } = login;

  const [fileList, setFileList] = useState([]);
  const [thumbUrl, setHhumbUrl] = useState('');

  const [loading, setloading] = useState(false);

  const [editProduct, setEditProduct] = useState('');

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
      countInStock: product.countInStock || 0,
    });
    setloading(false);
  }, [products, id, form]);

  const formatData = (values, fileList) => {
    return {
      name: values.name,
      description: values.description,
      price: values.price,
      image: fileList,
      countInStock: values.countInStock || 0,
    };
  };
  const onFinish = async (values) => {
    setloading(true);
    const data = formatData(values, fileList);
    console.log(data);
    const res = await updateAproduct(id, token, data);
    console.log(res);
    if (!res.data.error) {
      Notification({
        message: 'Producto actualizado de forma existosa',
        type: 'success',
      });
      setloading(false);
      redirect({ route: '/ShoppingsProducts' });
    } else {
      if (res.data.error === 'No token, authorization failed') {
        Notification({
          message: 'Debe iniciar sesion para poder cargar productos',
          type: 'error',
        });
        setloading(false);
      }
      if (res.data.error === 'Not authorized, no token') {
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

  const ProductDelete = async (id, token) => {
    setloading(true);
    const res = await deleteAproduct(id, token);
    if (res.data.error === 'Not authorized, token failed') {
      Notification({
        message: 'Debe iniciar sesion para poder eliminar productos',
        type: 'error',
      });
      setloading(false);
    }
    if (res.data.error === 'Not authorized, no token') {
      Notification({
        message: 'Problemas de inicio de sesion, debe inicar sesion nuevamente',
        type: 'error',
      });
      setloading(false);
    }
    if (!res.data.error) {
      Notification({
        message: 'Producto eliminado de forma existosa',
        type: 'success',
      });
      setloading(false);
      redirect({ route: '/ShoppingsProducts' });
    }
  };
  return (
    <div className='site-card-border-less-wrapper'>
      <CustomCard hoverable>
        <WrapperTitle>
          <Title type='secondary'>Editar Producto </Title>
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
            <ProductForm>
              <Form.Item label='Precio'>
                <Form.Item
                  name='price'
                  rules={[{ required: true, message: 'Campo requerido' }]}
                  noStyle>
                  <CustomInput type='number' placeholder='Precio del Producto' />
                </Form.Item>
              </Form.Item>
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
                  thumbUrl={thumbUrl}
                  edit={true}
                />
              </Form.Item>
            </Form.Item>
          </ProductFields>
          <ButtonWrapper>
            <Button type='primary' loading={loading} htmlType='submit'>
              Actualizar
            </Button>

            <Button type='primary' loading={loading} onClick={() => ProductDelete(id, token)}>
              Eliminar
            </Button>
          </ButtonWrapper>
        </Form>
      </CustomCard>
      <div style={{ display: 'flex', width: '100%', justifyContent: 'center', marginTop: '20px' }}>
        <Button onClick={() => redirect({ route: `/ShoppingsProducts` })} type='primary'>
          Regresar a todos los productos
        </Button>
      </div>
    </div>
  );
};

export default EditProduct;
