
const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}
const Content = (props) => {
  return ( <div>
    <p>{props.part} {props.exercises}</p>
  </div>)
  
}

const Total = (props) => {
  return (
    <div>
      <p> Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </div>
  )
}
const now = new Date()
const kello = now.toLocaleTimeString('fi-FI', { hour: '2-digit', minute: '2-digit' })
const paiva = now.toLocaleDateString('fi-FI')
const aloitus = new Date(2026,5,24,11,0)
const kulunutAikams = now - aloitus
const erotusmin = Math.floor(kulunutAikams / (1000 * 60))
const tunnit = Math.floor(erotusmin/60)
const minuutit = erotusmin % 60

const App = () => {
  
console.log('toimiiko ääkköset')
  return (
    <div>
      <Header course = 'Half Stack application development'/>
      
      <Content part = 'Fundamentals of React' exercises = {10} />
      <Content part = 'Using props to pass data' exercises = {7} />
      <Content part = 'State of a component' exercises = {14} />
      <Total exercises1 = {10} exercises2 = {7} exercises3 = {14}/>
      <h3>Nyt on {paiva} ja kello on {kello}</h3>
      <p>Aikaa on kulunut aloituksesta {tunnit} tuntia ja {minuutit} minuuttia</p>
    </div>
  )
}


export default App
