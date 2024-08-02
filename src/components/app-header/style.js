import styled from "styled-components";


export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  border: 1px solid #eee;

  background-color: #fff;

  &.fixed {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 99;
  }
`