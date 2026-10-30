import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import "./StoryModal.css";

export default function StoryModal({ category, stories, onClose }) {
  const [current, setCurrent] = useState(0);
  const closeRef = useRef(null);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  // Esc to close, lock page scroll, focus the X, restore focus afterwards
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

  const story = stories[current];
  const others = stories
    .map((s, i) => ({ s, i }))
    .filter(({ i }) => i !== current);

  // Rendered into <body> so the grid's sizing/clipping can't trap it
  return createPortal(
    <div className="sm-backdrop" onClick={onClose}>
      <div
        className="sm-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="sm-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sm-top">
          <span className="sm-category">{category}</span>

          <nav className="sm-thumbs" aria-label={`More in ${category}`}>
            {others.map(({ s, i }) => (
              <button
                key={s.id}
                className="sm-thumb"
                onClick={() => setCurrent(i)}
                aria-label={s.title}
                title={s.title}
              >
                <img src={s.image} alt="" />
              </button>
            ))}
          </nav>

          <button
            ref={closeRef}
            className="sm-close"
            onClick={onClose}
            aria-label="Close"
          >
            ×
          </button>
        </div>

        {story ? (
          // key makes the article remount on switch: resets scroll + replays fade
          <article key={story.id} className="sm-article">
            <img
              className="sm-hero"
              src={story.image}
              alt={story.imageAlt ?? ""}
            />
            <div className="sm-text">
              <h2 id="sm-title" className="sm-title">
                {story.title}
              </h2>
              <p className="sm-byline">
                by <span className="sm-author">{story.author}</span>
                {story.role && `, ${story.role}`} • {story.date}
              </p>
              {story.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </article>
        ) : (
          <p id="sm-title" className="sm-empty">
            Stories coming soon.
          </p>
        )}
      </div>
    </div>,
    document.body
  );
}
