import styled from "styled-components";

export const Content = styled.h1`
  margin-top: 100px;
  text-align: center;
  font-size: 3.5em;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-top: 50px;
  }
`;
