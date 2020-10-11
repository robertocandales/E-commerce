import styled from 'styled-components';
import { respondTo } from '../../../../Utils/mixins';
import { Divider } from 'antd';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 1px solid black;
  ${respondTo.mobile`
 justify-content: center;
  `};
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  min-width: 300px;

  ${respondTo.mobile`
 height:200px;
 
 
  `}
`;

export const DividerStyle = styled(Divider)`
  margin-bottom: -50px;
  margin-top: -50px;
  background-color: black;
  ${respondTo.mobile`
 margin-top: -60px;
  margin-bottom: -70px;
 
  `}
`;
