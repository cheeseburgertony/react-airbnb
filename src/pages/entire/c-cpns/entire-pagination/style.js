import styled from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  justify-content: center;

  .info {
    display: flex;
    flex-direction: column;
    align-items: center;

    .MuiPaginationItem-page.Mui-selected {
      background-color: #222;
      color: #fff;

    }
    
    .MuiPaginationItem-page {
      margin: 0 9px;

      &:hover {
        text-decoration: underline;
      }
    }

    .desc {
      margin-top: 16px;
      color: #222;
    }
  }

`