import { createGlobalStyle } from "styled-components";
import background from "./img/money_exchange.jpg";
export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*,
::after,
::before {
  box-sizing: inherit;
}
body {
  background: ${({ theme }) => theme.color.gradient}, url(${background}) repeat;
  background-size: cover;
  background-repeat: repeat;
  font-family: "Montserrat", sans-serif;
  color: ${({ theme }) => theme.color.white};
  max-width: 1000px;
  margin: 0 auto;
  overflow-x: auto;
  line-height: 1.5;
}
a:visited {
  color: ${({ theme }) => theme.color.mintgreen};
}
a:hover {
  color: ${({ theme }) => theme.color.blue};
}
a:active {
  color: ${({ theme }) => theme.color.red};
}
`;
