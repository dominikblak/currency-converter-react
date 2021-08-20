import styled from "styled-components";

export const ParagraphContent = styled.p`
  max-width: 500px;
  margin: 0px auto;
  background: ${({ theme }) => theme.color.gradient};
  color: ${({ theme }) => theme.color.white};
  text-align: center;
  border-style: solid;
  border-width: 1px;
  padding: 5px;
  border-color: ${({ theme }) => theme.color.white};
`;
