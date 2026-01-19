import SkeletonPage from "@/components/SkeletonPage";
import Link from "next/link";

type Category = "casino" | "sportsbook" | "poker" | "live" | "vip";

type Promo = {
  title: string;
  category: Category;
  summary: string;
  whyFeatured?: string;
  tags?: string[];
};

type PartnerPromos = {
  partner: string;
  partnerNote: string;
  featured: Promo[];
  standard: Promo[];
  affiliate?: {
    label: string;
    href: string;
    code?: string;
  };
};

const promos: PartnerPromos[] = [
  // --- LeoVegas ---
  {
    partner: "LeoVegas",
    partnerNote:
      "LeoVegas promos are mostly casino + sportsbook. We highlight offers that are easiest to understand and most likely to matter in real use.",
    featured: [
      {
        title: "Casino Welcome Offer",
        category: "casino",
        summary: "Welcome offer bundle (amounts and spin counts vary by country/campaign).",
        whyFeatured:
          "A simple on-ramp for new accounts. Best used if you already planned to deposit and you understand the wagering window.",
        tags: ["new players", "value-first"],
      },
      {
        title: "Sports Welcome Offer",
        category: "sportsbook",
        summary: "Sportsbook welcome offer (amount varies; claim + wagering rules apply).",
        whyFeatured:
          "Good starter value if you already bet sports. Pay attention to minimum odds and the claim window.",
        tags: ["new players", "time window"],
      },
      {
        title: "UNLIMITED ACCA BOOSTS",
        category: "sportsbook",
        summary:
          "Accumulator boosts (boost size depends on legs/odds rules and campaign settings).",
        whyFeatured:
          "Best suited for accumulator enthusiasts. Treat as an odds multiplier rather than “free money”.",
        tags: ["ongoing", "rules-sensitive"],
      },
      {
        title: "The Club by LeoVegas (VIP)",
        category: "vip",
        summary: "VIP-style perks and events (profile-based; what you see depends on activity).",
        whyFeatured:
          "Potentially high value for active players, but it’s deal-by-profile. Ask support what you qualify for before you plan around it.",
        tags: ["deal-by-profile", "support-needed"],
      },
    ],
    standard: [
      {
        title: "Live Casino Welcome Offer",
        category: "live",
        summary:
          "Live casino welcome variant (terms can be heavier than slots; check the fine print if you opt in).",
        tags: ["new players", "watch wagering"],
      },
      {
        title: "Social Media Free Spins Campaign",
        category: "casino",
        summary:
          "Social campaigns can include free spins on selected games (mechanics and availability vary).",
        tags: ["weekly", "promo-mechanics"],
      },
      {
        title: "Jackpots / Drops",
        category: "casino",
        summary:
          "Jackpots and drops are optional entertainment layers. Join only if you actually enjoy the randomness.",
        tags: ["optional", "high variance"],
      },
    ],
  },

  // --- Betsson (curated) ---
  {
    partner: "Betsson",
    partnerNote:
      "Betsson runs a large promo feed. We surface the promos that are easiest to understand and most likely to matter in practice.",
    featured: [
      {
        title: "Casino Welcome Offer",
        category: "casino",
        summary:
          "Welcome bundle (bonus %, caps, and free spin counts vary by country/campaign).",
        whyFeatured:
          "Clear “new account” bundle when the wagering window is reasonable. If you opt in, read excluded games and time limits.",
        tags: ["new players", "bundle"],
      },
      {
        title: "Poker Welcome Package",
        category: "poker",
        summary:
          "Poker-focused starter package (structure varies; pick the option that matches how you actually play).",
        whyFeatured:
          "More usable for poker-first players than casino-only promos. Best if you plan to play consistently in the first weeks.",
        tags: ["poker-first", "new players"],
      },
      {
        title: "Early Payout",
        category: "sportsbook",
        summary:
          "Early payout mechanic (rules vary by sport/market; check the exact trigger conditions).",
        whyFeatured:
          "Useful as risk reduction for regular bettors when the rules are clear for the markets you play.",
        tags: ["utility", "rules-sensitive"],
      },
    ],
    standard: [
      {
        title: "Safe Multiples",
        category: "sportsbook",
        summary:
          "Insurance-style refund if one selection fails (qualification rules apply; caps vary).",
        tags: ["insurance-style"],
      },
      {
        title: "Freerolls / Happy Hours",
        category: "poker",
        summary: "Nice extra layer if you already play; rarely a reason to join on its own.",
        tags: ["low-to-mid impact"],
      },
    ],
  },

  // --- KKPoker (curated) ---
  {
    partner: "KKPoker",
    partnerNote:
      "KKPoker’s promo archive is huge and heavily date-specific. We list only evergreen mechanics and keep the rest as “check what’s live now”.",
    affiliate: {
      label: "Join KKPoker via VelvetCall",
      href: "https://kkpoker.club/velvetcall",
      code: "velvetcall",
    },
    featured: [
      {
        title: "Rakeback / Cashback program (evergreen)",
        category: "poker",
        summary: "Rakeback/cashback-style rewards (effective % and crediting method depend on terms).",
        whyFeatured:
          "This is the one promo type that can matter for consistent play. What matters is the effective % and how/when it credits.",
        tags: ["evergreen", "grind-value"],
      },
      {
        title: "First Deposit Match (campaign-based)",
        category: "poker",
        summary: "First-deposit match structure (caps and wagering rules depend on the live campaign).",
        whyFeatured:
          "Good only if the time window and wagering are realistic for your playstyle. Skip if the rules feel convoluted.",
        tags: ["new players", "terms-sensitive"],
      },
      {
        title: "Leaderboards (CG / MTT)",
        category: "poker",
        summary: "Volume/performance leaderboards (scoring tables and payouts vary by format and period).",
        whyFeatured:
          "Real value only if your volume fits the scoring model. Check what counts and what the payout table looks like before you chase it.",
        tags: ["grinder-only", "score-based"],
      },
    ],
    standard: [
      {
        title: "Daily Missions",
        category: "poker",
        summary: "Task-based rewards. Usually small EV; fine as a bonus layer.",
        tags: ["utility"],
      },
      {
        title: "Seasonal Series / Campaigns",
        category: "poker",
        summary:
          "Limited-time series and crossover campaigns change frequently. Treat archive posts as history and check what’s live now.",
        tags: ["seasonal", "check live"],
      },
    ],
  },

  // --- QQPoker (curated) ---
  {
    partner: "QQPoker",
    partnerNote:
      "QQPoker promos are often schedule-based. We highlight recurring mechanics and keep date-stamped items as “check what’s live”.",
    affiliate: {
      label: "Join QQPoker via VelvetCall",
      href: "https://qqpk1007.cc:51999?shareCode=MG3VQU",
      code: "MG3VQU",
    },
    featured: [
      {
        title: "Welcome / Rebate-style starter promo (campaign-based)",
        category: "poker",
        summary: "Starter promo / rebate-style welcome (effective %, cap, and eligible games vary by campaign).",
        whyFeatured:
          "Worth it when the rules are simple and the effective % is clear. If terms look messy, skip and just play normally.",
        tags: ["new players", "terms-sensitive"],
      },
      {
        title: "MTT Leaderboards (weekly/monthly)",
        category: "poker",
        summary: "Recurring leaderboard rewards for MTT volume/performance (scoring + payout table varies).",
        whyFeatured:
          "Good for grinders who already play the right formats. If you’re not naturally in those events, don’t force it.",
        tags: ["grinder-only", "score-based"],
      },
      {
        title: "Daily Leaderboards / Daily Prize Pools",
        category: "poker",
        summary: "Daily leaderboard-style promos (prize pools vary and can be format-specific).",
        whyFeatured:
          "Nice as a daily layer if you already play. Check which formats count before you adjust volume.",
        tags: ["ongoing", "format-specific"],
      },
      {
        title: "Flagship Sundays / Major event blocks (campaign-based)",
        category: "poker",
        summary:
          "Weekly flagship blocks rotate and change. Treat posters as a weekly snapshot and check the current schedule.",
        whyFeatured:
          "Best suited for MTT players planning a Sunday session. If you’re not playing those events, this is just background noise.",
        tags: ["weekly", "check schedule"],
      },
    ],
    standard: [
      {
        title: "Cash Drops / Red Packet style promos",
        category: "poker",
        summary:
          "Cash-drop style campaigns often run in time windows with random prizes. Optional entertainment layer.",
        tags: ["optional", "time-window"],
      },
      {
        title: "Ticket Rewards / Event qualifiers",
        category: "poker",
        summary:
          "Qualifiers and ticket reward campaigns are usually date-bound. Check what’s live before planning volume.",
        tags: ["date-specific", "check live"],
      },
      {
        title: "Featured Event Schedules (posters)",
        category: "poker",
        summary: "Useful as a snapshot, but expires quickly. Treat as informational only.",
        tags: ["informational", "expires fast"],
      },
    ],
  },
];

function CategoryPill({ c }: { c: Category }) {
  return <span className="pilltag">{c}</span>;
}

/**
 * Tags: make them wrap cleanly and never “spill” into weird colors/lines.
 * - inline-flex + wrap + gap for stable layout
 * - each tag gets its own soft pill background (no reliance on <code> styling)
 */
function TagRow({ tags }: { tags?: string[] }) {
  if (!tags?.length) return null;
  return (
    <div style={{ marginTop: 12 }}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 8,
          alignItems: "center",
        }}
        aria-label="Tags"
      >
        {tags.map((t) => (
          <span
            key={t}
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "4px 10px",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.10)",
              background: "rgba(255,255,255,0.05)",
              color: "rgba(255,255,255,0.78)",
              fontSize: 12,
              lineHeight: 1.2,
              letterSpacing: 0.2,
              whiteSpace: "nowrap",
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function PromotionsPage() {
  return (
    <SkeletonPage
      title="Promotions"
      lead="A short, scan-friendly promo list — curated so you can pick faster."
    >
      <div style={{ maxWidth: 920 }}>
        <div className="note" style={{ marginTop: 10 }}>
          <b>How to use this page</b>
          <span>
            Promos change often and can vary by country, account history, and activity.
            Use this list to spot the few mechanics that tend to be worth your attention —
            then confirm the exact live terms in the operator’s promo page or support before you opt in.
          </span>
        </div>

        <div className="cta-row" style={{ marginTop: 12 }}>
          <Link className="btn primary" href="/contact">
            Contact (Support / Discord)
          </Link>
          <Link className="btn ghost" href="/policy">
            Policy
          </Link>
        </div>

        {promos.map((block) => (
          <section
            key={block.partner}
            className="section"
            aria-label={`${block.partner} promotions`}
          >
            <div className="section-title" style={{ marginTop: 26 }}>
              <h2>{block.partner}</h2>
              <div className="hint">{block.partnerNote}</div>
            </div>

            {/* One per partner */}
            <div className="note" style={{ marginTop: 12 }}>
              <b>How to read this section</b>
              <span>
                “Worth checking” items are promos that are usually clearer and more usable than poster-only campaigns.
                Promos still change — confirm the exact live terms before you opt in.
              </span>
              <div className="cta-row" style={{ marginTop: 10 }}>
                <Link className="btn ghost" href="/contact">
                  Confirm what’s live
                </Link>
              </div>
            </div>

            {block.affiliate ? (
              <div
                className="note"
                style={{
                  marginTop: 12,
                  borderColor: "rgba(217, 179, 93, 0.22)",
                  background: "rgba(217, 179, 93, 0.06)",
                }}
                aria-label={`${block.partner} affiliate link`}
              >
                <b style={{ display: "block", marginBottom: 6 }}>
                  {block.affiliate.label}
                </b>

                <span style={{ display: "block", lineHeight: 1.45 }}>
                  <span style={{ color: "rgba(255,255,255,0.86)" }}>
                    Invite code:
                  </span>{" "}
                  <b>{block.affiliate.code ?? "—"}</b>
                </span>

                <div className="cta-row" style={{ marginTop: 10 }}>
                  <a
                    className="btn primary"
                    href={block.affiliate.href}
                    target="_blank"
                    rel="nofollow sponsored noopener"
                  >
                    Join {block.partner}
                  </a>
                  <Link className="btn ghost" href="/policy">
                    Policy
                  </Link>
                </div>

                <div className="fineprint" style={{ marginTop: 10 }}>
                  18+. Play responsibly. Availability and terms can vary by country and provider.
                </div>
              </div>
            ) : null}

            <h3 style={{ marginTop: 16 }}>Worth checking</h3>
            <div className="picks-grid" style={{ marginTop: 12 }}>
              {block.featured.map((p) => (
                <article key={p.title} className="pick">
                  <div className="pick-head">
                    <h3 className="pick-title">{p.title}</h3>
                    <CategoryPill c={p.category} />
                  </div>

                  <div className="pick-body">
                    <p className="pick-sub">{p.summary}</p>

                    {/* "whyFeatured" stays, but without the label and without a colored note box */}
                    {p.whyFeatured ? (
                      <p
                        style={{
                          marginTop: 10,
                          color: "rgba(255,255,255,0.78)",
                          lineHeight: 1.55,
                        }}
                      >
                        {p.whyFeatured}
                      </p>
                    ) : null}

                    <TagRow tags={p.tags} />
                  </div>
                </article>
              ))}
            </div>

            <h3 style={{ marginTop: 28 }}>Ongoing & secondary promos</h3>
            <ul style={{ marginTop: 10, paddingLeft: 18 }}>
              {block.standard.map((p) => (
                <li key={p.title} style={{ marginBottom: 12 }}>
                  <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
                    <b>{p.title}</b>
                    <CategoryPill c={p.category} />
                  </div>
                  <div style={{ marginTop: 4, color: "rgba(255,255,255,0.86)", lineHeight: 1.55 }}>
                    {p.summary}
                  </div>
                  <TagRow tags={p.tags} />
                </li>
              ))}
            </ul>
          </section>
        ))}

        <div className="fineprint" style={{ marginTop: 12 }}>
          Gambling is entertainment, not income. Set a budget, take breaks, and stop when it stops being fun.
        </div>
      </div>
    </SkeletonPage>
  );
}
