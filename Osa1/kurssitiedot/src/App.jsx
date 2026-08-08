
const Header = ({ course }) => <h1>{course}</h1>

const Content = ({ part, exercises }) => (
  <div>
    <p>{part} {exercises}</p>
  </div>
)

/*const Total = ({ parts }) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0)
*/
const Total = ({ parts }) => {
let total = 0;
parts.forEach(part => {
  total= total + part.exercises ;
})
  return <p>Number of exercises {total}</p>
}

const now = new Date()
const kello = now.toLocaleTimeString('fi-FI', { hour: '2-digit', minute: '2-digit' })
const paiva = now.toLocaleDateString('fi-FI')
const aloitus = new Date(2026, 5, 24, 11, 0)
const kulunutAikams = now - aloitus
const erotusmin = Math.floor(kulunutAikams / (1000 * 60))
const tunnit = Math.floor(erotusmin / 60)
const minuutit = erotusmin % 60
const paivat = Math.floor(tunnit / 24)
const tunnitJaljella = tunnit % 24

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    { name: 'Fundamentals of React', exercises: 10 },
    { name: 'Using props to pass data', exercises: 7 },
    { name: 'State of a component', exercises: 14 }
  ]

  return (
    <div>
      <Header course={course} />
      <Content part={parts[0].name} exercises={parts[0].exercises} />
      <Content part={parts[1].name} exercises={parts[1].exercises} />
      <Content part={parts[2].name} exercises={parts[2].exercises} />
      <Total parts={parts} />
      <h3>Nyt on {paiva} ja kello on {kello}</h3>
      <p>Aikaa on kulunut aloituksesta {paivat} päivää, {tunnitJaljella} tuntia ja {minuutit} minuuttia</p>
    </div>
  )
}

export default App
