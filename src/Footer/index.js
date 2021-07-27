import { Wrapper, Container, FooterContainerLink } from "./styled.js";

const Footer = (props) => (
  <Wrapper>
    <Container as="div">
      <FooterContainerLink as="a" target="blank" href="https://github.com/dominikblak">
        {props.author}
      </FooterContainerLink>
    </Container>
  </Wrapper>
);
export default Footer;
