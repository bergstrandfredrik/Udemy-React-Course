import ResultTableData from "./ResultTableData";

import "./ResultTable.css";

const ResultTable = (props) => {
  console.log(props.data);

  let resultData =
    props.data === null ? (
      <p className="no-result">No data to show</p>
    ) : (
      <table className="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((year) => {
            return <ResultTableData data={year} />;
          })}
        </tbody>
      </table>
    );

  return resultData;
};

export default ResultTable;
