import React, {useState} from 'react';
import ReactDOM from 'react-dom';

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
            <h1>statistics</h1>
            <p>good: {good}</p>
            <p>neutral: {neutral}</p>
            <p>bad: {bad}</p>
            <p>all: {all}</p>
            <p>average: {(good - bad) / all}</p>
            <p>positive: {good / all} %</p>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
