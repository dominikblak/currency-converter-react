import "./style.css";

const Footer = (props) => (
  <footer className="footer">
    <div className="footer__container">
      <a className=" footer__container footer__container--link" target="blank" href="https://github.com/dominikblak">
        {props.author}
      </a>
    </div>
  </footer>
);
export default Footer;
