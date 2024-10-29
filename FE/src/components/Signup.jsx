import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "./Spinner";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [spin, setSpin] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const { registerUser, signInWithGoogle } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Register user
  const onSubmit = async (data) => {
    setSpin(true);
    try {
      await registerUser(data.email, data.password);
      toast.success("User registered successfully!");
      setError(""); // Clear any previous error
      navigate("/");
    } catch (error) {
      toast.error("Registration failed! Try Again.");
      setError("Please provide a valid email and password");
    } finally {
      setSpin(false); // Stop spinner after registration
    }
  };

  const handleEyeToggle = (e) => {
    e.preventDefault();
    setShowPass((prev) => !prev);
  };

  const handleGoogleSignIn = async () => {
    setSpin(true);
    try {
      await signInWithGoogle();
      toast.success("User registered successfully!");
      setError(""); // Clear any previous error
      navigate("/");
    } catch (error) {
      toast.error("Registration failed! Try Again.");
      setError("Google Sign-in failed! Try again.");
      console.error(error);
    } finally {
      setSpin(false); // Stop spinner after registration
    }
  };

  return (
    <div className="h-[calc(100vh-120px)] mt-20 flex justify-center items-center">
      <div className="w-full max-w-sm mx-auto bg-[#FAFDFF] shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-3xl font-semibold mb-10 text-center">
          Signup Yourself
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-5">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              {...register("email", { required: "Email is required" })}
              type="email"
              id="email"
              placeholder="Email Address"
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="mb-5 relative">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              {...register("password", { required: "Password is required" })}
              type={showPass ? "text" : "password"}
              id="password"
              placeholder="Password"
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow"
            />
            <button onClick={handleEyeToggle} className="absolute right-4 top-9">
              {showPass ? <FaRegEye className="w-5 h-5" /> : <FaRegEyeSlash className="w-5 h-5" />}
            </button>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {error && <p className="text-red-500 mb-2 text-sm">{error}</p>}

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-primary hover:bg-blue-700 text-white font-bold px-8 py-2 rounded focus:outline-none w-full text-center flex items-center justify-center"
            >
              <span className="text-center">
                {spin ? <Spinner /> : "Signup"}
              </span>
            </button>
          </div>
        </form>

        <p className="align-baseline text-center font-medium mt-4 text-base">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:text-blue-700">
            Login
          </Link>
        </p>

        {/* Google sign-in */}
        <div className="mt-4">
          <button
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
          >
            <FcGoogle className="mr-2" />
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
