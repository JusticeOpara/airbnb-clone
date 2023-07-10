import React from "react";
// import { TbBeach, TbMountain, TbPool } from "react-Icons/tb";
// import {
// 	GiBarn,
// 	GiBoatFishing,
// 	GiCactus,
// 	GiCastle,
// 	GiCaveEntrance,
// 	GiForestCamp,
// 	GiIsland,
// 	GiWindmill,
// } from "react-Icons/gi";
// import { FaSkiing } from "react-Icons/fa";
// import { BsSnow } from "react-Icons/bs";
// import { IoDiamond } from "react-Icons/io5";
// import { MdOutlineVilla } from "react-Icons/md";
// // import {HiOutlineFire} from "react-Icons/hi"
import Container from "./Container";
import { Link } from "react-router-dom";
// export const categories = [
// 	{
// 		label: "Beach",
// 		Icon: TbBeach,
// 		description: "This property is close to the beach!",
// 	},
// 	// {
// 	//   label: 'Trending',
// 	//   Icon:
// 	//   description:'This property is trending '
// 	// },
// 	{
// 		label: "Windmills",
// 		Icon: GiWindmill,
// 		description: "This property is has windmills!",
// 	},
// 	{
// 		label: "Modern",
// 		Icon: MdOutlineVilla,
// 		description: "This property is modern!",
// 	},
// 	{
// 		label: "Countryside",
// 		Icon: TbMountain,
// 		description: "This property is in the countryside!",
// 	},
// 	{
// 		label: "Pools",
// 		Icon: TbPool,
// 		description: "This is property has a beautiful pool!",
// 	},
// 	{
// 		label: "Islands",
// 		Icon: GiIsland,
// 		description: "This property is on an island!",
// 	},
// 	{
// 		label: "Lake",
// 		Icon: GiBoatFishing,
// 		description: "This property is near a lake!",
// 	},
// 	{
// 		label: "Skiing",
// 		Icon: FaSkiing,
// 		description: "This property has skiing activies!",
// 	},
// 	{
// 		label: "Castles",
// 		Icon: GiCastle,
// 		description: "This property is an ancient castle!",
// 	},
// 	{
// 		label: "Caves",
// 		Icon: GiCaveEntrance,
// 		description: "This property is in a spooky cave!",
// 	},
// 	{
// 		label: "Camping",
// 		Icon: GiForestCamp,
// 		description: "This property offers camping activities!",
// 	},
// 	{
// 		label: "Arctic",
// 		Icon: BsSnow,
// 		description: "This property is in arctic environment!",
// 	},
// 	{
// 		label: "Desert",
// 		Icon: GiCactus,
// 		description: "This property is in the desert!",
// 	},
// 	{
// 		label: "Barns",
// 		Icon: GiBarn,
// 		description: "This property is in a barn!",
// 	},
// 	{
// 		label: "Lux",
// 		Icon: IoDiamond,
// 		description: "This property is brand new and luxurious!",
// 	},
// ];


import {
	MdOutlineApartment,
	MdHouseSiding,
	MdOutlineWater,
	MdCabin,
} from 'react-icons/md';
import { BsSnow, BsFilter } from 'react-icons/bs';
import { BiHomeAlt } from 'react-icons/bi';
import {
	GiKidSlide,
	GiSpaceNeedle,
	GiCampingTent,
	GiLightningDome,
	GiEvilTree,
	GiWaveSurfer,
	GiMountainCave,
	GiCaveEntrance,
	GiGolfFlag,

	GiBarn,
	GiBoatFishing,
	GiCactus,
	GiIsland,
	GiWindmill,
} from 'react-icons/gi';
import { AiOutlineCoffee } from 'react-icons/ai';
import { FaCampground, FaUmbrellaBeach, FaSwimmingPool } from 'react-icons/fa';
import { RiEarthquakeFill } from 'react-icons/ri';
// import { GrFormNext, GrFormPrevious } from "react-icons/gr";

export const categories = [
	{ label: 'Design', Icon: MdOutlineApartment },
	{ label: 'Arctic', Icon: BsSnow },
	{ label: 'Shared Homes', Icon: MdHouseSiding },
	{ label: 'LakeFront', Icon: MdOutlineWater },
	{ label: 'National Parks', Icon: GiKidSlide },
	{ label: 'Bed & Breakfast ', Icon: AiOutlineCoffee },
	{ label: 'OMG!', Icon: GiSpaceNeedle },
	{ label: 'Camping', Icon: FaCampground },
	{ label: 'A-frames', Icon: GiCampingTent },
	{ label: 'Domes', Icon: GiLightningDome },
	{ label: 'Tiny Homes', Icon: BiHomeAlt },
	{ label: 'Treehouses', Icon: GiEvilTree },
	{ label: 'Surfing', Icon: GiWaveSurfer },
	{ label: 'CountrySide', Icon: GiMountainCave },
	{ label: 'Caves', Icon: GiCaveEntrance },
	{ label: 'Golfing', Icon: GiGolfFlag },
	{ label: 'Cabins', Icon: MdCabin },
	{ label: 'Earth Homes', Icon: RiEarthquakeFill },
	{ label: 'Tropical', Icon: FaUmbrellaBeach },
	{ label: 'Amazing Pools', Icon: FaSwimmingPool },
	{ label: "Barns", Icon: GiBarn },
	{ label: "Desert", Icon: GiCactus },
	{ label: "Lake", Icon: GiBoatFishing },
	{ label: "Windmills", Icon: GiWindmill },
	{ label: "Islands", Icon: GiIsland }
]




const Categories = ({ selectedFilter, setSelectedFilter, }) => {
	return (
		<Container>
			<div className="flex flex-row items-center">


				<div className='pt-[0.5rem]  flex flex-row items-center justify-between overflow-x-auto overflow-x-hidden'>
					{categories.map((item) => {
						const { label, Icon } = item;

						return (
							// 					<Link to={`/homes/${icon.name}`}>
							//     <FontAwesomeIcon icon={icon.icon} /> {icon.name}
							//   </Link>
							<div key={label}
								className={`flex  flex-col  items-center  justify-center gap-2 p-3 border-b-2
                    hover:text-neutral-800 transition cursor-pointer border-transparent text-neutral-500 
                    ${label == selectedFilter &&
									"border-b-neutral-800 text-neutral-800"
									}`}
								onClick={() => {
									setSelectedFilter(label);
								}}>
								<Link to={`/categories/${item.label}`}>
									<Icon size={24} />
								</Link>


								<div
									className={`font-black text-[12px] ${label == selectedFilter && "selected-label"
										}`}>
									{label}
								</div>
							</div>
						);
					})}

				</div>



				<div className="border rounded-lg w-[150px] h-[50px] flex justify-center items-center font-black ">

					<BsFilter size={24} />

					<p className="text-[14px]">Filter</p>
				</div>
			</div>
		</Container>
	);
};

export default Categories;
