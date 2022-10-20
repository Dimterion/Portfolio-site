import { useEffect, useRef } from "react";
import "./modal.css";

function Modal({ isOpen, children }) {
  const ref = useRef();

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const modal = ref.current;

    modal.showModal();

    return () => {
      modal.close();
    };
  }, [isOpen]);

  return (
    <dialog className="carousel-modal" ref={ref}>
      {children}
    </dialog>
  );
}

export default Modal;
