import { Box } from "@mui/system";
import React, { useState } from "react";
import { Button, Grid, IconButton, Link, TextField } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import {Router, useRouter} from "next/router";

export default function LogInComponent(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  return (
    <div class="lg:grid lg:place-items-center ">
            <div class="lg:w-full xl:max-w-screen-sm ">
                <div class="py-12 lg:bg-white flex justify-center lg:justify-start lg:px-12">
                    <div class="cursor-pointer flex items-center">
                    <div className="flex flex-shrink-0 items-center">
            <img className="block h-8 w-auto lg-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company"/>
          </div>
                        <div class="text-2xl text-indigo-800 tracking-wide ml-2 font-semibold">Deneyim.NET</div>
                    </div>
                </div>
                <div class="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
                    <h2 class="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl
                    xl:text-bold">Log in as {props.name}</h2>
                    <div class="mt-12">
                        <form>
                            <div>
                                <div class="text-sm font-bold text-gray-700 tracking-wide">Email Address</div>
                                <input onChange={(e)=>setEmail(e.target.value)} class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="" placeholder="example@gmail.com"/>
                            </div>
                            <div class="mt-8">
                                <div class="flex justify-between items-center">
                                    <div class="text-sm font-bold text-gray-700 tracking-wide">
                                        Password
                                    </div>
                                    <div>
                                        <a class="text-xs font-display font-semibold text-indigo-600 hover:text-indigo-800
                                        cursor-pointer">
                                            Forgot Password?
                                        </a>
                                    </div>
                                </div>
                                <input onChange={(e) => setPassword(e.target.value)} class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="password" placeholder="Enter your password" />
                            </div>
                            <div class="mt-10">
                                <button onClick={(e) => props.handleSubmit(e, {email,password}, router)} class="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                                font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                                shadow-lg">
                                    Log In
                                </button>
                            </div>
                        </form>
                        <div class="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
                            Don't have an account ? <a class="cursor-pointer text-indigo-600 hover:text-indigo-800">Register</a>
                        </div>
                    </div>
                </div>
            </div>
           
    </div>
        
  );
}
