import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import getBaseUrl from '../utils/baseURL';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"; // Make sure the toast styles are imported

const AdminLogin = () => {
    const [message, setMessage] = useState("");
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();

    const onSubmit = async (data) => {
        console.log("Hey", data)
        try {
            const response = await axios.post(`${getBaseUrl()}/api/auth/admin`, data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const auth = response.data;

            if (auth.token) {
                localStorage.setItem('token', auth.token);
                localStorage.setItem('username', auth.user.username)
                setTimeout(() => {
                    localStorage.removeItem('token');
                    toast.error('Token has been expired! Please login again.');
                    navigate("/");
                }, 5 * 3600 * 1000);
            }

            toast.success("Admin Login successfully!");
            setTimeout(() => {
                navigate("/dashboard");
            }, 1000)
            
        } catch (error) {
            setMessage("Please provide a valid email and password");
            console.error(error);
        }
    };

    return (
        <div className='h-screen flex justify-center items-center bg-secondary font-[monospace]'>
            <div className='w-full max-w-md mx-auto bg-white shadow-xl rounded-xl p-8'>
                <h2 className='text-3xl font-semibold text-center text-gray-800 mb-6'>Admin Dashboard Login</h2>
                

                <form onSubmit={handleSubmit(onSubmit)} className='space-y-4 text-xl'>
                    <div>
                        <label className='block text-gray-700 font-medium' htmlFor="username">Username</label>
                        <input 
                            {...register("username", { required: true })} 
                            type="text" 
                            name="username" 
                            id="username" 
                            placeholder='Enter your username'
                            className='mt-1 w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400'
                        />
                    </div>
                    <div>
                        <label className='block text-gray-700 font-medium' htmlFor="password">Password</label>
                        <input 
                            {...register("password", { required: true })} 
                            type="password" 
                            name="password" 
                            id="password" 
                            placeholder='Enter your password'
                            className='mt-1 w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400'
                        />
                    </div>
                    {message && <p className='text-red-500 text-sm italic'>{message}</p>}

                    <button 
                        type="submit"
                        className='w-full bg-indigo-600 text-white font-bold py-4 rounded-md hover:bg-indigo-700 transition duration-300 ease-in-out shadow-lg'>
                        Login
                    </button>
                </form>

                <p className='mt-5 text-center text-gray-400 text-xs'>©2025 BookHorizon - codewithkara. All rights reserved.</p>
            </div>
        </div>
    );
};

export default AdminLogin;
