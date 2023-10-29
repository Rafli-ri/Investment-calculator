import { useState } from "react";
import "./App.css";
import UserInput from "./components/UserInput";
import ResultTable from "./components/ResultTable";

function App() {
  const [userInput, setUserInput] = useState(null);

  const calculateHandler = (userInput) => {
    console.log(userInput);
    setUserInput(userInput);
  };

  const yearlyData = [];

  if (userInput) {
    let currentSavings = +userInput["current-savings"];
    const yearlyContribution = +userInput["yearly-saving"];
    const expectedInterest = +userInput["expected-interest"] / 100;
    const duration = +userInput["duration"];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedInterest;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  // console.log(yearlyData);
  return (
    <>
      <UserInput onCalculate={calculateHandler} />
      {!userInput && <p className="my-7 flex justify-center">not found</p>}
      {userInput && (
        <ResultTable
          data={yearlyData}
          initialInvestment={userInput["current-savings"]}
        />
      )}
    </>
  );
}

export default App;
