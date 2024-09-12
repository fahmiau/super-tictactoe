import { useEffect, useState } from 'react'
import './App.css'
import SuperTictactoe from './components/SuperTictactoe'
import Rules from './components/Rules'
import Mode from './components/Mode.jsx'
import {checkWinner} from './assets/checkWinner.js'
import Tictactoe from './components/Tictactoe.jsx'

function App() {
  const [xIsNext, setXisNext] = useState(true);
  const [superBoard,setSuperBoard] = useState(Array(9).fill(null));
  const [boards, setBoards] = useState(Array(9).fill().map(() => Array(9).fill(null)));
  const [allowedBoard,setAllowedBoard] = useState(Array(9).fill(true));
  const [superWinner,setSuperWinner] = useState(false);
  const [playerMode,setPlayermMode] = useState(1);
  console.log("🚀 ~ App ~ playerMode:", playerMode)

  // function resetHandle() {
    
  // }

  // const storeWinner = (winner,i) => {
  //   const nextSuperT = tictactoes.slice();
  //   nextSuperT[i] = winner;
  //   console.log("🚀 ~ storeWinner ~ nextSuperT:", nextSuperT)
  //   setTictactoes(nextSuperT);
  //   let superWinnerTemp = checkWinner(nextSuperT);
  //   if (superWinnerTemp) {
  //     setSuperWinner(checkWinner(nextSuperT))
  //   }
  // };

  function handleTurn(boardId,square,winner,boardId) {
    if (boards[boardId][square] || superBoard[boardId]) return;

    const newBoards = boards.slice().map(board => board.slice());
    newBoards[boardId][square] = (xIsNext) ? 'X' : 'O';
    setBoards(newBoards);

    //check board win
    const boardWin = checkWinner(newBoards[boardId]);
    let tempSuperBoard = superBoard.slice();
    if (boardWin) {
      tempSuperBoard[boardId] = (xIsNext) ? 'X' : 'O';
      setSuperBoard(tempSuperBoard);
    }

    //set allowed board
    let tempAllowed = [];
    if (tempSuperBoard[square]) {
      tempAllowed = tempSuperBoard.map((sb,index) => {
        return (sb) ? false : true;
      });
    } else {
      tempAllowed = tempSuperBoard.map((s,index) => {
        return (index == square) ? true : false
      })
    }
    setAllowedBoard(tempAllowed);
    setXisNext(!xIsNext);
    // setXisNext(!xIsNext);
    // let allowedTemp = [];
    // let ticactoeTemp = tictactoes.slice();
    // if (winner) {
    //   ticactoeTemp[boardId] = winner;
    // }
    // if (ticactoeTemp[i]) {
    //   allowedTemp = ticactoeTemp.map((t,index) => {
    //     return (t) ? false : true;
    //   })
    // } else {
    //   allowedTemp = ticactoeTemp.map((t,index) => {
    //     return (index == i) ? true : false;
    //   })
    // }
    // setAllowedBoard(allowedTemp);
    // console.log("🚀 ~ handleTurn ~ allowedTemp:", allowedTemp)
  }

  useEffect(() => {
    if (superWinner) {
      let h1winner = document.getElementById('winner-container');
      h1winner.style.display = 'flex'
    }
  },[superWinner])
  
  return (
    <>
    <Rules />
    <div id='winner-container' className={'winner '+ ((superWinner == 'X') ? 'text-glow-red' : 'text-glow-blue')}>
      <h1>Player {superWinner} won the game</h1>
    </div>
    <h1 className={(xIsNext) ? 'text-glow-red' : 'text-glow-blue'}>Next Player : {(xIsNext) ? 'X' : 'O'}</h1>
    <div className='game-container'>
      <div className='super-board'>
        {
          tictactoes.map((tictactoe,index) => (
            <Tictactoe
              key={index}
              storeWinner={storeWinner}
              handleTurn={handleTurn}
              turn={xIsNext}
              boardId={index}
              superT={tictactoe}
              board={boards[index]}
              allowed={allowedBoard[index]}
            />
          ))
        }
      </div>
      <Mode
        // reset={() => resetHandle}
        playerMode={playerMode}
      />
    </div>
    </>
  )
  // return (
  //   <>
  //   <Rules />
  //   <div id='winner-container' className={'winner '+ ((superWinner == 'X') ? 'text-glow-red' : 'text-glow-blue')}>
  //     <h1>Player {superWinner} won the game</h1>
  //   </div>
  //   <h1 className={(xIsNext) ? 'text-glow-red' : 'text-glow-blue'}>Next Player : {(xIsNext) ? 'X' : 'O'}</h1>
  //   <div className='game-container'>
  //     <SuperTictactoe
  //       turn={xIsNext}
  //       handleTurn={handleTurn}
  //       allowedBoard={allowedBoard}
  //       storeWinner={storeWinner}
  //       tictactoes={tictactoes}
  //       />
  //     <Mode
  //       // reset={() => resetHandle}
  //       playerMode={playerMode}
  //     />
  //   </div>
  //   </>
  // )
}

export default App
