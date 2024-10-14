import React from 'react'

const Input = ({ color, setColor, handleSubmit }) => {
  return (
    <form onSubmit={(e) =>(e.preventDefault())}>
        <label htmlFor="">Enter Color of Choice</label>
        <input 
            type="text"
            placeholder='Enter Color of Choice'  
            value={color}
            onChange={(e => setColor(e.target.value))}  
        />
    </form>
  )
}

export default Input