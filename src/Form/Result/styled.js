import styled from "styled-components";

export const ResultContent = styled.p`
  color: ${({ theme }) => theme.color.gradient};
  text-align: center;
  font-weight: bold;
  font-size: 1.2em;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: grid;
    grid-template-columns: auto;
    word-break: break-all;
  }
`;
export const ResultYourCurrency = styled(ResultContent)`
  color: ${({ theme }) => theme.color.green};
`;
export const ResultSelectedCurrency = styled(ResultContent)`
  color: ${({ theme }) => theme.color.red};
`;
