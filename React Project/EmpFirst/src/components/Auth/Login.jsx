import React, { useState } from 'react';

const Login = ({handleLogin}) => {

    

    const [email, setemail] = useState('')

    const [password, setpassword] = useState('')

    const submitHandler = (e) => {

        e.preventDefault();
        
       

        handleLogin(email,password)

        setemail('')
        setpassword('')

    }

    return (
        <div className='flex w-screen h-screen items-center justify-center'>

            <div className='border-2 rounded-xl border-emerald-600 p-20'>

                <form onSubmit={submitHandler} className='flex flex-col items-center justify-center'>

                    <input
                        value={email}

                        onChange={(e) => {

                            setemail(e.target.value)


                        }} className='mb-6 outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-400 ' type="Email" placeholder='Enter your email' />

                    <input

                        value={password}

                        onChange={(e) => {
                            setpassword(e.target.value)
                        }}

                        className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-400 ' type="Password" placeholder='Enter password' />

                    <button className='mt-7 text-white border-none outline-none hover:bg-emerald-500 font-semibold bg-emerald-600 text-lg py-2 px-8 w-full rounded-full placeholder:text-white'>Log in</button>

                </form>
            </div>

        </div>
    )
}

export default Login
