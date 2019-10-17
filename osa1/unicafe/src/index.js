import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Statistic = ({text, value}) => {
    return (
        <>{text}: {value}</>
    )
}

const Statistics = ({good, neutral, bad, all}) => {
    if (all === 0) {
        return (
            <>
                <p>No feedback given</p>
            </>
        )
    }

    return (
        <>
            <p>
                <Statistic text="good" value={good} /><br />
                <Statistic text="neutral" value={neutral} /><br />
                <Statistic text="bad" value={bad} /><br />
                <Statistic text="all" value={all} /><br />
                <Statistic text="average" value={(good - bad) / all} /><br />
                <Statistic text="positive" value={100 * good / all} /> % <br />
            </p>
        </>
    )

}

const Button = ({setter, text}) => {
    return (
        <>
            <button onClick={setter}>{text}</button>
        </>
    )
}

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const all = good + neutral + bad

    const increaseGood = () => {
        setGood(good + 1)
    }

    const increaseNeutral = () => {
        setNeutral(neutral + 1)
    }

    const increaseBad = () => {
        setBad(bad + 1)
    }

    return (
        <div>
            <h1>give feedback</h1>
            <Button setter={increaseGood} text="good" />
            <Button setter={increaseNeutral} text="neutral" />
            <Button setter={increaseBad} text="bad" />
            <h1>statistics</h1>
            <Statistics good={good} neutral={neutral} bad={bad} all={all} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

