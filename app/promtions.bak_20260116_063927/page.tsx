import SkeletonPage from "@/components/SkeletonPage";

export default function PromotionsPage() {
  return (
    <SkeletonPage
      title="Promotions"
      lead="We only list promos we can explain in plain language. If the math is unclear, it doesn’t go live."
    >
      <div
        style={{
          margin: "72px 0 12px",
          textAlign: "center",
          fontSize: "clamp(38px, 7vw, 72px)",
          fontWeight: 850,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          opacity: 0.9,
        }}
      >
        Loading 99%
      </div>
    </SkeletonPage>
  );
}
