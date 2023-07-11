import React from "react";
import { BiSearch } from 'react-icons/bi';
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from '../assets/placeholder.jpg';
import airbnbLogo from "../assets/logo.png"
import Container from "./Container";



export default function Navbar() {
   

    return (
        
            <div className=" py-4 border-b-[1px]">

                <Container>

                    <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
                        <img className="hidden md:block cursor-pointer"
                            src={airbnbLogo}
                            height="100"
                            width="100"
                            alt="Logo"
                        />

                        <div className="border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer">

                            <div className="flex flex-row  items-center  justify-between" >
                                <div className=" text-sm  font-semibold px-6">
                               Anywhere
                                </div>
                                <div className=" hidden  sm:block  text-sm  font-semibold  px-6 border-x-[1px] flex-1  text-center">
                                    Any week
                                </div>
                                <div
                                    className="text-sm pl-6 pr-2  text-gray-600 flex flex-row items-center gap-3"
                                >
                                    <div className="hidden sm:block">Add Guest</div>

                                    <div className=" p-2  bg-rose-500 rounded-full  text-white">
                                        <BiSearch size={18} />
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* <Search /> */}
                        <div className="relative">
                            <div className="flex flex-row items-center gap-3">
                                <div className="hidden md:block text-sm font-semibold py-3 px-4  rounded-fullhover:bg-neutral-100 transition cursor-pointer">
                                    Airbnb your home
                                </div>
                                <div className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex 
          flex-row items-center  gap-3  rounded-full   cursor-pointer hover:shadow-md transition">
                                    <AiOutlineMenu />
                                    <div className="hidden md:block">

                                        <img className="rounded-full"
                                            src={Avatar}
                                            height="30"
                                            width="30"
                                            alt="Avatar"
                                        />

                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>


                </Container>
            </div>


    )

}