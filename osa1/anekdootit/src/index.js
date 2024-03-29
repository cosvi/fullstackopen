import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Button = ({handler, text}) => {
    return (
        <>
            <button onClick={handler}>{text}</button>
        </>
    )
}

const Leader = ({anecdotes, votes, leader}) => {
    return (
        <>
            With {votes[leader]} votes, the leader is:<br />
            {anecdotes[leader]}
        </>
    )
}

const App = ({anecdotes}) => {
    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
    const [leader, setLeader] = useState(0)

    const nextAnecdote = () => {
        const random = Math.floor(Math.random() * 6)
        setSelected(random)
    }

    const likeAnecdote = () => {
        setVotes({...votes, [selected]: votes[selected] + 1})
        if (votes[selected] + 1 > votes[leader]) {
            setLeader(selected)    
        }
    }

    return (
        <div>
            <h1>Get your anecdotes here!</h1>
            {anecdotes[selected]}<br /><br />
            This anecdote has {votes[selected]} likes so far. <br />
            <Button handler={likeAnecdote} text='Yeah, I kinda like this!' /><br /><br />
            <Button handler={nextAnecdote} text='Yo, gimme another anecdote' /><br />
            <h1>And the winner (so far) is...</h1>
            <Leader anecdotes={anecdotes} votes={votes} leader={leader} />
        </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]


ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)
