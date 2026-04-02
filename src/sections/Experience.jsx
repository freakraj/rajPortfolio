const experiences = [
  {
    period: "Dec 2023 — July 2025",
    role: "Senior Frontend Engineer",
    company: "DTDC Express Pvt Ltd",
    description: "Developed and maintained the Tracking Modernization, integrating real-time API data and milestones for India's logistics network. Leading frontend architecture for a suite of fintech products. Implemented micro-frontend architecture, Improved website load times by 40% through performance optimization techniques. Collaborated with backend teams and cross-functional teams to ensure seamless API integration. and mentored a team of 5 developers.",
    technologies: ["ReactJS", "Redux", "JavaScript (ES6+)", "HTML5", "CSS3", "TailwindCSS", "AWS", "REST APIs", "Agile Methodologies", "Micro Frontend Architecture"],
    current: true,
  },
  {
    period: "Dec 2022 — Nov 2023",
    role: "Frontend Developer",
    company: "Redcliffe Labs Pvt Ltd",
    description:"Migrated ReactJS - based applications to NextJS, enhancing SEO and increasing organic traffic by 25%. Designed reusable components and state management solutions, reducing development time for new features by 30%. Designed and implemented Laboratory Information Management System (LIMS) to stream line work flows and sample data management. Designed GIT management and code deployment strategy.",
    technologies: ["React", "NextJS", "JavaScript (ES6+)", "Redux", "HTML", "CSS", "GitHub", "Figma", "Micro Frontend Architecture", "Agile Methodologies"],
    current: false,
  },
  {
    period: "Feb 2022 — May 2022",
    role: "Software Developer",
    company: "Hash Include Computech Pvt Ltd",
    description: "Contributed to the Cyber CNS project by developing frontend modules for cybersecurity monitoring and reporting dashboards using React.js. Built reusable and modular UI components to support real-time data visualization and dynamic dashboard updates. Integrated RESTful APIs to display live network security metrics, alerts, and insights within the UI.",
    technologies: ["ReactJs", "Redux", "HTML5","CSS3", "Javascript", "AWS", "Docker", "REST APIs", "Microservices architecture", "Agile Methodologies"],
    current: false,
  },
  {
    period: "Aug 2021 – Dec 2021 ",
    role: "Software Developer",
    company: "Counfreedice Retails Service Pvt Ltd.",
    description:
      "Developed and deployed internal customer service and automation web applications using React.js, JavaScript, HTML5, and CSS3, focusing on performance and usability. Designed and implemented a WhatsApp Chatbot UI with dynamic message handling and real-time interactions, ensuring seamless user experience. Worked closely with backend teams to integrate REST APIs hosted on AWS (Lambda, API Gateway) into React-based frontend applications.",
    technologies: ["ReactJs", "Redux", "HTML5","CSS3", "JavaScript"],
    current: false,
  },
   {
    period: "April 2018 - July 2021",
    role: "Frontend Developer",
    company: "Learn and Lead Talent Solution Pvt Ltd.",
    description:
      "Delivered responsive e-commerce platforms and web applications using ReactJS and Django. Improved site performance by compressing assets and optimizing HTTP requests. Spearheaded the deployment of applications on Linux-based private cloud servers. Troubleshoot technical issues and identify Remediate bugs and issues found during testing. Successfully collaborated with Agile teams to implement scalable architectures.",
    technologies: ["ReactJs", "Redux", "HTML5","CSS3", "JavaScript", "NodeJS", "ExpressJS"],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-10 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span
            className="text-secondary-foreground text-sm
           font-medium tracking-wider uppercase animate-fade-in"
          >
            Career Journey
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold
           mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
          >
            Experience that{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              speaks volumes.
            </span>
          </h2>

          <p
            className="text-muted-foreground
           animate-fade-in animation-delay-200"
          >
            A timeline of my professional growth, from curious beginner to
            senior engineer leading teams and building products at scale.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4 text-justify text-left">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
