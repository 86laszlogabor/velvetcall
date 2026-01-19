import SkeletonPage from "@/components/SkeletonPage";

export default function ContactPage() {
  return (
    <SkeletonPage
      title="Contact"
      lead="Partner inquiries, corrections, and editorial questions — typically answered within 24 hours on business days."
    >
      <div style={{ maxWidth: 760 }}>
        <div
          className="note"
          style={{
            marginTop: 8,
            display: "grid",
            gap: 12,
          }}
        >
          <b>Choose the right channel</b>
          <span>
            VelvetCall is editorial. We don’t handle deposits, withdrawals, or account access. If your question is about an
            operator account (KYC, banking, bonus status), the operator’s official support is the fastest path.
          </span>
        </div>

        <div style={{ height: 14 }} />

        <div
          style={{
            display: "grid",
            gap: 12,
          }}
          aria-label="Contact channels"
        >
          {/* Official Support */}
          <div
            style={{
              border: "1px solid rgba(255,255,255,0.10)",
              borderRadius: 16,
              padding: 14,
              background: "rgba(255,255,255,0.03)",
            }}
          >
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12 }}>
              <div>
                <div className="fineprint" style={{ margin: 0, opacity: 0.9 }}>
                  Official support
                </div>
                <h2 style={{ margin: "6px 0 0", fontSize: 18 }}>Support</h2>
              </div>
              <a className="btn ghost" href="mailto:support@velvetcall.com">
                Email support
              </a>
            </div>

            <div className="fineprint" style={{ marginTop: 10 }}>
              <b>Email:</b>{" "}
              <a className="link" href="mailto:support@velvetcall.com">
                support@velvetcall.com
              </a>
            </div>

            <div className="fineprint" style={{ marginTop: 8 }}>
              Best for: site corrections, editorial questions, broken links, region-availability notes, and general guidance.
            </div>
          </div>

          {/* Partners */}
          <div
            style={{
              border: "1px solid rgba(255,255,255,0.10)",
              borderRadius: 16,
              padding: 14,
              background: "rgba(255,255,255,0.03)",
            }}
          >
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12 }}>
              <div>
                <div className="fineprint" style={{ margin: 0, opacity: 0.9 }}>
                  Commercial
                </div>
                <h2 style={{ margin: "6px 0 0", fontSize: 18 }}>Partners</h2>
              </div>
              <a className="btn ghost" href="mailto:partners@velvetcall.com">
                Email partners
              </a>
            </div>

            <div className="fineprint" style={{ marginTop: 10 }}>
              <b>Email:</b>{" "}
              <a className="link" href="mailto:partners@velvetcall.com">
                partners@velvetcall.com
              </a>
            </div>

            <div className="fineprint" style={{ marginTop: 8 }}>
              We add partners selectively. If your proposal matches a transparency-first model (clear terms, clear payments,
              clear verification), send a short intro and your compliance/terms links.
            </div>
          </div>

          {/* Discord */}
          <div
            style={{
              border: "1px solid rgba(255,255,255,0.10)",
              borderRadius: 16,
              padding: 14,
              background: "rgba(255,255,255,0.03)",
            }}
          >
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12 }}>
              <div>
                <div className="fineprint" style={{ margin: 0, opacity: 0.9 }}>
                  Direct line
                </div>
                <h2 style={{ margin: "6px 0 0", fontSize: 18 }}>Discord</h2>
              </div>
              <a
                className="btn ghost"
                href="https://discord.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Discord"
              >
                Open Discord
              </a>
            </div>

            <div className="fineprint" style={{ marginTop: 10 }}>
              For quick coordination and short questions, you can reach us on Discord.
            </div>

            <div
              style={{
                marginTop: 10,
                border: "1px solid rgba(255,255,255,0.10)",
                borderRadius: 14,
                padding: 12,
                background: "rgba(255,255,255,0.02)",
              }}
              aria-label="Discord handle"
            >
              <div className="fineprint" style={{ margin: 0, fontWeight: 600 }}>
                Discord handle
              </div>
              <div style={{ marginTop: 8, display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
                <code style={{ fontSize: 14 }}>useyourbarinbre_40071</code>
                <span className="fineprint" style={{ margin: 0, opacity: 0.9 }}>
                  Select + copy
                </span>
              </div>
            </div>

            <div className="fineprint" style={{ marginTop: 10 }}>
              Safety note: we will never ask for passwords, remote access, or direct deposits via Discord.
            </div>
          </div>
        </div>

        <div style={{ height: 16 }} />

        <div className="fineprint">
          If you joined a partner platform via our site and need help understanding a term, a requirement, or a region restriction,
          email{" "}
          <a className="link" href="mailto:support@velvetcall.com">
            support@velvetcall.com
          </a>{" "}
          with a screenshot of the exact message you see (remove personal data).
        </div>
      </div>
    </SkeletonPage>
  );
}
