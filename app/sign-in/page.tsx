"use client";
import React from "react";
const SignInPage = () => {
    return (
        <section className="min-h-screen flex items-stretch text-white">
            <div
                className="hidden lg:flex w-full bg-gray-500 bg-no-repeat bg-cover relative items-center"
                style={{
                    backgroundImage: "url('/assets/sign.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",}}>
                <div className="absolute bg-black/60 inset-0 z-0"></div>
                <div className="w-full px-24 z-10">
                    <h1 className="text-5xl font-bold text-left tracking-wide">
                        Keep it special
                    </h1>
                    <p className="text-3xl my-4">
                        Capture your personal memory in a unique way, anywhere.
                    </p>
                </div>
                <div className="bottom-0 absolute p-4 text-center right-0 left-0 flex justify-center space-x-4">
                    <span>
                        <svg
                            fill="#fff"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                        >
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775..." />
                        </svg>
                    </span>
                    <span>
                        <svg
                            fill="#fff"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                        >
                            <path d="M9 8h-3v4h3v12h5v-12..." />
                        </svg>
                    </span>
                </div>
            </div>
            <div
                className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 relative"
                style={{ backgroundColor: "#161616" }}>
                <div
                    className="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=675&q=80')",}}>
                    <div className="absolute bg-black/60 inset-0 z-0"></div>
                </div>
                <div className="w-full bg-black py-6 z-20 max-w-md mx-auto">
                    <h1 className="my-6 text-3xl font-bold text-indigo-400">Create Account</h1>
                    <p className="text-gray-300 mb-4">Register to start your journey</p>
                    <form className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
                        <div className="pb-2 pt-4">
                            <input
                                type="text"
                                name="fullname"
                                placeholder="Full Name"
                                className="block w-full py-1 px-4 text-lg rounded-sm border-b-2 bg-black/50  border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
                        </div>
                        <div className="pb-2 pt-4">
                            <input
                                type="text"
                                name="ph. no."
                                placeholder="number"
                               className="block w-full py-1 px-4 text-lg rounded-sm border-b-2 bg-black/50  border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
                        </div>
                        <div className="pb-2 pt-4">
                            <input
                                type="text"
                                name="email"
                                placeholder="email"
                                className="block w-full py-1 px-4 text-lg rounded-sm border-b-2 bg-black/50  border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
                        </div><div className="pb-2 pt-4">
                            <input
                                type="password"
                                name="passsword"
                                placeholder="password"
                                 className="block w-full py-1 px-4 text-lg rounded-sm border-b-2 bg-black/50  border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
                        </div><div className="pb-2 pt-4">
                            <input
                                type="password"
                                name="passsword"
                                placeholder="confirm password"
                                className="block w-full py-1 px-4 text-lg rounded-sm border-b-2 bg-black/50  border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
                        </div>
                        <div className="flex items-center justify-between text-gray-300 text-sm mt-4">
                            <label className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    className="form-checkbox text-indigo-500 focus:ring-indigo-500"/>
                                <span>I agree to the terms & conditions</span>
                            </label>
                        </div>
                        <div className="px-4 pb-2 pt-6">
                            <button
                                type="submit"
                                className="uppercase block w-full p-4 text-lg rounded-full bg-indigo-500 hover:bg-indigo-600 focus:outline-none">
                                Register
                            </button>
                        </div>
                        <p className="text-center text-gray-400 mt-4">
                            Already have an account?{" "}
                            <a href="#" className="text-indigo-400 hover:underline">
                                Sign In
                            </a>
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
};
export default SignInPage;
