import "./Footer.css";

const SOCIALS = [
  { label: "Facebook",   href: "https://www.facebook.com/badgerherald" },
  { label: "Instagram",  href: "https://www.instagram.com/badgerherald" },
  { label: "X",          href: "https://x.com/badgerherald" },
  { label: "TikTok",     href: "https://www.tiktok.com/@badger_herald" },
  { label: "YouTube",    href: "https://www.youtube.com/user/badgerherald" },
  { label: "Newsletter", href: "https://mailchi.mp/ad5ea093b0cf/badgerherald" },
];

export default function Footer() {
  return (
    <footer className="ft">
      <div className="ft-inner">
        <div className="ft-top">
          <a className="ft-logo" href="https://badgerherald.com/">
            <img src="/logo.png" alt="The Badger Herald" />
          </a>

          <address className="ft-address">
            152 W. Johnson St., Suite 202
            <br />
            Madison, WI 53703
          </address>
        </div>

        <nav className="ft-social" aria-label="The Badger Herald on social media">
          {SOCIALS.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener">
              {s.label}
            </a>
          ))}
        </nav>

        <p className="ft-more">
          Read more at <a href="https://badgerherald.com/">badgerherald.com</a>
        </p>
      </div>
    </footer>
  );
}
