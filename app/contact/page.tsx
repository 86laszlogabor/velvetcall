import SkeletonPage from "@/components/SkeletonPage";

export default function ContactPage() {
  return (
    <SkeletonPage
      title="Contact"
      lead="For partner inquiries, corrections, or editorial questions. We keep communication simple and direct."
    >
      <div style={{ maxWidth: 720 }}>
        <p className="lead" style={{ fontSize: 14.8, marginBottom: 12 }}>
          We don’t run support chatbots or ticket systems. If you need to reach us, these are the
          channels we actually use:
        </p>

        <ul style={{ marginTop: 12, paddingLeft: 18 }}>
          <li style={{ marginBottom: 8 }}>
            <b>Email</b> — direct communication for partners, corrections, and formal requests
          </li>
          <li style={{ marginBottom: 8 }}>
            <b>WhatsApp</b> — quick clarifications and follow-ups
          </li>
          <li style={{ marginBottom: 8 }}>
            <b>Discord</b> — ongoing discussions and longer-form coordination
          </li>
        </ul>

        <p className="fineprint" style={{ marginTop: 14 }}>
          We intentionally do not publish direct links here. Contact details are shared selectively
          after first context is established.
        </p>
      </div>
    </SkeletonPage>
  );
}
