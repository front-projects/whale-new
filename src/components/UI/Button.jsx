import WebApp from "@twa-dev/sdk";

export default function Button({ children, onClick, className }) {
  const clickHandler = () => {
    WebApp.HapticFeedback.impactOccurred("soft");
    onClick();
  };

  return (
    <button
      onClick={clickHandler}
      className={`button-gradient rounded-[27px] w-full text-[#2E2E2E] font-['Gilroy-900'] py-[16px] flex items-center gap-2 justify-center ${className}`}
    >
      {children}
    </button>
  );
}
