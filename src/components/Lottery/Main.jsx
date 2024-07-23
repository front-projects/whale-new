import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useSelector } from "react-redux";
import Lottery from "./Lottery";
import BackgroundLottery from "./BackgroundLottery";
import SwiperButtons from "./SwiperButtons";
import { useRef } from "react";

export default function Main() {
  const cards = useSelector((state) => state.user.info.lottery);
  const swiperRef = useRef(null);

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className="h-full main-menu w-full relative">
      <BackgroundLottery />
      <div
        className="absolute left-0 top-0 h-full z-1"
        style={{ width: "calc(100% - 60px)" }}
      >
        <Swiper
          // install Swiper modules
          spaceBetween={50}
          loop={true}
          rewind={true}
          ref={swiperRef}
          slidesPerView={1}
          navigation
          className="h-full w-full"
        >
          {cards.map((lottery, index) => (
            <SwiperSlide key={Math.random() * 100 + index}>
              <Lottery lottery={lottery} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <SwiperButtons next={handleNext} prev={handlePrev} />
    </div>
  );
}
