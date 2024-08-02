import styled from "styled-components";


export const HeaderWrapper = styled.div`  
  .content {
    position: relative;
    border-bottom: 1px solid #eee;
    z-index: 19;
    transition: all 250ms ease;
    background-color: rgba(255, 255, 255, 0);
    border-bottom: rgba(233,233,233,0);
    background-color: #fff;


    .top {
      display: flex;
      align-items: center;
      height: 80px;
    }
  }

  .cover {
    position: fixed;
    z-index: 9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
  }

  &.fixed {
    position: fixed;
    z-index: 99;
    top: 0;
    right: 0;
    left: 0;
    z-index: 99;
  }
`

export const SearchAreaWrapper = styled.div`
  height: ${props => props.isSearch ? '100px' : '0'};
  transition: height 250ms ease;
`
