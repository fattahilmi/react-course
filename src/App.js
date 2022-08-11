// import state
import { useState, useEffect } from 'react'; 
import './App.css';

const Person = (props) => {
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h2>Last Name: {props.lastName}</h2>
      <h2>Age: {props.age}</h2>
    </>
  )
}

// function App() {
const App = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    alert(`You've changed the counter to ${counter}`);
  }, [counter]);
  
  return (
    <div className="App">
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>

      {/* <Person 
        name="John" 
        lastName={"Doe"} 
        age={13}/>
      <Person name={"Jane"} lastName="Marry" age={2+2} /> */}
    </div>
  );
}

export default App;
