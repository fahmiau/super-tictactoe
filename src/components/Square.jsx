import React from 'react'
// import './index.css'

const Square = ({squareId, value, squareOnClick}) => {
  
  return (
    <button className={'square s'+squareId} onClick={squareOnClick} >{value}</button>
  )
}

export default Square