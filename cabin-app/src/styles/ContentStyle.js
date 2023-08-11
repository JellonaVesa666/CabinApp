import styled from 'styled-components'
import { colors } from "./Colors";

export const CabinPreview = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  width: calc(100% - 1.5rem);
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  &:hover {
    opacity: 1;
  }
`