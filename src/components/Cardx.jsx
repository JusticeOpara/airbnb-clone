import React from "react";
import { useState } from "react";
import Container from "./Container"
import { AiOutlineHeart, AiTwotoneStar } from "react-icons/ai"
// import { GrFormNext, GrFormPrevious } from "react-icons/gr"




function Card({ list }) {

  console.log(list, "--listingthe items")
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showButtons, setShowButtons] = useState(false)


  const goToNextImage = () => {
    if (currentIndex < list.imageSrc.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goToPreviousImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleMouseEnter = () => {
    setShowButtons(true);
  };

  const handleMouseLeave = () => {
    setShowButtons(false)
  }



  return (

    <Container>
      <div className="  grid  grid-cols-1  sm:grid-cols-2  md:grid-cols-3  lg:grid-cols-4
                       xl:grid-cols-4 2xl:grid-cols-6 gap-8 bg-blxue-500 mt-[200px] bg-blue-200">

        {list?.map((card, dex) => (

          <div key={dex} className="col-span-1 cursor-pointer group bg-white ">
            <div className="flex flex-col gap-0 w-full h-full" >


              <div className="aspect-square w-full relative overflow-hidden rounded-xl">
                {card.imgSrc?.map((imageSrc, index) => (

                  <img key={index}
                    className="object-cover h-full w-full transition"
                    src={imageSrc} alt="" />

                ))}
              </div>


              {/* <div className="aspect-square w-full relative overflow-hidden rounded-xl"
                onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
              >

                {currentIndex > 0 && showButtons && (
                  <button className="" onClick={goToPreviousImage}>
                    <GrFormPrevious />
                  </button>
                )}

                 {card.imgSrc?.map((imageSrc, index) => ( 
                  <img
                    className="object-cover h-full w-full transition"
                    src={console.log(card.imageSrc[currentIndex] || [],"--cardimgeghgf")} alt="" />
                ))} 
               
                {currentIndex < card.imageSrc?.length - 1 && showButtons && (
                  <button className="right-button" onClick={goToNextImage}>
                    <GrFormNext />
                  </button>
                )}

              </div> */}



              <div className="absolute top-3 right-3 bg-red-900 z-50 text-3xl ">
                <AiOutlineHeart
                  size={28}
                  className="fill-white absolute -top-[2px] -right-[2px]" />
              </div>

              {/* A listing’s card should be composed of details such as:
                  The listing’s image(s)
                  The name of the listing (e.g 5 bedroom Duplex in Ajah)
                  The listing’s host
                  Dates the listing is available for 
                The cost per night for the listing
                 Average rating for the listing(just as displayed on the home page) */}


              <div className="flex justify-between items-start">
                <h3 className="font-extrabold text-[100%]" >{card.title}</h3>
                <div className="grid grid-cols-2 items-center gap-[0.25rem]">
                  <AiTwotoneStar />
                  <p>{card.rating}</p>
                </div>

              </div>
              <p className="m-0 text-gray-700 text-sm font-semibold">{card.desc}</p>
              <p className="m-0 text-gray-700 text-sm font-semibold">{card.date}</p>
              <p className="m-[0.2rem] text-base">
                <span className="font-extrabold text-[100%]">₹{card.price}</span> night
              </p>

            </div>
          </div>
        ))
        }

      </div >
    </Container >
  );
}

export default Card;

