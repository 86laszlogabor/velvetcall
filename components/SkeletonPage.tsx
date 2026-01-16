import type { ReactNode } from "react";

export default function SkeletonPage({
  title,
  lead,
  children,
}: {
  title: string;
  lead?: string;
  children?: ReactNode;
}) {
  return (
    <section className="section" aria-label={title}>
      <div className="container">
        <div style={{ maxWidth: 920 }}>
          <h1 style={{ marginTop: 6 }}>{title}</h1>
          {lead ? (
            <p className="lead" style={{ marginTop: 10 }}>
              {lead}
            </p>
          ) : null}
        </div>

        {children ? <div style={{ marginTop: 18 }}>{children}</div> : null}
      </div>
    </section>
  );
}
