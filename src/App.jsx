import { useEffect, useState } from 'react'
import './App.css'
import SuperTictactoe from './components/SuperTictactoe'
import Rules from './components/Rules'
import {checkWinner} from './components/checkWinner.js'

function App() {
  const [xIsNext, setXisNext] = useState(true);
  const [tictactoes,setTictactoes] = useState(Array(9).fill(null));
  const [allowedBoard,setAllowedBoard] = useState(Array(9).fill(true));
  const [superWinner,setSuperWinner] = useState(false);

  const storeWinner = (winner,i) => {
    const nextSuperT = tictactoes.slice();
    nextSuperT[i] = winner;
    console.log("🚀 ~ storeWinner ~ nextSuperT:", nextSuperT)
    setTictactoes(nextSuperT);
    if (checkWinner(nextSuperT)) {
      
    }
  };

  function handleTurn(i,winner) {
    console.log('handle turn ',i,winner);
    
    setXisNext(!xIsNext);
    let allowedTemp = [];
    let ticactoeTemp = tictactoes.slice();
    if (winner) {
      ticactoeTemp[i] = winner;
    }
    if (ticactoeTemp[i]) {
      allowedTemp = ticactoeTemp.map((t,index) => {
        console.log(i, ' udah keisi');
        
        return (t) ? false : true;
      })
    } else {
      allowedTemp = ticactoeTemp.map((t,index) => {
        console.log(i, ' belum keisi');
        
        return (index == i) ? true : false;
      })
    }
    setAllowedBoard(allowedTemp);
    console.log("🚀 ~ handleTurn ~ allowedTemp:", allowedTemp)
  }
  console.log('superRendered');

  useEffect(() => {
    if (superWinner) {
      
    }
  },[superWinner])
  
  return (
    <>
    {/* <Rules /> */}
    <h1 className={(xIsNext) ? 'text-glow-red' : 'text-glow-blue'}>Next Player : {(xIsNext) ? 'X' : 'O'}</h1>
    <SuperTictactoe
      turn={xIsNext}
      handleTurn={handleTurn}
      allowedBoard={allowedBoard}
      storeWinner={storeWinner}
      tictactoes={tictactoes}
    />
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
