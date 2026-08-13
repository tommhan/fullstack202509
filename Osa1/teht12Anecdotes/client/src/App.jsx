import { useState } from 'react'
import './App.css'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const satunnaisluku = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const min = 0
  const max = anecdotes.length - 1
  const [selected, setSelected] = useState(0)
  console.log('selected', selected,"min", min, "max", max)
  const handleClick = () => {
    const next = satunnaisluku(min, max)
    console.log('nappia painettu', next)
    setSelected(next)
  }

  return (
  <div>
    <h1>Hello World! and others anecdotes!</h1>

    <div className="Anectodes">
     <Button handleClick={handleClick} text="Click to next anecdote" />
      <p>{anecdotes[selected]}</p>
    </div>
    </div>
  )
}

export default App