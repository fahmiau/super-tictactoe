import { useEffect, useState } from 'react'
import './App.css'
import SuperTictactoe from './components/SuperTictactoe'
import Rules from './components/Rules'
import Mode from './components/Mode.jsx'
import {checkWinner} from './components/checkWinner.js'

function App() {
  const [xIsNext, setXisNext] = useState(true);
  const [tictactoes,setTictactoes] = useState(Array(9).fill(null));
  const [allowedBoard,setAllowedBoard] = useState(Array(9).fill(true));
  const [superWinner,setSuperWinner] = useState(false);
  const [playerMode,setPlayermMode] = useState(1);
  console.log("🚀 ~ App ~ playerMode:", playerMode)

  // function resetHandle() {
    
  // }

  const storeWinner = (winner,i) => {
    const nextSuperT = tictactoes.slice();
    nextSuperT[i] = winner;
    console.log("🚀 ~ storeWinner ~ nextSuperT:", nextSuperT)
    setTictactoes(nextSuperT);
    let superWinnerTemp = checkWinner(nextSuperT);
    if (superWinnerTemp) {
      setSuperWinner(checkWinner(nextSuperT))
    }
  };

  function handleTurn(i,winner,boardId) {
    
    setXisNext(!xIsNext);
    let allowedTemp = [];
    let ticactoeTemp = tictactoes.slice();
    if (winner) {
      ticactoeTemp[boardId] = winner;
    }
    if (ticactoeTemp[i]) {
      allowedTemp = ticactoeTemp.map((t,index) => {
        return (t) ? false : true;
      })
    } else {
      allowedTemp = ticactoeTemp.map((t,index) => {
        return (index == i) ? true : false;
      })
    }
    setAllowedBoard(allowedTemp);
    console.log("🚀 ~ handleTurn ~ allowedTemp:", allowedTemp)
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
      <SuperTictactoe
        turn={xIsNext}
        handleTurn={handleTurn}
        allowedBoard={allowedBoard}
        storeWinner={storeWinner}
        tictactoes={tictactoes}
        />
      <Mode
        // reset={() => resetHandle}
        playerMode={playerMode}
      />
    </div>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
