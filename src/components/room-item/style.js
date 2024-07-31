import styled from "styled-components";

export const ItemWrapper = styled.div`
  width: ${props => props.itemWidth};
  padding: 8px;
  box-sizing: border-box;
  
  .inner {
    width: 100%;
    cursor: pointer;

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