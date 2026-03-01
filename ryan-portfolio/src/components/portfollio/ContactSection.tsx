import ScrollReveal from "../ScrollReveal";
import { Mail, Phone, MapPin } from "lucide-react";
import Resume from "../../assets/ryan_resume.pdf";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-2xl mx-auto text-center">
        <ScrollReveal>
          <p className="text-primary font-mono text-sm mb-4">05. What's Next?</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Get In Touch</h2>
          <p className="text-muted-foreground leading-relaxed mb-10">
            I'm currently open to new opportunities and would love to hear from you.
            Whether you have a question, a project idea, or just want to say hi — feel free to reach out!
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
            <a
              href="mailto:barcosryan2@gmail.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-mono text-sm"
            >
              <Mail size={16} className="text-primary" />
              barcosryan2@gmail.com
            </a>
            <span className="hidden sm:block text-border">|</span>
            <span className="flex items-center gap-2 text-muted-foreground font-mono text-sm">
              <Phone size={16} className="text-primary" />
              (0919) 289-5630
            </span>
            <span className="hidden sm:block text-border">|</span>
            <span className="flex items-center gap-2 text-muted-foreground font-mono text-sm">
              <MapPin size={16} className="text-primary" />
              Calauan, Laguna
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <a
            href="mailto:barcosryan2@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 border border-primary text-primary font-mono text-sm rounded-lg hover:bg-primary/10 transition-colors"
          >
            Say Hello 👋
          </a>

          
          <a
            href={Resume}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="inline-flex ml-5 items-center gap-2 px-8 py-4 border border-primary text-primary font-mono text-sm rounded-lg hover:bg-primary/10 transition-colors"
          >
            My Resume 📄
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactSection;
