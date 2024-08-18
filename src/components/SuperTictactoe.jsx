import React, { useState } from 'react'
import Tictactoe from './Tictactoe'

const SuperTictactoe = ({turn, handleTurn}) => {
  const [tictactoes,setTictactoes] = useState(Array(9).fill(null));
  console.log("🚀 ~ SuperTictactoe ~ tictactoes:", tictactoes)
  
  const storeWinner = (winner,i) => {
    console.log('masooks');
    const nextSuperT = tictactoes.slice();
    console.log("🚀 ~ storeWinner ~ nextSuperT:", nextSuperT)
    nextSuperT[i] = winner;
    
    setTictactoes(nextSuperT);
  };

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
          />
        ))
      }
    </div>
  )
}

export default SuperTictactoe
