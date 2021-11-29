import PropTypes from 'prop-types';
import s from './TransactionItem.module.css';

function TransactionItem({ id, type, amount, currency }) {
  return (
    <>
      <tr key={id} className={s.tr}>
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
