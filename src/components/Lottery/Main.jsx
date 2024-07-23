import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useSelector } from "react-redux";
import Lottery from "./Lottery";

export default function Main() {
  const cards = useSelector((state) => state.user.info.lottery);

  return (
    <div className="h-full main-menu w-full relative">
      <div
        className="absolute left-0 top-0 h-full"
        style={{ width: "calc(100% - 60px)" }}
      >
        <Swiper
          // install Swiper modules
          spaceBetween={50}
          loop={true}
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
      <div
        style={{ width: "calc(100% - 60px)" }}
        className="absolute left-[60px] h-full"
      >
        <Lottery lottery={cards[0]} />
      </div>
      <div
        style={{ width: "calc(100% - 60px)" }}
        className="absolute left-[40px] h-full"
      >
        <Lottery lottery={cards[0]} />
      </div>
      <div
        style={{ width: "calc(100% - 60px)" }}
        className="absolute left-[20px] h-full"
      >
        <Lottery lottery={cards[0]} />
      </div>
    </div>
  );
}
