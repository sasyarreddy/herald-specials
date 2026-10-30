// The Editorial Board's guide. Text may include <em>, <strong> and <a> links.
//
// Each entry in `races` becomes a white card (title + info), followed by a
// colored endorsement card when `endorsement` is given:
//   type "race"       → blue endorsement card
//   type "referendum" → red endorsement card
//   type "note"       → white card only (section intros, uncontested races)

export const GUIDE = {
  title: "The Badger Herald Editorial Board: Midterm election guide, endorsements",
  dek: "The Badger Herald Editorial Board provides election, candidate, referendum information and endorsements",
  author: "Badger Herald Editorial Board",
  date: "October 16, 2026",
  image: "/stories/opinion-endorsements.jpeg", // shown behind the box only

  races: [
    {
      type: "race",
      title:
        "Governor/Lt. Governor: David Crowley/Sarah Godlewski (D) vs Tom Tiffany/David Varnam (R)",
      info: [
        `The Wisconsin gubernatorial election is contested between the Democratic ticket of David Crowley and Sarah Godlewski and Republicans Tom Tiffany and David Varnam. Incumbent Democrat Tony Evers decided not to seek reelection. The governor of Wisconsin is the most powerful office in the state, wielding a powerful veto pen over legislation, and appoints members to many of Wisconsin’s agency boards, like the Department of Natural Resources. David Crowley emerged from a chaotic primary, while running mate Godlewski faced no challengers in hers. Tiffany faced little opposition in his primary, and Varnam beat his opponent. Crowley has served as the Milwaukee County executive since 2020, previously serving two terms in the state assembly. Tiffany has served in Congress as the representative of Wisconsin’s 7th district since 2020 as part of the far-right House Freedom Caucus.`,
      ],
      endorsement: [
        `We endorse David Crowley. His work as Milwaukee County Executive shows his ability to follow through on his promises, demonstrated through his work on affordable housing, public health and public safety in Milwaukee. We support Crowley’s pledge to raise the minimum wage, protect labor agreements and repeal Act 10 — Tiffany has voted and pledged to vote for policies that hurt the working class, like voting to weaken protection for victims of sexual harassment in the workplace, according to the <a href="https://milwaukeecourier.com/news/2026/09/03/crowley-vs-tiffany-a-stark-choice-for-wisconsins-working-class">Milwaukee Courier</a>. We are concerned by Tiffany’s stance on abortion — he supports bans at the state and federal level, even cosponsoring a 2023 bill in Congress to ban abortions nationwide after six weeks of pregnancy without exceptions for rape or incest, according to <a href="https://www.wpr.org/news/crowley-tiffany-abortion-issue-2026-election">WPR</a>. Crowley has pledged to protect abortion rights. Crowley’s policies outline expanding state housing programs and investing in affordable housing, while Tiffany supports relaxing housing regulations, which could harm students looking for affordable housing and renter’s protection. Crowley said he would protect existing LGBTQ+ rights, including access to gender-affirming care while Tiffany opposed gender-affirming medical treatment for minors and said public funding should not cover it, including for adults. With the U.S. already at a “fragile democracy” standing, we cannot afford to elect the election-denier Tom Tiffany. Tiffany was the only Wisconsin representative to support the lawsuit challenging Biden’s legitimate victory in the 2020 election, according to <a href="https://wisconsinwatch.org/2026/10/wisconsin-tom-tiffany-tried-to-overturn-2020-election-now-vows-to-certify-2028-results/">Wisconsin Watch</a>.`,
      ],
    },
    {
      type: "race",
      title: "Attorney General: Josh Kaul (D) vs Eric Toney (R)",
      info: [
        `The Wisconsin Attorney General election is contested between incumbent Democrat Josh Kaul and Republican Eric Toney. The Attorney General oversees the Wisconsin Department of Justice, responsible for investigating and prosecuting major crimes. Kaul is seeking a third term, having first been elected in 2018 and winning reelection in 2022. Toney was the district attorney for Fond du Lac county from 2012 to 2024.`,
      ],
      endorsement: [
        `We endorse Josh Kaul for Attorney General. Josh Kaul has repeatedly challenged the legislature in Wisconsin and the Federal government in an attempt to <a href="https://wisconsinwatch.org/2026/09/wisconsin-attorney-general-candidates-democrat-kaul-republican-toney-key-questions-stark-differences/">restore</a> funding for infrastructure and public schools. Kaul is a consistent advocate for mental health programs and continues to fight against initiatives attempting to dismiss mental health regimes. In July 2025, Kaul joined a lawsuit against the <a href="https://www.wisdoj.gov/PressReleases/07-01-2025-ed-mental-health.pdf">Department of Education</a> in retaliation for their budget cuts on mental health programs for K-12 schools. He stated that students need mental health funding in order to succeed in class. We align with Kaul’s viewpoint on mental health programs and its importance in education and the well-being of students.`,
      ],
    },
    {
      type: "race",
      title: "Secretary of State: JoCasta Zamarripa (D) vs Jay Schroeder (R)",
      info: [
        `The Wisconsin Secretary of State election is contested between Democrat JoCasta Zamarripa and Republican Jay Schroeder, with incumbent Sarah Godlewski having won the Democratic primary for Lieutenant Governor. The office has also had its powers drawn down, accelerated by former governor Scott Walker’s feud with Doug La Follette. The Secretary of State now primarily serves as the clerk of the government, keeping laws and records. Zamarripa currently serves on the Milwaukee Common Council, having previously served 10 years in the state assembly for District 8 in Milwaukee. Schroeder has advanced to a single election in four attempts, losing the Secretary of State election to La Follette in 2018 by 155 thousand votes.`,
      ],
      endorsement: [
        `We endorse JoCasta Zamarripa. Zampirra’s 10 years of experience in the State Assembly prove dedication to Wisconsin and its residents and we believe this experience will inform her advocacy for cost-of-living and worker’s rights and support her efforts toward modernizing the record-keeping office. We support Zamarripa’s commitment to maintaining the bipartisan Wisconsin Elections Commission — Schroeder is campaigning on moving the role of Chief Election Official back to the Secretary of State, according to <a href="https://ballotpedia.org/JoCasta_Zamarripa">Ballotpedia</a>. Zamarripa said that while the Secretary of State position is partisan, she will be honored to serve every Wisconsinite, regardless of party affiliation, according to the <a href="https://www.ehextra.com/news/zamarripa-pledges-modernization-advocacy-in-seeking-wisconsin-secretary-of-state-post/article_99a263b5-2336-4660-957c-c9580eb7aae0.html">EagleHerald</a>. Conversely, Schroeder describes himself as an “authentic MAGA activist,” according to the <a href="https://wisconsinexaminer.com/2026/08/11/maga-activist-who-wants-to-eliminate-elections-commission-wins-gop-nod-for-secretary-of-state/">Wisconsin Examiner</a>.`,
      ],
    },
    {
      type: "race",
      title: "State Treasurer: Yee Leng Xiong (D) vs John Leiber (R)",
      info: [
        `The Wisconsin State Treasurer election is contested between Democrat Yee Leng Xiong and incumbent Republican John Leiber. The State Treasurer has had its powers drawn down by the legislature since 1995, and mostly oversees the banking of the state. Xiong has served on the D.C. Everest Area school board since 2014 and has worked as the director of a nonprofit organization. Leiber is seeking a second term, winning election in 2022.`,
      ],
      endorsement: [
        `We endorse Yee Leng Xiong for State Treasurer. Xiong has made <a href="https://www.yeeforwi.vote/">transparency</a> in the management of public funds a centerpiece of his campaign, and he has spoken directly to the challenge of helping Wisconsin families build long-term economic security. His platform centers on expanding low-interest Trust Fund Loans for school construction and essential infrastructure. We share his commitment to Wisconsin families and to the schools they depend on.`,
      ],
    },
    {
      type: "note",
      title: "Representative in Congress District 2 (Uncontested): Mark Pocan (D)",
      info: [
        `The Wisconsin Second Congressional District is uncontested, with incumbent Democrat Mark Pocan set to return to Congress for his eighth term. Pocan first won the seat in 2012, succeeding at the time Senator Elect Tammy Baldwin.`,
      ],
    },
    {
      type: "note",
      title: "Representative to The Assembly",
      info: [
        `All State Assembly districts in student populated areas are expected to be won by the Democratic candidates. No State Senate elections are taking place around UW. This is the first full cycle of the State Senate under the new maps that were approved in 2024. Democrats are aiming to take both chambers after falling short of a majority in either in 2024.`,
        `Your ballot will vary based on your neighborhood. Districts with high student populations are listed below.`,
      ],
    },
    {
      type: "race",
      title: "State Assembly District 76: Dina Nina Martinez-Rutherford (D) vs Nina Chat (R)",
      info: [
        `District 76 is contested between Democrat Dina Nina Martinez-Rutherford and Republican Nina Chat for Francesca Hong’s seat, who lost a close primary to David Crowley in the Governor’s race. The district sits on the eastern portion of the isthmus, running from Capitol Square up to the airport and MATC downtown campus. Martinez-Rutherford is currently the Alderwoman for District 15 of the Madison Common Council and would be the first transgender state legislator in Wisconsin. Chat does not appear to have a campaign page or much public information available.`,
      ],
      endorsement: [
        `We endorse Dina Nina Martinez-Rutherford. Martinez-Rutherford has robust progressive <a href="https://www.votedinanina.com/policy">policy</a> solutions to increase affordability, expand healthcare and housing access, protect LGBTQ rights and abortion access, and fund public schools. We believe her experience as an Alder and her background in the service industry will prepare her to bring a fresh perspective to the State Assembly and help her to execute her clear plan for Wisconsin’s future.`,
      ],
    },
    {
      type: "race",
      title: "State Assembly District 77: Renuka Mayadev (D) vs Jane McCormick (R)",
      info: [
        `District 77 is contested between incumbent Democrat Renuka Mayadev and Republican Jane McCormick. The district includes the entirety of the UW campus, Shorewood Hills village and encompasses the Regent, Monroe, Greenbush and Vilas neighborhoods off campus. Mayadev won the seat in 2024 after emerging from a crowded primary field. McCormick is a real estate broker who has not previously held office.`,
      ],
      endorsement: [
        `We endorse Renuka Mayadev. We align with Mayadev’s <a href="https://mayadevforwi.com/">vision</a> for protecting reproductive freedom, strengthening public schools, supporting climate justice and improving access to healthcare. Mayadev’s commitment to advocacy and her work in the Assembly makes us confident that she will continue to support the district that includes our campus.`,
      ],
    },
    {
      type: "race",
      title: "State Assembly District 78: Sheila Stubbs (D) vs Henry Johnson (R)",
      info: [
        `District 78 is contested between incumbent Democrat Sheila Stubbs and Republican Henry Johnson. The district starts south of Haywood Drive, extending to the southwestern edge of Madison, including all of Monona. Stubbs has served in the Assembly since 2019, moving districts in 2024 after the previous district maps were thrown out by the Wisconsin Supreme Court. Johnson is a college student at UW, according to <a href="https://isthmus.com/news/news/august-2026-primary-isthmus-voter-guide/">The Isthmus</a>.`,
      ],
      endorsement: [
        `We endorse Sheila Stubbs. We believe in Stubbs’ <a href="https://www.sheliastubbsforassembly.com/issues">goals</a> of supporting criminal justice reform, increasing access to healthcare and protecting Wisconsin’s environment. Stubbs’ record in the Assembly proves she knows how to work across party lines to create effective legislation, and we are confident in her ability to continue to make progress for the Madison area.`,
      ],
    },
    {
      type: "note",
      title: "Dane County Sheriff (Uncontested): Kalvin Barrett (D)",
      info: [
        `The Dane County Sheriff election is uncontested, with incumbent Democrat Kalvin Barrett set to retain the office. The County Sheriff is responsible for overseeing the county sheriff department. Barrett was first elected in 2022, having previously served as an officer in the Sun Prairie police department and the Dane County Sheriff's Office.`,
      ],
    },
    {
      type: "note",
      title: "Dane County Clerk of the Circuit Court (Uncontested): Jeff Okazaki (D)",
      info: [
        `The Dane County Clerk of the Circuit Court election is uncontested, with incumbent Democrat Jeff Okazaki poised to take the office. The Clerk of the Circuit Court handles the records of the court and manages the jury selection system. Okazaki was appointed to the position by Governor Tony Evers in 2023 before being elected to the post by voters in 2024.`,
      ],
    },
    {
      type: "note",
      title: "Referendums",
      info: [
        `Besides the previously stated candidates, there will be three Republican-led state constitutional amendments on your ballot this November. Wisconsin is one of 24 states that do not have initiative and referendum, according to <a href="https://ballotpedia.org/Signature_requirements_for_ballot_measures_in_Wisconsin">Ballotpedia</a>. This means Wisconsin is a state that doesn’t allow citizens to place constitutional amendments on the ballot through a direct initiative or petition process.`,
        `Now what do these referendums really mean? The following interpretations of these referendums came from <a href="https://wisconsinwatch.org/2026/09/wisconsin-constitutional-amendments-election-ballot-governor-veto-power-religious-gatherings-dei/">Wisconsin Watch</a>.`,
      ],
    },
    {
      type: "referendum",
      title: "Question 1: Partial veto",
      info: [
        `Shall section 10 (1) (c) of article V of the constitution be amended to prohibit the governor, in exercising his or her partial veto authority, from creating or increasing or authorizing the creation or increase of any tax or fee?`,
      ],
      endorsement: [
        `We encourage voters to vote no because the amendment is aimed at diminishing the powers of the Governor’s veto pen on a partisan basis. Evers used the veto pen to edit the state budget in 2023 to increase funding for public schools for 400 years. Republicans sued over the use of the pen, and the case found its way to the Wisconsin Supreme Court, which ruled in Evers favor. Reform to the veto pen should be on a bipartisan basis, not on sour partisan grapes.`,
      ],
    },
    {
      type: "referendum",
      title: "Question 2: Freedom to gather in places of worship during an emergency",
      info: [
        `Shall section 18 of Article I of the Constitution, which deals with religious liberty, be amended to prohibit the state or a political subdivision of the state from ordering the closure of, or forbidding gatherings in, places of worship in response to a state of emergency, including a public health emergency?`,
      ],
      endorsement: [
        `We encourage voters to vote no because the constitutional amendment would weaken public healthcare policy in the future referring to emergencies like Covid-19.`,
      ],
    },
    {
      type: "referendum",
      title: "Question 3: Governmental entity discrimination prohibited",
      info: [
        `Shall section 27 of Article I of the Constitution be created to prohibit governmental entities in the state from discriminating against, or granting preferential treatment to, any individual or group on the basis of race, sex, color, ethnicity, or national origin in public employment, public education, public contracting, or public administration?`,
      ],
      endorsement: [
        `We encourage voters to vote no because the amendment would limit opportunities for disadvantaged groups and intends to weaken the individual rights and liberties of Americans regardless of Civil Rights laws. We believe the language of the question is intentionally trying to confuse the voters and it is actually targeting DEI related efforts.`,
      ],
    },
  ],
};

const Html = ({ as: Tag = "p", html, className }) => (
  <Tag className={className} dangerouslySetInnerHTML={{ __html: html }} />
);

export default function VoterGuide() {
  return (
    <div className="fx-body vgx">
      <h2 className="vgx-title">{GUIDE.title}</h2>
      <p className="vgx-dek">{GUIDE.dek}</p>
      <p className="vgx-byline">
        by <span className="vgx-author">{GUIDE.author}</span> • {GUIDE.date}
      </p>

      {GUIDE.races.map((r, i) => (
        <section key={i} className={`vgx-item vgx-item--${r.type}`}>
          <div className="vgx-info">
            <h3>{r.title}</h3>
            {r.info.map((p, j) => (
              <Html key={j} html={p} />
            ))}
          </div>
          {r.endorsement && (
            <div className="vgx-endorse">
              <p className="vgx-label">Endorsement:</p>
              {r.endorsement.map((p, j) => (
                <Html key={j} html={p} />
              ))}
            </div>
          )}
        </section>
      ))}
    </div>
  );
}