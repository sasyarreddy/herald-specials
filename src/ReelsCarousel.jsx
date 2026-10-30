import { useEffect, useRef, useState } from "react";
import "./ReelsCarousel.css";

/* ================= REELS: PASTE LINKS HERE =================
   In Instagram: open the reel → ••• or the paper-plane icon → Copy link.
   Any reel or post link works; empty or broken lines are skipped. */
const REELS = [
  "https://www.instagram.com/reel/DfICmZrxdDJ/",
  "https://www.instagram.com/reel/DfFJdZmxfqF/",
  "https://www.instagram.com/reel/DfALaCIR44B/",
  "https://www.instagram.com/reel/De72068OffZ/",
  "https://www.instagram.com/reel/De2ajnJSNfq/",
  "https://www.instagram.com/reel/De12eiax-Qo/",
  "https://www.instagram.com/reel/DexlgitOz3V/",
  "https://www.instagram.com/reel/Deu-CuguVvk/",
  "https://www.instagram.com/reel/DeuwyG6xm55/",
  "https://www.instagram.com/reel/DekdOYRR0C1/",
];
/* ================= END OF REELS ================= */

const PROFILE = "https://www.instagram.com/badgerherald/";
const EMBED_SCRIPT = "https://www.instagram.com/embed.js";

// Turn any copied link into a clean reel/post URL, or null if it isn't one
function cleanUrl(link) {
  const m = String(link).match(/instagram\.com\/(?:[\w.]+\/)?(reel|reels|p)\/([\w-]+)/);
  if (!m) return null;
  return `https://www.instagram.com/${m[1] === "p" ? "p" : "reel"}/${m[2]}/`;
}

// The embed markup Instagram's script looks for. It's set as raw HTML so
// React leaves it alone after Instagram swaps it for a video player.
const embedHtml = (url) =>
  `<blockquote class="instagram-media" data-instgrm-permalink="${url}?utm_source=ig_embed" data-instgrm-version="14">` +
  `<a class="rc-fallback" href="${url}" target="_blank" rel="noopener">Watch this reel on Instagram</a>` +
  `</blockquote>`;

// Chunky solid arrow; `flip` points it left
const Arrow = ({ flip }) => (
  <svg
    viewBox="0 0 48 40"
    aria-hidden="true"
    style={flip ? { transform: "scaleX(-1)" } : undefined}
  >
    <path d="M0 13h26V0l22 20-22 20V27H0z" />
  </svg>
);

export default function ReelsCarousel() {
  const trackRef = useRef(null);
  const [showArrows, setShowArrows] = useState(true);
  const urls = REELS.map(cleanUrl).filter(Boolean);

  // Load Instagram's embed script once, then turn the cards into players
  useEffect(() => {
    const process = () => window.instgrm?.Embeds.process();
    if (window.instgrm) {
      process();
      return;
    }
    let s = document.querySelector(`script[src="${EMBED_SCRIPT}"]`);
    if (!s) {
      s = document.createElement("script");
      s.async = true;
      s.src = EMBED_SCRIPT;
      document.body.appendChild(s);
    }
    s.addEventListener("load", process);
    return () => s.removeEventListener("load", process);
  }, []);

  // Hide the arrows when every reel already fits on screen
  useEffect(() => {
    const track = trackRef.current;
    const update = () => setShowArrows(track.scrollWidth > track.clientWidth + 2);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(track);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  const scroll = (dir) => {
    const track = trackRef.current;
    const smooth = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollBy({
      left: dir * track.clientWidth * 0.8,
      behavior: smooth ? "smooth" : "auto",
    });
  };

  return (
    <section className="rc" aria-label="Badger Herald reels">
      <div className="rc-inner">
        <div className="rc-head">
          <h2 className="rc-title">Shortform</h2>
          <a className="rc-follow" href={PROFILE} target="_blank" rel="noopener">
            Follow @badgerherald
          </a>
        </div>

        <div
          ref={trackRef}
          className="rc-track"
          tabIndex={0}
          aria-label="Instagram reels, scroll sideways"
        >
          {urls.map((url) => (
            <div
              key={url}
              className="rc-reel"
              dangerouslySetInnerHTML={{ __html: embedHtml(url) }}
            />
          ))}
        </div>

        {showArrows && (
          <div className="rc-btns">
            <button type="button" onClick={() => scroll(-1)} aria-label="Previous reels">
              <Arrow flip />
            </button>
            <button type="button" onClick={() => scroll(1)} aria-label="Next reels">
              <Arrow />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}