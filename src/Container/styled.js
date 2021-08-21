import styled from "styled-components";

export const Wrapper = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  color: ${({ theme }) => theme.color.white};
  font-family: "Titillium Web", sans-serif;
  padding: 20px;
  border-radius: 20%;
`;
