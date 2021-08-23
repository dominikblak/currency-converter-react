import styled, { css } from "styled-components";

export const LocalDate = styled.p`
  font-family: monospace;
  text-align: center;
  padding: 10px;
  ${({ onlyDate }) =>
    onlyDate &&
    css`
      font-weight: normal;
      font-size: 13px;
      word-break: break-word;
    `}
`;
