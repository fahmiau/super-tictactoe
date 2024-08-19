import React, { useState } from 'react'
import Tictactoe from './Tictactoe'

const SuperTictactoe = ({turn, handleTurn, allowedBoard, storeWinner, tictactoes}) => {

  console.log('eachTTTRendered');
  
  return (
    <div className='super-board'>
      {
        tictactoes.map((tictactoe,index) => (
          <Tictactoe
            key={index}
            storeWinner={storeWinner}
            handleTurn={handleTurn}
            turn={turn}
            boardId={index}
            allowed={allowedBoard[index]}
          />
        ))
      }
    </div>
  )
}

export default SuperTictactoe
