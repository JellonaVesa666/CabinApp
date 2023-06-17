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
  box-shadow: none !important;
  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
  &:hover {
    cursor: pointer;
  }
  &:focus {
    border: 0.1rem solid transparent;
    outline: 0.15rem solid rgba(0, 0, 0, 0.3);
  }
`

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  background-color: rgba(255, 255, 255, 0.7);
  border: 0.15rem solid rgba(0, 0, 0, 0.2);
  width: 20px;
  height: 20px;
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
    border: 0.15rem solid rgba(0, 0, 0, 0.4);
    background-color: black;
  }
`

export const SignInBtn = styled.button`
  height: 50px; 
  color: white !important;
  background-color: black !important;
  border-radius: 40px;
  border: none;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    cursor: pointer;
    border: none;
    box-shadow: none;
  }
  &:active {
    border: 0.1rem solid rgba(255, 255, 255, 0.1);
  }
`

export const Link = styled.a`
  color: rgba(0, 0, 0, 0.5);
  font-weight: 500;
  &:hover {
    cursor: pointer;
    color: rgba(0, 0, 0, 1);
  }
`