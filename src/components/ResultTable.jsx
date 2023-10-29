import React from "react";

const formatter = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
});

const ResultTable = (props) => {
  return (
    <div className="relative overflow-x-auto w-full max-w-lg bg-white px-2 py-2 mx-auto">
      <table className="w-full text-base text-left text-gray-500  dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 p-4 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((yearData) => (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.savingsEndOfYear)}</td>
              <td>{formatter.format(yearData.yearlyInterest)}</td>
              <td>
                {formatter.format(
                  yearData.savingsEndOfYear -
                    props.initialInvestment -
                    yearData.yearlyContribution * yearData.year
                )}
              </td>
              <td>
                {formatter.format(
                  props.initialInvestment +
                    yearData.yearlyContribution * yearData.year
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResultTable;
