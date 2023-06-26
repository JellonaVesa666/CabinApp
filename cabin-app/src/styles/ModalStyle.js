import styled from 'styled-components'

export const ModalContent = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  border-radius: 50px;
  background-color: rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  width: 15%;
  height: auto;
  top:50%;
  left:50%;
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
  margin-top: ${props => (props.marginTop)};
  margin-bottom: ${props => (props.marginBottom)};
  padding-left: ${props => (props.paddingLeft)};
  width: ${props => (props.width)};
  &.isActive {
    background-color: rgba(0, 0, 0, 0.25);
  }
`