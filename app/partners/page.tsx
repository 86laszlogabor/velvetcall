import SkeletonPage from "@/components/SkeletonPage";
import Link from "next/link";
import React from "react";

type Partner = {
  id: string;
  name: string;
  category: "Poker" | "Casino";
  angle: string; // user-need label (not “directory”)
  sub: string;
  highlights: string[]; // non-numeric / low-liability
  setup?: {
    label: string;
    value: string;
    helper?: string;
    copy?: boolean;
  };
  primaryLabel: string;
  primaryHref: string;
  primaryExternal?: boolean;
  secondaryLabel: string;
  secondaryHref: string;
  fineprint?: string;
};

const partnersPoker: Partner[] = [
  {
    id: "qqpoker",
    name: "QQPoker",
    category: "Poker",
    angle: "The Mobile Poker Choice",
    sub: "Mobile-first poker with a large Asia-heavy player base. Best if you want fast sessions and simple onboarding on phone.",
    highlights: [
      "Mobile-first lobby and flows",
      "Good fit for short sessions",
      "Expect verification if you move meaningful funds",
    ],
    setup: {
      label: "Share code",
      value: "MG3VQU",
      helper: "Use during signup (or via the partner link).",
      copy: true,
    },
    primaryLabel: "Open QQPoker",
    primaryHref: "https://qqpk1007.cc:51999?shareCode=MG3VQU",
    primaryExternal: true,
    secondaryLabel: "See the full QQPoker profile",
    secondaryHref: "/poker#qqpoker",
    fineprint:
      "18+. Availability varies by country. Always verify terms before depositing. Do not bypass restrictions.",
  },
  {
    id: "kkpoker",
    name: "KKPoker",
    category: "Poker",
    angle: "The Club-Style Option",
    sub: "Club-style poker with a public lobby. Best if you prefer a lighter, mobile-centric poker experience over desktop-first ecosystems.",
    highlights: [
      "Club mechanics + public lobby",
      "Mobile-centric sessions",
      "Verification may apply for withdrawals",
    ],
    setup: {
      label: "Invite code",
      value: "velvetcall",
      helper: "Use during signup (or via the partner link).",
      copy: true,
    },
    primaryLabel: "Open KKPoker",
    primaryHref: "https://kkpoker.club/velvetcall",
    primaryExternal: true,
    secondaryLabel: "See the full KKPoker profile",
    secondaryHref: "/poker#kkpoker",
    fineprint:
      "18+. Availability varies by country. Always verify terms before depositing. Do not bypass restrictions.",
  },
];

const partnersCasino: Partner[] = [
  {
    id: "betsafe",
    name: "BetSafe",
    category: "Casino",
    angle: "The Structured Sportsbook + Casino",
    sub: "Sportsbook + casino with a process-first feel: clear rules, clear limits, and standard verification when it matters.",
    highlights: [
      "Sportsbook + casino in one place",
      "Account limits and controls",
      "Promotions are optional (terms can add constraints)",
    ],
    primaryLabel: "Read BetSafe overview",
    primaryHref: "/casino#betsafe",
    primaryExternal: false,
    secondaryLabel: "Go to Casino page",
    secondaryHref: "/casino",
    fineprint:
      "18+. Availability varies by country. Always verify terms before depositing. Gambling carries risk.",
  },
  {
    id: "leovegas",
    name: "LeoVegas",
    category: "Casino",
    angle: "The Premium Mobile Casino",
    sub: "Mobile-focused casino UX with standard payment rails. Built for clean phone-based sessions and quick navigation.",
    highlights: [
      "Mobile-first sessions and navigation",
      "Standard payment rails (country-dependent)",
      "Tier-1 security checks around meaningful withdrawals",
    ],
    primaryLabel: "Read LeoVegas overview",
    primaryHref: "/casino#leovegas",
    primaryExternal: false,
    secondaryLabel: "Go to Casino page",
    secondaryHref: "/casino",
    fineprint:
      "18+. Availability varies by country. Always verify terms before depositing. Gambling carries risk.",
  },
];

function Chip({ children }: { children: React.ReactNode }) {
  return <span className="pilltag">{children}</span>;
}

function PrimaryButton({
  href,
  label,
  external,
}: {
  href: string;
  label: string;
  external?: boolean;
}) {
  if (external) {
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
  return (
    <Link className="btn primary" href={href}>
      {label}
    </Link>
  );
}

function CopyField({
  label,
  value,
  helper,
}: {
  label: string;
  value: string;
  helper?: string;
}) {
  // No client-side clipboard logic here (keeps this file server-safe).
  // If you want one-click copy later, we can convert this component to a small client component.
  return (
    <div
      style={{
        border: "1px solid rgba(255,255,255,0.10)",
        borderRadius: 14,
        padding: 12,
        background: "rgba(255,255,255,0.03)",
      }}
      aria-label={`${label}: ${value}`}
    >
      <div className="fineprint" style={{ margin: 0, fontWeight: 600 }}>
        {label}
      </div>
      <div
        style={{
          display: "flex",
          gap: 10,
          alignItems: "center",
          marginTop: 8,
          flexWrap: "wrap",
        }}
      >
        <code style={{ fontSize: 14 }}>{value}</code>
        <span className="fineprint" style={{ margin: 0, opacity: 0.9 }}>
        </span>
      </div>
      {helper ? (
        <div className="fineprint" style={{ marginTop: 8 }}>
          {helper}
        </div>
      ) : null}
    </div>
  );
}

function PartnerCard({ p }: { p: Partner }) {
  return (
    <article
      id={p.id}
      className="pick"
      aria-label={`${p.name} partner card`}
      style={{ overflow: "hidden" }}
    >
      <div className="pick-head">
        <div>
          <h3 className="pick-title" style={{ margin: 0 }}>
            {p.name}
          </h3>
          <div className="fineprint" style={{ marginTop: 6 }}>
            {p.angle}
          </div>
        </div>

        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <Chip>{p.category}</Chip>
          <Chip>Official partner</Chip>
        </div>
      </div>

      <div className="pick-body">
        <p className="pick-sub" style={{ marginTop: 0 }}>
          {p.sub}
        </p>

        {/* Split: Highlights vs Setup (keeps “shortlist” feel, avoids directory vibes) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 12,
            marginTop: 10,
          }}
        >
          <div
            style={{
              border: "1px solid rgba(255,255,255,0.10)",
              borderRadius: 14,
              padding: 12,
              background: "rgba(255,255,255,0.02)",
            }}
            aria-label={`${p.name} highlights`}
          >
            <b>Highlights</b>
            <div style={{ marginTop: 8 }}>
              {p.highlights.map((h, i) => (
                <div key={i} className="fineprint" style={{ margin: "6px 0" }}>
                  • {h}
                </div>
              ))}
            </div>
          </div>

          {p.setup ? (
            <CopyField
              label={p.setup.label}
              value={p.setup.value}
              helper={p.setup.helper}
            />
          ) : null}
        </div>

        <div className="pick-actions" style={{ marginTop: 12 }}>
          <PrimaryButton
            href={p.primaryHref}
            label={p.primaryLabel}
            external={p.primaryExternal}
          />
          <Link className="btn ghost" href={p.secondaryHref}>
            {p.secondaryLabel}
          </Link>
        </div>

        {p.fineprint ? (
          <div className="fineprint" style={{ marginTop: 10 }}>
            {p.fineprint}
          </div>
        ) : null}
      </div>
    </article>
  );
}

export default function PartnersPage() {
  return (
    <SkeletonPage
      title="Partners"
      lead="A small shortlist by design. We add partners selectively and focus on clarity: what it is, who it fits, and what to verify before you deposit."
    >
      {/* Top: “how to use this list” (turns away from “directory”) */}
      <div className="note" style={{ marginTop: 10 }}>
        <b>How to use this shortlist</b>
        <span>
          Pick by intent — not brand hype. Poker options are separated from casino options, and each card is framed as a
          “best for” choice. If your country is restricted, do not try to work around it.
        </span>
      </div>

      {/* Poker section */}
      <div className="section-title" style={{ marginTop: 18 }}>
        <h2>Poker</h2>
        <div className="hint">Action & liquidity — mobile-first, short-session friendly.</div>
      </div>

      <div className="picks-grid">
        {partnersPoker.map((p) => (
          <PartnerCard key={p.id} p={p} />
        ))}
      </div>

      {/* Casino section */}
      <div className="section-title" style={{ marginTop: 22 }}>
        <h2>Casino</h2>
        <div className="hint">UX & reliability — standard rails, clear terms, verification when it matters.</div>
      </div>

      <div className="picks-grid">
        {partnersCasino.map((p) => (
          <PartnerCard key={p.id} p={p} />
        ))}
      </div>

      <div style={{ height: 18 }} />

      <div className="note">
        <b>Business inquiries</b>
        <span>
          We add partners slowly. If your brand matches a transparency-first model (clear terms, clear payments, clear
          verification), reach us at{" "}
          <span className="link">partners@velvetcall.com</span>{" "}
          <span className="link">support@velvetcall.com</span>
        </span>
      </div>

      {/* Disclosure moved away from cards (premium, less “affiliate” in the face) */}
      <div className="fineprint" style={{ marginTop: 12 }}>
        VelvetCall is editorial. We don’t take deposits or process payouts. Some outbound links may be commercial/affiliate
        links. Always verify terms on the operator’s official pages.
      </div>
    </SkeletonPage>
  );
}
