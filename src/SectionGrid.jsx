import { useState } from "react";
import StoryModal from "./StoryModal";
import { STORIES } from "./stories";
import cow from "./assets/vote-cow.jpg"; // change to your cow photo's actual file name

const COLS = 10;
const ROWS = 8;

// id must match a key in stories.js
// col/row are 1-indexed; span = how many cells wide; tall = how many cells high
const LINKS = [
  { id: "news",     label: "News",    col: 1, row: 1, span: 2, color: "cream" },
  { id: "science",  label: "Science", col: 5, row: 2, span: 2, color: "blue"  },
  { id: "feature",  label: "Feature: Student Outlooks on the Elections", col: 1, row: 4, span: 2, tall: 2, color: "coral" },
  { id: "arts",     label: "Arts",    col: 9, row: 5, span: 2, color: "cream" },
  { id: "sports",   label: "Sports",  col: 4, row: 6, span: 2, color: "blue"  },
  { id: "opinion",  label: "Opinion", col: 7, row: 7, span: 2, color: "coral" },
  { id: "banter",   label: "Banter",  col: 2, row: 8, span: 2, color: "cream" },
];

export default function SectionGrid() {
  const [openId, setOpenId] = useState(null);
  const open = LINKS.find((l) => l.id === openId);

  return (
    <section className="bh-grid">
      <img
        src={cow}
        alt="Giant inflatable cow reading &quot;Vote like there's no to-moo-row!&quot;"
      />

      <div className="bh-grid__lines" aria-hidden="true">
        {Array.from({ length: COLS * ROWS }, (_, i) => <span key={i} />)}
      </div>

      <nav className="bh-grid__buttons" aria-label="Special edition sections">
        {LINKS.map((l) => (
          <button
            key={l.id}
            type="button"
            className={`bh-btn bh-btn--${l.color}`}
            onClick={() => setOpenId(l.id)}
            style={{
              gridColumn: `${l.col} / span ${l.span ?? 1}`,
              gridRow: `${l.row} / span ${l.tall ?? 1}`,
            }}
          >
            {l.label}
          </button>
        ))}
      </nav>

      {open && (
        <StoryModal
          key={open.id}
          category={open.label}
          stories={STORIES[open.id] ?? []}
          onClose={() => setOpenId(null)}
        />
      )}
    </section>
  );
}
