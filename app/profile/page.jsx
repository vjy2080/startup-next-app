'use client'
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

const Profile = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        setError,
        setValue
    } = useForm();

    const [loading, setLoading] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    useEffect(() => {
        const fetchCurrentUser = async () => {
            const currentUserId = localStorage.getItem("next-login-id");
            try {
                const response = await fetch(`http://localhost:5000/users/${currentUserId}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const currentUser = await response.json();
                reset(currentUser);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching current user:', error);
                setLoading(false);
            }
        };

        fetchCurrentUser();
    }, [reset]);

    const onSubmit = async (data) => {
        const currentUserId = localStorage.getItem("next-login-id");
        try {
            const response = await fetch(`http://localhost:5000/users/${currentUserId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const updatedUser = await response.json();
            reset(updatedUser);
            setError('userUpdated', { type: "custom", message: `Hello ${updatedUser.name}, your profile has been updated successfully.` });

            console.log('User updated:', updatedUser);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="bg-grey-dark min-h-screen flex flex-col">
                <div className="container max-w-lg mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div className="bg-teal-900 rounded-2xl px-6 py-8 my-8 shadow-md text-black w-full">
                        <h1 className="mb-8 text-3xl text-white text-center">Edit Profile</h1>
                        <input
                            type="hidden"
                            {...register("id")}
                        />
                        <label htmlFor="email" className='text-emerald-50'>Email</label>
                        <input
                            disabled={true}
                            type="text"
                            className="block border border-grey-light w-full p-3 mb-4 mt-2 rounded"
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
                        <label htmlFor="fullname" className='text-emerald-50'>Full Name</label>

                        <input
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded  mb-4 mt-2"
                            name="fullname"
                            placeholder="Full Name"
                            {...register("name", {
                                required: "Name is required",
                                minLength: {
                                    value: 6,
                                    message: "Name must have at least 6 characters"
                                }
                            })}
                        />
                        {errors.name && <span className="text-yellow-500">{errors.name.message}</span>}



                        <div className="relative w-full">
                            <label htmlFor="password" className='text-emerald-50'>Password</label>
                            <input
                                type={showPassword ? "text" : "password"}
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
                            <div
                                className="absolute inset-y-10 right-0 pr-3 pt-6 flex items-center cursor-pointer"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? (
                                    <EyeSlashIcon className="h-5 w-5 text-gray-500" />
                                ) : (
                                    <EyeIcon className="h-5 w-5 text-gray-500" />
                                )}
                            </div>
                        </div>
                        {errors.password && <span className="text-yellow-500">{errors.password.message}</span>}

                        <button
                            type="submit"
                            className="w-full mt-4 text-center text-xl py-3 rounded bg-emerald-200 text-teal-900 hover:bg-green-dark focus:outline-none my-1"
                        >Update</button>
                        {errors.userUpdated && <p className="text-yellow-500 text-center mt-5">{errors.userUpdated.message}</p>}
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Profile;
