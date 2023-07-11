import React from "react";
import Container from "./Container";

export default function Footer() {

    return (
        <>
            {/* <Container> */}
                <footer className="flex flex-row items-center justify-center fixed 
                 bottom-0 left-0 bg-gray-300 shadow-sm py-4 border-t-[2px] w-full h-[50px] gap-3 md:gap-0">
                    <div className=" bg-slate-500 w-[95%] flex justify-between items-center ">
                        <div className="flex justify-start items-center">
                            <p className="text-[14px] ">
                                <span>2023 Airbnb,Inc.Terms.Sitemap.privacy</span>
                                <span>Your Privacy Choice </span></p>
                        </div>

                        <div className="flex justify-end">
                            <p>Engilsh(US)$</p>
                            <p>USD</p>
                            {/* <p>Support and resources</p> */}
                        </div>
                    </div>
                </footer>

            {/* </Container> */}

        </>


    )
}