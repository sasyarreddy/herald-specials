import { useState } from "react";

// PLACEHOLDER QUESTIONS — replace with your own.
// answer = the position of the right option, counting from 0.
const QUESTIONS = [
  {
    q: "In what year was the University of Wisconsin founded?",
    options: ["1836", "1848", "1871", "1905"],
    answer: 1,
    explain: "UW was founded in 1848, the same year Wisconsin became a state.",
  },
  {
    q: "What is the name of UW–Madison's mascot?",
    options: ["Benny", "Bucky", "Buster", "Barney"],
    answer: 1,
    explain: "Bucky Badger has been cheering on the Badgers for decades.",
  },
  {
    q: "Madison's isthmus sits between which two lakes?",
    options: [
      "Mendota and Monona",
      "Wingra and Waubesa",
      "Monona and Kegonsa",
      "Mendota and Winnebago",
    ],
    answer: 0,
    explain: "Downtown Madison and the Capitol sit on the isthmus between Lake Mendota and Lake Monona.",
  },
];

export default function Quiz() {
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState(null);
  const [score, setScore] = useState(0);

  const total = QUESTIONS.length;

  if (i >= total) {
    return (
      <div className="fx-body qz">
        <p className="qz-progress">Results</p>
        <h2 className="qz-question">
          You got {score} out of {total}
        </h2>
        <button
          className="qz-next"
          onClick={() => {
            setI(0);
            setPicked(null);
            setScore(0);
          }}
        >
          Play again
        </button>
      </div>
    );
  }

  const item = QUESTIONS[i];
  const answered = picked !== null;
  const isLast = i === total - 1;

  const choose = (idx) => {
    if (answered) return;
    setPicked(idx);
    if (idx === item.answer) setScore((s) => s + 1);
  };

  return (
    <div className="fx-body qz">
      <p className="qz-progress">
        Question {i + 1} of {total}
      </p>
      <h2 className="qz-question">{item.q}</h2>

      <div className="qz-options">
        {item.options.map((opt, idx) => {
          let state = "";
          if (answered && idx === item.answer) state = "is-correct";
          else if (answered && idx === picked) state = "is-wrong";
          return (
            <button
              key={idx}
              className={`qz-option ${state}`}
              onClick={() => choose(idx)}
              aria-disabled={answered}
            >
              {opt}
            </button>
          );
        })}
      </div>

      <div className="qz-feedback" aria-live="polite">
        {answered && (
          <>
            <p>
              <strong>{picked === item.answer ? "Correct!" : "Not quite."}</strong>{" "}
              {item.explain}
            </p>
            <button
              className="qz-next"
              onClick={() => {
                setPicked(null);
                setI(i + 1);
              }}
            >
              {isLast ? "See results" : "Next question"}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
