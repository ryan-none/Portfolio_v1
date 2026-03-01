import ScrollReveal from "../ScrollReveal";
import Profile from "../../assets/graduation-pic.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold text-foreground mb-10">
            <span className="text-primary font-mono text-lg">01.</span>
            About Me
            <span className="h-px flex-1 bg-border max-w-xs" />
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-[3fr_2fr] gap-12 items-start">
          <div className="space-y-4">
            <ScrollReveal delay={0.1}>
              <p className="text-muted-foreground leading-relaxed">
                I'm a Software Developer based in Laguna, Philippines, passionate about crafting
                digital experiences that are both beautiful and functional. I specialize in front-end
                development with a focus on building responsive, user-friendly web applications.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-muted-foreground leading-relaxed">
                I graduated with a <span className="text-foreground">Bachelor of Computer Science</span> majoring
                in Intelligent Systems from <span className="text-foreground">LSPU-San Pablo City</span>. Since
                then, I've worked as a Software Developer and had experience as a QA Engineer, giving me a
                well-rounded perspective on building reliable software.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="text-muted-foreground leading-relaxed">
                Here are a few technologies I've been working with recently:
              </p>
              <ul className="grid grid-cols-2 gap-2 mt-4 font-mono text-sm">
                {["ReactJS", "TypeScript", "HTML & CSS", "Figma" , "JavaScript", "GIN Web Framework", "Tailwind CSS", "SvelteKit", "React Native Expo", "PostgreSQL"].map(
                  (tech) => (
                    <li key={tech} className="flex items-center gap-2 text-muted-foreground">
                      <span className="text-primary">▹</span> {tech}
                    </li>
                  )
                )}
              </ul>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.3} direction="right">
            <div className="relative group mx-auto w-fit">
              <div className="w-56 h-56 md:w-64 md:h-64 rounded-lg bg-secondary overflow-hidden relative z-10">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <img src={Profile} alt="Profile" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="absolute top-4 left-4 w-56 h-56 md:w-64 md:h-64 rounded-lg border-2 border-[#2bd4bd] -z-0 group-hover:top-2 group-hover:left-2 transition-all duration-300" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
