import { useState } from "react";
import "./style.css";
import { curriences } from "../currency.js";
import { Result } from "../Result";

export const Form = ({ calculateResault, result }) => {
  const [currency, setCurrency] = useState(curriences[0].short);
  const [amount, setAmount] = useState("");
  const onSubmit = (event) => {
    event.preventDefault();
    calculateResault(currency, amount);
  };
  return (
    <form className="form" onSubmit={onSubmit}>
      <fieldset className="form__fieldset">
        <legend>Twoje dane</legend>
        <p>
          <label for="amountid">
            <span className="form__label"> Twoja kwota w zł :</span>
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
          <label for="currency">
            <span className="form__label"> Wybierz walutę :</span>
            <select
              name="currency_choice"
              id="currency"
              className="form__input"
              value={currency}
              onChange={({ target }) => setCurrency(target.value)}
            >
              {curriences.map((currency) => (
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
      </fieldset>
    </form>
  );
};
export default Form;
