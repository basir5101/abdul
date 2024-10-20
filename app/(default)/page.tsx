export const metadata = {
  title: "Home - Abdul Basir",
  description: "Page description",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";
import AboutSection from "@/components/About";
import ProjectsSection from "@/components/Projects";
import Contact from "@/components/Contact";
import Blogs from "@/components/Blogs";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <div id="about">
        <AboutSection />
      </div>
      <div id="projects">
        <ProjectsSection />
      </div>
      <div id="blogs">
        <Blogs />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
}
