import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Casino | VelvetCall",
  description:
    "Casino and sportsbook as entertainment — clear expectations, practical checks, and a curated shortlist.",
};

function Pill({ children }: { children: React.ReactNode }) {
  return <span className="pilltag">{children}</span>;
}

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

/**
 * TODO: Replace these with your real affiliate tracking links once you have them.
 * Keep them as full URLs. Do not shorten.
 */
const BETSAFE_AFFILIATE_URL = ""; // e.g. "https://your-tracking-link-for-betsafe"
const LEOVEGAS_AFFILIATE_URL = ""; // e.g. "https://your-tracking-link-for-leovegas"

function PrimaryOutbound({ href, label }: { href: string; label: string }) {
  return (
    <a
      className="btn primary"
      href={href}
      target="_blank"
      rel="nofollow sponsored noopener"
    >
      {label}
    </a>
  );
}

function MiniChecklist({
  items,
  title = "Quick Start Checklist",
}: {
  items: string[];
  title?: string;
}) {
  return (
    <div
      style={{
        border: "1px solid rgba(255,255,255,0.10)",
        borderRadius: 14,
        padding: 14,
        marginTop: 12,
        background: "rgba(255,255,255,0.03)",
      }}
      aria-label={title}
    >
      <div className="fineprint" style={{ margin: 0, fontWeight: 600 }}>
        {title}
      </div>
      <ul style={{ margin: "10px 0 0", paddingLeft: 18 }}>
        {items.map((it, idx) => (
          <li key={idx} style={{ margin: "6px 0" }}>
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function CasinoPage() {
  const betsafeHasLink =
    typeof BETSAFE_AFFILIATE_URL === "string" &&
    BETSAFE_AFFILIATE_URL.trim().length > 0;
  const leovegasHasLink =
    typeof LEOVEGAS_AFFILIATE_URL === "string" &&
    LEOVEGAS_AFFILIATE_URL.trim().length > 0;

  return (
    <main className="site-main">
      <section className="hero" aria-label="Casino overview">
        <div className="container">
          <div className="hero-left" style={{ maxWidth: "none" }}>
            <span className="kicker">
              Casino and sportsbook as entertainment — clear expectations, practical checks, no hype.
            </span>

            <h1>Casino</h1>

            <p className="lead">
              VelvetCall is editorial. We don’t take deposits, place bets, or process payments.
              We link out and highlight what to verify before you spend money — especially from EU.
            </p>

            <div className="cta-row" aria-label="Primary actions">
              <Link className="btn primary" href="/partners">
                See partners
              </Link>
              <Link className="btn ghost" href="/policy">
                Policy
              </Link>
            </div>

            <div className="meta-row" aria-label="Metadata">
              <span>
                Updated: <code>2026-01-16</code>
              </span>
              <span>
                Scope: <code>EU</code> (country-fit flagged)
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =======================
          BETSAFE
         ======================= */}
      <section className="section" aria-label="BetSafe">
        <div className="container">
          <SectionTitle
            title="BetSafe"
            hint="Mainstream sportsbook + casino with standard verification, limits, and account controls. Always confirm local availability and operator details for your country."
          />

          <div className="picks-grid">
            <Card
              title="BetSafe — mainstream sportsbook + casino, built for repeat use"
              hint="Sportsbook + Casino"
            >
              <p className="pick-sub">
                BetSafe is positioned for people who want a familiar sportsbook + casino flow:
                clear navigation, standard payments, and an account setup that expects verification when it matters.
                The value is operational clarity — fewer surprises around limits, eligibility, and withdrawals.
              </p>

              <p className="pick-sub">
                Expect the usual portfolio: pre-match and live sports betting, slots, and live casino.
                Promotions are optional. If you opt in, withdrawals may be delayed by bonus audits (wagering, max bet rules, time limits).
                If you want fewer constraints, skip promos and play with cash balance only.
              </p>

              <MiniChecklist
                items={[
                  "Availability for EU and the exact local terms shown during signup.",
                  "Withdrawal/KYC expectations: assume standard verification can trigger at first meaningful cashout.",
                  "Promo terms (only if you take them): wagering, time limits, max bet, restricted games.",
                  "Payment method consistency: depositing and withdrawing with the same method usually reduces reviews.",
                ]}
              />

              <div className="pick-actions" style={{ marginTop: 14 }}>
                {betsafeHasLink ? (
                  <PrimaryOutbound href={BETSAFE_AFFILIATE_URL} label="Play on BetSafe" />
                ) : (
                  <Link className="btn primary" href="/partners#betsafe">
                    Partner details
                  </Link>
                )}

                <Link className="btn ghost" href="/promotions">
                  Promotions (read the terms)
                </Link>
              </div>

              <div className="fineprint" style={{ marginTop: 10 }}>
                18+. Eligibility and availability vary by country. Always verify terms before depositing.
              </div>
            </Card>

            <Card title="VelvetCall Verdict" hint="Editorial">
              <div
                style={{
                  display: "flex",
                  gap: 10,
                  flexWrap: "wrap",
                  marginTop: 0,
                  marginBottom: 12,
                }}
              >
                <Pill>Mainstream operations</Pill>
                <Pill>Sportsbook + Casino</Pill>
                <Pill>Limits & account controls</Pill>
              </div>

              <p className="pick-sub" style={{ marginTop: 0 }}>
                BetSafe fits users who want a conventional, policy-led platform where the rules are explicit and consistent with
                standard industry practice (verification, limits, promo conditions). If your priority is “no-friction, no-terms” play,
                treat bonuses as optional and focus on cash balance sessions.
              </p>

              <div className="pick-actions" style={{ marginTop: 14 }}>
                {betsafeHasLink ? (
                  <PrimaryOutbound href={BETSAFE_AFFILIATE_URL} label="Open BetSafe" />
                ) : (
                  <Link className="btn primary" href="/partners#betsafe">
                    View BetSafe details
                  </Link>
                )}
                <Link className="btn ghost" href="/policy">
                  Read policy
                </Link>
              </div>
            </Card>
          </div>

          <div style={{ height: 14 }} />

          <div className="faq" aria-label="BetSafe details">
            <details>
              <summary>What should you verify before depositing?</summary>
              <div className="faq-body">
                <p style={{ margin: 0 }}>
                  Before you deposit, verify these four items. They prevent the most common withdrawal delays:
                </p>

                <p style={{ margin: "10px 0 0" }}>
                  <b>Country availability:</b> confirm EU access and read the local terms shown at signup.
                </p>
                <p style={{ margin: "10px 0 0" }}>
                  <b>Promo terms (optional):</b> wagering requirement, time limit, max bet while bonused, restricted games.
                  If you don’t want constraints, skip promos.
                </p>
                <p style={{ margin: "10px 0 0" }}>
                  <b>Verification:</b> assume standard KYC can trigger at first meaningful withdrawal. Keep ID and a recent address proof available.
                </p>
                <p style={{ margin: "10px 0 0" }}>
                  <b>Payments:</b> using the same method for deposits and withdrawals typically reduces manual reviews.
                </p>

                <div className="pick-actions" style={{ marginTop: 14 }}>
                  {betsafeHasLink ? (
                    <PrimaryOutbound href={BETSAFE_AFFILIATE_URL} label="Continue to BetSafe" />
                  ) : (
                    <Link className="btn primary" href="/partners#betsafe">
                      Partner details
                    </Link>
                  )}
                  <Link className="btn ghost" href="/promotions">
                    Promo terms overview
                  </Link>
                </div>
              </div>
            </details>

            <details>
              <summary>Responsible gaming: what tools matter in practice?</summary>
              <div className="faq-body">
                <p style={{ margin: 0 }}>
                  The tools that usually matter are the simple ones you can set once and keep:
                  deposit limits, loss limits, session/time limits, and cool-off/self-exclusion.
                </p>
                <p style={{ margin: "10px 0 0" }}>
                  Set limits while you’re calm. If you wait for a bad night, you’ll set them too late or not at all.
                </p>
              </div>
            </details>

            <details>
              <summary>Who do we recommend BetSafe to?</summary>
              <div className="faq-body">
                <p style={{ margin: 0 }}>
                  For players who want a mainstream sportsbook + casino with standard rails, clear account controls,
                  and predictable verification steps — not a crypto-native “speed-only” experience.
                </p>

                <div className="pick-actions" style={{ marginTop: 14 }}>
                  {betsafeHasLink ? (
                    <PrimaryOutbound href={BETSAFE_AFFILIATE_URL} label="Open BetSafe" />
                  ) : (
                    <Link className="btn primary" href="/partners#betsafe">
                      View BetSafe details
                    </Link>
                  )}
                  <Link className="btn ghost" href="/partners">
                    Compare partners
                  </Link>
                </div>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* =======================
          LEOVEGAS
         ======================= */}
      <section className="section" aria-label="LeoVegas">
        <div className="container">
          <SectionTitle
            title="LeoVegas"
            hint="Mobile-focused casino UX with standard payment rails and verification. Always confirm local availability and the exact payment methods shown in your market."
          />

          <div className="picks-grid">
            <Card
              title="LeoVegas — a mobile-focused casino experience"
              hint="Casino (mobile)"
            >
              <p className="pick-sub">
                LeoVegas is oriented around phone-first sessions: fast game discovery, quick navigation, and an interface that stays readable
                without turning into a menu maze. If you mostly play on mobile, the usability difference is practical: fewer taps, fewer dead ends,
                and a smoother banking-to-game flow.
              </p>

              <p className="pick-sub">
                Payments are typically standard rails (cards, e-wallets, bank transfer solutions depending on country).
                If your requirement is a crypto-native workflow, this is not that model.
              </p>

              <MiniChecklist
                title="Fast Payout Hygiene"
                items={[
                  "Confirm payment methods available in your country before depositing.",
                  "Assume standard verification can trigger at withdrawal; keep digital ID/address proof ready.",
                  "If you take promos: follow max bet and time limits precisely, or expect bonus reviews.",
                  "Prefer deposit/withdraw with the same method when possible.",
                ]}
              />

              <div className="pick-actions" style={{ marginTop: 14 }}>
                {leovegasHasLink ? (
                  <PrimaryOutbound href={LEOVEGAS_AFFILIATE_URL} label="Play on LeoVegas" />
                ) : (
                  <Link className="btn primary" href="/partners#leovegas">
                    Partner details
                  </Link>
                )}

                <Link className="btn ghost" href="/promotions">
                  Promotions (read the terms)
                </Link>
              </div>

              <div className="fineprint" style={{ marginTop: 10 }}>
                18+. Eligibility and availability vary by country. Always verify terms before depositing.
              </div>
            </Card>

            <Card title="VelvetCall Verdict" hint="Editorial">
              <div
                style={{
                  display: "flex",
                  gap: 10,
                  flexWrap: "wrap",
                  marginTop: 0,
                  marginBottom: 12,
                }}
              >
                <Pill>Mobile-first sessions</Pill>
                <Pill>Cards + e-wallets</Pill>
                <Pill>Standard verification</Pill>
              </div>

              <p className="pick-sub" style={{ marginTop: 0 }}>
                LeoVegas is a strong fit if you care about mobile usability and you’re comfortable with normal verification steps at withdrawal.
                The main “friction lever” is promos: they can add constraints and reviews. If you want a cleaner cashout path,
                treat promos as optional and keep sessions straightforward.
              </p>

              <div className="pick-actions" style={{ marginTop: 14 }}>
                {leovegasHasLink ? (
                  <PrimaryOutbound href={LEOVEGAS_AFFILIATE_URL} label="Open LeoVegas" />
                ) : (
                  <Link className="btn primary" href="/partners#leovegas">
                    View LeoVegas details
                  </Link>
                )}
                <Link className="btn ghost" href="/policy">
                  Read policy
                </Link>
              </div>
            </Card>
          </div>

          <div style={{ height: 14 }} />

          <div className="faq" aria-label="LeoVegas details">
            <details>
              <summary>What does “mobile-focused” mean in practice?</summary>
              <div className="faq-body">
                <p style={{ margin: 0 }}>
                  In practice it means: clearer navigation on small screens, fewer broken UI states, and faster access to banking and live casino.
                  If you play short sessions and you’re mostly on phone, this matters more than marketing slogans.
                </p>
              </div>
            </details>

            <details>
              <summary>Verification reality: what should you prepare?</summary>
              <div className="faq-body">
                <p style={{ margin: 0 }}>
                  Assume verification can trigger at first meaningful withdrawal. Keep:
                  <b> an ID</b> and <b>a recent address proof</b> accessible (digital copies are typically sufficient).
                  Also try to keep deposit and withdrawal methods consistent when possible.
                </p>

                <div className="pick-actions" style={{ marginTop: 14 }}>
                  <Link className="btn ghost" href="/policy">
                    Why KYC exists
                  </Link>
                  <Link className="btn ghost" href="/promotions">
                    Promo rules overview
                  </Link>
                </div>
              </div>
            </details>

            <details>
              <summary>Promos: a practical tip for faster payouts</summary>
              <div className="faq-body">
                <p style={{ margin: 0 }}>
                  Most “can’t withdraw yet” situations come from unfinished wagering or promo rule violations (max bet, restricted games, time limit).
                  If you want fewer constraints, skip promos. If you take them, follow the terms exactly.
                </p>

                <div className="pick-actions" style={{ marginTop: 14 }}>
                  {leovegasHasLink ? (
                    <PrimaryOutbound href={LEOVEGAS_AFFILIATE_URL} label="Continue to LeoVegas" />
                  ) : (
                    <Link className="btn primary" href="/partners#leovegas">
                      Partner details
                    </Link>
                  )}
                  <Link className="btn ghost" href="/partners">
                    Compare partners
                  </Link>
                </div>
              </div>
            </details>

            <details>
              <summary>Who do we recommend LeoVegas to?</summary>
              <div className="faq-body">
                <p style={{ margin: 0 }}>
                  For players who want a clean mobile casino experience with standard payment rails, and who prefer straightforward verification
                  rather than niche payment workflows.
                </p>

                <div className="pick-actions" style={{ marginTop: 14 }}>
                  {leovegasHasLink ? (
                    <PrimaryOutbound href={LEOVEGAS_AFFILIATE_URL} label="Open LeoVegas" />
                  ) : (
                    <Link className="btn primary" href="/partners#leovegas">
                      View LeoVegas details
                    </Link>
                  )}
                  <Link className="btn ghost" href="/partners">
                    See all partners
                  </Link>
                </div>
              </div>
            </details>
          </div>
        </div>
      </section>
    </main>
  );
}
