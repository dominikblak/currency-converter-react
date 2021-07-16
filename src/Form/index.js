import { useState } from "react";
import "./style.css";
import { currencies } from "./currency.js";
import { Result } from "./Result";
import Clock from "./Clock";
import { FormContent, FormFieldset, FormSpan } from "./styled";

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
            <input
              className="form__input"
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
            <select
              name="currency_choice"
              id="currency"
              className="form__input"
              value={currency}
              onChange={({ target }) => setCurrency(target.value)}
            >
              {currencies.map((currency) => (
                <option key={currency.short} value={currency.short}>
                  {currency.name}
                </option>
              ))}
            </select>
          </label>
        </p>
        <p>
          <button className="form__button">Przelicz</button>
        </p>
        <Result result={result} />
      </FormFieldset>
    </FormContent>
  );
};
export default Form;
