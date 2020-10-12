import React from 'react';
import { Card, Typography, Button, Tooltip } from 'antd';
import { WrapperDescription } from './styled';
import { useHistory } from 'react-router';
import { EditOutlined } from '@ant-design/icons';

const { Text } = Typography;

const { Meta } = Card;
const ProductCard = ({ image, name, price, description, id, login }) => {
  let history = useHistory();
  const redirect = ({ route }) => {
    history.push(route);
  };
  return (
    <div style={{ marginBottom: '10px' }}>
      <Card
        onClick={() => redirect({ route: `/productDetails/${id}` })}
        hoverable
        style={{ width: 240 }}
        cover={
          <>
            <img alt='example' src={image} />
          </>
        }
        defaultActiveTabKey={name}>
        <Meta title={name} description={description} />
        <WrapperDescription>
          <Text ellipsis style={{ marginTop: '5px' }}>
            {price} $
          </Text>{' '}
        </WrapperDescription>
      </Card>
      {login?.user?.isAdmin && (
        <Button
          type='primary'
          block
          onClick={() => redirect({ route: `/EditProduct/${id}` })}
          icon={<EditOutlined />}>
          Editar / Eliminar producto
        </Button>
      )}
    </div>
  );
};

export default ProductCard;
