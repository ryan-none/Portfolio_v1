import Navbar from "../components/portfollio/Navbar";
import HeroSection from "../components/portfollio/HeroSection";
import AboutSection from "../components/portfollio/AboutSection";
import ExperienceSection from "../components/portfollio/ExprerienceSection";
import ProjectsSection from "../components/portfollio/ProjectsSection";
import SkillsSection from "../components/portfollio/SkillsSection";
import ContactSection from "../components/portfollio/ContactSection";
import Footer from "../components/portfollio/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
