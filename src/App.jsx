import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Square from './components/Square'
import Tictactoe from './components/Tictactoe'
import './App.css'
import SuperTictactoe from './components/SuperTictactoe'

function App() {
  const [xIsNext, setXisNext] = useState(true);
  function handleTurn(boardId, winner) {
    setXisNext(!xIsNext);
    console.log('handleTurn run')
  }


  return (
    <>
    <h1 className={(xIsNext) ? 'text-glow-red' : 'text-glow-blue'}>Next Player : {(xIsNext) ? 'X' : 'O'}</h1>
    <SuperTictactoe
      turn={xIsNext}
      handleTurn={handleTurn}
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
