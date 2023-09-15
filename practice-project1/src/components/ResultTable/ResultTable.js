import ResultTableData from "./ResultTableData";

import styles from "./ResultTable.module.css";

const ResultTable = (props) => {
  let resultData =
    props.data === null || props.data.length == 0 ? (
      <p className={styles["no-result"]}>No data to show</p>
    ) : (
      <table className={styles.result}>
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
            return <ResultTableData key={year.year} data={year} />;
          })}
        </tbody>
      </table>
    );

  return resultData;
};

export default ResultTable;
