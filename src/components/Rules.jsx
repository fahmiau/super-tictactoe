import React, { Component } from 'react'

export default class Rules extends Component {
  render() {
    return (
      <div className='rules-container'>
        <div className='rules'>
          <h1>Super Tic Tac Toe</h1>
          <p>
            If first player choose the middle one, and put X in the top left corner, the next player will be playing in top left corner tictactoe.
          </p>
          <p>
            I don't really know how to explain it, just watch this <a target='_blank' href='https://www.youtube.com/shorts/_Na3a1ZrX7c'>short</a>
          </p>
        </div>
      </div>
    )
  }
}
