import { Button, Divider, Typography } from 'antd';
import React from 'react';
import SelectComponent from '../../../global/SelectComponent/SelectComponent';
import WarningModal from '../../../global/WarningModal/WarningModal';
import { Wrapper, Row, DividerStyle } from './styles';
const { Text } = Typography;

const TableComponent = ({ login, history, productDetail }) => {
  console.log(login);
  return (
    <Wrapper>
      <Row>
        <Text>Precio</Text>
        <Text> {productDetail.price} </Text>
      </Row>
      <DividerStyle />
      <Row>
        <Text>Estatus</Text>
        <Text>
          {' '}
          {productDetail.countInStock > 0
            ? `${productDetail.countInStock} disponibles en stock`
            : 'Sin disponibilidad'}{' '}
        </Text>
      </Row>{' '}
      <DividerStyle />
      <Row>
        <Text>Qty</Text>
        <SelectComponent qty={productDetail.countInStock} />
      </Row>
      <DividerStyle />
      <Row>
        {login?.status === 'success' ? (
          <Button type='primary'>Agregar al carrito</Button>
        ) : (
          <WarningModal
            label='Agregar al carrito'
            title='Hola, Para agregar al carrito, ingresa a tu cuenta'
            history={history}
          />
        )}
      </Row>
    </Wrapper>
  );
};

export default TableComponent;
