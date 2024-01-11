import Link from 'next/link'
import React from 'react'
import "./auth.css"

const Auth = ({children}) => {
  return (
    <div className='auth'>
        <div className='auth__main'>
            <div className='auth__nav'>
                <Link href={"/pages/auth/login-page"}>Login</Link>
                <Link href={"/pages/auth/signUp-page"}>Sign Up</Link>
            </div>
            <div className='auth-boy'>
                {children}
            </div>
        </div>
    </div>
  )
}

export default Auth