import ReactDOM from "react-dom";

export default function Modal({ onClose, isOpen, children }) {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <div className="fixed w-screen h-screen top-0 left-0 flex items-center justify-center z-10 bg-black/90">
      <div>{children}</div>
      <button onClick={onClose}>Test</button>
    </div>,
    document.getElementById("modal-root"),
  );
}
