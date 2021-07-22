import { Content, Container, FooterContainerLink } from "./styled.js";

const Footer = (props) => (
  <Content>
    <Container as="div">
      <FooterContainerLink as="a" target="blank" href="https://github.com/dominikblak">
        {props.author}
      </FooterContainerLink>
    </Container>
  </Content>
);
export default Footer;
