import styled from "styled-components";

export const IndicatorWrapper = styled.div`
  overflow: hidden;

  .i-content {
    display: flex;
    position: relative;
    transition: transform 0.2s ease;

    > * {
      flex-shrink: 0;
    }
  }
`