import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Statistics = ({good, neutral, bad, all}) => {
    if (all === 0) {
        return (
            <>
                <h1>statistics</h1>
                <p>No feedback given</p>
            </>
        )
    }

    return (
        <>
            <h1>statistics</h1>
            <p>
                good: {good}<br />
                neutral: {neutral}<br />
                bad: {bad}<br />
                all: {all}<br />
                average: {(good - bad) / all}<br />
                positive: {good / all} %
            </p>
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
            <button onClick={increaseGood}>good</button>
            <button onClick={increaseNeutral}>neutral</button>
            <button onClick={increaseBad}>bad</button>
            <Statistics good={good} neutral={neutral} bad={bad} all={all} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

