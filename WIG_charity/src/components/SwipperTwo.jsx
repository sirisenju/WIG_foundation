import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const swipeData = [
  {
    id: 1,
    imgUrl: "./assets/img-1.jpg",
  },
  {
    id: 2,
    imgUrl: "./assets/img-2.jpg",
  },
  {
    id: 3,
    imgUrl: "./assets/img-3.jpg",
  },
  {
    id: 4,
    imgUrl: "./assets/img-4.jpg",
  },
  {
    id: 5,
    imgUrl: "./assets/img-5.jpg",
  },
  {
    id: 6,
    imgUrl: "./assets/img-6.jpg",
  },
  {
    id: 7,
    imgUrl: "./assets/img-7.jpg",
  },
  {
    id: 8,
    imgUrl: "./assets/img-8.jpg",
  },
];

function SwipperTwo() {
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
            <div className="h-full w-full">
              <div className="2xl:max-w-7xl h-full mx-auto text-center text-white relative">
                <div className="h-[50vh] w-full mx-auto overflow-hidden shadow-md">
                  <img
                    className="w-full h-full object-cover object-center"
                    src={item.imgUrl}
                    alt=""
                  />
                 {/* <p className="absolute text-[#fad643] bottom-0 right-4 great-vibes-regular text-[25px] sm:text-[60px]">{item.text}</p> */}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default SwipperTwo;
