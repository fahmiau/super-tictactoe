import React from 'react'

const Rules = (() => {
  function closeRules(e) {
    let link = document.getElementById('linkyt');
    let rules = document.getElementById('rules-container');
    if (e.target != link) {
      rules.style.display = 'none';
    }
  }
  return (
    <div id='rules-container' className='rules-container' onClick={closeRules}>
      <div className='rules'>
        <h1>Super Tic Tac Toe</h1>
        <p> 
          NOT BUILT FOR SMALL SCREEN !!!
        </p>
        <p>
          If first player choose the middle one, and put X in the top left corner, the next player will be playing in top left corner tictactoe.
        </p>
        <p>
          I don't really know how to explain it, just watch this <a id='linkyt' target='_blank' href='https://www.youtube.com/shorts/_Na3a1ZrX7c'>short</a>
        </p>
        <p>
          Click anywhere to close this
        </p>
      </div>
    </div>
  )
})

export default Rules
