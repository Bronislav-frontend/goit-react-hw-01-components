import PropTypes from 'prop-types';

function TransactionItem({ id, type, amount, currency }) {
  return (
    <>
      <tr key={id}>
        <th>{type}</th>
        <th>{amount}</th>
        <th>{currency}</th>
      </tr>
    </>
  );
}

TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionItem;
