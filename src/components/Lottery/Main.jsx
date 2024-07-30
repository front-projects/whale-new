import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css/effect-creative";
import { useSelector } from "react-redux";

import Lottery from "./Lottery";
import BackgroundLottery from "./BackgroundLottery";
import SwiperButtons from "./SwiperButtons";
import { useRef } from "react";
import { EffectCreative } from "swiper/modules";
import WebApp from "@twa-dev/sdk";

export default function Main() {
  const cards = useSelector((state) => state.user.info.investModels);

  const swiperRef = useRef(null);
  // const [activeIndex, setActiveIndex] = useState(1);

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

  const handleSlideChange = () => {
    // console.log(e);
    // setActiveIndex(e.realIndex + 1);
    WebApp.HapticFeedback.impactOccurred("medium");
  };

  return (
    <div className="h-full main-menu w-full relative">
      <BackgroundLottery />
      {/* <div className="absolute right-1 border-2 top-1 z-2 bg-[#5d677a] p-3 rounded-[50%]">
        {" "}
        <span className="font-['Gilroy-900'] history-plus-gradient ">
          {activeIndex}/{cards.length}
        </span>
      </div> */}
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
          effect="creative"
          onSlideChangeTransitionEnd={handleSlideChange}
          speed={700}
          modules={[EffectCreative]}
          creativeEffect={{
            prev: {
              // shadow: true,
              translate: ["0%", 0, -1],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
          slidesPerView={1}
          className="h-full w-full rounded-[23px]"
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
