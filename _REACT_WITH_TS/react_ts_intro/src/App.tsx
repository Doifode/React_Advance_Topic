import React from 'react';
import './App.css';
import { Message } from './Components/Message';
import { TableArray } from './Components/TableArray';


const list = [
  {
    name: 'yash',
    email: 'yash@gmail.com'
  },
  {
    name: 'yash',
    email: 'yash@gmail.com'
  },
  {
    name: 'yash',
    email: 'yash@gmail.com'
  },
  {
    name: 'yash',
    email: 'yash@gmail.com'
  },
  {
    name: 'yash',
    email: 'yash@gmail.com'
  },
  {
    name: 'yash',
    email: 'yash@gmail.com'
  },
]

const App: React.FC = () => {
  return (
    <div className="App">
      <Message name='yash' isLoagedIn={true} />
      <TableArray list={list} />
    </div>
  );
}

export default App;
