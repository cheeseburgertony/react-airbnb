import styled from "styled-components";

export const RightWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
  color: ${props => props.theme.text.primaryColor};
  font-size: 14px;
  font-weight: 600;

  .btns{
    display: flex;
    align-items: center;

    .btn{
      padding: 12px 15px;
      height: 18px;
      line-height: 18px;
      box-sizing: content-box;
      border-radius: 22px;
      cursor: pointer;

      &:hover{
        background-color: #f5f5f5;
      }
    }
  }

  .profile{
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
  }


`