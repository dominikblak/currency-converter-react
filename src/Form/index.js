import "./style.css";
const Form = () => (
  <form className="container__form">
    <fieldset className="container_fieldset">
      <legend>Twoje dane</legend>
      <p>
        <label for="amountid">
          <span className="container__label"> Twoja kwota w zł :</span>
          <input
            className="container__input js-input"
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
          <span className="container__label"> Wybierz walutę :</span>
          <select name="currency_choice" id="currency" className="container__input js-container">
            <option value="EUR" className="container__euro" selected>
              EUR
            </option>
            <option value="USD" className="container__usd">
              USD
            </option>
            <option value="GBP" className="container__gbp">
              GBP
            </option>
          </select>
        </label>
      </p>
      <p>
        <button className="container__btn">Przelicz</button>
      </p>
      <p>
        Otrzymasz : <strong className="container__value js-value"></strong>
      </p>
    </fieldset>
  </form>
);
export default Form;
