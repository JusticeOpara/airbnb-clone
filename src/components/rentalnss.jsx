function Card({ list }) {

  return (

    // <Container>
      <div className=" mt-10 grid  grid-cols-1  sm:grid-cols-2  md:grid-cols-3  lg:grid-cols-4
  xl:grid-cols-5 2xl:grid-cols-6 gap-8 ">

        {list.map((card, i) => (
          <div className="m-4 mb-8 bg-red-300" key={i}>
            <Swiper
              slidesPerView={1}
              spaceBetween={15}
              loop={true}
              mousewheel={true}
              cssMode={true}
              pagination
              modules={[Pagination, Navigation]}
              className="h-[270px] w-[270px] overflow-hidden"
            >


              {card.imgSrc?.map((imageSrc, index) => (
                <SwiperSlide >
                  <img key={index} src={imageSrc} alt={`Image ${index + 1}`} />
                </SwiperSlide>
              ))}


            </Swiper>

            <div className="grid grid-cols-2 gap-4 items-start">
              <h3 className="">{card.title}</h3>
              <div className="grid grid-cols-2 items-center gap-[0.25rem]">
                icon
                <p>{card.rating}</p>
              </div>
            </div>
            <p className="m-0 ">{card.desc}</p>
            <p className="m-0">{card.date}</p>
            <p className="m-[0.2rem] text-base">
              <span className="font-[600]">₹{card.price}</span> night
            </p>
          </div>
        ))}



      </div>
    // </Container>
  );
}

export default Card;