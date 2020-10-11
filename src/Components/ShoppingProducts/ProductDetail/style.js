import styled from 'styled-components';
import { respondTo } from '../../../Utils/mixins';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: stretch;
  height: 100%;
  margin-top: 20px;

  ${respondTo.mobile`
  flex-direction: column;
  align-items: center;
  `}
`;

export const Img = styled.img`
  width: 500px;
  ${respondTo.mobile`
 width: 300px;
  `};
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  width: 100%;
  max-width: 300px;
  padding: 10px;

  ${respondTo.mobile`
 
  `}
`;
export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 30px;
  ${respondTo.mobile`
 
  `};
`;
