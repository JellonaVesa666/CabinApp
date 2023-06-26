import styled from 'styled-components'

export const ModalBody =  styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100 %;
  height: 100 %;
  background: rgba(0, 0, 0, 0.6);
  &.show {
    display: block;
  }
  &.hide {
    display: none;
  }
`

export const ModalContent = styled.section`
  position:fixed;
  background: white;
  width: 80%;
  height: auto;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
`