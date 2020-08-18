import styled from 'styled-components';
import { respondTo } from '../../../Utils/mixins';

export const WrapperDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;

  ${respondTo.mobile`
 
  `}
`;
