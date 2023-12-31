import Container from "../components/Container";
import {  AiTwotoneStar } from "react-icons/ai";
import {list4 } from "../utils/data";
import ImageContainer from "./ImageContainer";



export default function Omg() {

    return (
        <Container>
            <div
                className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
                       xl:grid-cols-4 2xl:grid-cols-6 gap-8  mt-[180px] pb-20'>
                {list4?.map((card, dex) => (
                    <div
                        key={dex}
                        className='col-span-1 cursor-pointer group bg-white '>
                        <div className='flex flex-col gap-0 w-full h-full'>
                            <ImageContainer listOfImages={card.imgSrc} />


                           

                            <div className='flex justify-between items-start'>
                                <h3 className='font-extrabold text-[100%]'>
                                    {card.title}
                                </h3>
                                <div className='grid grid-cols-2 items-center gap-[0.25rem]'>
                                    <AiTwotoneStar />
                                    <p>{card.rating}</p>
                                </div>
                            </div>
                           
                            <p className="m-0 text-gray-700 text-sm font-semibold">{card.host}</p>
                            <p className='m-0 text-gray-700 text-sm font-semibold'>
                                {card.date}
                            </p>
                            <p className='m-[0.2rem] text-sm font-medium'>
                                <span className='font-bold text-[100%]'>
                                    ${card.price}
                                </span>
                                night
                            </p>
                        </div>
                    </div>
                ))}
            </div>

        </Container>
    );
}


