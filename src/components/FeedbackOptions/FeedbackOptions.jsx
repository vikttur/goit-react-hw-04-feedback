import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  const feedbacks = Object.keys(options);

  return (
    <ul className={css.list}>
      {feedbacks.map(feedback => {
        return (
          <li key={feedback} className={css.item}>
            <button
              type="button"
              className={css.buttonFeedback}
              onClick={() => onLeaveFeedback(feedback)}
            >
              {feedback}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
