import styled from 'styled-components';
import { Drawer } from 'antd';
import { respondTo } from '../../Utils/mixins';

export const WrapperDrawer = styled(Drawer)`
  display: none;
  background-color: maroon;

  ${respondTo.mobile`
 display:flex;
       
  `}
`;
export const WrapperButton = styled.div`
  display: none;
  ${respondTo.mobile`
 display:flex;

  `}
`;
export const WrapperNavBar = styled.div`
  display: flex;
  justify-content: space-between;
  ${respondTo.mobile`
 display:none;
 
       
  `};
`;
export const Nav = styled.nav`
  //  background-color: maroon;
  ${respondTo.mobile`
 display:none;
 
       
  `};
`;
