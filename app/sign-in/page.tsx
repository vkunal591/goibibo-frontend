"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { login, registerUser } from "@/features/auth/authSlice";

const loginSchema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

const registerSchema = yup.object({
  name: yup.string().required("Full name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

type LoginData = yup.InferType<typeof loginSchema>;
type RegisterData = yup.InferType<typeof registerSchema>;

const SignInPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { loading } = useAppSelector((s) => s.auth);

  const loginForm = useForm<LoginData>({ resolver: yupResolver(loginSchema) });
  const registerForm = useForm<RegisterData>({
    resolver: yupResolver(registerSchema),
  });

  const handleLogin = async (data: LoginData) => {
    try {
      await dispatch(login(data)).unwrap();
      router.push("/");
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  const handleRegister = async (data: RegisterData) => {
    try {
      await dispatch(registerUser(data)).unwrap();
      router.push("/");
    } catch (err) {
      console.error("Registration failed:", err);
    }
  };

  const variants = {
    hiddenRight: { x: 150, opacity: 0 },
    hiddenLeft: { x: -150, opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exitLeft: { x: -150, opacity: 0 },
    exitRight: { x: 150, opacity: 0 },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-between overflow-hidden text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/sign.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#701932cc] to-black"></div>

      <motion.div
        initial={{ x: -150, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 10 }}
        className="relative z-10 max-w-2xl pl-20"
      >
        <h1 className="text-6xl font-bold mb-6 leading-tight text-[#FFDDEE]">
          Book Your Journey with Ease
        </h1>
        <p className="text-xl font-light text-gray-200">
          “Fly high, stress-free — because every great story begins with a smooth takeoff.”
        </p>
      </motion.div>

      <div className="relative z-10 flex justify-end w-full pr-16">
        <div className="w-full max-w-sm">
          <AnimatePresence mode="wait">
            {isLogin ? (
              <motion.div
                key="login"
                variants={variants}
                initial="hiddenLeft"
                animate="visible"
                exit="exitRight"
                transition={{ type: "tween", duration: 0.8 }}
                className="p-8 bg-black/50 backdrop-blur-sm rounded-xl shadow-xl"
              >
                <h2 className="text-3xl font-bold mb-2 text-center">
                  Welcome Back
                </h2>
                <p className="text-gray-300 text-sm text-center mb-6">
                  Login to continue your flight booking experience.
                </p>
                <form
                  className="space-y-4"
                  onSubmit={loginForm.handleSubmit(handleLogin)}
                >
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      {...loginForm.register("email")}
                      className="w-full p-2 rounded-md bg-black/60 border border-gray-600 text-white focus:ring-2 focus:ring-[#701932] outline-none"
                    />
                    <p className="text-red-400 text-sm">
                      {loginForm.formState.errors.email?.message}
                    </p>
                  </div>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      {...loginForm.register("password")}
                      className="w-full p-2 pr-10 rounded-md bg-black/60 border border-gray-600 text-white focus:ring-2 focus:ring-[#701932] outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-white"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                    <p className="text-red-400 text-sm">
                      {loginForm.formState.errors.password?.message}
                    </p>
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-2 mt-2 bg-[#701932] hover:bg-[#8b2346] transition-all rounded-md font-semibold"
                  >
                    {loading ? "Logging in..." : "Login"}
                  </button>
                </form>
                <p className="text-center text-gray-400 mt-6 text-sm">
                  Don’t have an account?{" "}
                  <button
                    onClick={() => setIsLogin(false)}
                    className="text-[#ff5b89] hover:underline"
                  >
                    Register
                  </button>
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="register"
                variants={variants}
                initial="hiddenRight"
                animate="visible"
                exit="exitLeft"
                transition={{ type: "tween", duration: 0.8 }}
                className="p-8 bg-black/50 backdrop-blur-sm rounded-xl shadow-xl"
              >
                <h2 className="text-3xl font-bold mb-2 text-center">
                  Welcome Aboard
                </h2>
                <p className="text-gray-300 text-sm text-center mb-6">
                  Create your account and start booking your dream flights.
                </p>
                <form
                  className="space-y-4"
                  onSubmit={registerForm.handleSubmit(handleRegister)}
                >
                  <div>
                    <input
                      type="text"
                      placeholder="Full Name"
                      {...registerForm.register("name")}
                      className="w-full p-2 rounded-md bg-black/60 border border-gray-600 text-white focus:ring-2 focus:ring-[#701932] outline-none"
                    />
                    <p className="text-red-400 text-sm">
                      {registerForm.formState.errors.name?.message}
                    </p>
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      {...registerForm.register("email")}
                      className="w-full p-2 rounded-md bg-black/60 border border-gray-600 text-white focus:ring-2 focus:ring-[#701932] outline-none"
                    />
                    <p className="text-red-400 text-sm">
                      {registerForm.formState.errors.email?.message}
                    </p>
                  </div>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      {...registerForm.register("password")}
                      className="w-full p-2 pr-10 rounded-md bg-black/60 border border-gray-600 text-white focus:ring-2 focus:ring-[#701932] outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-white"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                    <p className="text-red-400 text-sm">
                      {registerForm.formState.errors.password?.message}
                    </p>
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-2 mt-2 bg-[#701932] hover:bg-[#8b2346] transition-all rounded-md font-semibold"
                  >
                    {loading ? "Registering..." : "Register"}
                  </button>
                </form>
                <p className="text-center text-gray-400 mt-6 text-sm">
                  Already have an account?{" "}
                  <button
                    onClick={() => setIsLogin(true)}
                    className="text-[#ff5b89] hover:underline"
                  >
                    Login
                  </button>
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default SignInPage;
