import "./style.css";
const Form = () => (
  <form className="container__form">
    <fieldset class="container_fieldset">
      <legend>Twoje dane</legend>
      <p>
        <label for="amountid">
          <span class="container__label"> Twoja kwota w zł :</span>
          <input
            class="container__input js-input"
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
          <span class="container__label"> Wybierz walutę :</span>
          <select name="currency_choice" id="currency" class="container__input js-container">
            <option value="EUR" class="container__euro" selected>
              EUR
            </option>
            <option value="USD" class="container__usd">
              USD
            </option>
            <option value="GBP" class="container__gbp">
              GBP
            </option>
          </select>
        </label>
      </p>
      <p>
        <button class="container__btn">Przelicz</button>
      </p>
      <p>
        Otrzymasz : <strong class="container__value js-value"></strong>
      </p>
    </fieldset>
  </form>
);
export default Form;
