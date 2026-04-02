import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "Raj's contribution to our tracking modernization was pivotal. He successfully integrated real-time API data for our logistics network, delivering a seamless and high-performance UI.",
    author: "Technical Lead",
    role: "DTDC Express Limited",
    // avatar: "",
  },
  {
    quote:
      "Raj led our migration from React, which not only improved our SEO significantly but also increased our organic traffic by 25%. His grasp of server-side rendering is top-tier.",
    author: "Product Head",
    role: "Redcliffe Labs",
    // avatar: "#",
  },
  {
    quote:
      "Raj is a master of Micro Frontend Architecture. He consistently designs scalable, reusable components that have reduced our overall development time for new features by nearly 30%.",
    author: "Engineering Manager",
    role: "Enterprise Solutions",
    // avatar: "#",
  },
  {
    quote:
      "Beyond his technical skills in React and AWS, Raj is a dedicated team player who excels in Agile environments. His 'Employee of the Month' recognition was well-deserved.",
    author: "Agile Coach",
    role: "Talent Solutions Group",
    // avatar: "#",
  },
];

export const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setActiveIdx(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section id="testimonials" className="py-10 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2
       w-[800px] h-[800px] bg-primary/5
        rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      />
      <div
        className="container mx-auto 
      px-6 relative z-10"
      >
        {/* Section Header */}
        <div
          className="text-center max-w-3xl 
        mx-auto mb-16"
        >
          <span
            className="text-secondary-foreground 
          text-sm font-medium tracking-wider 
          uppercase animate-fade-in"
          >
            Professional Feedback
          </span>
          <h2
            className="text-4xl md:text-5xl 
          font-bold mt-4 mb-6 animate-fade-in 
          animation-delay-100 text-secondary-foreground"
          >
            Recognized for{" "}
            <span
              className="font-serif italic 
            font-normal text-white"
            >
              technical excellence.
            </span>
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Testimonial */}
            <div className="flex flex-col md:flex-row gap-8 items-stretch">

              {/* LEFT: Testimonial Card */}
              <div className="flex-1 glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200 relative">
                <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <Quote className="w-6 h-6 text-primary-foreground" />
                </div>

                <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4">
                  "{testimonials[activeIdx].quote}"
                </blockquote>

                <div className="flex items-center gap-4">
                  {/* <img
                    src={testimonials[activeIdx].avatar}
                    alt={testimonials[activeIdx].author}
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                  /> */}
                  <div>
                    <div className="font-semibold">
                      {testimonials[activeIdx].author}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonials[activeIdx].role}
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT: Achievement Image Card */}
              <div className="flex-1 glass p-6 rounded-3xl glow-border flex items-center justify-center animate-fade-in animation-delay-300">
                <img
                // C:\react-pro\my-portfolio\react-tailwind-personal-portfolio\public\achievement.jpeg
                  src="/achievement.jpeg" // replace with your image path
                  alt="Achievement"
                  className="rounded-2xl object-cover w-full h-full max-h-[400px]"
                />
              </div>

            </div>

            {/* Testimonials Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                onClick={previous}
              >
                <ChevronLeft />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIdx(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === activeIdx
                        ? "w-8 bg-primary"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                      }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};