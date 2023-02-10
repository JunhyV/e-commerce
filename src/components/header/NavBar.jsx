import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='navbar'>
      <Link className='navbar__link' to='/'>Home</Link>
      <Link className='navbar__link' to='/hats'>Hats</Link>
      <Link className='navbar__link' to='/jackets'>Jackets</Link>
      <Link className='navbar__link' to='/mens'>Mens</Link>
      <Link className='navbar__link' to='/sneakers'>Sneakers</Link>
      <Link className='navbar__link' to='/womens'>Womens</Link>
    </div>
  )
}

export default NavBar