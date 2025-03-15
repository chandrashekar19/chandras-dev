import { RevealOnScroll } from "../reveal-onscroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "Next Js",
    "TypeScript",
    "Javascript",
    "TailwindCSS",
    "redux toolkit",
    "zustand",
    "Material UI",
    "shadcn UI",
  ];

  const Tools = [
    "Github",
    "VS Code",
    "Netlify",
    "Vercel",
    "figma",
    "storybook",
    "Jenkins",
    "Webpack",
    "GitHub Actions",
    "Vite",
    "Docker",
    "AWS",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Tools</h3>
              <div className="flex flex-wrap gap-2">
                {Tools.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                <strong> Bachelors of technology </strong> - Guru Nanak
                Institutions Technical campus (2016 June -2020 November)
              </li>
              <li>Relevant Coursework: Computer science</li>
            </ul>
          </div>

          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
            <div className="space-y-4 text-gray-300">
              <div>
                <h4 className="font-semibold">
                  Freelance React Developer (March 2023 - present)
                </h4>
                <p>
                  Built dynamic, responsive web applications using React, and
                  modern Javascript for multiple clients including RayVector and
                  Indgeos Geospatial Technologies. Worked on Land Management
                  System Application for Andhra Pradesh Government.
                </p>
                <p>
                  Contributed to developing student login and assessment
                  platforms using React, Next.js, and Formik.
                </p>
              </div>
              <div>
                <h4 className="font-semibold">
                  UI Engineer (May 2022 - Jan 2023)
                </h4>
                <p>
                  Built dynamic, responsive web applications using React, Redux,
                  and Material UI. Developed admin tools for internal purposes,
                  leveraging React, Redux, Formik, and APIs from various
                  microservices. Focused on enhancing authentication workflows
                  and optimizing API interactions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
