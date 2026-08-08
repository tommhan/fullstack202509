
import { useState } from 'react'
import './assets/styles/App.css'
console.log ('App.jsx loaded, tehtävät 1.6 -1.7')
const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}
const Statstics = (props) =>{
  const {good, neutral, bad,counter} = props
  const average = (good*1 +neutral*0 + bad*(-1)) / counter
  const positive_rate = (good / counter) * 100
  if (counter === 0){
    return (
      <div>
        Arvioita ei ole annettu.
      </div>
    )
  }
 /* return (
    <div>
      <h2>Statistiikka</h2>
      <p>Hyviä arvioita (+1): {good}</p>
      <p>Neutraaleja arvioita (0): {neutral}</p>
      <p>Huonoja arvioita (-1): {bad}</p>
      <p>Arvioita yhteensä: {counter}</p>
      <p>Keskiarvo: {average.toFixed(2)}</p>
      <p>Positiivisia arvioita: {positive_rate.toFixed(2)}%</p>
    </div>
  )*/
  return (
 <div>
  <h2>Tilasto</h2>
  <table>
    <tbody>
      <StatisticLine text="Hyviä arvioita (+1)" value={good} />
      <StatisticLine text="Neutraaleja arvioita (0)" value={neutral} />
      <StatisticLine text="Huonoja arvioita (-1)" value={bad} />
      <StatisticLine text="Arvioita yhteensä" value={counter} />
      <StatisticLine text="Keskiarvo" value={average.toFixed(2)} />
      <StatisticLine text="Positiivisia arvioita" value={positive_rate.toFixed(2) + '%'} />
    </tbody>
  </table>
 </div>
  )
}

const Ohje = (props) => {
  if (props.counter === 0){ 
    return (
      <div>
        Arvioi painamalla yllä olevia painikkeita. <br />
      </div>
    )
  }
  return null
}
const Button = ({ onClick, text }) =>
 <button className="button" onClick={onClick}>{text}</button>

export default function App () {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] =useState([])
  const [counter, setCounter] = useState(0)
  
  const handleGoodClick = () => {console.log('good button clicked')
   setAll(allClicks.concat('H')) 
   setGood(good + 1)
   setCounter(counter + 1)
  }
  const handlebadClick = () => {console.log('bad button clicked') 
  setAll(allClicks.concat('P'))
  setBad(bad + 1)
  setCounter(counter + 1)
  }
   const handleNeutralClick = () => {console.log('neutral button clicked') 
  setAll(allClicks.concat('N'))
  setNeutral(neutral + 1)
  setCounter(counter + 1)
  }
  
 return (
    <div className="main-container">
      <h2>Unicafe</h2>
      <h1 className="title">Miltä ruoka maistui tänään?</h1>

      <div className="button-group">
  <div className="button-item">
    <Button onClick={handleGoodClick} text="Maukasta, herkullista" />
    <span className="counter-val">{good}</span>
  </div>

  <div className="button-item">
    <Button onClick={handleNeutralClick} text="Ei hyvää,ei pahaakaan" />
    <span className="counter-val">{neutral}</span>
  </div>

  <div className="button-item">
    <Button onClick={handlebadClick} text="Ei maistunut" />
    <span className="counter-val">{bad}</span>
  </div>
</div>

      <div className="stats">
        <p>Arvioita yhteensä: {counter}</p>
        <p>
          <span className="kaikkiArviot"> Kaikki arviot (H = hyvää, N = neutraali, P = ei maistunut):</span>
          {' '}{allClicks.join(' ')}
        </p>
        <span className="ohje">
          <Ohje counter={counter} />
        </span>
        <span className="statistics">
          <Statstics good={good} neutral={neutral} bad={bad} counter={counter} />
        </span>
      </div>
    </div>
  )
}

