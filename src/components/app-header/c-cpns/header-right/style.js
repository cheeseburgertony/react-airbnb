import styled from "styled-components";

export const RightWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
  color: ${props => props.theme.text.primaryColor};
  font-size: 14px;
  font-weight: 600;

  .btns {
    display: flex;
    align-items: center;

    .btn {
      padding: 12px 15px;
      height: 18px;
      line-height: 18px;
      box-sizing: content-box;
      border-radius: 22px;
      cursor: pointer;

      &:hover {
        background-color: #f5f5f5;
      }
    }
  }

  .profile {
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-right: 24px;
    box-sizing: border-box;
    width: 77px;
    height: 42px;
    border-radius: 25px;
    background-color: #fff;
    border: 1px solid #ccc;
    color: ${props => props.theme.text.primaryColor};
    cursor: pointer;
    ${props => props.theme.mixin.boxShadow}

    .panel {
      position: absolute;
      top: 54px;
      right: 0;
      width: 240px;
      color: #666;
      border-radius: 10px;
      background-color: #fff;
      box-shadow: 0 0 6px rgba(0,0,0,.2);

      .top, .bottom {
        padding: 10px 0;

        .item {
          padding: 0 16px;
          height: 40px;
          line-height: 40px;
          &:hover {
            background-color: #f5f5f5;
          }
        }
      }

      .top {
        border-bottom: 1px solid #ddd;
      }
    }
  }


`