"use client"

import NavSignin from "@/components/NavSignin";
import img from "@/public/images/signin.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";


const page = () => {

  const router = useRouter()

  const [display, setDisplay] = useState(true)
  const [message, setMessage] = useState("")

  const handleClick = () => {

    setMessage("SignIn Sucessfull")
    setTimeout(() => {
      router.push("/"); // Redirect to dashboard page
    }, 500);

    setDisplay((prev) => !prev);
  }

  return (
    <div className="flex justify-betwen md:p-[2rem] gap-[2rem] text-[#000] overflow-x-hidden">
      <Image
        src={img}
        alt=""
        className="hidden md:block max-w-[38rem]  w-[50%]"
      />
      <div className="w-full md:w-[50%] items-center  mt-[2rem] max-w-[30rem] mx-auto">
        <h1 className="text-center">Welcome to lorem..!</h1>
        <NavSignin />
        <p className="mt-[2rem] px-[2rem] md:px-0">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <form className="flex flex-col gap-6 mt-6 w-full px-[2rem] md:px-0">
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="cursor-pointer">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your Email Address"
              required
              className="w-full border-[2px] border-[#49BBBD] px-[1rem] py-[0.8rem] rounded-[15rem] outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="text" className="cursor-pointer">
              User Name
            </label>
            <input
              type="text"
              id="text"
              placeholder="Enter your User name"
              className="w-full border-[2px] border-[#49BBBD] px-[1rem] py-[0.8rem] rounded-[15rem] outline-none"
            />
          </div>
          <div className="flex flex-col gap-2 relative">
            <label htmlFor="password" className="cursor-pointer">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your Password"
              required
              className="w-full border-[2px] border-[#49BBBD] px-[1rem] py-[0.8rem] rounded-[15rem] outline-none"
            />
            <FaEyeSlash className="absolute right-[2rem] top-[3rem] text-[1.2rem]" />
          </div>
          <div className="px-[2rem] md:px-0">
            <button className="w-full" onClick={() => handleClick()}>
              <p className="w-full md:w-[15rem] border-[2px] bg-[#49BBBD] px-[1rem] py-[0.8rem] rounded-[15rem] text-center text-white float-right mt-[2rem]">Register</p>
            </button>
          </div>
          <div className={`absolute max-w-[20rem] p-[1rem] w-[100%] h-[4rem] bg-[#fff] text-[#49BBBD] shadow-md shadow-[#49bbbd49] flex gap-2 rounded-md items-center duration-500 ${display ? "right-[0.3rem] top-[-10rem]" : "right-[0.3rem] top-[1rem]"}`}> <IoIosCheckmarkCircle className="text-[2rem]" /> <p>{message}</p></div>
        </form>


      </div>
    </div>
  );
};

export default page;



/****/