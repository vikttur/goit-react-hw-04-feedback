import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  const statistics = Object.entries({
    good,
    neutral,
    bad,
    total,
    positivePercentage,
  });

  return (
    <ul className={css.list}>
      {statistics.map(stat => {
        return (
          <li key={stat[0]} className={css.item}>
            <p className={css.label}>
              {stat[0].replace('positivePercentage', 'positive feedback')}:
            </p>
            <p className={css.quantity}>{stat[1]}</p>
          </li>
        );
      })}
    </ul>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
