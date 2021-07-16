import "./style.css";
import { FooterContent, FooterContainer, FooterContainerLink } from "./styled.js";

const Footer = (props) => (
  <FooterContent>
    <FooterContainer as="div">
      <FooterContainerLink as="a" target="blank" href="https://github.com/dominikblak">
        {props.author}
      </FooterContainerLink>
    </FooterContainer>
  </FooterContent>
);
export default Footer;
