import styled from 'styled-components'

export const LoginBody = styled.div`
  position: absolute;
  margin-bottom: 280;
  width: 35rem;
  transition: 1s ease-in-out;
  top: ${props => (props.show === 1 ? "-100vh" : "12.5vh")};
`

export const Input = styled.input`
  padding: 25px 20px 25px 20px;
  height: 50px;
  color: black !important;
  border: 0.1rem solid rgba(0, 0, 0, 0.2);
  border-radius: 40px;
  background: rgba(255, 255, 255, 0.9) !important;
  &:focus {
    border: 0.1rem solid rgba(0, 0, 0, 0.4);
    outline: none !important;
    box-shadow: none !important;
    cursor: pointer;
  }
  &:hover {
    border: 0.1rem solid rgba(0, 0, 0, 0.4);
    cursor: pointer;
  }
`

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  backgroundColor: rgba(255, 255, 255, 0.7);
  border: 0.15rem solid rgba(0, 0, 0, 0.2);
  outline: none;
  outline: 0px !important;
  -webkit-appearance:none !important;
  -webkit-box-shadow: none !important;
  -moz-box-shadow: none !important;
  box-shadow: none !important;
  &:hover {
    border: 0.15rem solid rgba(0, 0, 0, 0.4);
    cursor: pointer;

  }
  &:focus {
    border: 0.15rem solid rgba(0, 0, 0, 0.4);
    cursor: pointer;

  }
  &:checked {
    background-color: black;
  }
`