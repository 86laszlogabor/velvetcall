import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div>
            <h4>Responsible play</h4>
            <p className="footer-links">
              Gambling should stay entertainment. Use limits, take breaks, and stop if it stops being fun.
              <br />
              VelvetCall is an entertainment-first guide. Availability and rules vary by country and provider.
            </p>
          </div>

          <div>
            <h4>Affiliate disclosure</h4>
            <p className="footer-links">
              Some links may be affiliate links. If you sign up through them, we may earn a commission.
              We don’t accept payments for changing our editorial stance.
            </p>
          </div>

          <div>
            <h4>Pages</h4>
            <p className="footer-links">
              <Link href="/about">About</Link> {" · "}
              <Link href="/contact">Contact</Link> {" · "}
              <Link href="/how-we-choose-partners">How we choose partners</Link>
              <br />
              <Link href="/responsible-play">Responsible play</Link> {" · "}
              <Link href="/policy">Policy</Link>
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} VelvetCall</span>
          <span>Entertainment-first guides</span>
        </div>
      </div>
    </footer>
  );
}
