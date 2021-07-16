import { ResultContent, ResultYourCurrency, ResultSelectedCurrency } from "./styled";

export const Result = ({ result }) => (
  <ResultContent>
    {result !== undefined && (
      <>
        Otrzymasz : &nbsp;
        <ResultYourCurrency as="strong">{result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;=&nbsp;</ResultYourCurrency>
        <ResultSelectedCurrency as="strong">
          {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
        </ResultSelectedCurrency>
      </>
    )}
  </ResultContent>
);
