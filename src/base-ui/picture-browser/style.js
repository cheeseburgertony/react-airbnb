import styled from "styled-components";

export const BrowserWrapper = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  background-color: #333;

  .top {
    position: relative;
    height: 86px;

    .close-btn {
      position: absolute;
      top: 15px;
      right: 25px;
      cursor: pointer;
    }
  }

  .slider {
    flex: 1;
    position: relative;
    display: flex;
    justify-content: center;

    .control {
      position: absolute;
      z-index: 1;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      display: flex;
      justify-content: space-between;
      color: #fff;

      .btn {
        display: flex;
        align-items: center;
        height: 100%;
        width: 83px;
        cursor: pointer;
      }
    }

    .picture {
      position: relative;
      width: 100%;
      height: 100%;
      max-width: 105vh;
      overflow: hidden;

      img {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        height: 100%;
        margin: 0 auto;
        user-select: none;
      }

      .pic-enter {
        transform: translateX(${props => props.isNext ? '100%' : '-100%'});
        opacity: 0;
      }

      .pic-enter-active {
        transform: translateX(0);
        opacity: 1;
        transition: all 0.2s ease;
      }

      .pic-exit {
        opacity: 1;
      }

      .pic-exit-active {
        opacity: 0;
        transition: all 200ms ease;
      }
    }
  }

  .preview {
    display: flex;
    justify-content: center;
    margin-top: 10px;
    height: 100px;

    .info {
      position: absolute;
      bottom: 10px;
      max-width: 105vh;
      color: #fff;

      .desc {
        display: flex;
        justify-content: space-between;

        .toggle {
          cursor: pointer;
        }
      }

      .list {
        margin-top: 3px;
        height: ${props => props.showList ? '67px' : '0'};
        overflow: hidden;
        transition: height 300ms ease;

        .item {
          margin-right: 15px;
          cursor: pointer;

          img {
            height: 67.5px;
            opacity: 0.5;
          }

          &.active img{
            opacity: 1;
          }
        }
      }
    }
  }
`