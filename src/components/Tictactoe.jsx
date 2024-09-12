import React, { useEffect, useLayoutEffect, useState } from 'react'
import Square from './Square'
import {checkWinner} from '../assets/checkWinner.js'

const Tictactoe = ({boardId, turn, handleTurn, storeWinner, allowed, board}) => {
  // const [squares,setSquares] = useState(Array(9).fill(null));
  const [win,setWin] = useState(false);
  const [winner,setWinner] = useState();
  const [classNames,setClassNames] = useState([]);

  // function handleClick(i) {
    
  //   if (squares[i] || checkWinner(squares)) return;
  //   const nextSquares = squares.slice();
  //   nextSquares[i] = (turn) ? 'X' : 'O';
  //   // setSquares(nextSquares);
  //   let tempWin = checkWinner(nextSquares);
  //   if (tempWin) {
  //     setWinner(tempWin)
  //     storeWinner(tempWin,boardId);
  //     handleTurn(i,tempWin,boardId);
  //     setWin(true);
  //   } else {
  //     handleTurn(i);
  //   }
  // }

  useEffect(() => {
    let classNamesTemp = [];
    if (!allowed) {
      classNamesTemp = ['overlay-board'];
    } else {
      classNamesTemp = [];
    }
    if (win) {
      if (winner === 'X') {
        classNamesTemp = ['overlay-board','text-glow-red'];
      } else {
        classNamesTemp = ['overlay-board','text-glow-blue'];
      }
    }
    setClassNames(classNamesTemp);
    console.log("🚀 ~ Tictactoe ~ win:", win)
    console.log("🚀 ~ Tictactoe ~ allowed:", allowed)
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
              squareOnClick={() => handleTurn(boardId,index)} 
              squareId={index} 
              value={squares[index]}
              />
            ))
          }
      </div>
      
    </>
  )
  // return (
  //   <>
  //     <div className={'board s'+boardId} id={boardId}>
  //       <div className={classNames.join(' ')}>
  //         {(winner) ? winner : ''}
  //       </div>
  //         {
  //           squares.map((square, index) => (
  //             <Square
  //             key={'square'+boardId+index} 
  //             squareOnClick={() => handleClick(index)} 
  //             squareId={index} 
  //             value={squares[index]}
  //             />
  //           ))
  //         }
  //     </div>
      
  //   </>
  // )
}

export default Tictactoe
