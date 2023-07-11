import { useEffect, useState } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";


export default function ImageContainer({ listOfImages }) {

	const [currentIndex, setCurrentIndex] = useState(0);
	const [imageToDisplay, setImageToDisplay] = useState();

	const [showNavigation, setShowNavigation] = useState(false);
	const [favorite, setFavorite] = useState(false);

	const handleFavourited = () => {
		setFavorite(true);
	};

	const handleUnfavourite = () => {
		setFavorite(false);
	};

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
			className='aspect-square w-full relative overflow-hidden rounded-xl flex items-center bg-gray-200'
			onMouseEnter={() => setShowNavigation(true)}
			onMouseLeave={() => setShowNavigation(false)}>

			{showNavigation && currentIndex > 0 && (
				<div className="flex justify-start items-center">
					<button className='flex justify-center items-center absolute  w-[11%] h-[11%]  z-[5] rounded-[50%] 
			border-1 border-solid transition-[0.25] m-0 p-0 cursor-pointer bg-white'>
						<GrFormPrevious onClick={handlePrevious} size={`25px`} />
					</button>
				</div>
			)}


			<img
				className='object-cover h-full w-full transition'
				src={imageToDisplay}
				alt=''
			/>

			<div className=" flex flex-row justify-center text-center w-full bottom-1 absolute ">
				<span className=" opacity-70 text-white text-4xl font-extrabold z-10 cursor-pointer"> 
					..... 
				</span>

			</div>

			{showNavigation && currentIndex < listOfImages.length - 1 && (
				<div className="flex justify-end items-center">
					<button className='flex justify-center items-center absolute   z-[5] rounded-[50%] 
              border-1 border-solid transition-[0.25] mr-3 p-0 cursor-pointer bg-white'>
						<GrFormNext onClick={handleGoToNext} size={`25px`} className='' />
					</button>
				</div>
			)}

			<div className='absolute top-3 right-3 bg-red-900 zg-[5] text-3xl '>
				{favorite ? (
					<AiFillHeart
						size={28}
						className="fill-white absolute top-[2px] right-[2px]" onClick={handleUnfavourite} />
				) : (
					<AiOutlineHeart
						size={28}
						className='fill-white absolute top-[2px] right-[2px]'
						onClick={handleFavourited} />
				)
				}
			</div>
		</div>
	);
}