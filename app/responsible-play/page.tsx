import SkeletonPage from "@/components/SkeletonPage";
import Link from "next/link";

export default function ResponsiblePlayPage() {
  return (
    <SkeletonPage
      title="Responsible play"
      lead="Keep it entertainment. If it stops being fun, stop. Never chase losses."
    >
      <div style={{ display: "grid", gap: 14, maxWidth: 980 }}>
        {/* Intro */}
        <div className="pick" style={{ padding: 16 }}>
          <div className="pick-head">
            <h3 className="pick-title">Responsible Play — Keep it Entertainment</h3>
            <span className="pilltag">18+</span>
          </div>
          <div className="pick-body">
            <p className="pick-sub" style={{ marginTop: 0 }}>
              At VelvetCall, we treat poker and casino games as a form of entertainment — like a concert or a movie.
              You pay for the experience, and you move on. The moment you start playing to “fix your life” or “chase losses,”
              the game has already won. We only feature platforms that meet our standards, but the ultimate responsibility lies with you.
            </p>
          </div>
        </div>

        {/* 1) Red flags */}
        <div className="pick">
          <div className="pick-head">
            <h3 className="pick-title">1) Recognizing the red flags</h3>
            <div className="hint">If you feel uneasy, that discomfort is useful information.</div>
          </div>
          <div className="pick-body">
            <ul style={{ margin: 0, paddingLeft: 18, color: "rgba(255,255,255,0.78)", lineHeight: 1.55 }}>
              <li style={{ marginBottom: 8 }}>
                <b>Staying longer than planned</b> — “just one more spin / one more hand.”
              </li>
              <li style={{ marginBottom: 8 }}>
                <b>Using essentials money</b> — if you are gambling with rent/food money, stop immediately.
              </li>
              <li style={{ marginBottom: 8 }}>
                <b>Hiding it</b> — if you lie about spending, it’s no longer a hobby.
              </li>
              <li>
                <b>The chase</b> — thinking one more deposit will get you back to zero is the biggest lie in gambling.
              </li>
            </ul>
          </div>
        </div>

        {/* 2) Tools (NO TABLE) */}
        <div className="pick">
          <div className="pick-head">
            <h3 className="pick-title">2) Tools that actually work</h3>
            <div className="hint">Use the platform against the impulse.</div>
          </div>
          <div className="pick-body">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 10 }}>
              <div className="note">
                <b>Deposit limits</b>
                <span>Set a weekly/monthly budget. Once reached, deposits are blocked.</span>
              </div>
              <div className="note">
                <b>Time-outs / session caps</b>
                <span>Force breaks so time doesn’t quietly get away from you.</span>
              </div>
              <div className="note">
                <b>Self-exclusion</b>
                <span>Temporary or long-term lock. Designed to be hard to undo.</span>
              </div>
              <div className="note">
                <b>Reality checks</b>
                <span>Pop-ups that show time spent and force a conscious choice.</span>
              </div>
            </div>

            <div className="fineprint" style={{ marginTop: 12 }}>
              Pride is expensive. These tools exist because willpower fails under stress.
            </div>
          </div>
        </div>

        {/* 3) Help resources */}
        <div className="pick">
          <div className="pick-head">
            <h3 className="pick-title">3) Help resources (Finland + international)</h3>
            <div className="hint">Anonymous support is still real support.</div>
          </div>
          <div className="pick-body">
            <div className="picks-grid" style={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
              <div className="pick" style={{ padding: 14 }}>
                <div className="pick-head" style={{ padding: 0, borderBottom: 0, background: "transparent" }}>
                  <h3 className="pick-title">Peluuri (Finland)</h3>
                  <span className="pilltag">Local</span>
                </div>
                <div className="pick-body" style={{ padding: 0 }}>
                  <p className="pick-sub">
                    Free helpline: <b>0800 100 101</b> (Mon–Fri 12:00–18:00)
                  </p>
                  <div className="pick-actions">
                    <Link className="btn ghost" href="https://www.peluuri.fi" target="_blank" rel="noreferrer">
                      Website
                    </Link>
                  </div>
                </div>
              </div>

              <div className="pick" style={{ padding: 14 }}>
                <div className="pick-head" style={{ padding: 0, borderBottom: 0, background: "transparent" }}>
                  <h3 className="pick-title">BeGambleAware</h3>
                  <span className="pilltag">Global</span>
                </div>
                <div className="pick-body" style={{ padding: 0 }}>
                  <p className="pick-sub">International support and advice.</p>
                  <div className="pick-actions">
                    <Link className="btn ghost" href="https://www.begambleaware.org" target="_blank" rel="noreferrer">
                      Website
                    </Link>
                  </div>
                </div>
              </div>

              <div className="pick" style={{ padding: 14 }}>
                <div className="pick-head" style={{ padding: 0, borderBottom: 0, background: "transparent" }}>
                  <h3 className="pick-title">Gambling Therapy</h3>
                  <span className="pilltag">Global</span>
                </div>
                <div className="pick-body" style={{ padding: 0 }}>
                  <p className="pick-sub">Multi-language support, live chat, and moderated groups.</p>
                  <div className="pick-actions">
                    <Link className="btn ghost" href="https://www.gamblingtherapy.org" target="_blank" rel="noreferrer">
                      Website
                    </Link>
                  </div>
                </div>
              </div>

              <div className="pick" style={{ padding: 14 }}>
                <div className="pick-head" style={{ padding: 0, borderBottom: 0, background: "transparent" }}>
                  <h3 className="pick-title">Blocking software</h3>
                  <span className="pilltag">Devices</span>
                </div>
                <div className="pick-body" style={{ padding: 0 }}>
                  <p className="pick-sub">
                    Tools like Gamban or GamBlock restrict access across all your devices.
                  </p>
                  <div className="pick-actions">
                    <Link className="btn ghost" href="https://gamban.com" target="_blank" rel="noreferrer">
                      Gamban
                    </Link>
                    <Link className="btn ghost" href="https://www.gamblock.com" target="_blank" rel="noreferrer">
                      GamBlock
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="fineprint" style={{ marginTop: 12 }}>
              If you feel out of control, don’t negotiate with yourself. Stand up from the table and reach out.
            </div>
          </div>
        </div>

        {/* Verdict */}
        <div className="pick" style={{ padding: 16 }}>
          <div className="pick-head">
            <h3 className="pick-title">VelvetCall verdict</h3>
            <div className="hint">One rule: protect your peace.</div>
          </div>
          <div className="pick-body">
            <p className="pick-sub" style={{ marginTop: 0 }}>
              Gambling should stay fun. If it’s causing stress, guilt, secrecy, or financial pressure, it’s not entertainment anymore.
              No jackpot is worth your peace of mind.
            </p>
            <div className="fineprint">
              VelvetCall is an editorial guide. We don’t take deposits, process payouts, or provide personal financial advice.
            </div>
          </div>
        </div>
      </div>
    </SkeletonPage>
  );
}
