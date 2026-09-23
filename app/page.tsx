"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  BookOpen,
  BookOpenCheck,
  CalendarClock,
  Check,
  Globe2,
  GraduationCap,
  Laptop,
  LockKeyhole,
  Menu,
  Play,
  Search,
  ShieldCheck,
  Star,
  Users,
  Wallet,
  X,
} from "lucide-react";

const benefits = [
  {
    title: "Flexible Learning",
    text: "Learn anytime, anywhere at your own pace.",
    icon: CalendarClock,
  },
  {
    title: "Expert-Led Courses",
    text: "Real-world explanations and practical examples.",
    icon: GraduationCap,
  },
  {
    title: "Supportive Community",
    text: "Join a growing community of biology learners.",
    icon: Users,
  },
];

const journey = [
  {
    number: "01",
    title: "Explore",
    text: "Discover the amazing world of living things.",
    image: "/assets/journey-leaf.webp",
    alt: "A student examining a green leaf",
    side: "right",
  },
  {
    number: "02",
    title: "Understand",
    text: "Make sense of how life works.",
    image: "/assets/journey-microscope.webp",
    alt: "Student using a microscope",
    side: "left",
  },
  {
    number: "03",
    title: "Practise",
    text: "Build your skills step by step.",
    image: "/assets/journey-cell.webp",
    alt: "Student drawing a plant cell",
    side: "right",
  },
  {
    number: "04",
    title: "Progress",
    text: "Grow your confidence for what’s next.",
    image: "/assets/journey-student.webp",
    alt: "Student reflecting outdoors",
    side: "left",
  },
];

const stats = [
  { value: "10k+", label: "Students", icon: Users },
  { value: "50+", label: "Courses", icon: BookOpenCheck },
  { value: "4.8/5", label: "Average Rating", icon: Star },
  { value: "30+", label: "Countries", icon: Globe2 },
];

const courses = [
  {
    level: "Beginner",
    title: "Introduction to Plant Biology",
    rating: "4.8",
    reviews: "(320)",
    image: "/assets/course-plant.webp",
  },
  {
    level: "Intermediate",
    title: "Genetics and Inheritance",
    rating: "4.9",
    reviews: "(410)",
    image: "/assets/course-genetics.webp",
  },
  {
    level: "Advanced",
    title: "Cell Structure and Function",
    rating: "4.7",
    reviews: "(260)",
    image: "/assets/course-cell.webp",
  },
];

const learningAdvantages = [
  {
    title: "Secure & Reliable",
    text: "Your learning progress and data are always safe.",
    icon: LockKeyhole,
  },
  {
    title: "Learn on Any Device",
    text: "Access your courses on web, tablet, or mobile.",
    icon: Laptop,
  },
  {
    title: "No Hidden Fees",
    text: "Transparent pricing, no surprises.",
    icon: Wallet,
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("Nucleus");
  const [videoPlaying, setVideoPlaying] = useState(false);

  useEffect(() => {
    const nodes = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.13 },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <main className="site-shell">
      <header className="site-header">
        <div className="container header-inner">
          <button className="brand-link" onClick={() => goTo("home")} aria-label="BIOPHLO home">
            <img className="brand-logo" src="/assets/biophlo-logo.webp" alt="BIOPHLO" />
          </button>
          <nav className="desktop-nav" aria-label="Main navigation">
            <a className="nav-link active" href="#home">Home</a>
            <a className="nav-link" href="#courses">Courses</a>
            <a className="nav-link" href="#about">About</a>
            <a className="nav-link" href="#why-biophlo">Blog</a>
            <a className="nav-link" href="#contact">Contact</a>
          </nav>
          <div className="header-actions">
            <button className="icon-button" aria-label="Search">
              <Search size={22} strokeWidth={2.2} />
            </button>
            <button className="button button-login button-compact">Log in</button>
            <button className="button button-primary button-compact" onClick={() => goTo("courses")}>Start Learning</button>
            <button
              className="mobile-menu-button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((value) => !value)}
            >
              {menuOpen ? <X size={25} /> : <Menu size={25} />}
            </button>
          </div>
          {menuOpen && (
            <nav className="mobile-nav" aria-label="Mobile navigation">
              <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
              <a href="#courses" onClick={() => setMenuOpen(false)}>Courses</a>
              <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
              <a href="#why-biophlo" onClick={() => setMenuOpen(false)}>Blog</a>
              <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
              <button className="button button-primary" onClick={() => goTo("courses")}>Start Learning</button>
            </nav>
          )}
        </div>
      </header>

      <section className="hero" id="home">
        <div className="container hero-inner">
          <div className="hero-content">
            <p className="eyebrow">Learn · Explore · Grow</p>
            <h1>
              Biology<br />
              Made Clear<br />
              for a <span>Brighter<br />Tomorrow</span>
            </h1>
            <p className="hero-copy">
              High-quality biology courses designed to help you understand life,
              from the smallest cells to the biggest ecosystems.
            </p>
            <div className="hero-actions">
              <button className="button button-primary" onClick={() => goTo("courses")}>
                Explore Courses <ArrowRight size={18} />
              </button>
              <button className="button button-outline" onClick={() => goTo("lesson")}>
                <span className="round-play"><Play size={13} fill="currentColor" /></span>
                Watch Video
              </button>
            </div>
            <div className="learner-row">
              <span className="avatar-stack" aria-hidden="true">
                <span className="avatar avatar-one" />
                <span className="avatar avatar-two" />
                <span className="avatar avatar-three" />
                <span className="avatar avatar-four" />
              </span>
              <span>Join 10,000+ learners worldwide</span>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits" aria-label="Learning benefits">
        <div className="container benefit-grid">
          {benefits.map(({ title, text, icon: Icon, featured }) => (
            <article className={["benefit-card", featured && "featured"].filter(Boolean).join(" ")} key={title}>
              <span className="benefit-icon"><Icon size={35} strokeWidth={1.8} /></span>
              <div>
                <h2>{title}</h2>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="journey-section section-pad" id="journey">
        <div className="hex-decoration hex-decoration-left" aria-hidden="true">
          <span /><span /><span />
        </div>
        <div className="hex-decoration hex-decoration-right" aria-hidden="true">
          <span /><span /><span />
        </div>
        <div className="container">
          <header className="section-heading reveal">
            <h2>Your learning journey</h2>
            <span />
          </header>
          <div className="journey-flow">
            <div className="journey-line" aria-hidden="true" />
            {journey.map((step, index) => (
              <article
                className={["journey-step", "step-" + step.side, "reveal"].join(" ")}
                key={step.number}
              >
                <div className="journey-number">
                  <span>{step.number}</span>
                </div>
                <div className="journey-media">
                  <img src={step.image} alt={step.alt} />
                </div>
                <div className="journey-copy">
                  <h3>{step.title}</h3>
                  <span className="title-mark" />
                  <p>{step.text}</p>
                </div>
                {index < journey.length - 1 && <span className="journey-node" aria-hidden="true" />}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="better-way-section section-pad" id="why-biophlo">
        <div className="container">
          <header className="better-way-heading reveal">
            <p className="mini-label">Why BIOPHLO</p>
            <h2>A Better Way to Learn Biology</h2>
          </header>
          <div className="better-way-grid">
            {learningAdvantages.map(({ title, text, icon: Icon }, index) => (
              <article
                className={["better-way-card", index === 1 && "better-way-card-featured", "reveal"].filter(Boolean).join(" ")}
                key={title}
              >
                <span className="better-way-icon"><Icon size={30} strokeWidth={1.8} /></span>
                <div className="better-way-copy">
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
                {index === 1 && (
                  <span className="device-art" aria-hidden="true">
                    <img src="/assets/a-better-way-to-learn-biology.png" alt="" />
                  </span>
                )}
                {index !== 1 && <span className="science-accent" aria-hidden="true" />}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section section-pad" id="about">
        <div className="container about-grid reveal">
          <div className="about-photo">
            <img src="/assets/instructor.webp" alt="Dr. Sarah Ahmed working with a microscope" />
          </div>
          <div className="about-copy">
            <p className="mini-label">About the instructor</p>
            <h2>Hi, I’m Dr. <span>Sarah Ahmed</span></h2>
            <p className="about-intro">
              Biology educator, researcher, and lifelong learner. My passion is making biology
              simple, engaging, and relevant to real life. Through BioPhlo, I help students
              around the world build confidence in understanding the science of life.
            </p>
            <ul className="credentials">
              <li><GraduationCap size={22} /> PhD in Molecular Biology</li>
              <li><BookOpen size={22} /> 10+ Years Teaching Experience</li>
              <li><Users size={22} /> 10,000+ Students Worldwide</li>
            </ul>
            <button className="button button-outline about-button">
              More About Me <ArrowRight size={18} />
            </button>
          </div>
          <div className="molecule-decoration" aria-hidden="true">
            <i /><i /><i /><i />
          </div>
        </div>
      </section>

      <section className="stats-band" aria-label="BIOPHLO in numbers">
        <div className="container stats-grid">
          {stats.map(({ value, label, icon: Icon }) => (
            <article className="stat-item reveal" key={label}>
              <Icon size={42} strokeWidth={1.8} />
              <div><strong>{value}</strong><span>{label}</span></div>
            </article>
          ))}
        </div>
      </section>

      <section className="science-banner reveal" aria-label="Biology discovery banner">
        <img src="/assets/banner.jpeg" alt="Microscope, laboratory glassware, molecules, and a glowing idea bulb" />
        <div className="science-banner-copy">
          <p>Learn · Explore · Grow</p>
          <h2>Discover the Science of Life</h2>
        </div>
      </section>

      <section className="courses-section section-pad" id="courses">
        <div className="container">
          <div className="courses-heading reveal">
            <div>
              <p className="mini-label">Featured courses</p>
              <h2>Popular Biology Courses</h2>
            </div>
            <button className="text-link" onClick={() => goTo("lesson")}>
              View All Courses <ArrowRight size={18} />
            </button>
          </div>
          <div className="course-grid">
            {courses.map((course) => (
              <article className="course-card reveal" key={course.title}>
                <img className="course-image" src={course.image} alt="" />
                <div className="course-body">
                  <span className={["course-level", course.level.toLowerCase()].join(" ")}>
                    {course.level}
                  </span>
                  <h3>{course.title}</h3>
                  <div className="rating-row">
                    <span className="rating-stars" aria-label={course.rating + " out of 5 stars"}>
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" />
                    </span>
                    <span>{course.rating} {course.reviews}</span>
                  </div>
                  <div className="course-footer">
                    <div className="instructor-mini">
                      <span className="teacher-avatar" aria-hidden="true" />
                      <span>Dr. Sarah Ahmed</span>
                    </div>
                    <button className="circle-arrow" aria-label={"Open " + course.title} onClick={() => goTo("lesson")}>
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="lesson-section section-pad" id="lesson">
        <div className="container">
          <h2 className="lesson-heading reveal">Learn one idea at a time.</h2>
          <div className="lesson-card reveal">
            <button
              className="video-panel"
              aria-label={videoPlaying ? "Pause cell structure lesson" : "Play cell structure lesson"}
              aria-pressed={videoPlaying}
              onClick={() => setVideoPlaying((value) => !value)}
            >
              <img src="/assets/lesson-video.webp" alt="Teacher explaining a plant cell diagram" />
              {videoPlaying && <span className="playing-badge">Playing lesson</span>}
            </button>
            <div className="quiz-panel">
              <h3>Cell structure</h3>
              <p>Which part controls the cell?</p>
              <div className="answer-list" role="radiogroup" aria-label="Cell structure question">
                {["Nucleus", "Cell wall", "Cytoplasm"].map((answer) => (
                  <button
                    className={[
                      "answer-option",
                      selectedAnswer === answer && "selected",
                      selectedAnswer === answer && answer === "Nucleus" && "correct",
                    ].filter(Boolean).join(" ")}
                    role="radio"
                    aria-checked={selectedAnswer === answer}
                    key={answer}
                    onClick={() => setSelectedAnswer(answer)}
                  >
                    <span className="radio-dot" />
                    {answer}
                  </button>
                ))}
              </div>
              <div className={["answer-result", selectedAnswer === "Nucleus" ? "is-correct" : "try-again"].join(" ")}>
                {selectedAnswer === "Nucleus" ? <Check size={20} /> : <X size={20} />}
                {selectedAnswer === "Nucleus" ? "Correct" : "Try again"}
              </div>
            </div>
            <div className="lesson-progress" aria-label="Lesson stages">
              <span className="progress-line" />
              <div><i /><span>Watch</span></div>
              <div><i /><span>Answer</span></div>
              <div><i /><span>Remember</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-card reveal">
          <div className="cta-copy">
            <p>Ready to start?</p>
            <h2>Unlock the Wonders of Biology</h2>
            <span>Join thousands of learners and take the next step in your biology journey.</span>
            <button className="button button-primary" onClick={() => goTo("courses")}>
              Start Learning Today <ArrowRight size={18} />
            </button>
          </div>
          <div className="cta-instructor">
            <img src="/assets/instructor.webp" alt="Dr. Sarah Ahmed, biology instructor" />
          </div>
        </div>
      </section>

      <footer className="site-footer" id="contact">
        <div className="container footer-grid">
          <div className="footer-brand">
            <img src="/assets/biophlo-logo.webp" alt="BIOPHLO" />
            <p>Learn Biology. Live a Brighter Tomorrow.</p>
            <div className="social-links" aria-label="Social media">
              <button aria-label="Facebook">f</button>
              <button aria-label="Instagram">◎</button>
              <button aria-label="YouTube">▶</button>
              <button aria-label="LinkedIn">in</button>
            </div>
          </div>
          <div className="footer-column">
            <h2>Quick Links</h2>
            <a href="#home">Home</a>
            <a href="#courses">Courses</a>
            <a href="#about">About</a>
            <a href="#why-biophlo">Blog</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-column">
            <h2>Resources</h2>
            <a href="#lesson">Help Center</a>
            <a href="#journey">Student Guide</a>
            <a href="#courses">FAQs</a>
            <a href="#contact">Privacy Policy</a>
            <a href="#contact">Terms of Service</a>
          </div>
          <div className="footer-subscribe">
            <h2>Subscribe</h2>
            <p>Get the latest updates and new courses.</p>
            <form onSubmit={(event) => event.preventDefault()}>
              <label className="sr-only" htmlFor="email">Your email address</label>
              <input id="email" type="email" placeholder="Your email address" />
              <button type="submit" aria-label="Subscribe"><ArrowRight size={18} /></button>
            </form>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 Biophlo. All rights reserved.</span>
          <span>Science today. A brighter tomorrow. <ShieldCheck size={17} /></span>
        </div>
      </footer>
    </main>
  );
}
