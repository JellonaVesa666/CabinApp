import styled from 'styled-components'

export const ModalContent = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  border-radius: 50px;
  background-color: #c5c5c5;
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
  text-align: ${props => (props.alignCenter ? "center" : "")};
  margin: auto;
  padding: 0;
  padding-top: 1%;
  padding-bottom: 1%;
  margin-top: ${props => (props.marginTop)};
  margin-bottom: ${props => (props.marginBottom)};
  padding-left: ${props => (props.paddingLeft)};
  width: ${props => (props.width)};
  border-radius: 20px;
  border: 1.5px solid rgba(0, 0, 0, 0.2);
  background-color: rgba(255, 255, 255, 0.6);
  color: rgba(0, 0, 0, 0.4);
  &.isActive {
    background-color: rgba(80, 255, 25, 0.3);
    color: black;
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