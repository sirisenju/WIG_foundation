import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import React from "react";

const swipeData = [
  {
    id: 1,
    imgUrl: "./assets/girlHolder.jpg",
    userName: "Tony Stark",
    position: "C.E.O",
    quote: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. At tempora id quas consequatur suscipit 
    laudantium ex distinctio, repudiandae quisquam deserunt autem optio sit ipsum officia labore dolores quos? 
    Necessitatibus, voluptatem.`,
  },
  {
    id: 2,
    imgUrl: "./assets/girlHolder.jpg",
    userName: "Dr. Victor Von Doom",
    position: "C.T.O",
    quote: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. At tempora id quas consequatur suscipit 
    laudantium ex distinctio, repudiandae quisquam deserunt autem optio sit ipsum officia labore dolores quos? 
    Necessitatibus, voluptatem.`,
  },
  {
    id: 2,
    imgUrl: "./assets/girlHolder.jpg",
    userName: "Kang",
    position: "He who Remains",
    quote: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. At tempora id quas consequatur suscipit 
    laudantium ex distinctio, repudiandae quisquam deserunt autem optio sit ipsum officia labore dolores quos? 
    Necessitatibus, voluptatem.`,
  },
];

function Swipper() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        pagination={{
            clickable: true,
          }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {swipeData.map((item) => (
            <SwiperSlide key={item.id} className="instyle">
            <div className="h-full pb-10 sm:pl-10 sm:pr-10 2xl:max-w-7xl">
              <div className="max-w-3xl h-full p-2 pt-10 pb-10 mx-auto text-center text-white">
                <h3 className="font-mono text-base pb-1 tracking-wider">Testimonials.</h3>
                <p className="text-2xl pb-8">What People Say About Us</p>
                <div className="h-[90px] w-[90px] mx-auto rounded-full overflow-hidden shadow-md">
                  <img
                    className=" w-full h-full object-cover object-center"
                    src={item.imgUrl}
                    alt=""
                  />
                </div>
                <p className="pt-2 text-base">{item.userName}</p>
                <p className=" pb-2 text-lg">{item.position}</p>
                <p className="text-lg space-x-1">
                  {item.quote}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Swipper;
