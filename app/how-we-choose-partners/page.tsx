import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About VelvetCall",
  description:
    "Why VelvetCall exists, how we choose partners, and what we will never claim or promise.",
};

export default function AboutPage() {
  return (
    <main className="site-main">
      <section className="section" aria-label="About VelvetCall">
        <div className="container">
          <div className="section-title">
            <h2>About VelvetCall</h2>
            <div className="hint">A small list. Clear reasons. Entertainment-first.</div>
          </div>

          <div
            style={{
              maxWidth: "78ch",
              lineHeight: 1.6,
              color: "rgba(255,255,255,0.86)",
            }}
          >
            <h3 style={{ marginTop: 6 }}>1. Why this exists</h3>
            <p>
              Poker and casino content online is usually one of two extremes: either noisy “bonus
              poster” pages, or forum threads that assume you already know the rules. VelvetCall is
              built for a third option: a short list, written in plain language, for people who want
              a clean setup and a smoother experience.
            </p>
            <p>
              VelvetCall is a business. Some links are affiliate links, and we may earn a commission
              if you sign up through them. That doesn’t mean “anything goes”. The point is simple:
              we keep the list small so we can keep it coherent and updated.
            </p>

            <h3>2. Why the list is short</h3>
            <p>
              We don’t try to cover every operator, every promo, or every country edge-case. That
              creates long pages and short memories. Instead, we focus on a handful of platforms and
              explain what people actually care about: the product experience, the payments, and the
              practical day-to-day flow.
            </p>

            <h4 style={{ marginBottom: 6 }}>What we prioritise</h4>
            <ul style={{ paddingLeft: 18, marginTop: 8 }}>
              <li style={{ marginBottom: 10 }}>
                <b>Simple onboarding.</b> Clear steps, minimal confusion, and a setup that works on
                mobile.
              </li>
              <li style={{ marginBottom: 10 }}>
                <b>Usable promos.</b> If an offer needs a spreadsheet to understand, it’s usually not
                worth your attention.
              </li>
              <li style={{ marginBottom: 10 }}>
                <b>Everyday usability.</b> A stable client, readable rules, and a product that feels
                built for real users — not just marketing.
              </li>
              <li>
                <b>Country-fit awareness.</b> Availability and rules vary by country. We flag region
                fit where we can and keep the tone straightforward.
              </li>
            </ul>

            <h3>3. Poker in 2026: what people actually want</h3>
            <p>
              Most players aren’t looking for grand theories. They want games that run, software
              that doesn’t fight them, and a place that feels enjoyable. That’s what we optimise for
              in our poker pages: speed, clarity, and a clean experience — especially for mobile
              players.
            </p>

            <h3>4. Crypto: a practical option, not a religion</h3>
            <p>
              Some platforms use crypto rails because they’re fast and simple to use once you’re set
              up. If you’re new to it, we treat it like a normal tool: explain the basics, keep
              terminology light, and point you toward the safest “do-this-first” steps.
            </p>
            <p>
              If crypto is not for you, that’s fine. VelvetCall is not here to convert anyone — it’s
              here to help you choose a setup that matches how you actually want to play.
            </p>

            <h3>5. What we are not</h3>
            <ul style={{ paddingLeft: 18, marginTop: 8 }}>
              <li style={{ marginBottom: 10 }}>
                <b>We don’t sell “winning systems”.</b> Poker and casino are entertainment. If you
                want guarantees, you’re in the wrong place.
              </li>
              <li style={{ marginBottom: 10 }}>
                <b>We don’t do hype.</b> No “best deals”, no miracle claims, no pressure tactics.
              </li>
              <li>
                <b>We don’t pretend every brand fits every country.</b> Region rules and eligibility
                can change; always follow local rules and operator terms.
              </li>
            </ul>

            <h3 style={{ marginTop: 18 }}>6. Contact & corrections</h3>
            <p>
              If you spot something that looks outdated, or you want a quick confirmation before
              you sign up, use the Contact page. We’d rather fix a page than “win” an argument.
            </p>

            <div className="fineprint" style={{ marginTop: 16 }}>
              Updated: <code>2026-01-16</code>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
