import styled from "styled-components";

export const ItemWrapper = styled.div`
  width: ${props => props.itemWidth};
  padding: 8px;
  box-sizing: border-box;
  flex-shrink: 0;

  .slider {
    position: relative;
    cursor: pointer;

    &:hover .control {
      display: flex;
    }

    .control {
      justify-content: space-between;
      position: absolute;
      z-index: 1;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      display: none;
      color: #fff;

      .btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 83px;
        height: 100%;
        background: linear-gradient(to left,transparent 0%,rgba(0,0,0,0.25) 100%);

        &.right {
          background: linear-gradient(to right,transparent 0%,rgba(0,0,0,0.25) 100%);
        }
      }
    }

    .indicator {
      position: absolute;
      z-index: 9;
      bottom: 10px;
      left: 0;
      right: 0;
      margin: 0 auto;
      width: 30%;

      .item {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 14.29%;

        .dot {
          width: 6px;
          height: 6px;
          background-color: #fff;
          border-radius: 50%;

          &.active {
            width: 8px;
            height: 8px;
          }
        }
      }
    }
  }
  
  .inner {
    width: 100%;

    .cover {
      position: relative;
      box-sizing: border-box;
      padding: 66.66% 8px 0;
      border-radius: 3px;
      overflow: hidden;

      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .desc {
      margin: 10px 0 5px;
      font-size: 12px;
      font-weight: 700;
      color: ${props => props.verifyColor};
    }

    .name {
      font-size: 16px;
      font-weight: 700;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    .price {
      margin: 8px 0;
    }

    .bottom {
      display: flex;
      align-items: center;
      font-size: 12px;
      font-weight: 600;
      color: ${props => props.theme.text.primaryColor};

      .MuiRating-icon {
        margin-right: -2px;
      }

      .count {
        margin: 0 2px 0 4px;
      }
    }
  }
`