import styled from 'styled-components'

export const RegisterBody = styled.div`
  position: absolute;
  width: 35rem;
  border-radius: 16px;
  transition: 1s ease-in-out;
  top: ${props => (props.show === 1 ? "6rem" : "-100vh")};
`

export const LinkH4 = styled.h4`
  color: rgba(0, 0, 0, 0.5);
  font-weight: 300;
  &:hover {
    cursor: pointer;
    color: rgba(0, 0, 0, 1);
    text-decoration: underline;
  }
`

export const SubmitBtn = styled.button.attrs({ type: 'submit' })`
  height: 50px; 
  color: white !important;
  border-radius: 40px;
  background-color: black !important;
  &:hover {
    cursor: pointer;
    //background-color: #7aafad !important;
  }
`

export const CloseBtn = styled.div`
  position: absolute; 
  top: 0;
  right: 0;
  background-color: black;
  color: white;
  border-radius: 10px 16px 0px 10px;
  width: 100px;
  height: 40px;
  margin-right: -12px;
  outline: none;
  border: none;
  outline: 0px !important;
  -webkit-appearance:none !important;
  -webkit-box-shadow: none !important;
  -moz-box-shadow: none !important;
  box-shadow: none !important;
  &:hover {
    cursor: pointer;
    border: none;
    //background-color: #b86179;
  }
`

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  background-color: rgba(255, 255, 255, 1);
  width: 20px;
  height: 20px;
  border: 0.15rem solid rgba(0, 0, 0, 0.2);
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