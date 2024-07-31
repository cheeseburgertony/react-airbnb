import styled from "styled-components"

export const TabsWrapper = styled.div`
  display: flex;

  .item {
    box-sizing: border-box;
    flex-basis: 120px;
    flex-shrink: 0;
    white-space: nowrap;
    margin-right: 16px;
    padding: 14px 16px;
    text-align: center;
    font-size: 17px;
    border: 0.5px solid #d8d8d8;
    border-radius: 3px;
    cursor: pointer;
    ${props => props.theme.mixin.boxShadow}

    &.active {
      color: #fff;
      background-color: ${props => props.theme.color.secondaryColor};
    }
  }
`