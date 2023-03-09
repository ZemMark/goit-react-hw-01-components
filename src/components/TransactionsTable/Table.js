import TableRow from './TableRow';
import { Table } from './Table.styled';
export function TransactionsTable({ data }) {
  console.log(data);
  return (
    <Table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ id, type, currency, amount }) => (
          <TableRow
            key={id}
            id={id}
            currency={currency}
            type={type}
            amount={amount}
          ></TableRow>
        ))}
      </tbody>
    </Table>
  );
}

export default TransactionsTable;
