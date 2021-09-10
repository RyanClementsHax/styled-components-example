import styled from 'styled-components'
import { teal, elevation } from '../utilities'

export const Button = styled.button`
  padding: 5px 20px;
  border-radius: 4px;
  color: white;
  font-size: 2rem;
  border: none;
  transition: 0.3s ease box-shadow;
  background: ${teal};
  ${elevation[1]}
  &:hover {
    ${elevation[2]}
  }
  ${({ size }) => {
    if(size === 'small') {
      return `
        font-size: 1rem;
        padding: 3px 10px;
      `
    }
  }}
`;

export const CancelButton = styled(Button)`
  background: tomato;
`;