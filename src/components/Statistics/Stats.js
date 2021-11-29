import PropTypes from 'prop-types';
import StatsItem from './StatsItem';
import s from './Stats.module.css';

function Stats({ title, stats }) {
  return (
    <section className={s.statistics}>
      <h2>{title}</h2>
      <ul className={s.statsList}>
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
