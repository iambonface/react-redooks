import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';

function App(props) {
  const people = useSelector(state => state.peopleReducer.people)
  console.log(people)
  return (
    <div className="App">
      <h1>People</h1>
      <ul>
        {people.map(person =>
          <li key={person.name}>{person.name}</li>)}
      </ul>


    </div>
  );
}

export default App;
