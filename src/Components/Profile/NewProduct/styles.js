import styled from 'styled-components';
import { respondTo } from '../../../Utils/mixins';
import { Input } from 'antd';

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
