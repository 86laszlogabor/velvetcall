// app/how-we-choose-partners/page.tsx
import SkeletonPage from "@/components/SkeletonPage";

export default function HowWeChoosePage() {
  return (
    <SkeletonPage
      title="How We Choose — The VelvetCall Filter"
      lead="We are not a billboard. Every partner on VelvetCall passes a strict, real-world review process before we recommend them."
    >
      <div style={{ maxWidth: 820 }}>
        <p className="lead">
          The most common question we get is simple: <b>“Why is your list so short?”</b><br />
          The answer is even simpler: because most operators fail our test.
        </p>

        <p>
          VelvetCall is a curated guide. For a casino or poker room to appear here, it must pass a
          multi-stage, ruthless auditing process. If it doesn’t meet our standards, it doesn’t go live.
          No exceptions.
        </p>

        <h2 style={{ marginTop: 28 }}>1. The “Money Talks” Test (Liquidity & Speed)</h2>
        <p>
          This is non-negotiable. If a platform cannot process crypto withdrawals within
          <b> 24–48 hours</b>, it doesn’t belong here.
        </p>
        <p>
          In 2026, the technology already exists. Slowness usually means one of two things:
          liquidity problems or intentional friction. We deposit our own money, play real sessions,
          and request withdrawals <b>before</b> we write a single word.
        </p>

        <h2 style={{ marginTop: 28 }}>2. The “Bonus Detector” (Fair Play)</h2>
        <p>
          We don’t care how big a bonus looks. We care how fair it actually is.
        </p>
        <ul>
          <li>We filter out bonuses with extreme wagering requirements (50× or higher).</li>
          <li>
            We check max cashout clauses. If a site caps winnings at absurd levels,
            it’s blacklisted immediately.
          </li>
        </ul>

        <h2 style={{ marginTop: 28 }}>3. Software & Stability</h2>
        <p>
          No one wants an app to crash during a high-stakes poker hand or a bonus round.
        </p>
        <ul>
          <li>We test mobile clients on 4G, 5G, and Wi-Fi networks.</li>
          <li>
            We evaluate usability: Is the interface modern and intuitive, or does it feel
            like software from 20 years ago?
          </li>
        </ul>

        <h2 style={{ marginTop: 28 }}>4. Player Protection (Baseline Compliance)</h2>
        <p>
          Even in crypto-forward and offshore environments, we expect basic respect for the player.
        </p>
        <ul>
          <li>Working responsible gaming tools (limits, self-exclusion).</li>
          <li>Customer support that responds like humans — not endless bot loops.</li>
        </ul>

        <h2 style={{ marginTop: 28 }}>The Bottom Line</h2>
        <p>
          We say <b>“No”</b> to roughly 90% of the offers we receive.
          We only say <b>“Yes”</b> to the few platforms we would recommend to our own friends.
        </p>

        <p className="fineprint" style={{ marginTop: 16 }}>
          This is the VelvetCall promise: fewer partners, clearer expectations, and no hidden surprises.
        </p>
      </div>
    </SkeletonPage>
  );
}
