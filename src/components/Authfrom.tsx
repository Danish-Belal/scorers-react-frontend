// src/pages/Login.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";

const Authfrom = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex items-center justify-center h-screen bg-black text-gray">
      <div className="relative w-1/2 h-3/4 bg-black shadow-lg rounded-lg overflow-hidden">
        <motion.div
          className={`absolute w-1/2 h-full bg-gradient-to-r ${
            isLogin ? "right-0" : "left-0"
          }`}
          animate={{ x: isLogin ? "0%" : "-100%" }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl text-blue font-bold m-8">
            {isLogin ? "Welcome Back!" : "Create an Account"}
          </h1>
        </motion.div>
        <div className="absolute inset-0 flex flex-col justify-center px-10">
          <form className="flex flex-col space-y-4">
            <label className="text-gray">
              {isLogin ? "Email" : "Full Name"}
              <input
                type="text"
                className="w-full mt-2 p-2 bg-gray-900 border border-gray focus:border-blue rounded-md"
              />
            </label>
            <label className="text-gray">Password</label>
            <input
              type="password"
              className="w-full mt-2 p-2 bg-gray-900 border border-gray focus:border-blue rounded-md"
            />
            <button className="w-full mt-4 p-2 bg-blue text-white rounded-md hover:bg-blueHover">
              {isLogin ? "Log In" : "Sign Up"}
            </button>
          </form>
          <button
            className="mt-4 text-blue underline"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Create an account" : "Already have an account? Log in"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Authfrom;
