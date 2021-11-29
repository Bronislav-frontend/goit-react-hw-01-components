import PropTypes from 'prop-types';
import s from './StatsItem.module.css';

function StatsItem({ id, label, percentage }) {
  return (
    <>
      <li key={id} className={s.item}>
        <span>{label}</span>
        <span>{percentage}%</span>
      </li>
    </>
  );
}

StatsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatsItem;
