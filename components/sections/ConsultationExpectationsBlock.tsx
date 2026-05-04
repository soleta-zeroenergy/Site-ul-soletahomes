const blocks = [
  {
    eyebrow: "What this is",
    body: "A private, considered conversation about your project. Not a sales call, not a product presentation. We review your situation and respond with a direct, honest assessment.",
  },
  {
    eyebrow: "Who it is for",
    body: "People with a site or land, a project idea, or a budget question that needs professional input before committing to a direction. Early-stage clarity is the point.",
  },
  {
    eyebrow: "What happens next",
    body: "We review your enquiry and assess its current stage. The next step is written guidance, a request for clarification, or a more project-oriented conversation - depending on what is most useful.",
  },
  {
    eyebrow: "What this is not",
    body: "Not a catalogue selection session. This is not a public price list or an automated pricing response. The conversation is structured and produces a written summary of our recommendations.",
  },
];

export function ConsultationExpectationsBlock() {
  return (
    <section
      className="border-b border-[var(--color-border-light)] py-14 lg:py-22"
      style={{ backgroundColor: "var(--soleta-cream)" }}
    >
      <div className="container-narrow">
        <div className="mb-10 max-w-3xl border-t border-[var(--color-border-light)] pt-10">
          <span
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: "0.5625rem",
              fontWeight: 500,
              letterSpacing: "0.14em",
              textTransform: "uppercase" as const,
              color: "var(--color-text-muted)",
              display: "block",
              marginBottom: "0.75rem",
            }}
          >
            What to expect
          </span>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
              fontWeight: 400,
              letterSpacing: "0",
              color: "#1a1714",
              lineHeight: 1.15,
            }}
          >
            A private consultation, not a sales call
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-px border border-[var(--color-border-light)] bg-[var(--color-border-light)] md:grid-cols-2">
          {blocks.map((block) => (
            <div
              key={block.eyebrow}
              className="flex h-full flex-col gap-4 bg-[var(--color-bg)] p-6 lg:p-7"
            >
              <span
                style={{
                  fontFamily: "var(--font-ui)",
                  fontSize: "0.5625rem",
                  fontWeight: 600,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase" as const,
                  color: "var(--color-brand)",
                }}
              >
                {block.eyebrow}
              </span>
              <p
                className="leading-relaxed"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.9375rem",
                  color: "var(--color-text-secondary)",
                }}
              >
                {block.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
