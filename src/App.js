import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Display = ({ category, count }) => (
  <p>{category}: {count}</p>
)

const Statistics = ({ good, neutral, bad }) => {
  const sum = good + neutral + bad;
  const positivePercentage = good / sum * 100;
  if (sum === 0) {
    return (
      <div>
        <h2>Statistics</h2>
        <p>No Feedback given</p>
      </div>)
  }
  return (
    <div>
      <h2>Statistics</h2>
      <Display category="good" count={good} />
      <Display category="neutral" count={neutral} />
      <Display category="bad" count={bad} />
      <Display category="all" count={sum} />
      <Display category="average" count={good - bad} />
      <Display category="positive" count={!isFinite(positivePercentage) ? "-" : positivePercentage + "%"} />
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App