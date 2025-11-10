"use client";
import { useState } from "react";
import { Sun, Moon } from "lucide-react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { login } from "@/features/auth/authSlice";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
const schema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});
export type LoginData = yup.InferType<typeof schema>;  
export default function LoginPage() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { loading } = useAppSelector((s) => s.auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data: LoginData) => {
    try {
      const user = await dispatch(login(data)).unwrap();
      router.push("/dashboard");
    } catch (err: any) {
      console.error("Login error:", err);
    }
  };
  return (
    <div
      className={`relative min-h-screen flex flex-col items-center justify-center transition-colors duration-500 ${
        darkMode ? "text-gray-100" : "text-gray-900"
      }`}
      style={{
        backgroundImage: "url('/assets/win.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className={`absolute inset-0 ${darkMode ? "bg-black/40" : "bg-white/10"} backdrop-blur-[2px]`}
      />
      <div className="absolute top-6 right-6 z-20">
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full border border-white/30 bg-white/20 backdrop-blur-md hover:bg-white/40 transition"
        >
          {darkMode ? (
            <Sun className="h-5 w-5 text-yellow-300" />
          ) : (
            <Moon className="h-5 w-5 text-gray-800" />
          )}
        </button>
      </div>
      <div className="relative z-10 w-full max-w-md p-8 rounded-2xl backdrop-blur-xl bg-white/20 dark:bg-gray-900/40 shadow-[0_8px_32px_rgba(0,0,0,0.37)] border border-white/30">
        <div className="text-center">
          <h2 className="mt-6 text-2xl font-semibold tracking-tight">
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-5" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="block text-sm font-medium">Email address</label>
            <input
              type="email"
              placeholder="you@example.com"
              {...register("email")}
              className="mt-2 w-full rounded-lg bg-white/40 dark:bg-gray-800/60 px-3 py-2 border border-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 backdrop-blur-md"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              {...register("password")}
              className="mt-2 w-full rounded-lg bg-white/40 dark:bg-gray-800/60 px-3 py-2 border border-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 backdrop-blur-md"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 transition shadow-md"
          >
            {loading ? "Logging in..." : "Sign In"}
          </button>

          <p className="mt-6 text-center text-sm text-gray-100 dark:text-gray-400">
            Not a member?{" "}
            <a href="#" className="font-semibold text-blue-400 hover:underline">
              Create an account
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
