import { useRef, useState } from "react";
import { currencies } from "./currency.js";
import { Result } from "./Result";
import Clock from "./Clock";
import { FormContent, Wrapper, Input, Span, Button, Loading, Failure } from "./styled";
import { useRatesData } from "./useRatesData";

export const Form = () => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("EUR");
  const [result, setResult] = useState();

  const inputRef = useRef(null);

  const dataFromApi = useRatesData;

  const status = dataFromApi.status;
  const rates = dataFromApi.rates;
  const date = dataFromApi.date;

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
    setAmount(amountTrimed);
    calculateResault(currency, amount);
    inputRef.current.focus();
  };

  return (
    <FormContent onSubmit={onSubmit}>
      <Wrapper>
        <legend>Twoje dane</legend>
        <Clock />
        <p>
          <label htmlFor="amountid">
            <Span> Twoja kwota w zł :</Span>
            <Input
              type="number"
              name="amount"
              min="0"
              id="amountid"
              required
              step="0.01"
              placeholder="Podaj kwotę w zł"
              value={amount}
              onChange={({ target }) => setAmount(target.value)}
            />
          </label>
        </p>
        <p>
          <label htmlFor="currency">
            <Span> Wybierz walutę :</Span>
            <Input
              as="select"
              name="currency_choice"
              id="currency"
              value={currency}
              onChange={({ target }) => setCurrency(target.value)}
            >
              {currencies.map((currency) => (
                <option key={currency.short} value={currency.short}>
                  {currency.name}
                </option>
              ))}
            </Input>
          </label>
        </p>
        <p>
          <Button>Przelicz</Button>
        </p>
        <Result result={result} />
      </Wrapper>
    </FormContent>
  );
};
export default Form;
