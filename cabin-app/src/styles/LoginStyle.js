import styled from 'styled-components'

export const LoginBody = styled.div`
  position: absolute;
  margin-bottom: 280;
  width: 35rem;
  transition: 1s ease-in-out;
  top: ${props => (props.show === 1 ? "-100vh" : "12.5vh")};
`