import styled from 'styled-components'
import { fixedTop } from '../utilities'

const color = "white";

export const Button = styled.button`
  padding: 5px 20px;
  border-radius: 4px;
  border: none;
  color: ${color};
  font-size: 2rem;
  background: indigo;
`;

export const CancelButton = styled(Button)`
  background: tomato;
  ${fixedTop}
`;