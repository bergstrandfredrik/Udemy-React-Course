const ResultTableData = (props) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <tr>
      <td>{props.data.year}</td>
      <td>{formatter.format(props.data.yearlyContribution)}</td>
      <td>{formatter.format(props.data.yearlyInterest)}</td>
      <td>{formatter.format(props.data.totalInvestedCapital)}</td>
      <td>{formatter.format(props.data.savingsEndOfYear)}</td>
    </tr>
  );
};

export default ResultTableData;
