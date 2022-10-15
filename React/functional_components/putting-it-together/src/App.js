import './App.css';
import Person from './components/Person'

function App() {
  return (
    <div className="App">
      <div className='align'>
        <Person 
        lastName={"Doe"}
        firstName={"Jane"} 
        age={45} 
        hair={"Black"}
        />
        <Person 
        lastName={"Smith"}
        firstName={"John"} 
        age={88} 
        hair={"brown"}
        />
        <Person 
        lastName={"Fillmore"}
        firstName={"Milliard"} 
        age={50} 
        hair={"Brown"}
        />
        <Person 
        lastName={"Smith"}
        firstName={"Maria"} 
        age={62} 
        hair={"Brown"}
        />
      </div>
    </div>
  );
}

export default App;
