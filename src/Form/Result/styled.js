import styled from "styled-components";

export const ResultContent = styled.p`
  color: white;
  text-align: center;
  font-weight: bold;
  font-size: 1.2em;
  @media (max-width: 767px) {
    display: grid;
    grid-template-columns: auto;
    word-break: break-all;
  }
`;
export const ResultYourCurrency = styled(ResultContent)`
  color: green;
`;
export const ResultSelectedCurrency = styled(ResultContent)`
  color: red;
`;
