import { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import ForgotPassword from './ForgotPassword';

const SignUpModal = ({ isOpen, onClose }) => {
    const navigate = useNavigate();
    const { createUser, updateUserProfile, emailVerification } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
        createUser(data.signUpEmail, data.signUpPassword)
            .then(result => {
                console.log(result);
                updateUserProfile(data.signUpName, data.signUpPhoto)
                    .then(() => {
                        const saveUser = { name: data.signUpName, email: data.signUpEmail, photoURL: data.signUpPhoto };
                        console.log(saveUser)
                        fetch('https://swapno-designer-and-consultant-server.vercel.app/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    emailVerification()
                                    Swal.fire(
                                        'Success',
                                        'Account has been created successfully',
                                        'success'
                                    )
                                    navigate("/");
                                }
                            })
                    })
                    .catch(error => console.log(error))
            })
            .catch(error => {
                Swal.fire(
                    'Error',
                    `${error.message}`,
                    'error'
                )
            })
        onClose();
    };

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center ${isOpen ? 'block' : 'hidden'
                }`}
        >
            <div className="bg-base-100 p-8 rounded shadow-md w-96 relative">
                <h2 className="text-xl font-semibold text-slate-700 mb-4 text-center">Sign Up</h2>
                <button
                    onClick={onClose}
                    className="absolute top-0 right-5 text-slate-500 text-2xl"
                >
                    X
                </button>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label htmlFor="signUpName" className="block text-sm font-medium text-slate-700">
                            Name
                        </label>
                        <input
                            type="text"
                            id="signUpName"
                            placeholder="Your Name"
                            className={`mt-1 px-3 py-2 block w-full rounded-md border ${errors.signUpName ? 'border-red-500' : 'border-gray-300'
                                } focus:ring-blue-500 focus:border-blue-500`}
                            {...register('signUpName', {
                                required: 'Name is required',
                                maxLength: {
                                    value: 120,
                                    message: 'Name cannot exceed 120 characters',
                                },
                            })}
                        />
                        {errors.signUpName && (
                            <p className="mt-1 text-xs text-red-500">{errors.signUpName.message}</p>
                        )}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="signUpEmail" className="block text-sm font-medium text-slate-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="signUpEmail"
                            placeholder="Your Email"
                            className={`mt-1 px-3 py-2 block w-full rounded-md border ${errors.signUpEmail ? 'border-red-500' : 'border-gray-300'
                                } focus:ring-blue-500 focus:border-blue-500`}
                            {...register('signUpEmail', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: 'Invalid email address',
                                },
                            })}
                        />
                        {errors.signUpEmail && (
                            <p className="mt-1 text-xs text-red-500">{errors.signUpEmail.message}</p>
                        )}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="signUpPassword" className="block text-sm font-medium text-slate-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="signUpPassword"
                            placeholder="Your Password"
                            className={`mt-1 px-3 py-2 block w-full rounded-md border ${errors.signUpPassword ? 'border-red-500' : 'border-gray-300'
                                } focus:ring-blue-500 focus:border-blue-500`}
                            {...register('signUpPassword', {
                                required: 'Password is required',
                                minLength: {
                                    value: 6,
                                    message: 'Password must be at least 6 characters long',
                                },
                                pattern: {
                                    value: /^(?=.*\d)(?=.*[A-Z])(?=.*\W).*$/,
                                    message: 'Password must include at least 1 digit, 1 special character, and 1 capital letter',
                                },
                            })}
                        />
                        {errors.signUpPassword && (
                            <p className="mt-1 text-xs text-red-500">{errors.signUpPassword.message}</p>
                        )}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="signUpPhoto" className="block text-sm font-medium text-slate-700">
                            Photo URL
                        </label>
                        <input
                            type="text"
                            id="signUpPhoto"
                            placeholder="Your Photo URL"
                            className={`mt-1 px-3 py-2 block w-full rounded-md border ${errors.signUpPhoto ? 'border-red-500' : 'border-gray-300'
                                } focus:ring-blue-500 focus:border-blue-500`}
                            {...register('signUpPhoto', {
                                required: 'Photo URL is required',
                                pattern: {
                                    value: /^https:\/\/.*$/,
                                    message: 'Photo URL must start with https://',
                                },
                            })}
                        />
                        {errors.signUpPhoto && (
                            <p className="mt-1 text-xs text-red-500">{errors.signUpPhoto.message}</p>
                        )}
                    </div>
                    <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600">
                        Sign Up
                    </button>
                </form>

            </div>
        </div>
    );
};

const Login = () => {
    const { signIn } = useAuth();
    const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const openSignUpModal = () => {
        setIsSignUpModalOpen(true);
    };

    const closeSignUpModal = () => {
        setIsSignUpModalOpen(false);
    };

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        signIn(data.email, data.password)
            .then(() => {
                Swal.fire(
                    'Success',
                    'Login successful',
                    'success'
                )
                navigate(from, { replace: true });
            })
            .catch(error => {
                Swal.fire(
                    'Error',
                    `${error.message}`,
                    'error'
                )
            })
    };

    const [isForgotPasswordModalOpen, setIsForgotPasswordModalOpen] = useState(false);

    const openForgotPasswordModal = () => {
        setIsForgotPasswordModalOpen(true);
    };

    const closeForgotPasswordModal = () => {
        setIsForgotPasswordModalOpen(false);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-96">
                <h2 className="text-xl font-semibold text-slate-700 mb-4 text-center">Login</h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Your Email"
                            className={`mt-1 px-3 py-2 block w-full rounded-md border ${errors.email ? 'border-red-500' : 'border-gray-300'
                                } focus:ring-blue-500 focus:border-blue-500`}
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: 'Invalid email address',
                                },
                            })}
                        />
                        {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
                    </div>
                    <div className="mb-4 relative">
                        <label htmlFor="password" className="block text-sm font-medium text-slate-700">
                            Password
                        </label>
                        <input
                            type={show ? "text" : "password"}
                            id="password"
                            placeholder="Your Password"
                            className={`mt-1 px-3 py-2 block w-full rounded-md border ${errors.password ? 'border-red-500' : 'border-gray-300'
                                } focus:ring-blue-500 focus:border-blue-500`}
                            {...register('password', {
                                required: 'Password is required'
                            })}
                        />
                        <small onClick={() => setShow(!show)} className="absolute right-2 top-9 hover:cursor-pointer">{show ? <AiOutlineEye className='text-xl' /> : <AiOutlineEyeInvisible className='text-xl' />}</small>
                        {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password.message}</p>}
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                    >
                        Login
                    </button>
                    <button
                        type="button"
                        className="text-sm text-blue-500 flex justify-center mt-2 hover:underline hover:cursor-pointer"
                        onClick={openForgotPasswordModal}
                    >Forgotten Password?</button>
                </form>
                <ForgotPassword isOpen={isForgotPasswordModalOpen} onClose={closeForgotPasswordModal} />
                <button
                    type="button"
                    onClick={openSignUpModal}
                    className="w-full mt-4 bg-green-500 text-white rounded p-2 hover:bg-green-600"
                >
                    Sign Up
                </button>
            </div>
            <SignUpModal isOpen={isSignUpModalOpen} onClose={closeSignUpModal} />
        </div>
    );
};

export default Login;


