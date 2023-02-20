import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from './navbar/NavBar'
import UserOptions from './userOptions/UserOptions'

const Header = () => {
  return (
    <header className='header'>
      <NavBar/>
      <Link className="navbar__link link" to="/">
              <h1>D-Shop, Inc.</h1>
      </Link>
      <UserOptions/>
    </header>
  )
}

export default Header