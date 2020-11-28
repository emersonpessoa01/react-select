import React from "react";
import M from "materialize-css";
import PERIODS from "./helpers/periods";

export default function App() {

 
  React.useEffect(() => {
    M.AutoInit();
  }, []);

  const handleSelectChange = (evt) => {
    const newPeriod = evt.target.value;
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

    </div>
  );
}
