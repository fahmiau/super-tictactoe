import React from 'react'
import player1 from '../assets/user-profile.svg'
import player2 from '../assets/users-profile.svg'
import resetIcon from '../assets/reload-svgrepo-com.svg'

const Mode = ({playerMode, resetHandle}) => {
  return (
    <div className='modes-container'>
      <div className='mode-container'>
        <p>{playerMode} Player Mode</p>
        <img className='mode-icon' src={(playerMode === 1) ? player1 : player2} alt="" />
      </div>
      <hr />
      <div className='mode-container'>
        <p>Reset</p>
        <img className='mode-icon' src={resetIcon} alt="" />
      </div>
    </div>
  )
}

export default Mode