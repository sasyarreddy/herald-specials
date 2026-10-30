// Text in [brackets] with the "vg-todo" style is a placeholder.
// Fill it in from an official source before publishing.

export default function VoterGuide() {
  return (
    <div className="fx-body vg">
      <header className="vg-hero">
        <p className="vg-kicker">Election Day</p>
        <h2 className="vg-title">Tuesday, Nov. 3</h2>
        <p className="vg-lede">
          Everything you need to cast your ballot in Wisconsin, in one place.
        </p>
      </header>

      <ol className="vg-steps">
        <li className="vg-step vg-step--coral">
          <span className="vg-num">1</span>
          <h3>Register</h3>
          <p className="vg-todo">
            [Registration deadlines and how students can register.]
          </p>
        </li>
        <li className="vg-step vg-step--blue">
          <span className="vg-num">2</span>
          <h3>Bring your ID</h3>
          <p className="vg-todo">[Which IDs are accepted, including student IDs.]</p>
        </li>
        <li className="vg-step vg-step--cream">
          <span className="vg-num">3</span>
          <h3>Find your polling place</h3>
          <p>
            Look up your polling place and preview your ballot at{" "}
            <a href="https://myvote.wi.gov">MyVote Wisconsin</a>.
          </p>
        </li>
      </ol>

      <section className="vg-section">
        <h3>On the ballot in Madison</h3>
        <ul className="vg-list">
          <li>
            <strong>Governor:</strong> David Crowley (D) and Tom Tiffany (R)
          </li>
          <li>Lieutenant Governor, Attorney General, Secretary of State and State Treasurer</li>
          <li>U.S. House, District 2</li>
          <li>Wisconsin State Assembly, District 76 or 77</li>
          <li>Dane County offices</li>
          <li>
            <strong>Three constitutional amendments:</strong> the governor’s
            partial veto, closing places of worship during emergencies, and
            government discrimination or preferential treatment
          </li>
        </ul>
        <p className="vg-note">Based on Badger Herald reporting.</p>
      </section>

      <section className="vg-section vg-callout">
        <h3>Read up before you vote</h3>
        <p>
          Nonpartisan guides like <a href="https://www.vote411.org">Vote411.org</a>{" "}
          and <a href="https://ballotpedia.org/Main_Page">Ballotpedia</a> list
          candidates’ positions, and{" "}
          <a href="https://myvote.wi.gov">MyVote Wisconsin</a> shows your exact
          ballot.
        </p>
      </section>
    </div>
  );
}
