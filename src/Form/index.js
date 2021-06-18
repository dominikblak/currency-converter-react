import { useState } from "react";
import "./style.css";
import currency from "../currency.js";

const Form = (props) => {
  const [amount, setAmount] = useState();
  const onInputChange = ({ target }) => setAmount(target.value);
  const onFormSubmit = (event) => {
    event.preventDefault();
    return console.log(`Wybrano  ${amount} zł na ${shortCurrency}`);
  };
  const [shortCurrency, setCurrency] = useState();
  const onSelectChange = (event) => setCurrency(event.target.value);

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <fieldset className="form__fieldset">
        <legend>Twoje dane</legend>
        <p>
          <label for="amountid">
            <span className="form__label"> Twoja kwota w zł :</span>
            <input
              value={amount}
              onChange={onInputChange}
              className="form__input"
              type="number"
              name="amount"
              min="0"
              step="any"
              id="amountid"
              required
            />
          </label>
        </p>
        <p>
          <label for="currency">
            <span className="form__label"> Wybierz walutę :</span>
            <select
              value={shortCurrency}
              onChange={onSelectChange}
              name="currency_choice"
              id="currency"
              className="form__input"
            >
              {currency.map((money) => (
                <option key={money.id}>{money.name}</option>
              ))}
            </select>
          </label>
        </p>
        <p>
          <button className="form__button">Przelicz</button>
        </p>
        <p>
          Otrzymasz : <strong className="form__value "></strong>
        </p>
      </fieldset>
    </form>
  );
};
export default Form;
