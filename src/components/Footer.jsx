import React from "react";
import { BsFillMapFill } from "react-icons/bs";
import { Link } from "react-router-dom";



export default function Footer() {

    return (
        <div className="fixed z-10  bottom-0 left-0 w-full  pointer-events-none">
            <div className="flex justify-center mb-[25px] ">
                <Link to="/map">
                    <button type="button" className=' bg-[#333333]  touch-manipulation cursor-pointer transition-transform rounded-[26px] border-[1px] inline-flex outline-none m-0 py-[14px] px-[19px] whitespace-nowrap'>
                        <span className="!flex items-center text-white font-semibold">
                            <span className="text-base">Show map</span><BsFillMapFill />
                        </span>

                    </button>
                </Link>

            </div>


            <footer className="flex flex-row items-center justify-center 
                 bg-white shadow-sm py-4 px-10 border-t-[1px]  h-[50px] gap-3 md:gap-0 sm:hidden">

                <div className="  w-full flex justify-between items-center ">
                    <div className="flex flex-row justify-start items-center gap-3 text-sm">
                        {/* <p className="text-[14px] "> */}
                        <span className="text-[14px]">2023 Airbnb,Inc. Terms . Sitemap . privacy</span>
                        <span className="text-[14px]">Your Privacy Choice </span>
                        <span className="">Desitation</span>
                    </div>

                    <div className="flex justify-end items-center gap-3 font-extrabold text-sm">

                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 36 36"><path fill="currentColor" d="M26.54 18a19.38 19.38 0 0 0-.43-4h3.6a12.3 12.3 0 0 0-.67-1.6h-3.35a19.72 19.72 0 0 0-2.89-5.87a12.3 12.3 0 0 0-2.55-.76a17.83 17.83 0 0 1 3.89 6.59h-5.39V5.6h-1.5v6.77h-5.39a17.83 17.83 0 0 1 3.9-6.6a12.28 12.28 0 0 0-2.54.75a19.72 19.72 0 0 0-2.91 5.85H6.94A12.3 12.3 0 0 0 6.26 14h3.63a19.38 19.38 0 0 0-.43 4a19.67 19.67 0 0 0 .5 4.37H6.42A12.34 12.34 0 0 0 7.16 24h3.23a19.32 19.32 0 0 0 2.69 5.36a12.28 12.28 0 0 0 2.61.79A17.91 17.91 0 0 1 12 24h5.26v6.34h1.5V24H24a17.9 17.9 0 0 1-3.7 6.15a12.28 12.28 0 0 0 2.62-.81A19.32 19.32 0 0 0 25.61 24h3.2a12.34 12.34 0 0 0 .74-1.6H26a19.67 19.67 0 0 0 .54-4.4Zm-9.29 4.37h-5.74a17.69 17.69 0 0 1-.09-8.4h5.83Zm7.24 0h-5.74V14h5.83a18.21 18.21 0 0 1 .42 4a18.12 18.12 0 0 1-.51 4.37Z" class="clr-i-outline clr-i-outline-path-1" /><path fill="currentColor" d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2Zm0 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Z"
                            class="clr-i-outline clr-i-outline-path-2" /><path fill="none" d="M0 0h36v36H0z" /></svg>
                        <span>Engilsh(US)</span>


                        <span className="">$ USD</span>
                        <span>Support and resources</span>
                    </div>
                </div>
            </footer>



        </div>


    )
}