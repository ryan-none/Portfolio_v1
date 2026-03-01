import ScrollReveal from "../ScrollReveal";

const experiences = [
  {
    role: "Software Developer",
    period: "June 2025 — February 2026",
    points: [
      "Developed and optimized scalable software features that improved overall system performance and reliability.",
      "Collaborated with cross-functional teams to streamline project workflows and enhance development efficiency.",
      "Delivered high-quality software solutions on time and within project requirements.",
    ],
  },
  {
    role: "Software QA Engineer (Intern)",
    period: "September 2024 — December 2024",
    points: [
      "Performed manual testing for role-based access control and payroll systems to ensure functional accuracy.",
      "Designed and executed structured test cases and test scripts to validate system behavior.",
      "Documented test results, bug reports, and reproduction steps clearly for development review.",
      "Collaborated with developers to identify, analyze, and resolve system defects efficiently.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold text-foreground mb-10">
            <span className="text-primary font-mono text-lg">02.</span>
            Experience
            <span className="h-px flex-1 bg-border max-w-xs" />
          </h2>
        </ScrollReveal>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-4 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="relative pl-8 md:pl-14">
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-4 top-2 w-2 h-2 -translate-x-[3px] rounded-full bg-primary glow-border" />

                  <h3 className="text-lg md:text-xl font-semibold text-foreground">{exp.role}</h3>
                  <p className="text-primary font-mono text-sm mb-4">{exp.period}</p>

                  <ul className="space-y-3">
                    {exp.points.map((point, j) => (
                      <li key={j} className="flex gap-3 text-muted-foreground text-sm leading-relaxed">
                        <span className="text-primary mt-1 shrink-0">▹</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
