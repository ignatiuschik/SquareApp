import colorNames from 'colornames'
import React from 'react'

const Input = ({ colorValue, setColorValue, setHexValue, isDarkColor, setIsDarkColor }) => {
  return (
    <form onSubmit={(e) =>(e.preventDefault())}>
        <label htmlFor="">Enter Color of Choice</label>
        <input 
            type="text"
            placeholder='Enter Color of Choice'  
            value={colorValue}
            onChange={(e) =>{ 
                setColorValue(e.target.value)
                setHexValue(colorNames(e.target.value))
            }}  
        />
        <button
            type='button'
            onClick={() => setIsDarkColor(!isDarkColor)}        
        >
            Toggle the Color
        </button>
    </form>
  )
}

export default Input