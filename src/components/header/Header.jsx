import React from 'react'
import NavBar from './NavBar'
import UserOptions from './UserOptions'

const Header = () => {
  return (
    <header className='header'>
      <NavBar/>
      <div>
              E-commerce Name
      </div>
      <UserOptions/>
    </header>
  )
}

export default Header