import Container from "./Container";
import Header from "./Header";
import Form from "./Form";
import Footer from "./Footer";
import { useState } from "react";
import { curriences } from "./currency.js";

function App() {
  const [result, setResult] = useState();
  const calculateResault = (currency, amount) => {
    const rate = curriences.find(({ short }) => short === currency).rate;

    setResult({
      sourceAmount: +amount,
      targetAmount: amount / rate,
      currency,
    });
  };
  return (
    <Container>
      <Header title="Kalkulator walut"></Header>
      <Form result={result} calculateResault={calculateResault} />
      <Footer author="Dominik Blak 2021"></Footer>
    </Container>
  );
}

export default App;
