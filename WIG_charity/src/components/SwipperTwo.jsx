import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const swipeData = [
  {
    id: 1,
    imgUrl: "./assets/openarm.jpg",
    text: "Children of the night, shinning up and down"
  },
  {
    id: 2,
    imgUrl: "./assets/war-kids.jpg",
    text: "The victors of war."
  },
  {
    id: 3,
    imgUrl: "./assets/romance.jpg",
    text: "Somewhere over the rainbow."
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
                 <p className="absolute text-[#fad643] bottom-0 right-4 great-vibes-regular text-[25px] sm:text-[60px]">{item.text}</p>
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
