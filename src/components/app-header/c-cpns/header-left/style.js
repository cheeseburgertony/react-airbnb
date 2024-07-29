import styled from "styled-components";

export const LeftWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  color: ${props => props.theme.color.primaryColor};

  .logo{
    margin-left: 80px;
    cursor: pointer;
  }
`