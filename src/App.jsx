import { useState } from 'react';
import Section from './components/Section/Section';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Notification from './components/Notification/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = {
    good,
    neutral,
    bad,
  };

  const onLeaveFeedback = option => {
    const optionValue = options[option] + 1;

    switch (option) {
      case 'good':
        setGood(optionValue);
        break;
      case 'neutral':
        setNeutral(optionValue);
        break;
      case 'bad':
        setBad(optionValue);
        break;
      default:
    }
  };

  const countTotalFeedback = () =>
    Object.values(options).reduce((acc, value) => acc + value, 0);

  const countPositiveFeedbackPercentage = () =>
    Number.parseInt((good / countTotalFeedback()) * 100) + '%';

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
}
