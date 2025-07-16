"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Icons } from "@/components/ui/icons";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CircleCheckBig, Info, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SharedLayout } from "@/components/layout/shared-layout";
import Image from "next/image";
const features = [
  {
    title: "Reduce MTTR by up to 70%",
    description: "Resolve incidents faster with automated workflows and intelligent alerts"
  },
  {
    title: "Centralize alerts from all your systems",
    description: "Integrate with your existing tools and get a unified view of all alerts"
  },
  {
    title: "Automate on-call scheduling and escalations",
    description: "Ensure the right people are notified at the right time"
  }
];

export default function Login() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
  const [emailWarning, setEmailWarning] = useState("");
  const [shouldShake, setShouldShake] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  // Reset shake animation after it completes
  useEffect(() => {
    if (shouldShake) {
      const timer = setTimeout(() => {
        setShouldShake(false);
      }, 600); // Duration of shake animation
      return () => clearTimeout(timer);
    }
  }, [shouldShake]);

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData({ ...formData, username: value });
    if (emailWarning) setEmailWarning("");
  };

  const handleUsernameBlur = () => {
    const email = formData.username;
    if (!email) return;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      setEmailWarning("Please enter a valid email address");
    } else {
      setEmailWarning("");
    }
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      await login(formData);
      
      // Show success animation before redirecting
      setIsLoading(false);
      setIsSuccess(true);
      
      // Wait for animation to complete before redirecting
      setTimeout(() => {
        router.push("/alerts");
      }, 1500);
    } catch (err) {
      setError("Invalid credentials. Please try again.");
      setShouldShake(true); // Trigger shake animation
      setIsLoading(false);
    }
  }

  return (
    <SharedLayout>
      <div className="min-h-screen flex bg-black">
        {/* Left Section */}
        <div className="hidden lg:flex lg:w-1/2 bg-black text-white p-16 flex-col justify-between">
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-24"
            >
              <div className="flex items-center space-x-3 rounded-xl p-3">
                <div className="w-10 h-10">
                  <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                    width="30.000000pt" height="30.000000pt" viewBox="0 0 167.000000 300.000000"
                    preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
                    fill="white" stroke="none">
                      <path d="M804 2630 c-18 -6 -45 -25 -62 -44 -32 -37 -36 -55 -48 -279 -3 -64
                      -11 -120 -16 -123 -10 -6 -168 109 -264 193 -49 42 -72 55 -116 64 -62 13
                      -120 1 -162 -32 -24 -19 -26 -27 -26 -89 0 -68 1 -70 49 -127 62 -74 111 -120
                      186 -173 33 -24 89 -71 125 -106 36 -34 80 -76 99 -91 25 -21 32 -34 27 -49
                      -3 -10 -61 -55 -128 -99 -198 -130 -304 -212 -318 -245 -16 -38 -6 -75 30
                      -111 57 -57 133 -32 310 102 117 89 164 116 174 101 2 -4 -1 -260 -6 -569 -6
                      -309 -7 -578 -3 -599 9 -48 56 -95 118 -119 45 -17 51 -17 81 -2 30 14 35 22
                      46 79 7 39 15 215 19 458 3 217 10 401 15 409 5 8 12 77 15 152 4 82 11 143
                      18 150 8 8 26 1 70 -29 32 -21 68 -42 80 -46 11 -4 55 -31 97 -61 110 -79 152
                      -99 215 -99 50 0 55 2 97 46 56 60 59 101 13 168 -36 53 -61 72 -274 221 -88
                      61 -168 119 -179 129 -17 17 -17 19 -1 44 18 27 144 125 275 213 110 74 180
                      158 180 215 0 49 -49 97 -98 98 -43 0 -44 -1 -265 -148 -132 -88 -191 -122
                      -198 -115 -8 8 -8 61 0 183 12 196 5 254 -38 302 -29 33 -84 44 -137 28z"/>
                    </g>
                  </svg>
                </div>
                {/* <img src="https://0vyln3ksw4.ufs.sh/f/1rcEIF9rX2uoIkkAwKijF1RXQbqGtKYvDOVNU6k73PhAdW8p" alt="Warrn Logo" width={32} height={32} className="w-12 h-12 rounded-sm me-4 bg-white p-2" /> */}
                <div className="flex flex-col pe-2">
                  <div className="text-xs font-medium text-gray-400 lowercase font-mono">emphoni inc</div>
                  <span className="text-2xl font-bold text-white font-mono">Warrn</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h1 className="text-[2.75rem] leading-tight font-bold mb-4">Incident response made simple</h1>
              <p className="text-gray-400 text-lg mb-16">warrn helps teams respond to incidents faster, reduce downtime, and improve reliability.</p>

              <div className="space-y-10">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.2, duration: 0.5 }}
                    className="flex gap-4"
                  >
                      

                    <div className="mt-1.5">
                      <CircleCheckBig className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">{feature.title}</h3>
                      <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="text-xs text-gray-500"
          >
            © {new Date().getFullYear()} Emphoni Inc. All rights reserved.
          </motion.div>
        </div>

        {/* Right Section */}
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 25,
            duration: 0.5
          }}
          className="flex-1 flex items-center justify-center p-8 bg-white rounded-xl m-8 border border-gray-100"
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-[400px] space-y-8"
          >
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-2">Welcome back</h2>
              <p className="text-sm text-gray-500">
                Enter your credentials to access your account
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-1.5">
                <Label htmlFor="username" className="text-sm font-medium">Username</Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="Enter your username"
                  value={formData.username}
                  onChange={handleUsernameChange}
                  onBlur={handleUsernameBlur}
                  disabled={isLoading}
                  required
                  className="h-11"
                />
                <AnimatePresence mode="wait">
                  {emailWarning && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Alert variant="default" className="bg-blue-50 border-blue-200">
                        <Info className="h-4 w-4 text-blue-500" />
                        <AlertDescription className="text-sm text-blue-700">
                          {emailWarning}
                        </AlertDescription>
                      </Alert>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between items-center">
                  <Label htmlFor="password" className="text-sm font-medium">Password</Label>
                  <a href="/forgot-password" className="text-sm text-[#0B0D1C] hover:text-[#0B0D1C]/90">
                    Forgot password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  disabled={isLoading}
                  required
                  className="h-11"
                />
              </div>

              <AnimatePresence mode="wait">
                {error && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Alert variant="destructive">
                      <AlertDescription className="text-sm">{error}</AlertDescription>
                    </Alert>
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.div 
                whileTap={{ scale: 0.98 }}
                whileHover={{ scale: 1.01 }}
                animate={shouldShake ? {
                  x: [-10, 10, -10, 10, -5, 5, -2, 2, 0],
                  transition: {
                    duration: 0.6,
                    ease: "easeInOut"
                  }
                } : {}}
                className="w-full"
              >
                <Button
                  type="submit"
                  disabled={isLoading || isSuccess}
                  className="w-full h-11 bg-black hover:bg-black/90 transition-all duration-200 ease-in-out relative overflow-hidden group"
                >
                  <motion.div
                    className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{
                      scale: [1, 1.5],
                      opacity: [0, 0.3, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  
                  <AnimatePresence mode="wait">
                    {isSuccess ? (
                      <motion.div
                        key="success"
                        className="flex items-center justify-center relative w-full h-full"
                      >
                        {/* Green wave background animation that fills entire button */}
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 25 }}
                          transition={{ 
                            duration: 0.8,
                            delay: 0.2,
                            ease: [0.25, 0.46, 0.45, 0.94]
                          }}
                          className="absolute top-1/2 left-1/2 w-4 h-4 bg-green-500 rounded-full -translate-x-1/2 -translate-y-1/2"
                          style={{ 
                            transformOrigin: 'center',
                            zIndex: 1
                          }}
                        />
                        
                        {/* Check mark with circle */}
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ 
                            scale: [0, 1.2, 1],
                            opacity: [0, 1, 1],
                          }}
                          transition={{ 
                            duration: 0.5,
                            ease: [0.25, 0.46, 0.45, 0.94],
                            times: [0, 0.6, 1]
                          }}
                          className="relative z-10 flex items-center justify-center"
                        >
                          <svg 
                            width="32" 
                            height="32" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            className="text-white"
                          >
                            {/* Circle */}
                            <motion.circle
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="2"
                              fill="none"
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{
                                duration: 0.4,
                                delay: 0.3,
                                ease: "easeInOut"
                              }}
                            />
                            {/* Check mark */}
                            <motion.path
                              d="M8 12l3 3l6-6"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ 
                                duration: 0.4,
                                delay: 0.6,
                                ease: "easeInOut"
                              }}
                            />
                          </svg>
                        </motion.div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="default"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center justify-center"
                      >
                        {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
                        Sign in
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Button>
              </motion.div>
            </form>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-4 text-gray-500">Or continue with</span>
              </div>
            </div>

            <Button variant="outline" className="w-full h-11 border-gray-200" type="button">
              <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Sign in with Google
            </Button>

            <div className="text-center text-sm text-gray-600">
              Don&apos;t have an account?{" "}
              <a href="/register" className="font-medium text-[#0B0D1C] hover:text-[#0B0D1C]/90">
                Sign up
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </SharedLayout>
  );
}