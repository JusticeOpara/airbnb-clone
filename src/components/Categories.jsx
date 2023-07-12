import React from "react";
import Container from "./Container";
import { Link } from "react-router-dom";
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
	{ label: 'Design', Icon: MdOutlineApartment, path: "/design" },
	{ label: 'Arctic', Icon: BsSnow, path: "/arctic" },
	{ label: 'SharedHomes', Icon: MdHouseSiding, path: "/sharedhomes" },
	{ label: 'LakeFront', Icon: MdOutlineWater, path: "/lakefront" },
	{ label: 'NationalParks', Icon: GiKidSlide, path: "/nationalpark" },
	{ label: ' Breakfast ', Icon: AiOutlineCoffee, path: "/breakfast" },
	{ label: 'OMG!', Icon: GiSpaceNeedle, path: "/omg" },
	{ label: 'Camping', Icon: FaCampground, path: "/camping" },
	{ label: 'Aframes', Icon: GiCampingTent, path: "/a-frames" },
	{ label: 'Domes', Icon: GiLightningDome, path: "domes" },
	{ label: 'TinyHomes', Icon: BiHomeAlt, path: "/tinyhomes" },
	{ label: 'Treehouses', Icon: GiEvilTree, path: "/treehouses" },
	{ label: 'Surfing', Icon: GiWaveSurfer, path: "/surfing" },
	{ label: 'CountrySide', Icon: GiMountainCave, path: "/countryside" },
	{ label: 'Caves', Icon: GiCaveEntrance, path: "/caves" },
	{ label: 'Golfing', Icon: GiGolfFlag, path: "/golfing" },
	{ label: 'Cabins', Icon: MdCabin, path: "/cabins" },
	{ label: 'EarthHomes', Icon: RiEarthquakeFill, path: "earth-homes" },
	{ label: 'Tropical', Icon: FaUmbrellaBeach, path: "tropical" },
	{ label: 'AmazingPools', Icon: FaSwimmingPool, path: "amazing-pool" },
	{ label: "Barns", Icon: GiBarn, path: "barns" },
	{ label: "Desert", Icon: GiCactus, path: "desert" },
	{ label: "Lake", Icon: GiBoatFishing, path: "lake" },
	{ label: "Windmills", Icon: GiWindmill, path: "windmills" },
	{ label: "Islands", Icon: GiIsland, path: "islands" }
]




const Categories = () => {
	return (
		<Container>
			<div className="flex flex-row items-center ">


				<div className='pt-[0.5rem] flex flex-row items-center justify-between overflow-x-auto overflow-x-hidden'>
					{categories.map((item) => {
						const { label, Icon, path } = item;

						return (
							<Link to={path}>
								<div key={label} className='flex flex-col items-center justify-center gap-2 pl-3 pr-3  pb-3 border-b-2 
							hover:text-neutral-800 transition cursor-pointer border-transparent text-neutral-500 '>

									<Icon size={24}
										className=""
									/>

									<div className="font-black text-[11px] ">
										{label}
									</div>
								
								</div>
							</Link>
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
