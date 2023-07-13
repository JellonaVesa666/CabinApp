import styled from 'styled-components'
import backgroundGray from "../images/background_Gray.png";
import logoLight from "../images/logo_Light.png";

export const MainBody = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  background: url(${backgroundGray}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  overflow-x:hidden;
  margin: 0;
  padding: 0;
  box-shadow:inset 0px 0px 80vw #333;
`

export const Logo = styled.div`
  background: url(${logoLight}) no-repeat;
  position:absolute;
  width: 360px;
  height: 220px;
  bottom: 3%;
  left: 2%;
  padding: 0;
  margin: 0;
`