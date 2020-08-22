import styled from 'styled-components';
import { respondTo } from '../../../../Utils/mixins';

export const WrapperLogin = styled.div`
  display: flex;
  
  
  
  

  ${respondTo.mobile`
  display:flex;
  `}
`;

export const WrapperTitle = styled.div`
  display: flex;
 
  
  

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
  alignItems: 'flex-end';
 
  
  

  ${respondTo.mobile`
  display:flex;
  `}
`;