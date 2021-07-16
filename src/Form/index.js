import { useState } from "react";
import { currencies } from "./currency.js";
import { Result } from "./Result";
import Clock from "./Clock";
import { FormContent, FormFieldset, FormInput, FormSpan, FormButton } from "./styled";

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
      <FormFieldset>
        <legend>Twoje dane</legend>
        <Clock />
        <p>
          <label htmlFor="amountid">
            <FormSpan> Twoja kwota w zł :</FormSpan>
            <FormInput
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
            <FormSpan> Wybierz walutę :</FormSpan>
            <FormInput
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
            </FormInput>
          </label>
        </p>
        <p>
          <FormButton>Przelicz</FormButton>
        </p>
        <Result result={result} />
      </FormFieldset>
    </FormContent>
  );
};
export default Form;
