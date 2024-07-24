import gsap from "gsap";
import { useEffect, useRef } from "react";
import ConfettiExplosion from "react-confetti-explosion";
import ReactDOM from "react-dom";

export default function Modal({
  onClose,
  isOpen,
  children,
  isExploding,
  onUpdate,
  submited,
  faq,
}) {
  const content = useRef(null);

  useEffect(() => {
    if (isOpen && content.current) {
      gsap.fromTo(
        content.current,
        { y: 150, opacity: 0 },
        { y: 0, opacity: 1 },
      );
    }
  }, [isOpen]);

  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <>
      <div
        className="fixed w-screen h-screen top-0 left-0 flex items-center justify-center z-10 bg-black/80"
        onClick={() => {
          if (submited) {
            onUpdate();
          } else {
            onClose();
          }
        }}
      >
        {isExploding && (
          <ConfettiExplosion
            zIndex={10}
            height="400vh"
            particleSize={15}
            force={0.4}
            duration={3000}
          />
        )}
        <div
          ref={content}
          className={`bg-[#0F1511] px-4 py-8 text-center text-[20px] ${faq ? "w-screen h-screen overflow-auto" : "w-[90%]  border-white border-2 rounded-[23px]"}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col items-center">{children}</div>
        </div>
      </div>
    </>,
    document.getElementById("modal-root"),
  );
}
