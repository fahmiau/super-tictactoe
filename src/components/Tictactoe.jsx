import React, { useEffect, useLayoutEffect, useState } from 'react'
import Square from './Square'
import {checkWinner} from './checkWinner.js'

const Tictactoe = ({boardId, turn, handleTurn, storeWinner, allowed}) => {
  const [squares,setSquares] = useState(Array(9).fill(null));
  const [win,setWin] = useState(false);
  const [winner,setWinner] = useState();
  const [classNames,setClassNames] = useState([]);

  function handleClick(i) {
    
    if (squares[i] || checkWinner(squares)) return;
    const nextSquares = squares.slice();
    nextSquares[i] = (turn) ? 'X' : 'O';
    setSquares(nextSquares);
    let tempWin = checkWinner(nextSquares);
    if (tempWin) {
      setWinner(tempWin)
      storeWinner(tempWin,boardId);
      handleTurn(i,tempWin);
      setWin(true);
    } else {
      handleTurn(i);
    }
  }

  useEffect(() => {
    console.log('fx win');
    let classNamesTemp = [];
    if (!allowed) {
      classNamesTemp = ['overlay-board'];
    } else {
      classNamesTemp = [];
    }
    if (win) {
      if (winner === 'X') {
        classNamesTemp = ['overlay-board','text-glow-red'];
        console.log("🚀 ~ Masuk sini");
      } else {
        classNamesTemp = ['overlay-board','text-glow-blue'];
        console.log("🚀 ~ Masuk sini satunya lagi");
      }
    }
    setClassNames(classNamesTemp);
  },[win, allowed]);

  console.log(boardId," Ttt is rendered",allowed);
 
  return (
    <>
      <div className={'board s'+boardId} id={boardId}>
        <div className={classNames.join(' ')}>
          {(winner) ? winner : ''}
        </div>
          {
            squares.map((square, index) => (
              <Square
              key={'square'+boardId+index} 
              squareOnClick={() => handleClick(index)} 
              squareId={index} 
              value={squares[index]}
              />
            ))
          }
      </div>
      
    </>
  )
}

export default Tictactoe

