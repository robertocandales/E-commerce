import styled from 'styled-components';
import { respondTo } from '../../../../Utils/mixins';
import { Card, Input } from 'antd';

export const CustomCard = styled(Card)`
  height: 100%;
  width: 100%;
  border-radius: 5px;
  -webkit-box-shadow: 0px 0px 14px -2px rgba(210, 211, 214, 1);
  -moz-box-shadow: 0px 0px 14px -2px rgba(210, 211, 214, 1);
  box-shadow: 0px 0px 14px -2px rgba(210, 211, 214, 1);
  //  background-color: #f5f5ea;

  ${respondTo.mobile`
   width: 300px;
  `}
`;
export const WrapperLogin = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
  ${respondTo.mobile`
  display:flex;
  `}
`;

export const WrapperTitle = styled.div`
  display: flex;
  justify-content: center;
  ${respondTo.mobile`
  display:flex;
  `}
`;

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  align-content: center;

  ${respondTo.mobile`
  display:flex;
  `}
`;

export const Registrate = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;

  ${respondTo.mobile`
  display:flex;
  `}
`;
export const CustomInput = styled(Input)`
  width: 300px;
  ${respondTo.mobile`
  
  `}
`;

export const CustomInputPassword = styled(Input.Password)`
  width: 300px;
  ${respondTo.mobile`
  
  `}
`;
