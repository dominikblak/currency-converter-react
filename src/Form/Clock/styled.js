import styled from "styled-components";

export const LocalDate = styled.p`
  font-family: monospace;
  text-align: right;
  padding: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    text-align: center;
  }
`;
