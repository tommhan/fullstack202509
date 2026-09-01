const Header = ({ course }) => <h1>{course}</h1>;


// Part-komponentti palauttaa yhden kurssin tiedot listaan.
const Part = ({ part }) => (
  
  <li>
    {part.name},  tehtäviä {part.exercises}
  </li>
);

// TotalExercises-komponentti laskee kaikki harjoitukset yhteen.
const TotalExercises = ({ parts }) => {
  
  const total = parts.reduce(
    (accumulator, currentValue) => accumulator + currentValue.exercises,
    0
    
  );
  console.log('reduce summa on',total)
  return <h2>Tehtäviä on yhteensä {total}</h2>;
};

// Content-komponentti,palauttaa olio partien tiedot listana
const Content = ({ parts }) => (
  <div>
    <ol>
      {parts.map(part => (
        
        <Part key={part.id} part={part} />
      )
    )
  }
    </ol>
  </div>
);
//Footer-komponentti, kertoo tietoja tekijästä 
const Footer = () => {
  console.log('footer näkyy')
   return (
  <div>
  <h3>Muista ulkoilla</h3> 
  </div>
) 
}
// Course-komponentti
const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <TotalExercises parts={course.parts} />
    </div>
  );
};
export default Course;
export { Footer };