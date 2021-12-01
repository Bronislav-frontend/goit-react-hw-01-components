import PropTypes from 'prop-types';
import StatsItem from './StatisticsItem/StatisticsItem';
import s from './Statistics.module.css';

function Stats({ title, stats }) {
  return (
    <section className={s.statistics}>
      <h2>{title}</h2>
      <ul className={s.statsList}>
        {stats.map(({id, label, percentage}) => (
          <StatsItem
            key={id}
            label={label}
            percentage={percentage}
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
