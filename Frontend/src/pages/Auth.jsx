import { useGoogleLogin } from '@react-oauth/google';
import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { googleAuth } from '../lib/api.js';
const Auth = () => {
    const responseGoogle = async (result)=>{
        try {
            const code = result.code;
            if(code){
                const result  = await googleAuth(code);
                console.log(result)
                // const {email,name,image} = result;
                // console.log(email,name,image);
            }
            
        } catch (error) {
           console.log("Error on Login", error.response?.data?.message || error.message);
        }
    }

    const googleLogin = useGoogleLogin({
        onSuccess:responseGoogle,
        onError: responseGoogle,
        flow:"auth-code"
    })
  return (
    <div className='w-full h-screen flex items-center justify-center '>
        <div className='p-3 m-3'>
            <button className='flex px-4 py-3 items-center justify-center rounded-md cursor-pointer bg-black/20 text-white'
            onClick={googleLogin}
            >
                  <span className='mx-2'><FcGoogle size={25}/></span>
                  <span>Continue with Google </span>
            </button>
        </div>
    </div>
  )
}

export default Auth