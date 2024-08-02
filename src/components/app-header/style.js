import styled from "styled-components";


export const HeaderWrapper = styled.div`  
  .content {
    position: relative;
    z-index: 19;
    border-bottom: 1px solid #eee;
    background-color: ${props => props.theme.isAlpha ? 'rgba(255, 255, 255, 0)' : 'rgba(255,255,255,1)'};
    border-bottom-color: ${props => props.theme.isAlpha ? 'rgba(233,233,233,0)' : 'rgba(233,233,233,1)'};
    transition: all 250ms ease;

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
