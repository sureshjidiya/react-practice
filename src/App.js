import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let name = 'suresh';
  function Clickhere(){
    name = 'suresh jidiya';
    alert(name);
  }
  function Incomponent(){
    // without jsx 
    return React.createElement('p',null,'Hello there');
  }
  return (
    <div className='App'>
      <h1>This is functional component</h1>
      <p>{name}</p>
      {/* not use directly function & use like arrow function */} 
      {/* <button onClick={Clickhere()}>Click here</button> 
      -----------------------------------------------------
      */}
      <button onClick={Clickhere}>Click here</button>
      {/* <button onClick={()=>Clickhere()}>Click here</button> */}
      {/* <button onClick={()=>alert('hello alert...')}>Click here</button> */}
      <Incomponent />
    </div>
  );
}

export default App;
