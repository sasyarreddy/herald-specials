const COLS = 10;
const ROWS = 8;

// col/row are 1-indexed; span = how many cells wide; tall = how many cells high
const LINKS = [
  { label: "News",    href: "#", col: 1, row: 1, span: 2, color: "cream" },
  { label: "Science",      href: "#", col: 5, row: 2, span: 2, color: "blue"  },
  { label: "Feature: Student Outlooks on the Elections",  href: "#", col: 1, row: 4, span: 2, tall: 2, color: "coral" },
  { label: "Arts", href: "#", col: 9, row: 5, span: 2, color: "cream" },
  { label: "Banter",    href: "#", col: 4, row: 6, span: 2, color: "blue"  },
  { label: "Opinion",        href: "#", col: 7, row: 7, span: 2, color: "coral" },
  { label: "Sports",    href: "#", col: 2, row: 8, span: 2, color: "cream" },
];

export default function SectionGrid() {
  return (
    <section className="bh-grid">
      <img
        src="src/assets/article backdrop.jpg"
        alt='Giant inflatable cow reading "Vote like there&apos;s no to-moo-row!"'
      />

      <div className="bh-grid__lines" aria-hidden="true">
        {Array.from({ length: COLS * ROWS }, (_, i) => <span key={i} />)}
      </div>

      <nav className="bh-grid__buttons" aria-label="Special edition sections">
        {LINKS.map((l) => (
          <a
            key={l.label}
            href={l.href}
            className={`bh-btn bh-btn--${l.color}`}
            style={{
              gridColumn: `${l.col} / span ${l.span ?? 1}`,
              gridRow: `${l.row} / span ${l.tall ?? 1}`,
            }}
          >
            {l.label}
          </a>
        ))}
      </nav>
    </section>
  );
}