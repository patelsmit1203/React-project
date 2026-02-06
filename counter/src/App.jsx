import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <h1>React Counter</h1>
      <div className="counter-box">
        <div className="count-display">{count}</div>
        
        <div className="buttons">
          <div className="main-btns">
            <button className="btn decrement" onClick={() => count > 0 && setCount(count - 1)}>-</button>
            <button className="btn increment" onClick={() => setCount(count + 1)}>+</button>
          </div>
          <button className="btn reset" onClick={() => setCount(0)}>RESET</button>
        </div>
      </div>
    </div>
  )
}

export default App