/**
 *
 * Button.js
 *
 * A common button, if you pass it a prop "route" it'll render a link to a react-router route
 * otherwise it'll render a link with an onclick
 */

import styled from 'styled-components';

const StyledInput = styled.input`
  width: 100%;
  font-size: 14px;
  padding: 6px 8px;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => props.error ? 'red' : 'black'};
  margin: 0;
`
export default StyledInput; 