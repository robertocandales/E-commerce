import React from 'react';
import { Card, Typography } from 'antd';
import { WrapperDescription } from './styled';
const { Text } = Typography;

const { Meta } = Card;
const ProductCard = ({ image, name, price, description }) => {
  return (
    <div style={{ marginBottom: '10px' }}>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt='example' src={image} />}
        defaultActiveTabKey={name}>
        <Meta title={name} description={description} />
        <WrapperDescription>
          <Text ellipsis style={{ marginTop: '5px' }}>
            {price}
          </Text>{' '}
        </WrapperDescription>
      </Card>
    </div>
  );
};

export default ProductCard;
