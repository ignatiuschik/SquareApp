import React from 'react'

const Square = ({colorValue, hexValue,isDarkColor}) => {

  return (
    <div className='square' style={{backgroundColor:colorValue, color: isDarkColor?"white": "black"}}>        
        <p>{colorValue ? colorValue: "Empty Color Value"}</p>
        <p>{hexValue ? hexValue: null}</p>
    </div>
  )
}

export default Square