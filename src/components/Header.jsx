import React from 'react'
import NavBar from './NavBar'
import UserOptions from './UserOptions'

const Header = () => {
  return (
    <div>
      <NavBar/>
      <div>
              E-commerce Name
      </div>
      <UserOptions/>
    </div>
  )
}

export default Header