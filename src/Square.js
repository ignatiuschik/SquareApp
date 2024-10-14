import React from 'react'

const Square = ({color}) => {

  return (
    <div className='square' style={{backgroundColor:color}}>{color === "black" ? color = "white": color }</div>
  )
}

export default Square