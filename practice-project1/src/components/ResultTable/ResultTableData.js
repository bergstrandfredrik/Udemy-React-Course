const ResultTableData = (props) => {
  return (
    <tr>
      <td>{props.data.year}</td>
      <td>{props.data.yearlyInterest}</td>
      <td>{props.data.savingsEndOfYear}</td>
      <td>{props.data.yearlyContribution}</td>
      <td>{props.data.totalInvestedCapital}</td>
    </tr>
  );
};

export default ResultTableData;
