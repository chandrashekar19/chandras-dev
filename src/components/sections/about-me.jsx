import { RevealOnScroll } from "../reveal-onscroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "TailwindCSS",
    "Redux Toolkit",
    "Zustand",
    "Material UI",
    "Shadcn UI",
    "Context API",
    "Bootstrap",
  ];

  const tools = [
    "GitHub",
    "VS Code",
    "Netlify",
    "Vercel",
    "Figma",
    "Storybook",
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
        <div className="max-w-4xl mx-auto px-4">
          {/* Title */}
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          {/* Main Content Box */}
          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            {/* About Section */}
            <p className="text-gray-300 mb-6">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

            {/* Skills Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Tools Section */}
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Tools</h3>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Education & Work Experience Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 ">
            {/* Education & Certifications - Now Takes 1/2 Width */}
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all space-y-6">
              <h3 className="text-xl font-bold mb-4">
                🎓 Education & Certifications
              </h3>
              <div className="space-y-4">
                <ul className="list-disc list-inside text-gray-300">
                  <li>
                    <strong>Bachelors of Technology</strong> - Guru Nanak
                    Institutions Technical Campus (2016 - 2020)
                  </li>
                  <li>Relevant Coursework: Computer Science</li>
                </ul>
                <ul className="list-disc list-inside text-gray-300">
                  <li>
                    <strong>Higher Secondary Education</strong> - sri chaitanya
                    (2014 - 2016)
                  </li>
                  <li>
                    Relevant Coursework: Mathematics, Physics and Chemistry
                  </li>
                </ul>
                <ul className="list-disc list-inside text-gray-300">
                  <li>
                    <strong>High School</strong> - Lumbini High School (2014 -
                    2016)
                  </li>
                  <li>Relevant Coursework: </li> Mathematics, Science, English,
                  and Social Studies
                </ul>
              </div>
              <br />
              <h3 className="text-lg font-bold mt-4">📜 Certifications</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Namaste React - Namaste Dev</li>
                <li>Responsive Web Design - freeCodeCamp</li>
                <li>Frontend Development with React - Udemy</li>
              </ul>
            </div>

            {/* Work Experience - Now Takes 1/2 Width */}
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div className="space-y-3">
                  <h4 className="font-semibold">
                    Software Engineer - Indgeos Geospatial AI (Dec 2024 - Mar
                    2025)
                  </h4>
                  <p>
                    Orchestrated the Land Management System at Indgeos
                    Geospatial Technologies using React and Zustand, integrating
                    geospatial APIs and designing data visualization components
                    that improved land parcel processing efficiency by 30%.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold">
                    Software Engineer – Rayvector Technologies (Jun 2024 – Dec
                    2024)
                  </h4>
                  <p>
                    Engineered a GIS platform using React, Material-UI, and
                    Google Maps APIs, enhancing land-use visualization with
                    Google Street View and KML file transformations, increasing
                    user engagement by 25%.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold">
                    Software Engineer - Infinity Learn (May 2023 - Apr 2024)
                  </h4>
                  <p>
                    Enhanced the student login and assessment platform by
                    improving OTP-based authentication, optimizing form handling
                    with Formik & Yup, and developing responsive interfaces,
                    reducing login failures by 40%.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold">
                    UI Engineer - Banyan Cloud (May 2022 - Apr 2023)
                  </h4>
                  <p>
                    Contributed to the admin dashboard using React, Redux, and
                    JavaScript to streamline administrative operations.
                    Implemented CRUD functionality for efficient data
                    management, improving admin efficiency by 20%.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
