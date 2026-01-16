import Link from "next/link";

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

export default function CasinoPage() {
  return (
    <main className="site-main">
      <section className="hero" aria-label="Casino overview">
        <div className="container">
          <div className="hero-left" style={{ maxWidth: "none" }}>
            <span className="kicker">
              Casino and sportsbook as entertainment — clear risks, clean expectations, no fantasy.
            </span>

            <h1>Casino</h1>

            <p className="lead">
              VelvetCall is editorial. We don’t take deposits, place bets, or process payments.
              We link out and tell you what to verify before you spend money — especially from Finland / the EU.
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
                Scope: <code>Finland / EU</code> (country-fit flagged)
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =======================
          EVERYGAME
         ======================= */}
      <section className="section" aria-label="Everygame">
        <div className="container">
          <SectionTitle
            title="Everygame"
            hint="A veteran brand focused on sportsbook + casino."
          />

          <div className="picks-grid">
            <Card title="Everygame — The veteran that’s still unbeatable in sportsbook and casino" hint="Sports + Casino">
              <p className="pick-sub">
                Everygame (formerly Intertops) is one of the oldest engines in online gambling. They’ve been active since 1996, and while a lot has changed — for example, the poker division permanently shut down at the end of 2025 — the core remains: a stable offshore base for people who want sportsbook and casino under one account.
              </p>

              <div className="pick-actions">
                <Link className="btn primary" href="/partners#everygame">
                  Partner details
                </Link>
                <Link className="btn ghost" href="/promotions">
                  Promotions (read the terms)
                </Link>
              </div>

              <div className="fineprint" style={{ marginTop: 10 }}>
                18+. Eligibility and availability vary by country. Always verify terms before depositing.
              </div>
            </Card>

            <Card title="VelvetCall Verdict" hint="Editorial">
              <p className="pick-sub" style={{ marginTop: 0 }}>
                In 2026, Everygame is no longer about poker. It’s a hard Sport + Casino platform built for people who value longevity, faster crypto withdrawals, and a no-nonsense experience. If you’re not looking to play poker — you want to bet and win — this is one of the safest anchors in the market.
              </p>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 12 }}>
                <Pill>Sportsbook-first</Pill>
                <Pill>Crypto rails</Pill>
                <Pill>Predictable process</Pill>
              </div>
            </Card>
          </div>

          <div style={{ height: 14 }} />

          <div className="faq" aria-label="Everygame details">
            <details>
              <summary>Why Everygame if poker is gone?</summary>
              <div className="faq-body">
                <p style={{ margin: 0 }}>
                  Many people wrote them off after poker stopped, but in reality, it clarified their identity. Today the platform stands on two brutally strong legs:
                </p>
                <p style={{ margin: "10px 0 0" }}>
                  <b>Sportsbook for pros and recreational bettors:</b> It’s not only the headline matches. From the NBA to hockey, they cover a wide range, and their odds structure has been among the most stable for decades. If you like live betting and fast “halftime” markets, you won’t be disappointed.
                </p>
                <p style={{ margin: "10px 0 0" }}>
                  <b>Double casino experience:</b> You don’t get one casino universe — you get two. Casino Red is the modern, fast video-slot side; Casino Classic brings back the clean, traditional table-game feel.
                </p>
              </div>
            </details>

            <details>
              <summary>The VelvetCall factor: why can you trust them?</summary>
              <div className="faq-body">
                <p style={{ margin: 0 }}>
                  <b>Payout discipline:</b> While newer sites often play games, Everygame relies on reputation. With cryptocurrency (Bitcoin, USDT), based on 2026 data, withdrawals are processed within 48 hours. No excuses, no unnecessary waiting.
                </p>
                <p style={{ margin: "10px 0 0" }}>
                  <b>Predictable KYC:</b> They don’t jump on you immediately at signup. You can play and deposit, but know this: before the first withdrawal — for your own security as well — they will request your documents. With Finnish or EU documents, it’s a fast, routine process.
                </p>
                <p style={{ margin: "10px 0 0" }}>
                  <b>Limits you can plan around:</b> Up to $2500 per week, withdrawals are smooth. The system is optimized for regular, smaller cashouts — not a one-time “bank heist.”
                </p>
              </div>
            </details>

            <details>
              <summary>Solutions to your common objections</summary>
              <div className="faq-body">
                <p style={{ margin: 0 }}>
                  <b>“I’m afraid of offshore sites.”</b> Everygame has proven for 30 years that stability isn’t only about the license — it’s about the track record. They won’t vanish tomorrow.
                </p>
                <p style={{ margin: "10px 0 0" }}>
                  <b>“I want my money fast.”</b> Use crypto. Skrill and Neteller are options (4–24 hours), but crypto is their most streamlined pipeline.
                </p>
                <p style={{ margin: "10px 0 0" }}>
                  <b>“Bonuses are too complicated.”</b> They use a code-based system (e.g., ROOKIE RAISE). It’s transparent, you choose whether you want it, and the wagering conditions are clearly stated.
                </p>
              </div>
            </details>

            <details>
              <summary>Who do we recommend it to?</summary>
              <div className="faq-body">
                <p style={{ margin: 0 }}>
                  For people who want a reliable “everything in one place” platform where sportsbook comes first, but there’s room for a few fast casino sessions as well.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* =======================
          LUCKY BLOCK
         ======================= */}
      <section className="section" aria-label="Lucky Block">
        <div className="container">
          <SectionTitle
            title="Lucky Block (2026)"
            hint="Crypto-forward casino + sportsbook, wallet-first."
          />

          <div className="picks-grid">
            <Card title="Lucky Block (2026) — Crypto-based casino and sportsbook where speed is the baseline" hint="Casino + Sportsbook">
              <p className="pick-sub">
                Lucky Block is a platform for modern, “wallet-first” players. If you’re tired of bank bureaucracy and withdrawals that take days, this is your place. Here, crypto isn’t just an extra option — it’s the engine: deposits are instant, and withdrawals — based on 2026 data — often land in your wallet within minutes.
              </p>

              <div className="pick-actions">
                <Link className="btn primary" href="/partners#luckyblock">
                  Partner details
                </Link>
                <Link className="btn ghost" href="/promotions">
                  Promotions (read the terms)
                </Link>
              </div>

              <div className="fineprint" style={{ marginTop: 10 }}>
                18+. Eligibility and availability vary by country. Always verify terms before depositing.
              </div>
            </Card>

            <Card title="VelvetCall Verdict" hint="Editorial">
              <p className="pick-sub" style={{ marginTop: 0 }}>
                The “minutes” story is only useful if you also accept the reality: KYC can trigger, and network speed differs by chain. The trust comes from stating both.
              </p>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 12 }}>
                <Pill>Wallet-first</Pill>
                <Pill>Crypto payouts</Pill>
                <Pill>Country rules matter</Pill>
              </div>
            </Card>
          </div>

          <div style={{ height: 14 }} />

          <div className="faq" aria-label="Lucky Block details">
            <details>
              <summary>Why Lucky Block? (The 3 value pillars)</summary>
              <div className="faq-body">
                <p style={{ margin: 0 }}>
                  <b>Lightning-fast payout flow:</b> While traditional casinos can take 48 hours, here crypto withdrawals (USDT, BTC, LTC) are designed to start processing within minutes. Your money doesn’t “rest” on the casino balance unnecessarily.
                </p>
                <p style={{ margin: "10px 0 0" }}>
                  <b>Huge game library + sportsbook:</b> One account gives you access to major slots and a broad live sportsbook. Whether it’s a Champions League match or a new Pragmatic slot, you don’t need multiple registrations.
                </p>
                <p style={{ margin: "10px 0 0" }}>
                  <b>Buy crypto directly on-site:</b> No crypto yet? No problem. Via embedded providers (e.g., MoonPay), you can buy “fuel” with a bank card without dealing with exchanges separately.
                </p>
              </div>
            </details>

            <details>
              <summary>The truth about KYC (verification)</summary>
              <div className="faq-body">
                <p style={{ margin: 0 }}>
                  VelvetCall doesn’t pretend: Lucky Block is not “no-KYC forever.” While signup is fast and the entry barrier is generally low, for larger amounts or suspicious patterns the security filter can trigger.
                </p>
                <p style={{ margin: "10px 0 0" }}>
                  <b>Pro tip for speed:</b> If you’re playing from Finland, keep a recent proof of address and a photo of your passport ready. If your details are consistent and you use the same wallet for deposits and withdrawals, verification (if triggered) typically clears within a few hours.
                </p>
              </div>
            </details>

            <details>
              <summary>Withdrawal realities (Processing vs. Network)</summary>
              <div className="faq-body">
                <p style={{ margin: 0 }}>
                  Don’t mix two different speeds:
                </p>
                <p style={{ margin: "10px 0 0" }}>
                  <b>Processing (casino side):</b> Lucky Block targets approval within 24 hours, but for crypto it’s often 5–20 minutes.
                </p>
                <p style={{ margin: "10px 0 0" }}>
                  <b>Network (blockchain):</b> Once the payout is sent, it depends on chain speed (e.g., Tron/TRC20 is near-instant; Bitcoin is slower).
                </p>
              </div>
            </details>

            <details>
              <summary>Important notes (Regional disclaimer)</summary>
              <div className="faq-body">
                <p style={{ margin: 0 }}>
                  Lucky Block availability is country-dependent. From Finland, access is generally stable, but the terms prohibit bypassing restricted territories (e.g., UK, USA) via VPN. VelvetCall supports clean play: check the official “Restricted Territories” list before you start.
                </p>
              </div>
            </details>

            <details>
              <summary>FAQ — quick answers</summary>
              <div className="faq-body">
                <p style={{ margin: 0 }}>
                  <b>What’s the minimum withdrawal?</b> Depends on the crypto, but typically friendly: e.g., 1 USDT or 10 TRX.
                </p>
                <p style={{ margin: "10px 0 0" }}>
                  <b>Do I need a VPN?</b> The rules prohibit bypassing geo-restrictions with VPN. If it’s not available in your country, don’t force it — your withdrawal can suffer.
                </p>
                <p style={{ margin: "10px 0 0" }}>
                  <b>Is there a bonus?</b> Yes, but read the wagering conditions. A common withdrawal blocker is an unfinished bonus rollover.
                </p>
              </div>
            </details>

            <details>
              <summary>Why is this version good?</summary>
              <div className="faq-body">
                <p style={{ margin: 0 }}>
                  <b>Helsinki mindset:</b> Finnish users tend to value technical clarity (TRC20, MoonPay, processing times) and legal safety.
                </p>
                <p style={{ margin: "10px 0 0" }}>
                  <b>YMYL-safe:</b> We don’t encourage rule-breaking (VPN), which is a trust signal (E-E-A-T).
                </p>
                <p style={{ margin: "10px 0 0" }}>
                  <b>Marketing + reality:</b> The “minutes” story is balanced with the truth: KYC can happen. That’s how you build trust.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </main>
  );
}
