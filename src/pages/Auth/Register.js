import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { registerAction } from '../../redux/actions/AuthActions';

import { useDispatch, useSelector } from 'react-redux';

import { NavLink } from 'react-router-dom';

const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required(),
}).required();

function Register() {
    const { register, formState: { errors }, handleSubmit } = useForm({
        resolver: yupResolver(schema)
    });

    const [isLoaded, setIsLoaded] = useState(false);

    const [error, setError] = useState(null);

    const dispatch = useDispatch();

    const selector = useSelector(state => state.authReducer);

    const onSubmit = data => {
        setIsLoaded(true);

        dispatch(registerAction(data));
    }

    useEffect(() => {
        if (selector.error) {
            setError(selector.error.code);
            setIsLoaded(false);
        }

        if (selector.registerSuccess) {
            setIsLoaded(false);
        }

        console.log(selector)
    }, [selector])

    return (
        <div className="h-screen md:flex">
            <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden">
                <div>
                    <h1 className="text-white font-bold text-4xl font-sans">GoFinance</h1>
                    <p className="text-white mt-1">The most popular peer to peer lending at SEA</p>
                    <NavLink to="/login">
                        <button type="submit" className="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2">
                            Login
                        </button>
                    </NavLink>
                </div>
                <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
            </div>
            <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
                <form className="bg-white" onSubmit={handleSubmit(onSubmit)}>
                    <h1 className="text-gray-800 font-bold text-2xl mb-1">Register your own account!</h1>
                    <p className="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>
                    <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                        </svg>

                        <input
                            className="pl-2 outline-none border-none"
                            type="email"
                            placeholder="Email Address"
                            {...register("email")}
                        />
                    </div>

                    <p className='mb-4 text-rose-400'>{errors.email ? errors.email.message : null}</p>

                    <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fillRule="evenodd"
                                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                clipRule="evenodd" />
                        </svg>

                        <input
                            className="pl-2 outline-none border-none"
                            type="password"
                            placeholder="Password"
                            {...register("password")}
                        />
                    </div>

                    <p className='mb-4 text-rose-400'>{errors.password ? errors.password.message : null}</p>

                    {!isLoaded ?
                        <button type="submit" 
                        className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">
                            Register
                        </button> :
                    "Loading..."}

                    {error ? <p className='mb-4 text-rose-400 text-center'>{error}</p> : null}
                </form>
            </div>
        </div>
    )
}

export default Register;