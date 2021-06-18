import "./style.css";
const Form = () => (
  <form className="form">
    <fieldset className="form__fieldset">
      <legend>Twoje dane</legend>
      <p>
        <label for="amountid">
          <span className="form__label"> Twoja kwota w zł :</span>
          <input className="form__input" type="number" name="amount" min="0" step="any" id="amountid" required />
        </label>
      </p>
      <p>
        <label for="currency">
          <span className="form__label"> Wybierz walutę :</span>
          <select name="currency_choice" id="currency" className="form__input">
            <option value="EUR" className="form__euro" selected>
              EUR
            </option>
            <option value="USD" className="form__usd">
              USD
            </option>
            <option value="GBP" className="form__gbp">
              GBP
            </option>
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
export default Form;
