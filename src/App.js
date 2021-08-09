import { useState } from 'react';

import Section from './components/Section/Section';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';

const App = () => {
  const [excellent, setExcellent] = useState(0);
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = options => {
    switch (options) {
      case 'excellent':
        setExcellent(state => state + 1);
        break;
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
      default:
        return;
    }
  };

  const countTotal = () => {
    return excellent + good + neutral + bad;
  };

  const countPositiveFeedbacks = () => {
    const total = countTotal();
    return total ? Math.round(((excellent + good) / total) * 100) : 0;
  };

  return (
    <>
      <h1>Feedback widget</h1>
      <Section title="Please leave your feedback">
        <FeedbackOptions
          options={['excellent', 'good', 'neutral', 'bad']}
          onLeaveFeedback={handleFeedback}
        />
      </Section>
      <Section title="Statistics">
        <Statistics
          excellent={excellent}
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotal()}
          positiveFeedbacks={countPositiveFeedbacks()}
        />
      </Section>
    </>
  );
};

export default App;
