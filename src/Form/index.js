import { useRef, useState } from "react";
import { Result } from "./Result";
import Clock from "./Clock";
import { FormContent, Wrapper, Input, Span, Button, Loading, Failure } from "./styled";
import { useRatesData } from "./useRatesData";
import { Paragraph } from "../../src/Paragraph";

export const Form = () => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("EUR");
  const [result, setResult] = useState();

  const inputRef = useRef(null);
  const clearAmount = () => {
    setAmount([]);
  };

  const { status, rates, date } = useRatesData();

  const calculateResault = (currency, amount) => {
    const rate = rates[currency];

    setResult({
      sourceAmount: +amount,
      targetAmount: amount * rate,
      currency,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const amountTrimed = amount.trim();
    if (!amountTrimed) {
      return;
    }
    clearAmount(amountTrimed);
    calculateResault(currency, amount);
    inputRef.current.focus();
  };

  return (
    <FormContent onSubmit={onSubmit}>
      {status === "loading" ? (
        <>
          <Loading />
          <Paragraph text="Sekunda... ładuje kursy z Europejskiego Banku Centralnego." />
        </>
      ) : status === "error" ? (
        <>
          <Failure />
          <Paragraph text=" Coś poszło nie tak - sprawdź czy masz połączenie z internetem." />
        </>
      ) : (
        <>
          <Wrapper>
            <legend>Uzupełnij dane</legend>
            <Clock />
            <p>
              <label htmlFor="amountid">
                <Span> Twoja kwota w zł :</Span>
                <Input
                  ref={inputRef}
                  type="number"
                  name="amount"
                  min="0"
                  id="amountid"
                  required
                  step="0.01"
                  placeholder="0,00"
                  value={amount}
                  onChange={({ target }) => setAmount(target.value)}
                />
              </label>
            </p>
            <p>
              <label htmlFor="currency">
                <Span> Wybierz walutę : </Span>
                <Input
                  as="select"
                  name="currency_choice"
                  id="currency"
                  value={currency}
                  required
                  onChange={({ target }) => setCurrency(target.value)}
                >
                  {Object.keys(rates).map((currency) => (
                    <option key={currency} value={currency}>
                      {currency}
                    </option>
                  ))}
                </Input>
              </label>
            </p>
            <p>
              <Button>Przelicz</Button>
            </p>
            <Result result={result} date={date} />
          </Wrapper>
        </>
      )}
    </FormContent>
  );
};
export default Form;
