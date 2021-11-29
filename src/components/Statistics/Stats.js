import PropTypes from 'prop-types';
import StatsItem from './StatsItem';

function Stats({ title, stats }) {
  return (
    <section className="statistics">
      <h2 className="">{title}</h2>
      <ul className="">
        {stats.map(statItem => (
          <StatsItem
            key={statItem.id}
            label={statItem.label}
            percentage={statItem.percentage}
          />
        ))}
      </ul>
    </section>
  );
}

Stats.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default Stats;
