import { LocalDate } from "../Clock/styled";
import { ResultContent, ResultYourCurrency, ResultSelectedCurrency } from "./styled";

export const Result = ({ result, date }) => (
  <ResultContent>
    {result !== undefined && (
      <>
        Otrzymasz : &nbsp;
        <ResultYourCurrency as="strong">{result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;=&nbsp;</ResultYourCurrency>
        <ResultSelectedCurrency as="strong">
          {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
        </ResultSelectedCurrency>
        <LocalDate onlyDate>Kurs aktualny na dzień : {date}</LocalDate>
      </>
    )}
  </ResultContent>
);
