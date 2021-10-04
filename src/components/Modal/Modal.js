import { useEffect } from "react";
import { createPortal } from "react-dom";
import s from "./Modal.module.css";

const modalRoot = document.querySelector("#modal-root");

export default function Modal({ onClose, ...props }) {
  useEffect(() => {
    window.addEventListener("keydown", clickEscape);

    return window.removeEventListener("keydown", clickEscape);
  }, []);

  const clickEscape = (e) => {
    if (e.code === "Escape") {
      onClose();
    }
  };

  const clickOnOverlay = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div className={s.Overlay} onClick={clickOnOverlay}>
      <div className={s.Modal}>{props.children}</div>
    </div>,
    modalRoot
  );
}
