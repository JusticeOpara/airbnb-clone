import React from "react"
import { TbBeach, TbMountain, TbPool } from 'react-Icons/tb';
import { GiBarn, GiBoatFishing, GiCactus, GiCastle, GiCaveEntrance, GiForestCamp, GiIsland, GiWindmill } from 'react-Icons/gi';
import { FaSkiing } from 'react-Icons/fa';
import { BsSnow } from 'react-Icons/bs';
import { IoDiamond } from 'react-Icons/io5';
import { MdOutlineVilla } from 'react-Icons/md';
// import CategoryBox from "./CategoryBox";
import Container from "./Container";

export const categories = [
    {
        label: 'Beach',
        Icon: TbBeach,
        description: 'This property is close to the beach!',
    },
    {
        label: 'Windmills',
        Icon: GiWindmill,
        description: 'This property is has windmills!',
    },
    {
        label: 'Modern',
        Icon: MdOutlineVilla,
        description: 'This property is modern!'
    },
    {
        label: 'Countryside',
        Icon: TbMountain,
        description: 'This property is in the countryside!'
    },
    {
        label: 'Pools',
        Icon: TbPool,
        description: 'This is property has a beautiful pool!'
    },
    {
        label: 'Islands',
        Icon: GiIsland,
        description: 'This property is on an island!'
    },
    {
        label: 'Lake',
        Icon: GiBoatFishing,
        description: 'This property is near a lake!'
    },
    {
        label: 'Skiing',
        Icon: FaSkiing,
        description: 'This property has skiing activies!'
    },
    {
        label: 'Castles',
        Icon: GiCastle,
        description: 'This property is an ancient castle!'
    },
    {
        label: 'Caves',
        Icon: GiCaveEntrance,
        description: 'This property is in a spooky cave!'
    },
    {
        label: 'Camping',
        Icon: GiForestCamp,
        description: 'This property offers camping activities!'
    },
    {
        label: 'Arctic',
        Icon: BsSnow,
        description: 'This property is in arctic environment!'
    },
    {
        label: 'Desert',
        Icon: GiCactus,
        description: 'This property is in the desert!'
    },
    {
        label: 'Barns',
        Icon: GiBarn,
        description: 'This property is in a barn!'
    },
    {
        label: 'Lux',
        Icon: IoDiamond,
        description: 'This property is brand new and luxurious!'
    }
]


const Categories = ({ selectedFilter, setSelectedFilter }) => {


    return (
        <Container>

            <div className="pt-4  flex flex-row items-center justify-between overflow-x-auto">
                {categories.map(item => {
                    const { label, Icon, description } = item

                    return (
                        <div key={label} className={`flex  flex-col  items-center  justify-center gap-2 p-3 border-b-2
                    hover:text-neutral-800 transition cursor-pointer border-transparent text-neutral-500 
                    ${label == selectedFilter && "border-b-neutral-800 text-neutral-800"}`}

                            onClick={() => { setSelectedFilter(i); }}>

                            <Icon size={26} />

                            <div className={`font-medium text-sm ${label == selectedFilter && "selected-label"}`}>

                                {label}
                            </div>
                        </div>

                    )

                })}
            </div>

        </Container>

    );
}

export default Categories;



