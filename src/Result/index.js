import "./style.css";
export const Result = ({ result }) => (
  <p>
    {result !== undefined &&
      `
    <>
Otrzymasz : <strong className="result">
${result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;=&nbsp;
${result.targetAmount.toFixed(2)}&nbsp;${result.currency}
     </strong>
     </>
            `}
  </p>
);
