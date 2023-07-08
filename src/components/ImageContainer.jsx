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
			className='aspect-square w-full relative overflow-hidden rounded-xl'
			onMouseEnter={() => setShowNavigation(true)}
			onMouseLeave={() => setShowNavigation(false)}>
			<button className='absolute bg-red-500'>
				{showNavigation && currentIndex > 0 && (
					<GrFormPrevious onClick={handlePrevious} />
				)}
			</button>

			<img
				className='object-cover h-full w-full transition'
				src={imageToDisplay}
				alt=''
			/>

			<button className='absolute top-5  left-20 z-50 bg-red-500'>
				{showNavigation && currentIndex < listOfImages.length - 1 && (
					<GrFormNext onClick={handleGoToNext} />
				)}
			</button>
			<div className='absolute top-3 right-3 bg-red-900 z-50 text-3xl '>
				<AiOutlineHeart
					size={28}
					className='fill-white absolute -top-[2px] -right-[2px]'
				/>
			</div>
		</div>
	);
}
