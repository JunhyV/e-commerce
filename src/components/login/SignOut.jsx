import React from 'react'
import { useDispatch } from 'react-redux'
import { signOut } from '../../redux/features/userSlice';

const SignOut = () => {
    const dispatch = useDispatch();
  return (
    <div>
        <h1>Welcome User!</h1>
        <button onClick={() => dispatch(signOut())}>Sign Out</button>
    </div>
  )
}

export default SignOut