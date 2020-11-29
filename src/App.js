import React from "react";
import M from "materialize-css";
import PERIODS from "./helpers/periods";

export default function App() {
  const [currentPeriod, setCurrentPeriod] = React.useState(PERIODS[0]);
  const [transactions, setTransactions] = React.useState([]);

  React.useEffect(() => {
    const fetchUrl = async () => {
      const url =
        "https://api-transaction-chanceller.herokuapp.com/transaction";
      const periodUrl = `${url}?period=${currentPeriod}`;

      const res = await fetch(periodUrl);
      const json = await res.json();
      console.log(json);
      // setTransactions(json.descriptions); //erro induzido pelo professor
      setTransactions(json); 
    };

    fetchUrl();
  }, [currentPeriod]);

  React.useEffect(() => {
    M.AutoInit();
  }, []);

  const handleSelectChange = (event) => {
    const newPeriod = event.target.value;
    setCurrentPeriod(newPeriod);
  };

  return (
    <div className="container">
      <h1 className="center">React Select</h1>
      <select value={currentPeriod} onChange={handleSelectChange}>
        {PERIODS.map((period) => {
          return <option key={period}>{period}</option>;
        })}
      </select>
      <div>
        {transactions.map(({_id, description}) => (
          <p key={_id}>{description}</p>
        ))}
      </div>
    </div>
  );
}
