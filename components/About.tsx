import Image from "next/image";
import WorflowImg01 from "@/public/images/workflow-01.png";
import WorflowImg02 from "@/public/images/workflow-02.png";
import WorflowImg03 from "@/public/images/workflow-03.png";
import Spotlight from "@/components/spotlight";
import { aboutContent } from "@/database/home";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Section header */}
          <div className="mx-auto pb-12 md:pb-20">
            <div className="text-center">
              <div
                data-aos="fade-left"
                data-aos-delay={400}
                className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50"
              >
                <span className="inline-flex text-6xl font-bold bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                  {aboutContent.title}
                </span>
              </div>
            </div>
            <h2
              data-aos="fade-down"
              data-aos-delay={400}
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-2xl font-semibold text-transparent md:text-4xl mt-5"
            >
              Summary
            </h2>
            <p
              data-aos="fade-right"
              data-aos-delay={400}
              className="text-lg text-indigo-200/65"
            >
              {aboutContent.description}
            </p>
          </div>
          {/* Spotlight items */}
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-2xl font-semibold text-transparent md:text-4xl mt-5">
            Skills
          </h2>
          <Spotlight className="group mx-auto grid max-w-sm items-start grid-cols-3 gap-6 lg:max-w-none lg:grid-cols-6">
            {/* Card 1 */}
            {aboutContent.skills.map((skill: string, index: number) => (
              <div
                key={index}
                data-aos="fade-left"
                data-aos-delay={100}
                className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 after:hover:opacity-20 before:group-hover:opacity-100"
              >
                <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-gradient-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                  {/* Content */}
                  <div className="p-3">
                    <p className="text-indigo-200">{skill}</p>
                  </div>
                </div>
              </div>
            ))}
          </Spotlight>
          <div className="my-5" data-aos="fade-up" data-aos-delay={400}>
            <Link
              className="btn group mb-4 w-full bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
              href={aboutContent.cta.link}
            >
              <span className="relative inline-flex items-center">
                {aboutContent.cta.label}
                <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                  -&gt;
                </span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
