import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Statistic = ({text, value}) => {
    return (
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>
    )
}

const Statistics = ({good, neutral, bad, all, average, positive}) => {
    if (all === 0) {
        return (
            <>
                <p>No feedback given</p>
            </>
        )
    }

    return (
        <>
            <table>
                <tbody>
                <Statistic text="good" value={good} />
                <Statistic text="neutral" value={neutral} />
                <Statistic text="bad" value={bad} />
                <Statistic text="all" value={all} />
                <Statistic text="average" value={average} />
                <Statistic text="positive" value={positive} />
                </tbody>
            </table>
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
    const average = (good-bad) / all
    const positive = (100 * good / all) + '%'

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
            <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

