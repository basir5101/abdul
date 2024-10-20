import Image from "next/image";
import Spotlight from "@/components/spotlight";
import { aboutContent, Project, projects } from "@/database/home";
import Link from "next/link";
import { Chrome, Github } from "lucide-react";
import Title from "./ui/Title";

export default function ProjectsSection() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Section header */}
          <Title title="Projects" />
          <Spotlight className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-3">
            {projects.map((project: Project, index: number) => (
              <div
                data-aos="fade-left"
                data-aos-delay={200 + (index + 1) * 100}
                key={index}
                className="w-full h-full overflow-hidden max-w-[422px] [background:linear-gradient(45deg,#172033,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] rounded-2xl border border-transparent animate-border"
              >
                <div>
                  <Image src={project.image} alt="" height={600} width={400} />
                </div>
                <div className="p-2">
                  <div className="font-semibold text-xl mb-2">
                    {project.name}
                  </div>
                  <div className="text-sm">{project.description}</div>
                  <div className="flex my-2">
                    {project.github && (
                      <Link
                        target="_blank"
                        className="mr-3"
                        href={project.github}
                      >
                        <Github size={30} />
                      </Link>
                    )}
                    {project.liveDemo && (
                      <Link target="_blank" href={project.liveDemo}>
                        <Chrome size={30} />
                      </Link>
                    )}
                  </div>
                  <div className="flex flex-wrap">
                    {" "}
                    {project.technologies.map((item) => (
                      <div className="text-sm mr-2" key={item}>
                        #{item}
                      </div>
                    ))}{" "}
                  </div>
                </div>
              </div>
            ))}
          </Spotlight>
        </div>
      </div>
    </section>
  );
}
