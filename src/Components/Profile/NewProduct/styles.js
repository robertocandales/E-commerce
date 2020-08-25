import styled from 'styled-components';
import { respondTo } from '../../../Utils/mixins';
import { Input, Card } from 'antd';

export const CustomCard = styled(Card)`
  height: 100%;
  width: 100%;
  border-radius: 5px;
  -webkit-box-shadow: 0px 0px 14px -2px rgba(210, 211, 214, 1);
  -moz-box-shadow: 0px 0px 14px -2px rgba(210, 211, 214, 1);
  box-shadow: 0px 0px 14px -2px rgba(210, 211, 214, 1);

  ${respondTo.mobile`
   width: 300px;
  `}
`;

export const WrapperTitle = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  ${respondTo.mobile`
  
  `}
`;
export const CustomInput = styled(Input)`
  width: ${({ width }) => (width ? width : '300px')};

  ${respondTo.mobile`
  width: 250px;
  `}
`;
export const ProductForm = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => (direction ? direction : 'column')};
  justify-content: space-around;
  align-items: center;
  width: 100%;
  ${respondTo.mobile`
  flex-direction:column:
  `}
`;
export const ProductFields = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  ${respondTo.mobile`
  flex-direction:column;
  `}
`;
export const ButtonWrapper = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  ${respondTo.mobile`
  
  `}
`;
