import styled from 'styled-components'

export const ModalContent = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  border-radius: 50px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
  border-radius: 20px;
  width: 12.5%;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  &.show {
    display: block;
  }
  &.hide {
    display: none;
  }
`

export const ModalHeader = styled.p`
  text-align: center;
  margin: auto;
  padding: 0;
  padding-top: 1%;
  padding-bottom: 1%;
  margin-top: ${props => (props.margintop)};
  margin-bottom: ${props => (props.marginbottom)};
  padding-left: ${props => (props.paddingleft)};
  width: ${props => (props.width)};
  border-radius: 20px;
  border: 1.5px solid rgba(0, 0, 0, 0.2);
  color: rgba(0, 0, 0, 0.6);
  text-transform: capitalize;
  &.isActive {
    background-color: rgba(0, 0, 0, 0.75) !important;
    color: white !important;
  }
  &:hover {
    cursor: pointer;
    color: black;
  }
`

export const ModalLinkH4 = styled.h4`
  color: rgba(0, 0, 0, 0.5);
  font-weight: 300;
  padding-bottom: 5%;
  &:hover {
    cursor: pointer;
    color: rgba(0, 0, 0, 1);
    text-decoration: underline;
  }
`