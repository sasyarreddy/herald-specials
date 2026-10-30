import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import "./StoryModal.css";

// Same look and behavior as the story pop-up (Esc to close, click outside,
// X in the corner), but holds any content you put inside it.
export default function Popup({ title, onClose, children }) {
  const closeRef = useRef(null);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onCloseRef.current();
    const prevOverflow = document.body.style.overflow;
    const prevFocus = document.activeElement;

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      prevFocus?.focus?.();
    };
  }, []);

  return createPortal(
    <div className="sm-backdrop" onClick={onClose}>
      <div
        className="sm-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="popup-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sm-top">
          <span id="popup-title" className="sm-category">
            {title}
          </span>
          <span style={{ flex: 1 }} />
          <button
            ref={closeRef}
            className="sm-close"
            onClick={onClose}
            aria-label="Close"
          >
            ×
          </button>
        </div>

        <div className="sm-article">{children}</div>
      </div>
    </div>,
    document.body
  );
}
