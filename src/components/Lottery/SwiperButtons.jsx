import { ArrowLeft, ArrowRight } from "../UI/icons";

export default function SwiperButtons({ next, prev }) {
  return (
    <div className="absolute bottom-[0] right-1 z-1 -translate-x-1/2 -translate-y-1/2 z-2">
      <div className="bg-[#5d677a] rounded-r-[27px] p-4" onClick={() => next()}>
        <ArrowRight />
      </div>
      <div
        className="bg-[#5d677a] rounded-r-[27px] p-4 mt-2"
        onClick={() => prev()}
      >
        <ArrowLeft />
      </div>
    </div>
  );
}
/* Rectangle 4575 */
