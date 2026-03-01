import { motion } from "framer-motion";
import ScrollReveal from "../ScrollReveal";

const skills = [
  { name: "ReactJS", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "JavaScript", level: 90 },
  { name: "Tailwind CSS", level: 90 },
  { name: "SvelteKit", level: 75 },
  { name: "React Native Expo", level: 70 },
  { name: "PostgreSQL", level: 70 },
  { name: "HTML5 / CSS", level: 95 },
  { name: "Figma", level: 80 },
  { name: "Wireframe & Prototype", level: 80 },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold text-foreground mb-10">
            <span className="text-primary font-mono text-lg">04.</span>
            Skills
            <span className="h-px flex-1 bg-border max-w-xs" />
          </h2>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6">
          {skills.map((skill, i) => (
            <ScrollReveal key={skill.name} delay={i * 0.05}>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-mono text-foreground">{skill.name}</span>
                  <span className="text-xs font-mono text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-2 rounded-full bg-secondary overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-primary"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
