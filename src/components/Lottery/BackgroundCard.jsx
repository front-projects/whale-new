export default function BackgroundCard() {
  return (
    <div className="w-full h-full relative">
      {/* TOP */}
      <div className="h-1/2 rounded-[23px] border-2 border-white border-b-[0px] bg-[#0F1511] flex items-center justify-center flex-col pb-8 "></div>
      {/* BOTTOM */}
      <div className="h-1/2 rounded-[23px] border-2 border-white border-t-[0px] bg-[#0F1511] pt-2 ">
        <img
          src="/right-bg.png"
          alt=""
          className="absolute right-0 bottom-0 h-1/2 z-1 rounded-b-[27px]"
        />
        <img
          src="/left-bg.png"
          alt=""
          className="absolute left-0 bottom-0 h-1/2 z-1 rounded-b-[27px]"
        />
      </div>
    </div>
  );
}
