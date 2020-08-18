import styled from 'styled-components';
import { respondTo } from '../../Utils/mixins';

export const Container = styled.div`
  ${respondTo.mobile`
 
  `}
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  //  align-items: space-between;
  padding: 20px;
  flex-flow: wrap;

  ${respondTo.mobile`
 flex-direction:column;
 align-items:center;

  width: 90%;
  `}
`;
export const GoogleMap = styled.div`
  padding-left: 40px;
  width: 100%;
  height: 100%;
  ${respondTo.mobile`
  width: 100%;
  margin-top:20px;
  padding-left: 0px;
  
  `}
`;
export const Title = styled.div`
  padding-top: 10px;
  text-align: center;
`;

export const WrapperButton = styled.div`
  padding-top: 10px;
  display: flex;
  justify-content: center;
  /*align-items: space-between;*/
`;
