import styled from 'styled-components';

import inputStyles from './inputStyle';

const StyledInput = styled.input`
  ${inputStyles};
  width: ${props => props.width};
  height ${props => props.height};
`;

export default StyledInput;
