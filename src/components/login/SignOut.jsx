import React from 'react'
import { useDispatch } from 'react-redux'
import { signOut } from '../../redux/features/userSlice';

const SignOut = () => {
    const dispatch = useDispatch();
  return (
    <div>
        <h1>Welcome!</h1>
        <button>Sign Out</button>
    </div>
  )
}

export default SignOut