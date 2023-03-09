import PropTypes from 'prop-types';
export function TableRow({ id, type, amount, currency }) {
  const getColorOfRow = () => {
    switch (type) {
      case 'invoice':
        return 'green';
      case 'payment':
        return 'red';
      case 'withdrawal':
        return 'violet';
      case 'deposit':
        return 'orange';

      default:
        return 'red';
    }
  };

  return (
    <tr style={{ backgroundColor: getColorOfRow() }}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
}
TableRow.propTypes = {
  currency: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
};
export default TableRow;
