import React, { useState } from 'react'
import './content.css'

function Content() {
  const [count, setCount] = useState(0)
  return (
    <div className='counter-container'>
      <div className="circle">{count}</div>
      <div className="buttons">
        <span className="btn" onClick={() => {setCount(count + 1)}}>Increase</span>
        <span className="btn" onClick={() => {setCount(count - 1)}}>Decrease</span>
        <span className="btn" onClick={() => {setCount(0)}}>Reset</span>
        <span className="btn">Set Score</span>
      </div>
    </div>
    
  )
}

export default Content