// app/partners/page.tsx
import SkeletonPage from "@/components/SkeletonPage";

export default function PartnersPage() {
  return (
    <SkeletonPage
      title="Partners"
      lead="We work with a limited number of operators. Each one is reviewed for availability, friction, and regional fit."
    >
      <div
        style={{
          margin: "64px 0 22px",
          textAlign: "center",
          fontSize: "clamp(34px, 6vw, 64px)",
          fontWeight: 800,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          opacity: 0.9,
        }}
      >
        Loading 99%
      </div>

      <div
        style={{
          textAlign: "center",
          fontSize: "clamp(14px, 2vw, 18px)",
          opacity: 0.62,
        }}
      >
        They’re almost here.
      </div>
    </SkeletonPage>
  );
}
