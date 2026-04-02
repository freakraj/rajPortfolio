import { Button } from "@/components/Button";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Twitter,
  Download,
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const skills = [
  "React", "Next.js", "TypeScript", "Node.js", "GraphQL",
  "PostgreSQL", "MongoDB", "Docker", "AWS", "Vercel",
  "Tailwind CSS", "Prisma", "Jest", "Figma", "Git", "GitHub Actions",
];

export const Hero = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/freakraj" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/raj-gautam09g/" },
    { icon: Twitter, href: "https://twitter.com/your-handle" },
  ];

  // UPDATED: Robust Download Handler
  const handleDownload = () => {
    const fileName = "Raj-Gautam-Resume.pdf";
    const publicPath = `/${fileName}`;

    // Create a temporary link
    const link = document.createElement("a");
    link.href = publicPath;
    link.setAttribute("download", "Raj_Gautam_CV.pdf");
    link.setAttribute("target", "_blank"); // Ensures it opens properly if download fails

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Animated Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Engineer • React Specialist
              </span>
            </div>
            <div className="space-y-6 relative">
              {/* Premium Glow Accent */}
              <div className="absolute -top-10 -left-10 w-72 h-72 bg-purple-600/30 blur-[120px] rounded-full"></div>

              {/* Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
              >
                Crafting{" "}
                <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 bg-clip-text text-transparent animate-gradient">
                  digital
                </span>
                <br />
                experiences with
                <br />
                <span className="font-serif italic font-normal text-white/90">
                  precision.
                </span>
              </motion.h1>

              {/* Paragraph */}
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.9 }}
                className="text-lg text-white/60 max-w-lg leading-relaxed"
              >
                Hi, I'm{" "}
                <span className="text-white font-semibold">Raj Gautam</span> — a
                software engineer specializing in{" "}
                <span className="text-purple-400">React</span> and{" "}
                <span className="text-indigo-400">Next.js</span>. I build scalable,
                high-performance web applications with exceptional user experience.
              </motion.p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in">
              <a href="#contact">
                <Button size="lg">
                  Contact Me <ArrowRight className="w-5 h-5" />
                </Button>
              </a>

              {/* Functional Button */}
              <button
                onClick={handleDownload}
                className="inline-block cursor-pointer focus:outline-none transition-transform active:scale-95"
                type="button"
              >
                <AnimatedBorderButton>
                  <span className="flex items-center gap-2">
                    <Download className="w-5 h-5" />
                    Download CV
                  </span>
                </AnimatedBorderButton>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in">
              <span className="text-sm text-muted-foreground">Follow me: </span>
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="relative animate-fade-in">
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse" />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/raj-profile.jpg"
                  alt="Raj Gautam"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">Available for work</span>
                  </div>
                </div>
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="text-2xl font-bold text-primary">6+</div>
                  <div className="text-xs text-muted-foreground">Years Exp.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Marquee */}
        <div className="mt-20 animate-fade-in">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="flex-shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in">
        <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};