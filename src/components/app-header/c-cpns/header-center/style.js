import styled from "styled-components";

export const CenterWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 48px;

  .search-bar {
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 8px;
    width: 300px;
    height: 48px;
    box-sizing: border-box;
    border: 1px solid #ddd;
    border-radius: 24px;
    cursor: pointer;
    ${props => props.theme.mixin.boxShadow}

    .text {
      padding: 0 16px;
      color: #222;
      font-weight: 600;
    }

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      color: #fff;
      background-color: ${props => props.theme.color.primaryColor};
    }
  }

  .search-detail {
    position: relative;
    transform: 50% 0;
    will-change: transform, opacity;

    .infos {
      position: absolute;
      top: 60px;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  
  .bar-enter {
    transform: scale(2.85714,1.375) translateY(58px);
    opacity: 0;
  }

  .bar-enter-active {
    transform: scale(1.0) translateY(0);
    opacity: 1;
    transition: all 250ms ease;
  }

  .bar-exit {
    opacity: 0;
  }

  .detail-exit {
    transform: scale(1.0) translateY(0);
    opacity: 1;
  }

  .detail-exit-active {
    transform: scale(0.35,0.727273) translateY(-58px);
    opacity: 0;
    transition: all 250ms ease;
  }

  .detail-enter {
    transform: scale(0.35,0.727273) translateY(-58px);
    opacity: 0;
  }

  .detail-enter-active {
    transform: scale(1.0) translateY(0);
    opacity: 1;
    transition: all 250ms ease;
  }
`