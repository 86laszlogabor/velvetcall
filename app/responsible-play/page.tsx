import SkeletonPage from "@/components/SkeletonPage";
import Link from "next/link";

export default function ResponsiblePlayPage() {
  return (
    <SkeletonPage
      title="Responsible play"
      lead="Set limits early. Keep it entertainment. If it stops being fun, take a break and reach out."
    >
      <div style={{ display: "grid", gap: 14, maxWidth: 980 }}>
        {/* Intro */}
        <div className="pick" style={{ padding: 16 }}>
          <div className="pick-head">
            <h3 className="pick-title">Responsible play</h3>
            <span className="pilltag">18+</span>
          </div>
          <div className="pick-body">
            <p className="pick-sub" style={{ marginTop: 0 }}>
              VelvetCall is an editorial guide. We don’t take deposits, process payments, or provide
              personal financial, legal, or medical advice. Gambling involves risk and should be
              treated as paid entertainment — set a budget and time limit you can comfortably afford
              before you play.
            </p>
            <div className="fineprint" style={{ marginTop: 10 }}>
              If you’re in immediate danger or feel unable to keep yourself safe, call your local
              emergency number right now.
            </div>
          </div>
        </div>

        {/* 1) Red flags */}
        <div className="pick">
          <div className="pick-head">
            <h3 className="pick-title">1) Early warning signs</h3>
            <div className="hint">If any of these feel familiar, pause and reduce access.</div>
          </div>
          <div className="pick-body">
            <ul
              style={{
                margin: 0,
                paddingLeft: 18,
                color: "rgba(255,255,255,0.78)",
                lineHeight: 1.55,
              }}
            >
              <li style={{ marginBottom: 8 }}>
                <b>Staying longer than planned</b> — sessions extend “just a bit” almost every time.
              </li>
              <li style={{ marginBottom: 8 }}>
                <b>Spending essentials money</b> — using rent/food/bills money is a hard stop.
              </li>
              <li style={{ marginBottom: 8 }}>
                <b>Hiding or minimizing it</b> — lying about time/spend is a strong warning sign.
              </li>
              <li>
                <b>Chasing</b> — depositing again to “get back to even” tends to escalate losses.
              </li>
            </ul>

            <div className="cta-row" style={{ marginTop: 12 }}>
              <Link className="btn ghost" href="#help">
                Jump to help resources
              </Link>
              <Link className="btn ghost" href="#tools">
                Jump to tools
              </Link>
            </div>
          </div>
        </div>

        {/* 2) Tools */}
        <div className="pick" id="tools">
          <div className="pick-head">
            <h3 className="pick-title">2) Practical tools</h3>
            <div className="hint">Use built-in limits and blockers to reduce impulsive play.</div>
          </div>
          <div className="pick-body">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                gap: 10,
              }}
            >
              <div className="note">
                <b>Deposit limits</b>
                <span>
                  Set a weekly/monthly budget. When the limit is reached, deposits are blocked (until
                  the period resets).
                </span>
              </div>
              <div className="note">
                <b>Session limits</b>
                <span>Cap time spent. Use time-outs to force breaks between sessions.</span>
              </div>
              <div className="note">
                <b>Self-exclusion</b>
                <span>
                  A longer lock that prevents access. Use it if you can’t reliably stop on your own.
                </span>
              </div>
              <div className="note">
                <b>Reality checks</b>
                <span>Time reminders that interrupt autopilot and prompt a conscious decision.</span>
              </div>
            </div>

            <div className="note" style={{ marginTop: 12 }}>
              <b>Quick setup (2 minutes)</b>
              <span>
                Before you play: set a deposit limit + set a session limit + turn on reality checks.
                If you’re already stressed, consider a time-out or self-exclusion instead.
              </span>
            </div>

            <div className="fineprint" style={{ marginTop: 12 }}>
              These controls are not a guarantee — they are friction. Friction helps when emotions
              are high.
            </div>
          </div>
        </div>

        {/* 3) Help resources */}
        <div className="pick" id="help">
          <div className="pick-head">
            <h3 className="pick-title">3) Help resources</h3>
            <div className="hint">
              If you feel out of control, get support early. Anonymous help is still help.
            </div>
          </div>
          <div className="pick-body">
            <div
              className="picks-grid"
              style={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}
            >
              {/* BeGambleAware */}
              <div className="pick" style={{ padding: 14 }}>
                <div
                  className="pick-head"
                  style={{ padding: 0, borderBottom: 0, background: "transparent" }}
                >
                  <h3 className="pick-title">BeGambleAware</h3>
                  <span className="pilltag">Support</span>
                </div>
                <div className="pick-body" style={{ padding: 0 }}>
                  <p className="pick-sub">Information and support resources (UK-focused).</p>
                  <div className="pick-actions">
                    <a
                      className="btn primary"
                      href="https://www.begambleaware.org"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Open BeGambleAware
                    </a>
                  </div>
                </div>
              </div>

              {/* Gambling Therapy */}
              <div className="pick" style={{ padding: 14 }}>
                <div
                  className="pick-head"
                  style={{ padding: 0, borderBottom: 0, background: "transparent" }}
                >
                  <h3 className="pick-title">Gambling Therapy</h3>
                  <span className="pilltag">Support</span>
                </div>
                <div className="pick-body" style={{ padding: 0 }}>
                  <p className="pick-sub">Multi-language support, live chat, and moderated groups.</p>
                  <div className="pick-actions">
                    <a
                      className="btn primary"
                      href="https://www.gamblingtherapy.org"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Open Gambling Therapy
                    </a>
                  </div>
                </div>
              </div>

              {/* Blockers */}
              <div className="pick" style={{ padding: 14 }}>
                <div
                  className="pick-head"
                  style={{ padding: 0, borderBottom: 0, background: "transparent" }}
                >
                  <h3 className="pick-title">Blocking software</h3>
                  <span className="pilltag">Devices</span>
                </div>
                <div className="pick-body" style={{ padding: 0 }}>
                  <p className="pick-sub">
                    Tools that restrict gambling sites across devices. Good when willpower isn’t
                    enough.
                  </p>
                  <div className="pick-actions">
                    <a
                      className="btn ghost"
                      href="https://gamban.com"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Gamban
                    </a>
                    <a
                      className="btn ghost"
                      href="https://www.gamblock.com"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      GamBlock
                    </a>
                  </div>
                </div>
              </div>

              {/* Find local help */}
              <div className="pick" style={{ padding: 14 }}>
                <div
                  className="pick-head"
                  style={{ padding: 0, borderBottom: 0, background: "transparent" }}
                >
                  <h3 className="pick-title">Find local help</h3>
                  <span className="pilltag">Local</span>
                </div>
                <div className="pick-body" style={{ padding: 0 }}>
                  <p className="pick-sub">
                    If you prefer phone or in-person support, start with a directory and select your
                    country.
                  </p>
                  <div className="pick-actions">
                    <a
                      className="btn primary"
                      href="https://www.gamblingtherapy.org"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Start with Gambling Therapy
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="note" style={{ marginTop: 12 }}>
              <b>If you’re unsure what to do next</b>
              <span>
                Choose one action: set a time-out or install a blocker, and contact a support service.
                Small steps are the goal.
              </span>
            </div>
          </div>
        </div>

        {/* Closing */}
        <div className="pick" style={{ padding: 16 }}>
          <div className="pick-head">
            <h3 className="pick-title">A clear line</h3>
            <div className="hint">Entertainment should not create financial pressure or secrecy.</div>
          </div>
          <div className="pick-body">
            <p className="pick-sub" style={{ marginTop: 0 }}>
              If gambling is causing stress, guilt, secrecy, or financial strain, treat that as a
              signal to stop and reduce access. If you’re struggling, reach out to a support service —
              you don’t need to wait for “rock bottom”.
            </p>

            <div className="fineprint" style={{ marginTop: 10 }}>
              VelvetCall is an editorial guide. We don’t take deposits, process payouts, or provide
              personal financial advice.
            </div>
          </div>
        </div>
      </div>
    </SkeletonPage>
  );
}
