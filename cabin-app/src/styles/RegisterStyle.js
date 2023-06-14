import styled from 'styled-components'

export const RegisterBody = styled.div`
  position: absolute;
  width: 35rem;
  border-radius: 16px;
  transition: 1s ease-in-out;
  top: ${props => (props.show === 1 ? "6rem" : "-100vh")};
`