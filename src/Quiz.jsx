import { useEffect, useRef, useState } from "react";

// Everything the quiz shows lives here. Text may include <em>, <strong>, <a>.
export const QUIZ = {
  title: "Which American political scandal are you? Take this quiz to find out",
  dek: "Obamna son or SODAAAA daughter?",
  author: "Campbell Klecatsky",
  role: "Banter Associate Editor",
  date: "October 27, 2026",
  image: "/stories/banter-scandal-quiz.jpeg",
  imageAlt:
    "Collage of a monkey with a finger to its lips, deep in thought, beside thought bubbles showing a map relabeled “Lake America,” a man in mittens seated on a folding chair and a smiling man in a suit, with cartoon people holding “VOTE” signs below.",

  intro: [
    `It’s election season once more in Wisconsin, and this time comes with its fair share of trials and tribulations. Your friends who study political science have entered your nightmare blunt rotation, your neighbors’ yards have so many signs you suspect they’ve become victims of a senior prank and your all-too-active-on-Facebook uncle has apparently become an election analyst overnight.`,
    `For now, let’s leave the rest of the nation to argue about polls, candidates and the future of our democracy that is slowly crumbling as we speak. Instead, let’s revisit some political moments that brought us together, stopped us in our tracks and made us wonder whether staying a British colony would’ve been so bad after all.`,
    `American politics has given us no shortage of iconic moments, from Obama’s tan suit to the fly that landed on Mike Pence’s head. There was the Four Seasons Total Landscaping press conference, the Howard Dean scream and enough scandals to make you want to throw your phone into Lake Mendota and take a reflective walk down Lakeshore Path.`,
    `To be honest though, some of these incidents are a little too relatable.`,
    `Are you the type of person to double down on a bad decision? Or maybe you made one awkward comment five years ago and still wake up in a cold sweat thinking about it?`,
    `You might just have more in common with our amazing, spectacular, honest, heroic, brave politicians than you’d care to admit.`,
    `So take this quiz to find out which American political scandal, controversy or spectacular public embarrassment you are. Consider it an escape from election week and the people hounding you on Library Mall. No campaign donations required!`,
  ],

  questions: [
    {
      q: "You’ve been caught doing something embarrassing. What’s your first instinct?",
      options: {
        A: "Launch an investigation into who told everyone what you did. Forget the mistake you made — we need to find the leak!",
        B: "Issue a carefully worded denial that hinges on a very specific definition of one important word. Technically you didn’t lie. Probably. Right?",
        C: "Insist everyone is overreacting! They act like you personally ended democracy. Have they considered getting a hobby?",
        D: "Deny it happened and keep doing it, but louder. Remember: you’re innocent until proven guilty by HD CCTV footage.",
      },
    },
    {
      q: "You’re in a relationship, and things are getting complicated. Which sentence sounds most like you?",
      options: {
        A: "“I’m not worried about the relationship. I’m worried about who knows about it.”",
        B: "“Well, how do you define ‘relationship’? And while we’re at it, how do you define ‛is’?”",
        C: "“We were always together. We just didn’t have a title yet. In fact, I’m changing our relationship status right now!”",
        D: "“We’re great in private. In public, we get escorted out.”",
      },
    },
    {
      q: "Your group chat is blowing up over a questionable message you sent. What’s your move?",
      options: {
        A: "Delete the messages, leave the chat and start investigating who took screenshots.",
        B: "Send a wordy paragraph defining the exact terms of what you said. You could get away with this on a technicality.",
        C: "Rename the group chat and act like nothing ever happened.",
        D: "Claim the screenshots are out of context, though the context makes everything worse.",
      },
    },
    {
      q: "Pick your ideal weekend plan.",
      options: {
        A: "A totally normal late-night errand that requires flashlights and a lookout.",
        B: "Dinner, and only dinner, with a coworker. Absolutely nothing else to discuss here.",
        C: "A dramatic makeover you insist is a matter of national importance.",
        D: "An evening at the theatre watching the newest off-Broadway show that’s come to your town.",
      },
    },
    {
      q: "How long will people remember what you’ve done?",
      options: {
        A: "Forever. It’s taught in every classroom, and the suffix is now used for every scandal.",
        B: "At least a few decades. You’ve been memorialized in a Beyoncé song, but one day you won’t be any more popular than Chester Arthur or William Harrison.",
        C: "It depends on who you ask. This is the only country in the world that’s subjected to it, so maybe just move to Canada?",
        D: "Until the next news cycle, but SNL will never forget what you have done.",
      },
    },
  ],

  results: {
    A: {
      title: "You’re Watergate",
      body: [
        `You got caught, and somehow your biggest concern is who caught you, not taking responsibility. You’re bugging phones, looking for a leak and turning a minor problem into a full-scale cover-up. You don’t believe in damage control. You believe in creating so much additional damage that nobody remembers the original crime.`,
      ],
      trait: "Your toxic trait: treating accountability like a personal attack.",
    },
    B: {
      title: "You’re the Clinton-Lewinsky Scandal",
      body: [
        `You believe the right wording can get you out of anything. A carefully chosen phrase, a conveniently narrow definition and suddenly the debate is about semantics instead of your actual behavior. But the more you explain what you <em>technically</em> meant, the more suspicious you sound. Maybe next time, skip the mental gymnastics and just answer the question.`,
      ],
      trait: "Your toxic trait: believing you can lawyer your way out of an awkward conversation.",
    },
    C: {
      title: "You’re the Gulf of America",
      body: [
        `You have the impressive ability to turn nothing into something. You love a rebrand, a dramatic announcement and the opportunity to insist you’ve changed the game, when really, you’ve just changed the name. You want everyone to celebrate your bold new vision, even if they're still trying to figure out why the old version needed fixing in the first place. And when people question why any of this matters, you accuse them of being non-believers who can’t see the bigger picture. Not every change is progress. Have you ever heard the saying “if it’s not broken, don’t fix it”?`,
      ],
      trait: "Your toxic trait: thinking a rebrand counts as personal growth.",
    },
    D: {
      title: "You’re Lauren Boebert at \"Beetlejuice\"",
      body: [
        `You went out for a normal night on the town and somehow turned it into a national news story. First, you denied it, then the footage dropped, and suddenly you’re apologizing, explaining and expecting everyone to move on. Unfortunately for you, the cameras were rolling, the internet is forever and your night at the theater might be more famous than the actual show. You can blame the atmosphere, the nic-sick or your situationship, but Pepperidge Farms always remembers. And unfortunately for you, it’s in HD.`,
      ],
      trait: "Your toxic trait: forgetting public places have other people in them.",
    },
  },

  outro: [
    `No matter what your results were, just remember there’s a little bit of political scandal in all of us. Maybe you’re a chronic overexplainer, a professional at making things worse or someone who thinks a fresh coat of paint will cover up all of their problems. At least your questionable decisions won’t end up in a congressional hearing!`,
    `So as Wisconsin heads into another election season, take a deep breath, drink some water and maybe think twice before bombarding your Instagram story with carousels. Democracy is stressful enough as it is! And if all else fails, remember: whatever terrible thing you did today…`,
    `DENY DENY DENY!!!`,
    `Accountability died a long time ago. E Pluribis Unum.`,
  ],
};

const LETTERS = ["A", "B", "C", "D"];

// Most-picked letter wins. On a tie, the tied letter you picked most
// recently wins (so your last answers act as the tiebreaker).
function computeResult(answers) {
  const counts = { A: 0, B: 0, C: 0, D: 0 };
  answers.forEach((a) => counts[a]++);
  const top = Math.max(...Object.values(counts));
  const tied = LETTERS.filter((l) => counts[l] === top);
  if (tied.length === 1) return tied[0];
  for (let i = answers.length - 1; i >= 0; i--) {
    if (tied.includes(answers[i])) return answers[i];
  }
  return tied[0];
}

const Html = ({ as: Tag = "p", html, className }) => (
  <Tag className={className} dangerouslySetInnerHTML={{ __html: html }} />
);

export default function Quiz() {
  // step 0 = intro, 1..N = questions, N+1 = results
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const topRef = useRef(null);

  const total = QUIZ.questions.length;

  // jump back to the top of the pop-up on every new slide
  useEffect(() => {
    const scroller = topRef.current?.closest(".sm-article");
    if (scroller) scroller.scrollTop = 0;
  }, [step]);

  const restart = () => {
    setAnswers([]);
    setStep(0);
  };

  /* ---------- Intro slide ---------- */
  if (step === 0) {
    return (
      <div ref={topRef} className="fx-body qz">
        <img className="qz-hero" src={QUIZ.image} alt={QUIZ.imageAlt} />
        <h2 className="qz-title">{QUIZ.title}</h2>
        <p className="qz-dek">{QUIZ.dek}</p>
        <p className="qz-byline">
          by <span className="qz-author">{QUIZ.author}</span>, {QUIZ.role} •{" "}
          {QUIZ.date}
        </p>
        {QUIZ.intro.map((p, i) => (
          <Html key={i} html={p} />
        ))}
        <div className="qz-nav">
          <span />
          <button className="qz-next" onClick={() => setStep(1)}>
            Next
          </button>
        </div>
      </div>
    );
  }

  /* ---------- Results ---------- */
  if (step > total) {
    const letter = computeResult(answers);
    const mine = QUIZ.results[letter];
    const others = LETTERS.filter((l) => l !== letter);

    return (
      <div ref={topRef} className="fx-body qz">
        <p className="qz-progress">Results!</p>
        <div className="qz-result">
          <p className="qz-result-label">Mostly {letter}'s</p>
          <h2 className="qz-result-title">{mine.title}</h2>
          {mine.body.map((p, i) => (
            <Html key={i} html={p} />
          ))}
          <p className="qz-trait">{mine.trait}</p>
        </div>

        <details className="qz-all">
          <summary>See the other results</summary>
          {others.map((l) => (
            <div key={l} className="qz-other">
              <h3>
                Mostly {l}'s: {QUIZ.results[l].title}
              </h3>
              {QUIZ.results[l].body.map((p, i) => (
                <Html key={i} html={p} />
              ))}
              <p className="qz-trait">{QUIZ.results[l].trait}</p>
            </div>
          ))}
        </details>

        <div className="qz-outro">
          {QUIZ.outro.map((p, i) => (
            <Html key={i} html={p} />
          ))}
        </div>

        <div className="qz-nav">
          <span />
          <button className="qz-next" onClick={restart}>
            Take it again
          </button>
        </div>
      </div>
    );
  }

  /* ---------- Questions ---------- */
  const qi = step - 1;
  const item = QUIZ.questions[qi];
  const picked = answers[qi];

  const pick = (letter) => {
    const next = [...answers];
    next[qi] = letter;
    setAnswers(next);
  };

  return (
    <div ref={topRef} className="fx-body qz">
      <p className="qz-progress">
        Question {step} of {total}
      </p>
      <h2 className="qz-question">{item.q}</h2>

      <div className="qz-options" role="group" aria-label={`Question ${step}`}>
        {LETTERS.map((l) => (
          <button
            key={l}
            className={`qz-option ${picked === l ? "is-selected" : ""}`}
            aria-pressed={picked === l}
            onClick={() => pick(l)}
          >
            <span className="qz-letter">{l}.</span> {item.options[l]}
          </button>
        ))}
      </div>

      <div className="qz-nav">
        <button className="qz-back" onClick={() => setStep(step - 1)}>
          Back
        </button>
        <button
          className="qz-next"
          disabled={!picked}
          onClick={() => setStep(step + 1)}
        >
          {step === total ? "See my result" : "Next"}
        </button>
      </div>
    </div>
  );
}