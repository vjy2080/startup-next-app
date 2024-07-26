'use client'
import React from 'react'
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useAuth } from '@/context/AuthContext';

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        setError
    } = useForm();
    const { push } = useRouter();
    const { login } = useAuth();
    const onSubmit = async (data) => {
        try {
            let response = await fetch('http://localhost:5000/users');
            let users = await response.json();
            const isAlreadyUser = users.some(item => item.email === data.email);
            const confirmPassword = users.some(item => item.password === data.password);

            if (isAlreadyUser && confirmPassword) {
                setError('isAlreadyUser', { type: "custom", message: 'Login successfully.' });
                login();
                setTimeout(() => {
                    push('/');
                    reset();
                }, 3000);
            } else {
                setError('loginFailed', { type: "custom", message: 'Login failed try again...' });
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="bg-grey-dark  min-h-screen flex flex-col">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div className="bg-teal-900 rounded-2xl px-6 py-8 my-8 shadow-md text-black w-full">
                        <h1 className="mb-8 text-3xl text-white text-center">Login</h1>
                        <input
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mt-4 mb-1"
                            name="email"
                            placeholder="Email"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Invalid email address"
                                }
                            })}
                        />
                        {errors.email && <span className="text-yellow-500">{errors.email.message}</span>}

                        <input
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mt-4 mb-1"
                            name="password"
                            placeholder="Password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: "Password must have at least 6 characters"
                                }
                            })}
                        />
                        {errors.password && <span className="text-yellow-500">{errors.password.message}</span>}
                        <button
                            type="submit"
                            className="w-full mt-4 text-center text-xl py-3 rounded bg-green-600 text-yellow-50 hover:bg-green-dark focus:outline-none my-1"
                        >Login</button>
                        {errors.isAlreadyUser && <div className="text-center mt-2"><span className="text-green-400 ">{errors.isAlreadyUser.message}</span></div>}
                        {errors.loginFailed && <div className="text-center mt-2"><span className="text-red-500 ">{errors.loginFailed.message}</span></div>}
                        <div className="text-white text-center mt-6">
                            <span> Don't have an account?</span>
                            <button
                                onClick={() => { push('/signup') }}
                                className="w-full mt-4 text-center text-xl py-3 rounded bg-yellow-300 text-teal-900 hover:bg-green-dark focus:outline-none my-1"
                            >Create Account</button>
                        </div>


                    </div>
                </div>
            </div>
        </form>
    )
}

export default Login