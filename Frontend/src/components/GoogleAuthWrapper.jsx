import { GoogleOAuthProvider } from '@react-oauth/google'
import React from 'react'
import Auth from '../pages/Auth'

const GoogleAuthWrapper = () => {
  return (
    <GoogleOAuthProvider clientId='insert-the-clientID'>

        <Auth/>
    </GoogleOAuthProvider>
  )
}

export default GoogleAuthWrapper