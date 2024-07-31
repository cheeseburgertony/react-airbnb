import styled from "styled-components";

export const FooterWrapper = styled.div`
  display: flex;
  margin-top: 10px;

  .info {
    display: flex;
    align-items: center;
    font-size: 17px;
    font-weight: 700;
    color: ${props => props.color};
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }

    .text {
      margin-right: 6px;
    }
  }
`