import Container from "../components/Container";
import {  AiTwotoneStar } from "react-icons/ai";
import ImageContainer from "./ImageContainer";
import { countryside } from "../utils/data2";



function Countryside() {

	return (
		<Container>
			<div
				className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
                       xl:grid-cols-4 2xl:grid-cols-6 gap-8 pb-20 mt-[200px]'>
				{countryside?.map((card, i) => (
					<div key={i} className='col-span-1 cursor-pointer group'>
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
								</span>{" "}
								night
							</p>
						</div>
					</div>
				))}
			</div>
			
		</Container>
	);
}

export default Countryside;
