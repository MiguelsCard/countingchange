import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  let cost: number = Math.floor(Math.random() * 10001);
  let payment: number = Math.floor(Math.random() * (10001 - cost) + cost);
  useEffect(() => {
    if (cost % 100 > payment % 100) {
      payment = payment - (payment % 100);
    }
  });
  console.log(`Cost: ${cost}`);
  console.log(`payment: ${payment}`);
  const change = payment - cost;
  return (
    <div className='App'>
      <div className='header'>Welcome to this app!</div>
      <div className='body'>
        <div>This is where the math happens, Cost: {cost / 100}</div>
        <div>Payment: {payment / 100}</div>
        <div>Change: {change / 100}</div>
      </div>
    </div>
  );
}

export default App;
