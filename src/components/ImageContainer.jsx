import { useEffect, useState } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { AiOutlineHeart } from "react-icons/ai";

export default function ImageContainer({ listOfImages }) {
   
	const [currentIndex, setCurrentIndex] = useState(0);
	const [imageToDisplay, setImageToDisplay] = useState();

	const [showNavigation, setShowNavigation] = useState(false);

	useEffect(() => {
		const image = listOfImages[currentIndex];

		setImageToDisplay(image);
	}, [currentIndex]);

	const handlePrevious = () => {
		if (currentIndex !== 0) {
			const decreaseIndex = currentIndex - 1;
			setCurrentIndex(decreaseIndex);
		}
	};

	const handleGoToNext = () => {
		if (currentIndex < listOfImages.length - 1) {
			const increaseIndex = currentIndex + 1;
			setCurrentIndex(increaseIndex);
		}
	};

	return (
		<div
			className='aspect-square w-full relative overflow-hidden rounded-xl bg-red-700'
			onMouseEnter={() => setShowNavigation(true)}
			onMouseLeave={() => setShowNavigation(false)}>
		
         {showNavigation && currentIndex >0 && (
               <button className='flex justify-center items-center absolute top-[6rem] w-[15%] h-[15%] lekft-[12rem] z-50 rounded-[50%] 
              border-1 border-solid transition-[0.25] m-0 p-0 cursor-pointer bg-white'>
					<GrFormPrevious onClick={handlePrevious} size={`25px`}  />
               </button>
				)}
			

			<img
				className='object-cover h-full w-full transition'
				src={imageToDisplay}
				alt='' 
			/>
			
				{showNavigation && currentIndex < listOfImages.length - 1 && (
               <button className='flex justify-center items-center absolute top-[6rem] w-[15%] h-[15%] left-[12rem] z-50 rounded-[50%] 
              border-1 border-solid transition-[0.25] m-0 p-0 cursor-pointer bg-white'>
					<GrFormNext onClick={handleGoToNext} size={`25px`}  />
               </button>
				)}
			
			<div className='absolute top-3 right-3 bg-red-900 z-50 text-3xl '>
				<AiOutlineHeart
					size={28}
					className='fill-white absolute top-[2px] -right-[2px]'
				/>
			</div>
		</div>
	);
}
