import styled from "styled-components";

export const Wrapper = styled.footer`
  text-align: center;
`;
export const Container = styled(Wrapper)`
  padding: 20px;
`;
export const FooterContainerLink = styled(Wrapper)`
  text-decoration: none;
  color: ${({ theme }) => theme.color.white};
`;
