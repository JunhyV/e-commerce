import React from 'react'
import NavBar from './NavBar'
import UserOptions from './UserOptions'

const Header = () => {
  return (
    <header className='header'>
      <NavBar/>
      <h1 className='header__h1'>D-Shop, Inc.</h1>
      <UserOptions/>
    </header>
  )
}

export default Header