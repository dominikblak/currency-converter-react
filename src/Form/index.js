import { useState } from "react";
import { currencies } from "./currency.js";
import { Result } from "./Result";
import Clock from "./Clock";
import { FormContent, Fieldset, Input, Span, Button } from "./styled";

export const Form = () => {
  const [currency, setCurrency] = useState(currencies[0].short);

  const [result, setResult] = useState();
  const calculateResault = (currency, amount) => {
    const rate = currencies.find(({ short }) => short === currency).rate;

    setResult({
      sourceAmount: +amount,
      targetAmount: amount / rate,
      currency,
    });
  };

  const [amount, setAmount] = useState("");
  const onSubmit = (event) => {
    event.preventDefault();
    calculateResault(currency, amount);
  };

  return (
    <FormContent onSubmit={onSubmit}>
      <Fieldset>
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
      </Fieldset>
    </FormContent>
  );
};
export default Form;
