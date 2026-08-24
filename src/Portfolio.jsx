import React, { useState, useEffect, useRef } from 'react';
import './Portfolio.css';

/* ============================================================
   Social links — replace with your real URLs.
   LinkedIn is left empty on purpose (no real URL was provided);
   the icon simply won't render until you add it.
   ============================================================ */
const SOCIAL = {
  github: 'https://github.com/lagunayandrew31-lab',
  linkedin: '', // e.g. 'https://www.linkedin.com/in/your-handle'
  email: 'lagunayandrew31@gmail.com',
  phone: '09657746095',
  resume: '/resume.pdf',
  photo: '/Castillano.jpg',
};

const RESUME_URL = '/resume.pdf';

/* ============================================================
   Icons (inline SVG — no external dependencies)
   ============================================================ */
const Icon = {
  Mail: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </svg>
  ),
  Phone: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
  MapPin: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  Download: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  ),
  GitHub: (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.13-.3-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.88.12 3.18.77.84 1.23 1.92 1.23 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.28 0 .32.22.7.83.58A12 12 0 0 0 24 12.5C24 5.87 18.63.5 12 .5Z" />
    </svg>
  ),
  LinkedIn: (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  ),
  Arrow: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  ),
  ArrowRight: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  ),
  Briefcase: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  ),
  Graduation: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M22 10 12 5 2 10l10 5 10-5Z" />
      <path d="M6 12v5c0 2 3 4 6 4s6-2 6-4v-5" />
      <path d="M22 10v5c0 2-3 4-6 4" />
    </svg>
  ),
  Trophy: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M6 4h12v5a6 6 0 0 1-12 0V4Z" />
      <path d="M9 18h6M10 22h4M12 14v8" />
    </svg>
  ),
  Award: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="12" cy="8" r="6" />
      <path d="M8.5 13.5 7.5 22 12 19.5 16.5 22l-1-8.5" />
    </svg>
  ),
  Users: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13A4 4 0 0 1 16 11" />
    </svg>
  ),
  Code: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  Menu: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  ),
  Close: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ),
  Check: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  Spark: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8" />
    </svg>
  ),
  Expand: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M8 3H5a2 2 0 0 0-2 2v3M21 8V5a2 2 0 0 0-2-2h-3M16 21h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
    </svg>
  ),
};

/* ============================================================
   Navigation
   ============================================================ */
const NAV = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
];

const NAV_IDS = NAV.map((n) => n.id);

/* ============================================================
   Skills (categorized, no percentage bars)
   ============================================================ */
const SKILLS = [
  {
    category: 'Frontend',
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'React Native'],
  },
  {
    category: 'Backend',
    items: ['PHP', 'Laravel', 'MySQL', 'REST APIs'],
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub', 'Vite', 'XAMPP', 'VS Code'],
  },
  {
    category: 'Other',
    items: ['WordPress', 'Basic Networking', 'IT Support'],
  },
];

const CATEGORY_ACCENT = {
  Frontend: '#a78bfa',
  Backend: '#34d399',
  Tools: '#38bdf8',
  Other: '#fbbf24',
};

/* ============================================================
   Projects (descriptions grounded in the real project names
   and the candidate's stated tech stack — no invented stats)
   ============================================================ */
const PROJECTS = [
  {
    id: 'barangay',
    name: 'Barangay 35 Management System',
    category: 'Full-Stack Web App',
    featured: true,
    mockup: 'dashboard',
    summary:
      'Replaces paper-based barangay records with searchable digital resident, permit, and certificate management.',
    problem:
      'Barangay staff relied on paper filing for resident records, permits, and certificates — slow to search, easy to misplace, and hard to report on.',
    solution:
      'I built a Laravel web application where staff manage residents, issue certificates and permits, and generate summary reports from a single dashboard.',
    role: 'Full-stack developer — designed the database schema, built the Laravel backend and admin UI, and implemented authentication.',
    tech: ['PHP', 'Laravel', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    features: [
      'Resident & household records',
      'Certificate & permit tracking',
      'Search and filtering',
      'Admin authentication',
      'Printable reports',
    ],
  },
  {
    id: 'isp',
    name: 'Laravel ISP Management System',
    category: 'Backend / Admin System',
    mockup: 'charts',
    summary:
      'An admin panel that helps a small ISP track subscribers, service plans, billing, and connection status in one place.',
    problem:
      'A small ISP tracked subscribers and billing across spreadsheets, making it hard to see who was active, overdue, or disconnected.',
    solution:
      'I developed a Laravel admin system to manage subscriber accounts, service plans, billing status, and connection state from a central dashboard.',
    role: 'Backend developer — modeled subscribers and plans in MySQL, built REST-style controllers, and created the management views.',
    tech: ['PHP', 'Laravel', 'MySQL', 'REST APIs'],
    features: [
      'Subscriber management',
      'Service plan & billing tracking',
      'Connection status dashboard',
      'Search & filters',
    ],
  },
  {
    id: 'reactweb',
    name: 'React Web Application',
    category: 'Frontend SPA',
    mockup: 'browser',
    summary:
      'A responsive single-page application built with React and data consumed from REST APIs.',
    problem:
      'A content-heavy site needed a faster, interactive experience without full page reloads.',
    solution:
      'I built a React SPA with reusable components, client-side routing, and data fetched from REST APIs.',
    role: 'Frontend developer — implemented component architecture, routing, and API integration.',
    tech: ['React', 'JavaScript', 'REST APIs', 'HTML', 'CSS'],
    features: [
      'Component-based UI',
      'Client-side routing',
      'REST API integration',
      'Responsive layout',
    ],
  },
  {
    id: 'reactnative',
    name: 'React Native Mobile Application',
    category: 'Cross-Platform Mobile',
    mockup: 'mobile',
    video: '/mobile.mp4',
    summary:
      'A cross-platform mobile app delivering a native-feeling experience on both Android and iOS.',
    problem:
      'The product needed mobile access without maintaining two separate native codebases.',
    solution:
      'I built a React Native app with shared components and navigation that runs on both major platforms.',
    role: 'Mobile developer — set up the React Native project, built screens, and wired navigation.',
    tech: ['React Native', 'JavaScript'],
    features: [
      'Cross-platform (iOS & Android)',
      'Reusable components',
      'Navigation & screens',
      'Responsive mobile UI',
    ],
  },
  {
    id: 'gsm',
    name: 'GSM Automated SMS Reminder System',
    category: 'Automation / Backend',
    mockup: 'terminal',
    summary:
      'An automated system that sends scheduled SMS reminders through a GSM modem, removing manual follow-ups.',
    problem:
      'Sending appointment and reminder SMS by hand was slow and easy to forget.',
    solution:
      'I built a PHP system that schedules messages and dispatches them through a GSM modem, logging delivery status.',
    role: 'Developer — connected to the GSM modem via AT commands, built the scheduler, and logged results.',
    tech: ['PHP', 'MySQL', 'GSM / AT Commands'],
    features: [
      'Scheduled messaging',
      'Contact groups',
      'Delivery logging',
      'Modem integration',
    ],
  },
];

/* ============================================================
   Experience timeline
   ============================================================ */
const EXPERIENCE = [
  {
    type: 'work',
    date: 'Internship',
    title: 'Intern — Medrozo IT Solutions',
    org: 'On-the-job training',
    points: [
      'Provided technical support for computer hardware and software issues',
      'Supported web development activities',
      'Participated in fiber optic cable splicing',
      'Contributed to network operations and system maintenance',
    ],
  },
  {
    type: 'edu',
    date: '2022 – 2026',
    title: 'B.S. in Information Technology',
    org: 'STI College — Cagayan de Oro City',
    points: [
      'Built academic projects across web development, databases, and networking',
      'Recognized as Best Programmer of the Year (2025)',
      'Champion, STI Cluster Codefest (2023 & 2024)',
    ],
  },
];

/* ============================================================
   Achievements
   ============================================================ */
const ACHIEVEMENTS = [
  {
    icon: 'Trophy',
    title: '1st Place — Codefest Cluster',
    meta: 'STI • 2023',
    desc: 'Won first place in the STI cluster-level code competition.',
  },
  {
    icon: 'Trophy',
    title: 'Champion — Codefest Cluster',
    meta: 'STI • 2024',
    desc: 'Champion of the STI cluster-level code competition the following year.',
  },
  {
    icon: 'Award',
    title: 'Best Programmer of the Year',
    meta: '2025',
    desc: 'Recognized for programming excellence across the IT program.',
  },
  {
    icon: 'Users',
    title: 'Technical Operations — Google Developers Club',
    meta: '2023 – 2024',
    desc: 'Supported club technical operations and events as a member.',
  },
];

const CERTS = [
  {
    title: 'Java Programming Completion Certificate',
    meta: 'Oracle / STI College',
  },
  {
    title: 'Best Research Award',
    meta: 'STI College Fair & Symposium — 2025',
  },
];

/* ============================================================
   Project mockups (inline SVG — lightweight, no image files)
   ============================================================ */
function Mockup({ kind }) {
  const bars = [62, 48, 74, 40, 58, 66];
  if (kind === 'dashboard') {
    return (
      <svg className="mockup-svg" viewBox="0 0 400 240" role="img" aria-label="Dashboard interface mockup" preserveAspectRatio="xMidYMid slice">
        <rect width="400" height="240" fill="#0f1117" />
        <rect x="0" y="0" width="400" height="34" fill="#151823" />
        <circle cx="18" cy="17" r="4" fill="#a78bfa" />
        <rect x="32" y="14" width="70" height="6" rx="3" fill="#2a2f3e" />
        <rect x="120" y="48" width="110" height="70" rx="8" fill="#161a26" stroke="#262b3a" />
        <rect x="245" y="48" width="110" height="70" rx="8" fill="#161a26" stroke="#262b3a" />
        <rect x="120" y="134" width="235" height="84" rx="8" fill="#161a26" stroke="#262b3a" />
        {bars.map((h, i) => (
          <rect key={i} x={134 + i * 34} y={200 - h} width="16" height={h} rx="3" fill={i % 2 ? '#7c3aed' : '#34d399'} opacity="0.85" />
        ))}
        <rect x="14" y="48" width="92" height="170" rx="8" fill="#161a26" stroke="#262b3a" />
        {[0, 1, 2, 3].map((i) => (
          <rect key={i} x="26" y={66 + i * 34} width="68" height="8" rx="4" fill="#2a2f3e" />
        ))}
      </svg>
    );
  }
  if (kind === 'charts') {
    return (
      <svg className="mockup-svg" viewBox="0 0 400 240" role="img" aria-label="Analytics chart mockup" preserveAspectRatio="xMidYMid slice">
        <rect width="400" height="240" fill="#0f1117" />
        {[0, 1, 2, 3].map((i) => (
          <circle key={i} cx={70 + i * 90} cy={120} r="42" fill="none" stroke="#1d2230" strokeWidth="10" />
        ))}
        <circle cx="70" cy="120" r="42" fill="none" stroke="#34d399" strokeWidth="10" strokeDasharray="200 264" transform="rotate(-90 70 120)" />
        <circle cx="160" cy="120" r="42" fill="none" stroke="#7c3aed" strokeWidth="10" strokeDasharray="150 264" transform="rotate(-90 160 120)" />
        <circle cx="250" cy="120" r="42" fill="none" stroke="#38bdf8" strokeWidth="10" strokeDasharray="110 264" transform="rotate(-90 250 120)" />
        <rect x="316" y="40" width="64" height="160" rx="8" fill="#161a26" stroke="#262b3a" />
        {[40, 70, 55, 90, 60].map((h, i) => (
          <rect key={i} x={326 + i * 11} y={188 - h} width="7" height={h} rx="2" fill={i % 2 ? '#7c3aed' : '#38bdf8'} />
        ))}
      </svg>
    );
  }
  if (kind === 'browser') {
    return (
      <svg className="mockup-svg" viewBox="0 0 400 240" role="img" aria-label="Web app mockup" preserveAspectRatio="xMidYMid slice">
        <rect width="400" height="240" fill="#0f1117" />
        <rect x="0" y="0" width="400" height="28" fill="#151823" />
        <rect x="12" y="10" width="120" height="8" rx="4" fill="#2a2f3e" />
        <circle cx="364" cy="14" r="4" fill="#3a2030" />
        <circle cx="380" cy="14" r="4" fill="#3a3320" />
        <rect x="24" y="52" width="150" height="14" rx="7" fill="#e6e8ee" />
        <rect x="24" y="78" width="220" height="8" rx="4" fill="#2a2f3e" />
        <rect x="24" y="94" width="190" height="8" rx="4" fill="#2a2f3e" />
        <rect x="24" y="128" width="100" height="80" rx="8" fill="#161a26" stroke="#262b3a" />
        <rect x="140" y="128" width="100" height="80" rx="8" fill="#161a26" stroke="#262b3a" />
        <rect x="256" y="128" width="100" height="80" rx="8" fill="#161a26" stroke="#262b3a" />
        <rect x="38" y="146" width="40" height="40" rx="6" fill="#7c3aed" opacity="0.5" />
        <rect x="154" y="146" width="40" height="40" rx="6" fill="#34d399" opacity="0.5" />
        <rect x="270" y="146" width="40" height="40" rx="6" fill="#38bdf8" opacity="0.5" />
      </svg>
    );
  }
  if (kind === 'mobile') {
    return (
      <svg className="mockup-svg" viewBox="0 0 400 240" role="img" aria-label="Mobile app mockup" preserveAspectRatio="xMidYMid slice">
        <rect width="400" height="240" fill="#0f1117" />
        <rect x="150" y="20" width="100" height="200" rx="16" fill="#161a26" stroke="#2c3142" strokeWidth="2" />
        <rect x="158" y="34" width="84" height="14" rx="4" fill="#1d2230" />
        <rect x="158" y="58" width="84" height="40" rx="8" fill="#1d2230" />
        <circle cx="178" cy="78" r="12" fill="#7c3aed" opacity="0.6" />
        <rect x="196" y="72" width="40" height="6" rx="3" fill="#2a2f3e" />
        <rect x="196" y="84" width="30" height="6" rx="3" fill="#2a2f3e" />
        {[0, 1, 2].map((i) => (
          <rect key={i} x="158" y={108 + i * 34} width="84" height="28" rx="8" fill="#1d2230" />
        ))}
        <rect x="170" y="200" width="60" height="6" rx="3" fill="#2a2f3e" />
      </svg>
    );
  }
  // terminal
  return (
    <svg className="mockup-svg" viewBox="0 0 400 240" role="img" aria-label="Terminal mockup" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="240" fill="#0f1117" />
      <rect x="0" y="0" width="400" height="26" fill="#151823" />
      <circle cx="16" cy="13" r="4" fill="#3a2030" />
      <circle cx="30" cy="13" r="4" fill="#3a3320" />
      <circle cx="44" cy="13" r="4" fill="#1d3326" />
      <text x="20" y="58" fill="#34d399" fontFamily="monospace" fontSize="13">$ php send_reminders.php</text>
      <text x="20" y="84" fill="#9aa1ad" fontFamily="monospace" fontSize="12">› connecting to GSM modem…</text>
      <text x="20" y="108" fill="#9aa1ad" fontFamily="monospace" fontSize="12">› 12 messages queued</text>
      <text x="20" y="132" fill="#38bdf8" fontFamily="monospace" fontSize="12">✓ sent to +63 9xx xxx xxxx</text>
      <text x="20" y="156" fill="#38bdf8" fontFamily="monospace" fontSize="12">✓ sent to +63 9xx xxx xxxx</text>
      <text x="20" y="180" fill="#a78bfa" fontFamily="monospace" fontSize="12">✓ all reminders delivered</text>
      <rect x="20" y="196" width="9" height="14" fill="#e6e8ee">
        <animate attributeName="opacity" values="1;0;1" dur="1.1s" repeatCount="indefinite" />
      </rect>
    </svg>
  );
}

/* ============================================================
   Hooks
   ============================================================ */
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]');
    if (!els.length) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      els.forEach((el) => el.classList.add('is-visible'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function useActiveSection(ids) {
  const [active, setActive] = useState('home');
  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [ids]);
  return active;
}

/* ============================================================
   Helpers
   ============================================================ */
function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function Eyebrow({ children }) {
  return <span className="eyebrow">{children}</span>;
}

/* ============================================================
   Navbar
   ============================================================ */
function Navbar({ active, scrolled, menuOpen, setMenuOpen }) {
  const go = (id) => {
    setMenuOpen(false);
    scrollToId(id);
  };
  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <a
          className="nav__brand"
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            go('home');
          }}
          aria-label="John Andrew Castillano — home"
        >
          <span className="nav__brand-mark">JC</span>
          <span className="nav__brand-text">John Andrew<span className="nav__brand-dim">.dev</span></span>
        </a>

        <nav className={`nav__links ${menuOpen ? 'is-open' : ''}`} aria-label="Primary">
          {NAV.map((item) => (
            <button
              key={item.id}
              className={`nav__link ${active === item.id ? 'is-active' : ''}`}
              aria-current={active === item.id ? 'true' : undefined}
              onClick={() => go(item.id)}
            >
              {item.label}
            </button>
          ))}
          <a className="btn btn--primary nav__cta-mobile" href={RESUME_URL} download>
            <Icon.Download width="16" height="16" /> Resume
          </a>
        </nav>

        <div className="nav__actions">
          <a className="btn btn--primary nav__cta" href={RESUME_URL} download>
            <Icon.Download width="16" height="16" /> Resume
          </a>
          <button
            className="nav__toggle"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <Icon.Close width="22" height="22" /> : <Icon.Menu width="22" height="22" />}
          </button>
        </div>
      </div>
    </header>
  );
}

/* ============================================================
   Hero
   ============================================================ */
function Hero() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.matchMedia('(hover: none)').matches) return;
    let raf = 0;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width) * 100;
      const y = ((e.clientY - r.top) / r.height) * 100;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.setProperty('--mx', `${x}%`);
        el.style.setProperty('--my', `${y}%`);
      });
    };
    el.addEventListener('mousemove', onMove);
    return () => {
      el.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="home" className="hero" ref={ref}>
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__grid" />
        <div className="hero__glow" />
      </div>

      <div className="hero__inner">
        <div className="hero__content">
          <span className="hero__badge hero-anim" style={{ '--d': '0ms' }}>
            <span className="hero__badge-dot" /> Available for junior developer roles
          </span>

          <h1 className="hero__title">
            <span className="hero-anim" style={{ '--d': '80ms' }}>John Andrew</span>
            <span className="hero-anim hero__title-accent" style={{ '--d': '160ms' }}>
              Castillano
            </span>
          </h1>

          <p className="hero__headline hero-anim" style={{ '--d': '240ms' }}>
            Junior Web Developer building modern, responsive, and scalable web
            applications.
          </p>

          <p className="hero__desc hero-anim" style={{ '--d': '320ms' }}>
            IT graduate who builds web applications with modern frontend and
            backend technologies — from React interfaces to Laravel and MySQL
            systems. Currently exploring opportunities to grow as a developer.
          </p>

          <div className="hero__actions hero-anim" style={{ '--d': '400ms' }}>
            <a
              className="btn btn--primary btn--lg"
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToId('projects');
              }}
            >
              View My Projects <Icon.ArrowRight width="18" height="18" />
            </a>
            <a className="btn btn--ghost btn--lg" href={RESUME_URL} download>
              <Icon.Download width="18" height="18" /> Download Resume
            </a>
          </div>

          <a
            className="hero__secondary hero-anim"
            style={{ '--d': '480ms' }}
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToId('contact');
            }}
          >
            Let&rsquo;s Work Together <Icon.Arrow width="15" height="15" />
          </a>

          <div className="hero__social hero-anim" style={{ '--d': '540ms' }}>
            <a className="hero__social-link" href={SOCIAL.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <Icon.GitHub width="20" height="20" />
            </a>
            {SOCIAL.linkedin ? (
              <a className="hero__social-link" href={SOCIAL.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Icon.LinkedIn width="20" height="20" />
              </a>
            ) : null}
          </div>
        </div>

        <div className="hero__media hero-anim" style={{ '--d': '360ms' }}>
          <div className="hero__photo-card">
            <div className="hero__photo-ring" aria-hidden="true" />
            <img
              className="hero__photo"
              src={SOCIAL.photo}
              alt="John Andrew Castillano"
              width="360"
              height="440"
              loading="eager"
            />
            <span className="hero__photo-tag">
              <Icon.Code width="15" height="15" /> IT Graduate · Web Developer
            </span>
          </div>
        </div>
      </div>

      <a className="hero__scroll" href="#about" aria-label="Scroll to about" onClick={(e) => { e.preventDefault(); scrollToId('about'); }}>
        <span className="hero__scroll-dot" />
      </a>
    </section>
  );
}

/* ============================================================
   About
   ============================================================ */
function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section__head" data-reveal>
          <Eyebrow>About me</Eyebrow>
          <h2 className="section__title">A developer who ships real work</h2>
        </div>

        <div className="about__grid">
          <div className="about__card" data-reveal style={{ '--d': '60ms' }}>
            <div className="about__photo">
              <img src={SOCIAL.photo} alt="John Andrew Castillano" width="120" height="120" loading="lazy" />
            </div>
            <ul className="about__facts">
              <li><span>Role</span><strong>Junior Web Developer</strong></li>
              <li><span>Background</span><strong>BS Information Technology</strong></li>
              <li><span>Based in</span><strong>Cagayan de Oro, PH</strong></li>
              <li><span>Status</span><strong className="about__open">Open to work</strong></li>
            </ul>
            <div className="about__social">
              <a className="chip" href={SOCIAL.github} target="_blank" rel="noreferrer"><Icon.GitHub width="16" height="16" /> GitHub</a>
              {SOCIAL.linkedin ? (
                <a className="chip" href={SOCIAL.linkedin} target="_blank" rel="noreferrer"><Icon.LinkedIn width="16" height="16" /> LinkedIn</a>
              ) : null}
              <a className="chip" href={`mailto:${SOCIAL.email}`}><Icon.Mail width="16" height="16" /> Email</a>
            </div>
          </div>

          <div className="about__text" data-reveal style={{ '--d': '140ms' }}>
            <p>
              I&rsquo;m an Information Technology graduate who builds web
              applications end to end. I enjoy taking a real problem — like a
              barangay drowning in paper records or an ISP tracking subscribers in
              spreadsheets — and turning it into a working system people can
              actually use.
            </p>
            <p>
              On the frontend I work with HTML, CSS, JavaScript, and React to build
              responsive interfaces. On the backend I use PHP and Laravel with
              MySQL, and I&rsquo;m comfortable wiring up REST APIs and the tooling
              around them (Git, GitHub, Vite, XAMPP). I also handle practical IT
              work: troubleshooting, basic networking, and support.
            </p>
            <p>
              I learn quickly, work well independently, and care about writing code
              that&rsquo;s clear and maintainable. My goal is to keep growing into a
              strong software and backend developer — and to contribute to a team
              that ships.
            </p>
            <div className="about__stats">
              <div><strong>5+</strong><span>Real projects built</span></div>
              <div><strong>2&times;</strong><span>Codefest champion</span></div>
              <div><strong>2025</strong><span>Best Programmer award</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   Skills
   ============================================================ */
function SkillCard({ name, accent, delay }) {
  return (
    <div className="skill" data-reveal style={{ '--d': `${delay}ms` }}>
      <span className="skill__icon" style={{ '--c': accent }}>{name.charAt(0)}</span>
      <span className="skill__name">{name}</span>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="section__head" data-reveal>
          <Eyebrow>Technical skills</Eyebrow>
          <h2 className="section__title">What I work with</h2>
          <p className="section__sub">
            Organized by where each technology fits — not by how &ldquo;good&rdquo; I am at it.
          </p>
        </div>

        <div className="skills__groups">
          {SKILLS.map((group) => (
            <div className="skills__group" key={group.category} data-reveal>
              <div className="skills__group-head">
                <span className="skills__dot" style={{ '--c': CATEGORY_ACCENT[group.category] }} />
                <h3 className="skills__group-title">{group.category}</h3>
              </div>
              <div className="skills__grid">
                {group.items.map((name, i) => (
                  <SkillCard key={name} name={name} accent={CATEGORY_ACCENT[group.category]} delay={i * 50} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   Projects
   ============================================================ */
function requestFs(el) {
  const fn = el.requestFullscreen || el.webkitRequestFullscreen;
  if (fn) fn.call(el).catch(() => {});
}

function ProjectMedia({ project, controls = false, fsButton = false, className = '' }) {
  if (project.video) {
    return (
      <div className={`media ${className}`}>
        <video
          className="mockup-video"
          src={project.video}
          muted
          loop
          playsInline
          preload="metadata"
          controls={controls}
          aria-label={`${project.name} preview`}
        />
        {fsButton && (
          <button
            type="button"
            className="media__fs"
            aria-label="Open video full screen"
            title="Full screen"
            onClick={(e) => {
              e.stopPropagation();
              const v = e.currentTarget.parentElement.querySelector('video');
              if (v) requestFs(v);
            }}
          >
            <Icon.Expand width="16" height="16" />
          </button>
        )}
      </div>
    );
  }
  return <Mockup kind={project.mockup} />;
}

function ProjectCard({ project, onOpen, index }) {
  const playVideo = (e) => {
    const v = e.currentTarget.querySelector('video');
    if (v) v.play().catch(() => {});
  };
  const stopVideo = (e) => {
    const v = e.currentTarget.querySelector('video');
    if (v) {
      v.pause();
      v.currentTime = 0;
    }
  };
  return (
    <article
      className="project"
      data-reveal
      style={{ '--d': `${(index % 2) * 80}ms` }}
    >
      <button
        className="project__media"
        onClick={() => onOpen(project)}
        onMouseEnter={playVideo}
        onMouseLeave={stopVideo}
        onFocus={playVideo}
        onBlur={stopVideo}
        aria-label={`Open case study: ${project.name}`}
      >
        <ProjectMedia project={project} fsButton />
        <span className="project__media-overlay">
          View case study <Icon.ArrowRight width="16" height="16" />
        </span>
      </button>

      <div className="project__body">
        <span className="project__cat">{project.category}</span>
        <h3 className="project__name">{project.name}</h3>
        <p className="project__summary">{project.summary}</p>

        <ul className="tags">
          {project.tech.map((t) => (
            <li key={t} className="tag">{t}</li>
          ))}
        </ul>

        <div className="project__foot">
          <span className="project__role">Role: {project.role.split('—')[0].trim()}</span>
          <div className="project__btns">
            <button className="btn btn--sm btn--primary" onClick={() => onOpen(project)}>
              Live Demo <Icon.ArrowRight width="15" height="15" />
            </button>
            <a className="btn btn--sm btn--ghost" href={SOCIAL.github} target="_blank" rel="noreferrer">
              <Icon.GitHub width="15" height="15" /> Code
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

function FeaturedProject({ project, onOpen }) {
  return (
    <div className="featured" data-reveal>
      <div className="featured__media">
        <ProjectMedia project={project} fsButton />
        <span className="featured__badge">Featured Project</span>
      </div>
      <div className="featured__body">
        <span className="project__cat">{project.category}</span>
        <h3 className="featured__name">{project.name}</h3>

        <div className="featured__block">
          <h4>Problem</h4>
          <p>{project.problem}</p>
        </div>
        <div className="featured__block">
          <h4>Solution</h4>
          <p>{project.solution}</p>
        </div>

        <ul className="tags">
          {project.tech.map((t) => (
            <li key={t} className="tag">{t}</li>
          ))}
        </ul>

        <ul className="featured__features">
          {project.features.map((f) => (
            <li key={f}><Icon.Check width="15" height="15" /> {f}</li>
          ))}
        </ul>

        <p className="featured__role"><strong>My contribution:</strong> {project.role}</p>

        <div className="project__btns">
          <button className="btn btn--primary" onClick={() => onOpen(project)}>
            View full case study <Icon.ArrowRight width="16" height="16" />
          </button>
          <a className="btn btn--ghost" href={SOCIAL.github} target="_blank" rel="noreferrer">
            <Icon.GitHub width="16" height="16" /> View code
          </a>
        </div>
      </div>
    </div>
  );
}

function Projects({ onOpen }) {
  const featured = PROJECTS.find((p) => p.featured) || PROJECTS[0];
  const rest = PROJECTS.filter((p) => p !== featured);
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section__head" data-reveal>
          <Eyebrow>Selected work</Eyebrow>
          <h2 className="section__title">Projects</h2>
          <p className="section__sub">
            Real applications I&rsquo;ve built — each shows the problem it solved and what I used to build it.
          </p>
        </div>

        <FeaturedProject project={featured} onOpen={onOpen} />

        <div className="projects__grid">
          {rest.map((p, i) => (
            <ProjectCard key={p.id} project={p} onOpen={onOpen} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   Experience
   ============================================================ */
function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div className="section__head" data-reveal>
          <Eyebrow>My journey</Eyebrow>
          <h2 className="section__title">Experience &amp; education</h2>
        </div>

        <ol className="timeline">
          {EXPERIENCE.map((item, i) => (
            <li className="timeline__item" key={item.title} data-reveal style={{ '--d': `${i * 90}ms` }}>
              <span className="timeline__marker">
                {item.type === 'work' ? <Icon.Briefcase width="18" height="18" /> : <Icon.Graduation width="18" height="18" />}
              </span>
              <div className="timeline__content">
                <span className="timeline__date">{item.date}</span>
                <h3 className="timeline__title">{item.title}</h3>
                <p className="timeline__org">{item.org}</p>
                <ul className="timeline__list">
                  {item.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ============================================================
   Achievements
   ============================================================ */
function Achievements() {
  return (
    <section id="achievements" className="section achievements">
      <div className="container">
        <div className="section__head" data-reveal>
          <Eyebrow>Recognition</Eyebrow>
          <h2 className="section__title">Achievements</h2>
        </div>

        <div className="ach__grid">
          {ACHIEVEMENTS.map((a, i) => {
            const IconC = Icon[a.icon];
            return (
              <article className="ach" key={a.title} data-reveal style={{ '--d': `${i * 90}ms` }}>
                <span className="ach__icon">{IconC ? <IconC width="22" height="22" /> : <Icon.Trophy width="22" height="22" />}</span>
                <h3 className="ach__title">{a.title}</h3>
                <span className="ach__meta">{a.meta}</span>
                <p className="ach__desc">{a.desc}</p>
              </article>
            );
          })}
        </div>

        <div className="ach__certs" data-reveal>
          <span className="ach__certs-label">Certifications &amp; awards</span>
          <div className="ach__certs-row">
            {CERTS.map((c) => (
              <span className="cert" key={c.title}>
                <Icon.Award width="16" height="16" />
                <span>
                  <strong>{c.title}</strong>
                  <em>{c.meta}</em>
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   Resume CTA
   ============================================================ */
function ResumeCta() {
  return (
    <section className="section resume-cta" aria-labelledby="resume-cta-title">
      <div className="container">
        <div className="resume-cta__card" data-reveal>
          <div className="resume-cta__glow" aria-hidden="true" />
          <Icon.Download width="26" height="26" className="resume-cta__icon" />
          <h2 id="resume-cta-title" className="resume-cta__title">Want to know more about my experience?</h2>
          <p className="resume-cta__sub">
            My résumé covers my education, projects, and the recognition I&rsquo;ve earned along the way.
          </p>
          <a className="btn btn--primary btn--lg" href={RESUME_URL} download>
            <Icon.Download width="18" height="18" /> Download my Résumé
          </a>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   Footer
   ============================================================ */
function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="nav__brand-mark">JC</span>
          <p className="footer__desc">
            John Andrew Castillano — Junior Web Developer building modern, responsive web applications.
          </p>
        </div>

        <nav className="footer__nav" aria-label="Footer">
          {NAV.map((item) => (
            <a key={item.id} href={`#${item.id}`} onClick={(e) => { e.preventDefault(); scrollToId(item.id); }}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="footer__social">
          <a href={SOCIAL.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Icon.GitHub width="18" height="18" /></a>
          {SOCIAL.linkedin ? (
            <a href={SOCIAL.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon.LinkedIn width="18" height="18" /></a>
          ) : null}
          <a href={`mailto:${SOCIAL.email}`} aria-label="Email"><Icon.Mail width="18" height="18" /></a>
        </div>
      </div>

      <div className="footer__bottom container">
        <span>© {new Date().getFullYear()} John Andrew Castillano. All rights reserved.</span>
        <span className="footer__built">Built with React, Vite &amp; plain CSS.</span>
      </div>
    </footer>
  );
}

/* ============================================================
   Project modal
   ============================================================ */
function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-label={project.name} onClick={onClose}>
      <div className="modal__panel" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose} aria-label="Close case study">
          <Icon.Close width="20" height="20" />
        </button>

        <div className="modal__media">
          <ProjectMedia project={project} controls fsButton />
        </div>

        <div className="modal__body">
          <span className="project__cat">{project.category}</span>
          <h2 className="modal__title">{project.name}</h2>

          <div className="modal__block">
            <h4>Problem</h4>
            <p>{project.problem}</p>
          </div>
          <div className="modal__block">
            <h4>Solution</h4>
            <p>{project.solution}</p>
          </div>

          <div className="modal__block">
            <h4>Key features</h4>
            <ul className="featured__features">
              {project.features.map((f) => (
                <li key={f}><Icon.Check width="15" height="15" /> {f}</li>
              ))}
            </ul>
          </div>

          <div className="modal__block">
            <h4>Technologies</h4>
            <ul className="tags">
              {project.tech.map((t) => (
                <li key={t} className="tag">{t}</li>
              ))}
            </ul>
          </div>

          <p className="featured__role"><strong>My contribution:</strong> {project.role}</p>

          <div className="project__btns">
            <a className="btn btn--primary" href={SOCIAL.github} target="_blank" rel="noreferrer">
              <Icon.GitHub width="16" height="16" /> View code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   Contact
   ============================================================ */
function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const validate = (data) => {
    const e = {};
    if (!data.name.trim()) e.name = 'Please enter your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = 'Enter a valid email address.';
    if (data.message.trim().length < 10) e.message = 'Message should be at least 10 characters.';
    return e;
  };

  const onChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    if (status !== 'idle') setStatus('idle');
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length) {
      setStatus('error');
      return;
    }
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${SOCIAL.email}?subject=${subject}&body=${body}`;
    setStatus('success');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section__head" data-reveal>
          <Eyebrow>Get in touch</Eyebrow>
          <h2 className="section__title">Let&rsquo;s build something great</h2>
          <p className="section__sub">
            I&rsquo;m currently open to opportunities where I can contribute, learn, and grow as a developer.
          </p>
        </div>

        <div className="contact__grid">
          <div className="contact__info" data-reveal>
            <a className="contact__item" href={`mailto:${SOCIAL.email}`}>
              <span className="contact__icon"><Icon.Mail width="20" height="20" /></span>
              <span>
                <strong>Email</strong>
                <em>{SOCIAL.email}</em>
              </span>
            </a>
            <a className="contact__item" href={SOCIAL.github} target="_blank" rel="noreferrer">
              <span className="contact__icon"><Icon.GitHub width="20" height="20" /></span>
              <span>
                <strong>GitHub</strong>
                <em>github.com/lagunayandrew31-lab</em>
              </span>
            </a>
            {SOCIAL.linkedin ? (
              <a className="contact__item" href={SOCIAL.linkedin} target="_blank" rel="noreferrer">
                <span className="contact__icon"><Icon.LinkedIn width="20" height="20" /></span>
                <span>
                  <strong>LinkedIn</strong>
                  <em>Connect with me</em>
                </span>
              </a>
            ) : null}
            <a className="contact__item" href={RESUME_URL} download>
              <span className="contact__icon"><Icon.Download width="20" height="20" /></span>
              <span>
                <strong>Résumé</strong>
                <em>Download PDF</em>
              </span>
            </a>
          </div>

          <form className="contact__form" data-reveal style={{ '--d': '90ms' }} onSubmit={onSubmit} noValidate>
            <div className={`field ${errors.name ? 'field--error' : ''}`}>
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" value={form.name} onChange={onChange} placeholder="Your name" autoComplete="name" />
              {errors.name && <span className="field__msg">{errors.name}</span>}
            </div>
            <div className={`field ${errors.email ? 'field--error' : ''}`}>
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" value={form.email} onChange={onChange} placeholder="you@example.com" autoComplete="email" />
              {errors.email && <span className="field__msg">{errors.email}</span>}
            </div>
            <div className={`field ${errors.message ? 'field--error' : ''}`}>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="4" value={form.message} onChange={onChange} placeholder="Tell me about the role or project…" />
              {errors.message && <span className="field__msg">{errors.message}</span>}
            </div>

            <button className="btn btn--primary btn--lg btn--block" type="submit">
              Send Message <Icon.ArrowRight width="18" height="18" />
            </button>

            {status === 'success' && (
              <p className="form__alert form__alert--ok" role="status">
                <Icon.Check width="16" height="16" /> Thanks! Your email app should open with the message ready to send.
              </p>
            )}
            {status === 'error' && (
              <p className="form__alert form__alert--err" role="alert">
                Please fix the highlighted fields above.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   Main component
   ============================================================ */
export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [modal, setModal] = useState(null);
  const active = useActiveSection(NAV_IDS);

  useScrollReveal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <div className="app">
      <Navbar active={active} scrolled={scrolled} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects onOpen={setModal} />
        <Experience />
        <Achievements />
        <ResumeCta />
        <Contact />
      </main>

      <Footer />

      {modal && <ProjectModal project={modal} onClose={() => setModal(null)} />}
    </div>
  );
}
