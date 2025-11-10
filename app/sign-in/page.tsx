"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { User, Lock, Mail } from "lucide-react";
const SignInPage: React.FC = () => {
  const [isRegister, setIsRegister] = useState(false);
  return (
    <section className="flex min-h-screen items-center justify-center bg-[#25252b]">
      <div
        className={`relative w-[750px] h-[450px] overflow-hidden border-2 border-pink-500 shadow-[0_0_25px_#ff2770] transition-all duration-1000 ease-in-out ${
          isRegister ? "active" : ""
        }`}
      >
        <motion.div
          animate={
            isRegister
              ? { rotate: 0, skewY: 0 }
              : { rotate: 10, skewY: 40 }
          }
          transition={{ duration: 1.5, delay: isRegister ? 0.5 : 1.6 }}
          className="absolute right-0 top-[-5px] h-[600px] w-[850px] origin-bottom-right bg-gradient-to-tr from-[#25252b] to-pink-500"
        />
        <motion.div
          animate={
            isRegister
              ? { rotate: -11, skewY: -41 }
              : { rotate: 0, skewY: 0 }
          }
          transition={{ duration: 1.5, delay: isRegister ? 1.2 : 0.5 }}
          className="absolute left-[250px] top-full h-[700px] w-[850px] origin-bottom-left border-t-4 border-pink-500 bg-[#25252b]"
        />
        <div
          className={`absolute top-0 flex h-full w-1/2 flex-col justify-center px-10 transition-all duration-700 ${
            isRegister ? "-translate-x-full opacity-0" : "translate-x-0 opacity-100"
          }`}
        >
          <h2 className="mb-6 text-center text-3xl font-bold text-white">Login</h2>
          <form className="space-y-6">
            <div className="relative">
              <input
                type="text"
                required
                className="peer w-full border-b-2 border-white bg-transparent py-2 pr-6 text-white outline-none transition-colors focus:border-pink-500"
              />
              <label className="absolute left-0 top-1/2 -translate-y-1/2 text-white transition-all peer-focus:-top-1 peer-focus:text-pink-500 peer-valid:-top-1 peer-valid:text-pink-500">
                Username
              </label>
              <User className="absolute right-0 top-1/2 h-5 w-5 -translate-y-1/2 text-white peer-focus:text-pink-500" />
            </div>
            <div className="relative">
              <input
                type="password"
                required
                className="peer w-full border-b-2 border-white bg-transparent py-2 pr-6 text-white outline-none transition-colors focus:border-pink-500"
              />
              <label className="absolute left-0 top-1/2 -translate-y-1/2 text-white transition-all peer-focus:-top-1 peer-focus:text-pink-500 peer-valid:-top-1 peer-valid:text-pink-500">
                Password
              </label>
              <Lock className="absolute right-0 top-1/2 h-5 w-5 -translate-y-1/2 text-white peer-focus:text-pink-500" />
            </div>
            <button
              type="submit"
              className="relative w-full overflow-hidden rounded-full border-2 border-pink-500 py-2 font-semibold text-white transition-all duration-300 hover:before:top-0 before:absolute before:left-0 before:top-[-100%] before:h-[300%] before:w-full before:bg-gradient-to-b before:from-[#25252b] before:via-pink-500 before:to-[#25252b] before:transition-all before:duration-500 before:-z-10 hover:before:top-0"
            >
              Login
            </button>
            <p className="text-center text-sm text-gray-300">
              Don't have an account?{" "}
              <button
                type="button"
                onClick={() => setIsRegister(true)}
                className="font-semibold text-pink-500 hover:underline"
              >
                Sign Up
              </button>
            </p>
          </form>
        </div>
        <div
          className={`absolute right-0 top-0 flex h-full w-1/2 flex-col justify-center px-10 text-right transition-all duration-700 ${
            isRegister ? "translate-x-full opacity-0" : "translate-x-0 opacity-100"
          }`}
        >
          <h2 className="text-4xl font-bold uppercase text-white">Welcome Back!</h2>
          <p className="mt-4 text-sm text-gray-300">
            We’re happy to have you again. If you need anything, we’re here to help.
          </p>
        </div>
        <div
          className={`absolute top-0 right-0 flex h-full w-1/2 flex-col justify-center px-12 transition-all duration-700 ${
            isRegister ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          }`}
        >
          <h2 className="mb-6 text-center text-3xl font-bold text-white">Register</h2>
          <form className="space-y-6">
            <div className="relative">
              <input
                type="text"
                required
                className="peer w-full border-b-2 border-white bg-transparent py-2 pr-6 text-white outline-none transition-colors focus:border-pink-500"
              />
              <label className="absolute left-0 top-1/2 -translate-y-1/2 text-white transition-all peer-focus:-top-1 peer-focus:text-pink-500 peer-valid:-top-1 peer-valid:text-pink-500">
                Username
              </label>
              <User className="absolute right-0 top-1/2 h-5 w-5 -translate-y-1/2 text-white peer-focus:text-pink-500" />
            </div>
            <div className="relative">
              <input
                type="email"
                required
                className="peer w-full border-b-2 border-white bg-transparent py-2 pr-6 text-white outline-none transition-colors focus:border-pink-500"
              />
              <label className="absolute left-0 top-1/2 -translate-y-1/2 text-white transition-all peer-focus:-top-1 peer-focus:text-pink-500 peer-valid:-top-1 peer-valid:text-pink-500">
                Email
              </label>
              <Mail className="absolute right-0 top-1/2 h-5 w-5 -translate-y-1/2 text-white peer-focus:text-pink-500" />
            </div>
            <div className="relative">
              <input
                type="password"
                required
                className="peer w-full border-b-2 border-white bg-transparent py-2 pr-6 text-white outline-none transition-colors focus:border-pink-500"
              />
              <label className="absolute left-0 top-1/2 -translate-y-1/2 text-white transition-all peer-focus:-top-1 peer-focus:text-pink-500 peer-valid:-top-1 peer-valid:text-pink-500">
                Password
              </label>
              <Lock className="absolute right-0 top-1/2 h-5 w-5 -translate-y-1/2 text-white peer-focus:text-pink-500" />
            </div>
            <button
              type="submit"
              className="relative w-full overflow-hidden rounded-full border-2 border-pink-500 py-2 font-semibold text-white transition-all duration-300 hover:before:top-0 before:absolute before:left-0 before:top-[-100%] before:h-[300%] before:w-full before:bg-gradient-to-b before:from-[#25252b] before:via-pink-500 before:to-[#25252b] before:transition-all before:duration-500 before:-z-10 hover:before:top-0">
              Register
            </button>
            <p className="text-center text-sm text-gray-300">
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => setIsRegister(false)}
                className="font-semibold text-pink-500 hover:underline">
                Sign In
              </button>
            </p>
          </form>
        </div>
        <div
          className={`absolute left-0 top-0 flex h-full w-1/2 flex-col justify-center px-10 text-left transition-all duration-700 ${
            isRegister ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          }`} >
          <h2 className="text-4xl font-bold uppercase text-white">Welcome!</h2>
          <p className="mt-4 text-sm text-gray-300">
            We’re delighted to have you here. If you need any help, feel free to reach out.
          </p>
        </div>
      </div>
    </section>
  );
};
export default SignInPage;
