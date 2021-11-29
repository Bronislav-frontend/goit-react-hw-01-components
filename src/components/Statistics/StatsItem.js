import PropTypes from 'prop-types';

function StatsItem({ id, label, percentage }) {
  return (
    <>
      <li key={id} className="item">
        <span className="label">{label}</span>
        <span className="percentage">{percentage}%</span>
      </li>
    </>
  );
}

StatsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatsItem;
