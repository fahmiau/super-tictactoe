import React, { useEffect, useLayoutEffect, useState } from 'react'
import Square from './Square'

const Tictactoe = ({boardId, turn, handleTurn, storeWinner}) => {
  const [squares,setSquares] = useState(Array(9).fill(null));
  const [win,setWin] = useState(false)

  function handleClick(i) {
    
    if (squares[i] || checkWinner(squares)) return;
    const nextSquares = squares.slice();
    nextSquares[i] = (turn) ? 'X' : 'O';
    handleTurn();
    setSquares(nextSquares);
  }

  const classNames = ['overlay-board'];
  const winner = checkWinner(squares);
  useLayoutEffect(() => {
    console.log("🚀 ~ useLayoutEffect ~ squares:", squares)
    console.log("🚀 ~ useEffect ~ winner:", winner)
    if (winner) {
      console.log("🚀 ~ useLayoutEffect ~ winner:", winner)
      
      storeWinner(winner,boardId);
      if (winner) {
        classNames.push('text-glow-red');
      } else {
        classNames.push('text-glow-blue');
      }
      setWin(true);
    }
  },[squares])


  return (
    <>
      <div className={'board s'+boardId}>
        <div className={(win) ? classNames.join(' ') : ''}>
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

  
function checkWinner(squares) {
  const winLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8]
  ];

  for (let i = 0; i < winLines.length; i++) {
    const [a, b, c] = winLines[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
    
  }

  return false;
}
