import styled from 'styled-components';
import { respondTo } from '../../../../Utils/mixins';
import { Input, Card } from 'antd';

export const CustomCard = styled(Card)`
  height: 100%;
  width: 100%;
  border-radius: 5px;
  -webkit-box-shadow: 0px 0px 14px -2px rgba(210, 211, 214, 1);
  -moz-box-shadow: 0px 0px 14px -2px rgba(210, 211, 214, 1);
  box-shadow: 0px 0px 14px -2px rgba(210, 211, 214, 1);

  ${respondTo.mobile`
  width:300px;
//   background-color:red;
  `}
`;
export const WrapperLogin = styled.div`
  display: flex;
  flex-direction: column;
  ${respondTo.mobile`
  
  `}
`;

export const WrapperTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${respondTo.mobile`
  
  `}
`;

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  align-content: center;

  ${respondTo.mobile`
 
  `}
`;

export const Registrate = styled.div`
  display: flex;
  justify-content: flex-end;
  ${respondTo.mobile`

  `}
`;

export const CustomInput = styled(Input)`
  width: 300px;
  ${respondTo.mobile`
    width: 250px;

  `}
`;

export const CustomInputPassword = styled(Input.Password)`
  width: 300px;
  ${respondTo.mobile`
    width: 250px;

  `}
`;
