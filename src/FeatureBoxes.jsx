import { useState } from "react";
import Popup from "./Popup";
import Quiz, { QUIZ } from "./Quiz";
import VoterGuide from "./VoterGuide";
import "./Features.css";

const BOXES = [
  {
    id: "games",
    title: "Fun & Games",
    blurb: QUIZ.title,
    image: QUIZ.image, // shown behind the text at 30% opacity
    color: "coral",
    content: <Quiz />,
  },
  {
    id: "guide",
    title: "Voter Guide",
    blurb: "What you need before Nov. 3",
    color: "blue",
    content: <VoterGuide />,
  },
];

export default function FeatureBoxes() {
  const [openId, setOpenId] = useState(null);
  const open = BOXES.find((b) => b.id === openId);

  return (
    <section className="fb" aria-label="Special features">
      {BOXES.map((b) => (
        <button
          key={b.id}
          type="button"
          className={`fb-box fb-box--${b.color}`}
          onClick={() => setOpenId(b.id)}
        >
          {b.image && <img className="fb-bg" src={b.image} alt="" />}
          <span className="fb-title">{b.title}</span>
          <span className="fb-blurb">{b.blurb}</span>
        </button>
      ))}

      {open && (
        <Popup key={open.id} title={open.title} onClose={() => setOpenId(null)}>
          {open.content}
        </Popup>
      )}
    </section>
  );
}