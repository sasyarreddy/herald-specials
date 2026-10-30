// One list per button. Each key must match an `id` in SectionGrid's LINKS.
// Photos: put them in /public/stories/ and use paths like "/stories/my-photo.jpg".
// body: one string per paragraph.

const PLACEHOLDER_IMG = "https://placehold.co/1200x800/5b5fc7/fbf3e6?text=Photo";
const PLACEHOLDER_BODY = [
  "Paste the first paragraph of the article here.",
  "Each paragraph is its own string in this list.",
];

// Temporary filler so every button opens something. Replace with real stories.
const placeholders = (slug, name, count = 3) =>
  Array.from({ length: count }, (_, i) => ({
    id: `${slug}-${i + 1}`,
    title: `${name} story ${i + 1}`,
    author: "Staff Writer",
    role: "",
    date: "October 30, 2026",
    image: PLACEHOLDER_IMG,
    imageAlt: "",
    body: PLACEHOLDER_BODY,
  }));

export const STORIES = {
  opinion: [
    {
      id: "democracy-scroll",
      title: "Democracy deserves more than a scroll",
      author: "Kaitlyn Broderick",
      role: "Opinion Associate Editor",
      date: "October 27, 2026",
      image: PLACEHOLDER_IMG, // e.g. "/stories/democracy-scroll.jpg"
      imageAlt: "A hand holding a phone showing a news feed",
      body: PLACEHOLDER_BODY,
    },
    {
      id: "gender-clothes",
      title: "Stop stitching gender into our clothes",
      author: "Kaitlyn Broderick",
      role: "Opinion Associate Editor",
      date: "October 22, 2026",
      image: PLACEHOLDER_IMG, // e.g. "/stories/gender-clothes.jpg"
      imageAlt: "Plaid and pink shirts hanging on a clothing rack",
      body: PLACEHOLDER_BODY,
    },
  ],
  news: placeholders("news", "News"),
  science: placeholders("science", "Science"),
  feature: placeholders("feature", "Feature"),
  arts: placeholders("arts", "Arts"),
  sports: placeholders("sports", "Sports"),
  banter: placeholders("banter", "Banter"),
};
