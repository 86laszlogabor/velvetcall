import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About VelvetCall",
  description:
    "Why VelvetCall exists, how we choose partners, and what we will never claim or promise. No secrets. Just the game.",
};

export default function AboutPage() {
  return (
    <main className="site-main">
      <section className="section" aria-label="About VelvetCall">
        <div className="container">
          <div className="section-title">
            <h2>About VelvetCall — Why We Don’t Lie to You</h2>
            <div className="hint">Independently edited. Built for clarity.</div>
          </div>

          <div
            style={{
              maxWidth: "78ch",
              lineHeight: 1.6,
              color: "rgba(255,255,255,0.86)",
            }}
          >
            <h3 style={{ marginTop: 6 }}>1. We got tired of the noise</h3>
            <p>
              If you search for poker or casino information online, you usually end up in one of two
              places: either a dark, unreadable forum full of half-truths, or a glossy bonus site
              screaming <em>“200% bonus — sign up now!”</em>
            </p>
            <p>
              At VelvetCall, we know how this works. Most of those sites don’t care whether you’ll
              still see your money two weeks later. They care about one thing only: your
              registration.
            </p>
            <p>
              We launched VelvetCall in 2026 to break that model. We’re not saints. We earn money
              too. But we have one non-negotiable rule:{" "}
              <b>we only recommend platforms where we would personally sit down and play</b>.
            </p>

            <h3>2. The “Velvet Filter” — why the list is short</h3>
            <p>
              You may have noticed something unusual: we don’t list 50 casinos or poker rooms. That’s
              intentional.
            </p>
            <p>
              Every month we receive dozens of partnership requests. Most of them get rejected.
              Here’s why.
            </p>

            <h4 style={{ marginBottom: 6 }}>The Payout Test</h4>
            <p>
              If a platform sits on a crypto withdrawal for more than 48 hours without a clear, valid
              reason, it fails our filter. In 2026 the technology exists. Slow payouts usually mean
              one of two things: lack of liquidity or deliberate friction.
            </p>

            <h4 style={{ marginBottom: 6 }}>The Bonus Trap</h4>
            <p>
              A 500% bonus with unreadable wagering terms is not a bonus — it’s a shackle. If even a
              lawyer would struggle to understand the fine print, we won’t promote it.
            </p>

            <h4 style={{ marginBottom: 6 }}>Player Experience (UX)</h4>
            <p>
              Nobody wants a laggy, 2005-era app. If a mobile client struggles under real-world
              mobile conditions, it doesn’t make the cut.
            </p>

            <h3>3. Poker didn’t die — it evolved</h3>
            <p>
              When Everygame shut down its poker room at the end of 2025, many declared online poker
              dead. We disagree.
            </p>
            <p>
              What’s dying are the over-regulated, over-crowded mega networks. What’s thriving are{" "}
              <b>club-based apps and crypto-friendly ecosystems</b> like QQPoker and KKPoker.
            </p>
            <p>
              Why? Because players want to play poker again — not fight HUDs, bots, and solver-driven
              automation. We focus on environments where the field is softer, the action is real,
              and skill still matters.
            </p>

            <h3>4. Crypto — freedom, with responsibility</h3>
            <p>
              Crypto is a cornerstone of VelvetCall. Not because it’s trendy, but because it’s
              practical. It’s the only realistic way to move money without banks and bureaucracy
              interfering at every step.
            </p>
            <p>
              That said, we’re not blind evangelists. Crypto can be intimidating — and mistakes are
              expensive. That’s why we don’t just drop links. We explain networks (TRC20 vs. ERC20),
              wallet basics, and the common errors that can cost you money <b>before a single hand is dealt</b>.
            </p>

            <h3>5. Editorial perspective — why standards matter</h3>
            <p>
              VelvetCall is built around a simple idea: trust is earned through consistency. We
              apply the same editorial standards regardless of region, license type, or market hype.
            </p>
            <p>
              We focus on platforms that can be used legally and realistically by international
              players, with stable access, predictable payouts, and clear rules — not geo-specific
              loopholes.
            </p>

            <h3>6. What we are NOT</h3>
            <ul style={{ paddingLeft: 18, marginTop: 8 }}>
              <li style={{ marginBottom: 10 }}>
                <b>We are not a “guaranteed win” site.</b> Anyone promising a foolproof system for
                poker or roulette is lying. We don’t sell fantasies.
              </li>
              <li style={{ marginBottom: 10 }}>
                <b>We are not financial advisors.</b> Gambling is entertainment. If you’re thinking
                about risking rent money, close this site and seek help.
              </li>
              <li>
                <b>We are not a paid billboard.</b> No partner dictates our content. If a platform
                messes up, we update the review and downgrade them — publicly.
              </li>
            </ul>

            <h3 style={{ marginTop: 18 }}>7. The road ahead — VelvetCall in 2026 and beyond</h3>
            <p>
              Our goal is simple: to make VelvetCall the place where players get the unfiltered
              truth.
            </p>
            <p>
              We continuously monitor payouts, test platforms, and re-evaluate partners. If a new
              crypto casino or poker room appears, we’ll be among the first to tear it apart —
              properly.
            </p>

            <h3>8. Final word — play smart, enjoy the moment</h3>
            <p>
              Gambling is an experience. Like a good dinner or a concert, you pay for entertainment.
            </p>
            <p>
              If you win along the way, great. If not, you should still receive a fair, honest
              experience for your money. That’s what we help you choose.
            </p>
            <p style={{ marginBottom: 0 }}>
              Welcome to VelvetCall. <b>No secrets. Just the game.</b>
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
