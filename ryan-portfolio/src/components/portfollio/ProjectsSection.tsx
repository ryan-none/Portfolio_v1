import { motion } from "framer-motion";
import ScrollReveal from "../ScrollReveal";
import { ExternalLink, Gamepad2, ListChecks } from "lucide-react";

const projects = [
  {
    title: "Magtanim Ay Di Biro",
    description:
      "An educational farm game developed for elementary students. Users can plant crops, recycle items, and sell harvested produce to learn basic environmental awareness and resource management.",
    tech: ["Android", "Mobile App", "Game Dev"],
    icon: Gamepad2,
  },
  {
    title: "Taskify: Productivity Assistance",
    description:
      "A responsive web application for Task Management, focusing on user-friendly navigation. Utilized ReactJS and Tailwind for front-end development, ensuring seamless user interactions.",
    tech: ["ReactJS", "Tailwind CSS", "Web App"],
    icon: ListChecks,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold text-foreground mb-10">
            <span className="text-primary font-mono text-lg">03.</span>
            Projects
            <span className="h-px flex-1 bg-border max-w-xs" />
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="h-full p-6 md:p-8 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors card-shadow group"
              >
                <div className="flex items-start justify-between mb-6">
                  <project.icon className="text-primary" size={36} />
                  <ExternalLink className="text-muted-foreground group-hover:text-primary transition-colors" size={20} />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <ul className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t) => (
                    <li key={t} className="text-xs font-mono text-primary/80 bg-primary/10 px-2 py-1 rounded">
                      {t}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
