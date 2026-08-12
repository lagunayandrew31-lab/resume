import React, { useState, useEffect } from 'react';
import './Portfolio.css';

/*
  Modern Portfolio for John Andrew Castillano
  Inspired by clean purple-accent portfolio design

  To use:
  1. Create a new React app: npm create vite@latest my-portfolio -- --template react
  2. Replace src/App.jsx with this file
  3. Create src/Portfolio.css with the styles below
  4. Place your resume PDF in the public/ folder as "resume.pdf"
  5. Run: npm run dev
*/

const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const MapPinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const DownloadIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);

const BriefcaseIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
  </svg>
);

const GraduationCapIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10l-10-5-10 5 10 5 10-5z"/>
    <path d="M6 12v5c0 2 3 4 6 4s6-2 6-4v-5"/>
    <path d="M12 22V12"/>
  </svg>
);

const AwardIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="7"/>
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
  </svg>
);

const CodeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"/>
    <polyline points="8 6 2 12 8 18"/>
  </svg>
);

const DatabaseIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3"/>
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
  </svg>
);

const WrenchIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
  </svg>
);

const GlobeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skill' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

const skills = [
  { name: 'Database Management (MySQL)', icon: <DatabaseIcon /> },
  { name: 'Web Development (HTML, CSS, JS, React)', icon: <GlobeIcon /> },
  { name: 'Programming (Python, PHP)', icon: <CodeIcon /> },
  { name: 'Technical Troubleshooting', icon: <WrenchIcon /> },
];

const certifications = [
  { title: 'Technical Operations Officer', meta: '2023 – 2024' },
  { title: 'Java Programming Completion Certificate', meta: 'Java fundamentals / Oracle / STI College' },
  { title: 'Programming of the Year', meta: '2025', tag: 'Award' },
  { title: 'Best Research Award', meta: 'STI College Fair & Symposium — 2025', tag: 'Award' },
  { title: '1st-Time Code Fest Champion', meta: 'Local Level', tag: 'Competition' },
];

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="portfolio">
      <div className="top-bar">
        <div className="top-bar-inner">
          <span className="top-bar-badge">
            <MailIcon />
            Available for work
          </span>
          <div className="top-bar-links">
            <a href="mailto:lagunayandrew31@gmail.com" className="top-bar-link"><MailIcon /></a>
            <a href="tel:09657746095" className="top-bar-link"><PhoneIcon /></a>
          </div>
        </div>
      </div>

      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-inner">
          <ul className="navbar-menu">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  className={activeSection === item.id ? 'active' : ''}
                  onClick={() => scrollTo(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <a href="/resume.pdf" download className="navbar-cta">
            <DownloadIcon />
          </a>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-greeting">Hello, I am John Andrew Castillano</div>
            <h1 className="hero-title"><span className="hero-line">DESIGN<span className="hero-plus">+</span></span><span className="hero-line">DEVELOP<span className="hero-plus">+</span></span><span className="hero-line">INTERACTIVE<span className="hero-plus">+</span></span><span className="hero-line">CODE<span className="hero-plus">+</span></span></h1>
            <p className="hero-desc">Motivated and detail-oriented Information Technology graduate with a strong foundation in web development and programming. Knowledgeable in basic troubleshooting and computer systems. Willing to learn, adapt, and committed to improving skills.</p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-outline" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}>Hire Me Now</a>
              <a href="/resume.pdf" download className="btn btn-primary"><DownloadIcon /> Download CV</a>
            </div>
          </div>
          <div className="hero-image">
            <img src="/Castillano.jpg" alt="Castillano" className="hero-photo" />
          </div>
        </div>
      </section>

      <section id="about" className="section about-section">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-label">About me</span>
  
          </div>
          <div className="about-content">
            <div className="about-text">
              <p>
                I am a dedicated and detail-oriented Information Technology graduate with a strong passion for web development and software engineering. I enjoy transforming ideas into responsive, user-friendly, and scalable web applications while writing clean, maintainable, and efficient code. I am committed to continuous learning and strive to stay current with modern technologies and industry best practices.
              </p>
              <p>
                My technical expertise includes HTML, CSS, JavaScript, React, PHP, Laravel, MySQL, and Git/GitHub. Through internships and academic projects, I have gained practical experience in web development, technical support, hardware and software troubleshooting, and basic networking. These experiences have strengthened my problem-solving abilities, adaptability, and collaboration skills in both independent and team environments.
              </p>
              <p>
                As recognition of my dedication to programming and technical excellence, I was honored with the <strong>Programmer of the Year</strong> award and became a <strong>Codefest Champion</strong>, achievements that reflect my passion for developing innovative solutions and continuously improving my skills.
              </p>
              <p>
                I am currently seeking opportunities as a <strong>Junior Web Developer</strong> where I can contribute to meaningful projects, learn from experienced professionals, and grow into a well-rounded software engineer. My goal is to build technology that delivers real value while continuing to expand my knowledge and make a positive impact within every team I join.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section skills-section">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-label">My expertise</span>
            <h2 className="section-title">Skills</h2>
          </div>
          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-card" key={skill.name}>
                <div className="skill-icon">{skill.icon}</div>
                <h3 className="skill-name">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="section experience-section">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-label">My journey</span>
            <h2 className="section-title">Work Experience</h2>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker">
                <BriefcaseIcon />
              </div>
              <div className="timeline-content">
                <span className="timeline-date">Internship</span>
                <h3 className="timeline-title">Intern — Medrozo IT Solutions</h3>
                <ul className="timeline-list">
                  <li>Provided support in technical issues related to computers (Hardware/Software)</li>
                  <li>Supported web development activities</li>
                  <li>Participated in fiber optic cable splicing</li>
                  <li>Contributed to network operations and system maintenance activities</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="section education-section">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-label">Academic</span>
            <h2 className="section-title">Education</h2>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker">
                <GraduationCapIcon />
              </div>
              <div className="timeline-content">
                <span className="timeline-date">2022 – 2026</span>
                <h3 className="timeline-title">STI College — Cagayan de Oro City</h3>
                <p className="timeline-desc">Bachelor of Science in Information Technology (BSIT)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="certifications" className="section certs-section">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-label">Achievements</span>
            <h2 className="section-title">Certifications & Awards</h2>
          </div>
          <div className="certs-grid">
            {certifications.map((cert) => (
              <div className="cert-card" key={cert.title}>
                <div className="cert-icon"><AwardIcon /></div>
                <div className="cert-body">
                  <h3 className="cert-title">{cert.title}</h3>
                  <p className="cert-meta">{cert.meta}</p>
                  {cert.tag && <span className="cert-tag">{cert.tag}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-label">Get in touch</span>
            <h2 className="section-title">Contact</h2>
          </div>
          <div className="contact-grid">
            <div className="contact-card">
              <div className="contact-icon"><MailIcon /></div>
              <h3>Email</h3>
              <p>lagunayandrew31@gmail.com</p>
            </div>
            <div className="contact-card">
              <div className="contact-icon"><PhoneIcon /></div>
              <h3>Phone</h3>
              <p>09657746095</p>
            </div>
            <div className="contact-card">
              <div className="contact-icon"><MapPinIcon /></div>
              <h3>Location</h3>
              <p>Kauswagan, Cagayan De Oro City</p>
            </div>
          </div>
          <div className="contact-cta">
            <p>I am open to entry-level IT positions, internships, and freelance web development opportunities.</p>
            <a href="https://www.gmail.com" className="btn btn-primary">Send Message</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>John Andrew Castillano &copy; {new Date().getFullYear()}. All rights reserved.</p>
      </footer>
    </div>
  );
}