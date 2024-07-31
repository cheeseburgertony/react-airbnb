import styled from "styled-components";

export const ViewWrapper = styled.div`
  position: relative;
  padding: 8px 0;
  
  .scroll {
    overflow: hidden;

    .scroll-content{
      display: flex;
      transition: transform 0.25s ease;
    }
  }

  .control {
    position: absolute;
    z-index: 9;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 28px;
    height: 28px;
    box-sizing: border-box;
    text-align: center;
    border-radius: 50%;
    border: 2px solid #fff;
    background-color: #fff;
    box-shadow: 0px 1px 1px 1px rgba(0,0,0,.14);
    cursor: pointer;

    ${props => props.theme.mixin.boxShadow}

    &.left {
      left: 0;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    &.right {
      right: 0;
      top: 50%;
      transform: translate(50%, -50%);
    }
}
`