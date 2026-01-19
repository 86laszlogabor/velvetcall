import Link from "next/link";

export const metadata = {
  title: "Policy | VelvetCall",
  description:
    "How VelvetCall works: privacy, cookies, affiliate links, and responsibility — explained in plain language.",
};

function Card({
  title,
  hint,
  children,
}: {
  title: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="pick" style={{ overflow: "hidden" }}>
      <div className="pick-head">
        <h3 className="pick-title" style={{ margin: 0 }}>
          {title}
        </h3>
        {hint ? (
          <div className="fineprint" style={{ margin: 0 }}>
            {hint}
          </div>
        ) : null}
      </div>
      <div className="pick-body">{children}</div>
    </div>
  );
}

function SectionTitle({ title, hint }: { title: string; hint?: string }) {
  return (
    <div className="section-title">
      <h2>{title}</h2>
      {hint ? <div className="hint">{hint}</div> : null}
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return <span className="pilltag">{children}</span>;
}

export default function PolicyPage() {
  return (
    <main className="site-main">
      <section className="hero" aria-label="Policy overview">
        <div className="container">
          <div className="hero-left" style={{ maxWidth: "none" }}>
            <span className="kicker">
              Not a legal maze. A straight explanation of privacy, rules, and responsibility.
            </span>

            <h1>VelvetCall — How we work</h1>

            <p className="lead">
              On VelvetCall, a clean deal matters more than poker or casino. This page explains what we do with
              data, what we don’t do, and where responsibility sits when you choose to play.
            </p>

            <div className="meta-row" aria-label="Metadata">
              <span>
                Effective: <code>2026-01-01</code>
              </span>
              <span>
                Contact: <code>contact@velvetcall.com</code>
              </span>
            </div>

            <div className="cta-row" style={{ marginTop: 14 }} aria-label="Primary actions">
              <Link className="btn primary" href="/partners">
                See partners
              </Link>
              <Link className="btn ghost" href="/responsible-play">
                Responsible play
              </Link>
            </div>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 14 }}>
              <Pill>Affiliate disclosure</Pill>
              <Pill>18+</Pill>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-label="Policy details">
        <div className="container">
          <SectionTitle
            title="Privacy & Rules (plain language)"
            hint="Short, practical, and readable — because people actually skip this."
          />

          <div className="picks-grid">
            <Card title="1) Who we are, and what we do" hint="Editorial, not operator">
              <p className="pick-sub" style={{ marginTop: 0 }}>
                VelvetCall is an independent editorial site. We publish reviews, compare platforms, explain how
                things work, and point out what to verify before you deposit.
              </p>
              <p className="pick-sub">
                <b>We are not a casino:</b> we don’t take deposits, accept bets, or process payments.
              </p>
              <p className="pick-sub" style={{ marginBottom: 0 }}>
                <b>We are not financial or gambling advisors:</b> what you read here is information and opinion,
                not personalized advice.
              </p>
            </Card>

            <Card title="2) Your data: minimal, not traded" hint="No broker behavior">
              <p className="pick-sub" style={{ marginTop: 0 }}>
                We dislike spam and data-brokers, so we avoid behaving like one.
              </p>
              <p className="pick-sub">
                <b>Minimal collection:</b> we only collect what most websites collect to operate and understand
                usage (e.g., basic, aggregated analytics).
              </p>
              <p className="pick-sub">
                <b>No selling:</b> we do not sell your personal data. Period.
              </p>
              <p className="pick-sub" style={{ marginBottom: 0 }}>
                <b>Contact:</b> if you email us at <span className="link">contact@velvetcall.com</span>, we use your
                email address only to reply and handle your request. You can ask us to delete your message history,
                unless we must keep something for legal/compliance reasons (rare).
              </p>
              <div className="fineprint" style={{ marginTop: 10 }}>
                We aim to comply with applicable data protection rules.
              </div>
            </Card>

            <Card title="3) Cookies" hint="Performance + understanding">
              <p className="pick-sub" style={{ marginTop: 0 }}>
                We may use cookies (and similar technologies) to keep the site working, improve performance, and
                understand which pages are useful.
              </p>
              <p className="pick-sub" style={{ marginBottom: 0 }}>
                If you don’t like cookies, you can disable them in your browser settings. The site should still
                work, though some features may degrade.
              </p>
            </Card>

            <Card title="4) Links and affiliate economics" hint="How the site stays alive">
              <p className="pick-sub" style={{ marginTop: 0 }}>
                Our articles link to third-party services.
              </p>
              <p className="pick-sub">
                <b>Affiliate links:</b> if you register or make a purchase via our links, we may earn a commission
                from the partner.
              </p>
              <p className="pick-sub">
                <b>Why this helps you:</b> commissions keep the site alive and allow us to publish free content.
              </p>
              <p className="pick-sub" style={{ marginBottom: 0 }}>
                <b>Objectivity:</b> commission does not buy our opinion. If something is bad, we will say so — even
                if the partner pays.
              </p>
            </Card>

            <Card title="5) Responsibility: your decision, your risk" hint="18+ and risk">
              <p className="pick-sub" style={{ marginTop: 0 }}>
                Gambling carries risk.
              </p>
              <p className="pick-sub">
                Our content is <b>18+</b>.
              </p>
              <p className="pick-sub">
                If you click out and play, you do so at your own discretion and responsibility.
              </p>
              <p className="pick-sub" style={{ marginBottom: 0 }}>
                VelvetCall is not responsible for losses, disputes, or technical issues on third-party sites. Those
                services run their own terms and systems.
              </p>
            </Card>

            <Card title="6) Intellectual property" hint="Credit where it’s due">
              <p className="pick-sub" style={{ marginTop: 0, marginBottom: 0 }}>
                Everything you read here is our work. If you want to reuse it, please credit{" "}
                <span className="link">velvetcall.com</span>. (Otherwise we get grumpy.)
              </p>
            </Card>
          </div>

          <div style={{ height: 16 }} />

          <div className="faq" aria-label="Policy FAQ">
            <details>
              <summary>Are you a casino or sportsbook?</summary>
              <div className="faq-body">
                No. VelvetCall is editorial. We don’t take deposits, accept bets, or process payments.
              </div>
            </details>

            <details>
              <summary>Do affiliate links change your verdict?</summary>
              <div className="faq-body">
                No. Commission doesn’t buy our opinion. If something is bad, we will say it.
              </div>
            </details>

            <details>
              <summary>How do I contact you?</summary>
              <div className="faq-body">
                Email us at <b>contact@velvetcall.com</b>.
              </div>
            </details>
          </div>

          <div className="fineprint" style={{ marginTop: 14 }}>
            This page is provided for transparency. For third-party terms, always check the partner’s official
            pages before depositing.
          </div>
        </div>
      </section>
    </main>
  );
}
