// index.js

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.message}</button>
  );
};

const Input = (props) => {
  return (
    <input placeholder={props.placeholder} value={props.value} onChange={event => props.onChange(event.target.value)}></input>
  );
};

const Application = () => {

  const [name, setName] = useState('');

  const reset = () => {
    console.log("reset");
    setName('');
  };

  return (
    <main>
      <Input placeholder={"Type your name"} value={name} onChange={setName}></Input>
      <Button message="Reset" onClick={reset}/>
      {name ? <h1>Hello {name}</h1> : null}
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));