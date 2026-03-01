import ScrollReveal from "../ScrollReveal";


const skills = [
  { name: "ReactJS", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "TypeScript", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "JavaScript", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Tailwind CSS", level: 90, icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
  { name: "SvelteKit", level: 75, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg" },
  { name: "React Native Expo", level: 70, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "PostgreSQL", level: 70, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "HTML5 / CSS", level: 95, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "Figma", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Wireframe & Prototype", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Git", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Gin Web Framework", level: 75, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
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
              <div className="flex items-center gap-3">
                <img src={skill.icon} alt={skill.name} className="w-6 h-6 object-contain" />
                <div className="flex-1">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-mono text-foreground">{skill.name}</span>
                  </div>
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
