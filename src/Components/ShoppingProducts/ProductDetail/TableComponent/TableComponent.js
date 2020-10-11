import { Button, Divider, Typography } from 'antd';
import React from 'react';
import SelectComponent from '../../../global/SelectComponent/SelectComponent';
import WarningModal from '../../../global/WarningModal/WarningModal';
import { Wrapper, Row, DividerStyle } from './styles';
const { Text } = Typography;

const TableComponent = ({ login, history }) => {
  return (
    <Wrapper>
      <Row>
        <Text>Precio</Text>
        <Text>123</Text>
      </Row>
      <DividerStyle />
      <Row>
        <Text>Estatus</Text>
        <Text>N/A</Text>
      </Row>{' '}
      <DividerStyle />
      <Row>
        <Text>Qty</Text>
        <SelectComponent />
      </Row>
      <DividerStyle />
      <Row>
        {login?.login === 'success' ? (
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
