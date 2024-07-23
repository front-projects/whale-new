import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import TopItem from "./TopItem";
export default function TopUsers3() {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
      loop={true}
      className="w-full"
    >
      <SwiperSlide>
        <TopItem />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <TopItem />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <TopItem />
      </SwiperSlide>
    </Swiper>
  );
}
