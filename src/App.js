import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
//import Button from './components/Button'
import Image from './components/Images'


function App() {
/*   const [count, setCount] = useState(0)
  const incrementCount = increment => {
    setCount(count + increment)
  }
  return (
    <div className="App">
      <Button increment={1} onClickFunction={incrementCount} />
      <Button increment={10} onClickFunction={incrementCount} />
      <Button increment={100} onClickFunction={incrementCount} />
      <Button increment={1000} onClickFunction={incrementCount} />
      <br />
      <span>{count}</span>
    </div>
  ); */
  return (
    <div className="App">
      <Image />

    </div>

  )
}

export default App;
