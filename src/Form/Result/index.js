import "./style.css";

export const Result = ({ result }) => (
  <p className="result">
    {result !== undefined && (
      <>
        Otrzymasz : &nbsp;
        <strong className="result result--yourcurrency">{result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;=&nbsp;</strong>
        <strong className="result result--selectedcurrency">
          {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
        </strong>
      </>
    )}
  </p>
);
