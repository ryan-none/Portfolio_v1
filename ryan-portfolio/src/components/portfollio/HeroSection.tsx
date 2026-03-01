import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/5 blur-[100px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-primary/8 blur-[80px] animate-pulse-glow" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 w-full">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-gradient font-mono text-sm md:text-base mb-4"
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold text-foreground mb-2"
        >
          Ryan Barcos.
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-6xl font-bold text-muted-foreground mb-6"
        >
          I build things for the web.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className="text-muted-foreground max-w-xl text-base md:text-lg leading-relaxed mb-10"
        >
          Creative and detail-oriented Software Developer with a strong passion for
          designing intuitive user interfaces and developing engaging front-end solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.5 }}
          className="flex gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary font-mono text-sm rounded-lg hover:bg-primary/10 transition-colors"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-mono text-sm rounded-lg hover:bg-primary/90 transition-colors"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown className="text-muted-foreground" size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
