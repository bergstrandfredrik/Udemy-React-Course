import React, { useState } from "react";

import Header from "./components/UI/Header/Header";
import SavingsForm from "./components/SavingsForm/SavingsForm";
import ResultTable from "./components/ResultTable/ResultTable";

import logo from "./assets/investment-calculator-logo.png";

function App() {
  const [yearlyData, setYearyData] = useState(null);

  const calculateHandler = (userInput) => {
    console.log(userInput["current-savings"]);

    const yearlyDataDto = []; // per-year results

    let currentSavings = +userInput["current-savings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyDataDto.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
        totalInvestedCapital: yearlyInterest + currentSavings,
      });
    }

    setYearyData(yearlyDataDto);
    // do something with yearlyData ...
  };

  return (
    <div>
      <Header logo={logo} />

      <SavingsForm calculateHandler={calculateHandler} />
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      <ResultTable data={yearlyData} />
    </div>
  );
}

export default App;
