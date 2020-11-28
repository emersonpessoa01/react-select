import React from "react";
import M from "materialize-css";
import PERIODS from "./helpers/periods";

export default function App() {
  const [currentPeriod, setCurrentPeriod] = React.useState(PERIODS[0]);
  const [transactions, setTransactions] = React.useState([]);

  React.useEffect(() => {
    const fetchUrl = async ()=>{
      const url ="https://api-transaction-chanceller.herokuapp.com/transaction"
      const periodUrl = `${url}?period=${currentPeriod}`

      const resource = await fetch(periodUrl)
      const json = await resource.json();
      console.log(json)

      setTransactions(json)
    }
    
    fetchUrl()
  },[currentPeriod])

  React.useEffect(() => {
    M.AutoInit();
  }, []);

  const handleSelectChange=(event)=>{
    const newPeriod = event.target.value;
    setCurrentPeriod(newPeriod);
  }
  
  return (
    <div className="container">
      <h1 className="center">React Select</h1>
      <select vaue={currentPeriod} onChange={handleSelectChange}>
        {PERIODS.map((period) => {
          return (
            <option key={period} value={period}>
              {period}
            </option>
          );
        })}
      </select>
      <div>{transactions.map((id,description) =>{
        return (<p key={id}>{description}</p>)
      })}</div>
    </div>
  );
}
