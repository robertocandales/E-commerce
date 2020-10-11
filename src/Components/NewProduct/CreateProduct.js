import React from 'react';
import { Typography } from 'antd';
import NewProduct from './NewProduct/NewProduct';
const { Title } = Typography;

const CreateProduct = () => {
  return (
    <div>
      <Title type='secondary'> Producto </Title>
      <div>
        <NewProduct />
      </div>
    </div>
  );
};

export default CreateProduct;
