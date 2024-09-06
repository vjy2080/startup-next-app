'use client'
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const Signup = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        reset,
        setError
    } = useForm();
    const { push } = useRouter();

    const onSubmit = async (data) => {
        try {
            const response = await fetch('/api/addUserData', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            if (!response.ok) {
                if (response.status === 409) { // Conflict, user already exists
                    setError('isAlreadyUser', { type: "custom", message: 'User already exists!' });
                } else {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return;
            }
            // User successfully added
            reset();
            setError('userAdded', { type: "custom", message: `Hello ${data.name}, your account has been created successfully.` });
            setTimeout(() => {
                push('/login');
            }, 2000);
        } catch (error) {
            console.error('Error:', error);
        }
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="bg-grey-dark  min-h-screen flex flex-col">
                <div className="container max-w-lg mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div className="bg-teal-900 rounded-2xl px-6 py-8 my-8 shadow-md text-black w-full">
                        <h1 className="mb-8 text-3xl text-white text-center">Create an Account</h1>
                        <input
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mt-4 mb-1"
                            name="fullname"
                            placeholder="Full Name"
                            {...register("name", {
                                required: "Name is required",
                                pattern: {
                                    value: 6,
                                    message: "Name must have at least 6 characters"
                                }
                            })}
                        />
                        {errors.name && <span className="text-yellow-500">{errors.name.message}</span>}

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

                        <input
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mt-4 mb-1"
                            name="confirm_password"
                            placeholder="Confirm Password"
                            {...register("confirmPassword", {
                                validate: (value) =>
                                    value === watch("password") || "Passwords do not match"
                            })}
                        />
                        {errors.confirmPassword && <span className="text-yellow-500">{errors.confirmPassword.message}</span>}

                        <button
                            type="submit"
                            className="w-full mt-4 text-center text-xl py-3 rounded bg-yellow-300 text-teal-900 hover:bg-green-dark focus:outline-none my-1"
                        >Create Account</button>
                        {errors.isAlreadyUser && <div className="text-center mt-2"><span className="text-red-500 ">{errors.isAlreadyUser.message}</span></div>}
                        {errors.userAdded && <div className="text-center mt-2"><span className="text-red-500 ">{errors.userAdded.message}</span></div>}
                        <div className="text-white text-center mt-6">
                            <span> Already have an account?</span>
                            <button
                                onClick={() => { push('/login') }}
                                className="w-full mt-4 text-center text-xl py-3 rounded bg-green-600 text-yellow-50 hover:bg-green-dark focus:outline-none my-1"
                            >Login</button>
                        </div>


                    </div>
                </div>
            </div>
        </form>
    );
}

export default Signup;