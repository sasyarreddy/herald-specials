import "./EditorLetter.css";

export default function EditorLetter() {
  return (
    <section className="el" aria-labelledby="el-title">
      <div className="el-box">
        <div className="el-text">
          <p className="el-kicker">Letter from the Editor</p>
          <h2 id="el-title" className="el-title">
            Democracy depends on you
          </h2>
          <p className="el-byline">
            by <span className="el-author">Anja Breiehagen</span>, Editor-in-Chief
          </p>

          <div className="el-body">
            <p>Dear Reader,</p>
            <p>
              As October comes to a close, I hope you are doing well, I hope
              you’ve taken time to appreciate the beautiful fall colors around
              us and I hope you are excited about your Halloween costume!
            </p>
            <p>Most importantly, though, I hope you have a plan to vote.</p>
            <p>
              I’m sure this isn’t the first time you’ve heard that. From the ads
              to the flyers to the stands on Library Mall, it’s hard to miss the
              “go vote” message, and it is important to listen to it.
            </p>
            <p>
              Wherever you stand on the political spectrum, you should be
              concerned that the health of democracy in the U.S. is{" "}
              <a href="https://www.pewresearch.org/short-reads/2026/04/15/multiple-indicators-show-a-decline-in-the-health-of-americas-democracy-in-2025/">
                declining
              </a>
              . I urge you to look beyond party lines and vote in favor of
              democracy — it is not guaranteed, and it is our job to preserve
              and strengthen it.
            </p>
            <p>
              We are grateful to have you as a reader of The Badger Herald, and
              are grateful we can produce independent, objective news coverage.
              That is not guaranteed either. The current administration's{" "}
              <a href="https://www.npr.org/2026/10/22/nx-s1-6012340/trumps-attacks-on-the-press-have-become-a-war">
                attacks
              </a>{" "}
              on the press should scare everyone, regardless of political
              affiliation. I implore you to remember the importance of a free
              press when you cast your vote.
            </p>
            <p>
              Vote not just for yourself, but for your neighbor, community and
              nation. We’re all in this together.
            </p>
            <p className="el-signoff">Sincerely,</p>
            <p className="el-signature">Anja Breiehagen</p>
            <p className="el-ps">
              P.S. Follow{" "}
              <a href="https://www.instagram.com/thebadgerherald/">
                @thebadgerherald
              </a>{" "}
              on Instagram.
            </p>
          </div>
        </div>

        <div className="el-photo">
          <img
            src="/stories/editor-letter.jpeg"
            alt="A “City of Madison Polling Place” sign with an American flag stands on a pole in front of a stone wall."
          />
        </div>
      </div>
    </section>
  );
}
