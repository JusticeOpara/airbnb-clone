import React from "react";
import Card from "./Cardx";
// import { list } from "../utils/data";

function Cards({ list }) {
  return (
    <div className="col-span-1 cursor-pointer group">

      <div className="flex flex-col gap-2 w-full">
        <div className="aspect-square w-full relative overflow-hidden rounded-xl">
          <Image
            fill
            className="
            object-cover 
            h-full 
            w-full 
            group-hover:scale-110 
            transition
          "
            src={data.imageSrc}
            alt="Listing"
          />

          <div className="absolute top-3 right-3 ">
            <HeartButton />
          </div>
        </div>

        <div className="font-semibold text-lg">
          location.data
        </div>

        <div className="font-light text-neutral-500">
          reservationDate
        </div>
        <div className="flex flex-row items-center gap-1">
          <div className="font-semibold">
            price
          </div>

          <div className="font-light">night</div>

        </div>

        <Button
          disabled={disabled}
          small
          label={actionLabel}
          onClick={handleCancel}
        />

      </div>
    </div>
  );
}

export default Cards;