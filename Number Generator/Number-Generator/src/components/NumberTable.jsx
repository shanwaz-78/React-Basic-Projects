import './css/NumberTable.css';
import React from 'react'

function NumberTable() {
  
  return (
   <div className="container">
    <h2>Number Range Table</h2>
    <div className="input-wrapper">
      <input type="number" placeholder='Start number'/>
      <input type="number" placeholder='End number'/>
      <button>Generate Table</button>
    </div>
   </div>
  )
}

export default NumberTable
