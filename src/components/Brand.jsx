import React from 'react';

const wrap = (children) => children;

const html = (
  <svg viewBox="0 0 32 32" fill="currentColor" aria-label="HTML5">
    <path d="M6 3l2.2 24.7L16 30l7.8-2.3L26 3H6zm17.4 5.6l-.6 6.6-.4 4.4-.9 10.2L16 31.1l-5.5-1.4-.5-5.4h2.7l.2 2.7 3.1.8 3.1-.8.3-3.7H9.3l-.3-2.7h10.3l.3-2.7H8.7L8.4 15h11.6l.3-2.7H8.1L7.8 8.6h15.6z" />
  </svg>
);

const css = (
  <svg viewBox="0 0 32 32" fill="currentColor" aria-label="CSS3">
    <path d="M6 3l2.2 24.7L16 30l7.8-2.3L26 3H6zm13.5 18.5-.9 10.2L16 32.1l-2.6-.8-.2-2.7H10.5l-.3-2.7h-2.7l.5 5.4L16 32.5l7.8-2.3.9-10.2h-15zM8.7 15h-2.6l.3-2.7H8.7l.3-2.7H8.4l.3-2.7h15.6l-.3 2.7H8.7l-.3 2.7h11.6l-.3 2.7H8.7zm9 5.7H20l-.3 3.7-3.1.8-3.1-.8-.2-2.7H10.5l.3 4 5.2 1.4 5.2-1.4.3-5z" />
  </svg>
);

const js = (
  <svg viewBox="0 0 32 32" fill="currentColor" aria-label="JavaScript">
    <rect width="32" height="32" rx="3" fill="#f7df1e" />
    <path
      fill="#000"
      d="M19.4 23.1c.5 1 1.3 1.7 2.6 1.7 1.1 0 1.8-.5 1.8-1.3 0-.9-.7-1.2-1.9-1.7l-.6-.3c-1.8-.8-3-1.7-3-3.8 0-1.9 1.4-3.3 3.7-3.3 1.6 0 2.7.6 3.5 2l-1.9 1.2c-.4-.8-.9-1.1-1.6-1.1s-1.3.5-1.3 1.1c0 .7.4 1 1.6 1.5l.6.3c2.1.9 3.4 1.8 3.4 3.9 0 2.2-1.7 3.4-4.1 3.4-2.3 0-3.7-1.1-4.5-2.5l2.1-1.1zM9.6 22.9c.4.7.7 1.3 1.6 1.3.8 0 1.3-.3 1.3-1.6V14.4h2.4v8.3c0 2.3-1.4 3.4-3.4 3.4-1.8 0-2.9-1-3.4-2.1l1.5-1.1z"
    />
  </svg>
);

const react = (
  <svg viewBox="0 0 32 32" fill="none" aria-label="React">
    <circle cx="16" cy="16" r="2.2" fill="currentColor" />
    <g stroke="currentColor" strokeWidth="1.4">
      <ellipse cx="16" cy="16" rx="11" ry="4.2" />
      <ellipse cx="16" cy="16" rx="11" ry="4.2" transform="rotate(60 16 16)" />
      <ellipse cx="16" cy="16" rx="11" ry="4.2" transform="rotate(120 16 16)" />
    </g>
  </svg>
);

const reactNative = (
  <svg viewBox="0 0 32 32" fill="none" aria-label="React Native">
    <circle cx="16" cy="16" r="2.2" fill="currentColor" />
    <g stroke="currentColor" strokeWidth="1.4" fill="none">
      <ellipse cx="16" cy="16" rx="11" ry="4.2" />
      <ellipse cx="16" cy="16" rx="11" ry="4.2" transform="rotate(60 16 16)" />
      <ellipse cx="16" cy="16" rx="11" ry="4.2" transform="rotate(120 16 16)" />
    </g>
    <text x="16" y="28.6" textAnchor="middle" fontSize="4.6" fontWeight="700" fill="currentColor" fontFamily="ui-sans-serif, system-ui, sans-serif">RN</text>
  </svg>
);

const php = (
  <svg viewBox="0 0 32 32" aria-label="PHP">
    <ellipse cx="16" cy="16" rx="14" ry="9" fill="#777bb4" />
    <text x="16" y="20" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#fff" fontFamily="ui-sans-serif, system-ui, sans-serif">php</text>
  </svg>
);

const laravel = (
  <svg viewBox="0 0 32 32" aria-label="Laravel">
    <path fill="#ff2d20" d="M5 5h7l5 5 5-5h5v7l-5 5 5 5v5h-7l-5-5-5 5H5v-7l5-5-5-5V5z" />
    <text x="16" y="19.4" textAnchor="middle" fontSize="6.2" fontWeight="800" fill="#fff" fontFamily="ui-sans-serif, system-ui, sans-serif">LA</text>
  </svg>
);

const mysql = (
  <svg viewBox="0 0 32 32" aria-label="MySQL">
    <path
      fill="#00758f"
      d="M4 16c0 6 6 12 12 12s12-6 12-12S22 4 16 4 4 10 4 16zm14 7.5c0 1.4-.4 2.5-1.4 2.5-1 0-1.4-1-1.4-2.5 0-1.4.4-2.5 1.4-2.5 1 0 1.4 1 1.4 2.5z"
    />
    <path
      fill="#f29111"
      d="M12 6c-1 .4-2 1.3-2.6 2.2.4 0 .8.1 1.2.1.5 0 1-.1 1.4-.2-.3.5-.6 1-.8 1.6 0 0 .4-.1.9-.1.4 0 .8.1.8.1.5.6 1 1.4 1.4 2.2.4-.3.7-.7.7-1.1 0-.4-.3-.7-.7-1-.5-.3-1-.6-1.4-.6-.3 0-.5.2-.4.5 0 .2.2.3.3.4.2.1.3.3.3.4 0 .1-.1.2-.3.2-.4 0-.9-.5-1-1.1-.1-.7.3-1.3.8-1.6.6-.3 1.4-.4 2.1-.2.5.1.9.4 1.1.7z"
    />
  </svg>
);

const rest = (
  <svg viewBox="0 0 32 32" fill="none" aria-label="REST APIs">
    <rect x="4" y="9" width="24" height="14" rx="2.5" stroke="currentColor" strokeWidth="2" />
    <line x1="4" y1="20" x2="28" y2="20" stroke="currentColor" strokeWidth="2" />
    <line x1="9" y1="9" x2="9" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="23" y1="9" x2="23" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="9" y1="26" x2="9" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="23" y1="26" x2="23" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const git = (
  <svg viewBox="0 0 32 32" aria-label="Git">
    <path
      fill="#f05133"
      d="M29.6 14.1 17.9 2.4a2.4 2.4 0 0 0-3.4 0L12 4.9l4.3 4.3a2.8 2.8 0 1 1 2.2 2.2l4.1 4.1a2.8 2.8 0 1 1-1.4 1.4l-3.8-3.8v9.7a2.8 2.8 0 1 1-2.2 0V13.5a2.8 2.8 0 0 1-1.5-3.5L9.4 5.7 3.1 12a2.4 2.4 0 0 0 0 3.4l11.7 11.7a2.4 2.4 0 0 0 3.4 0l11.4-11.4a2.4 2.4 0 0 0 0-3.4z"
    />
  </svg>
);

const github = (
  <svg viewBox="0 0 32 32" fill="currentColor" aria-label="GitHub">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 2C8.3 2 2 8.3 2 16c0 6.2 4 11.4 9.6 13.3.7.1 1-.3 1-.6 0-.4-.1-1.3-.1-2.4-3.9.8-4.7-1.9-4.7-1.9-.6-1.6-1.6-2-1.6-2-1.3-.9.1-.9.1-.9 1.4.1 2.2 1.5 2.2 1.5 1.3 2.2 3.3 1.5 4.1 1.2.1-.9.5-1.5.9-1.9-3.1-.4-6.4-1.6-6.4-7 0-1.5.5-2.8 1.4-3.8-.2-.4-.6-1.8.1-3.8 0 0 1.2-.4 3.8 1.5 1.1-.3 2.3-.5 3.5-.5s2.4.2 3.5.5c2.6-1.8 3.8-1.5 3.8-1.5.7 2 .2 3.4.1 3.8.9 1 1.4 2.3 1.4 3.8 0 5.4-3.3 6.6-6.4 7 .5.4.9 1.3.9 2.6 0 1.9-.1 3.4-.1 3.9 0 .4.3.8 1 .6C26 27.4 30 22.2 30 16c0-7.7-6.3-14-14-14z"
    />
  </svg>
);

const vite = (
  <svg viewBox="0 0 32 32" aria-label="Vite">
    <defs>
      <linearGradient id="v" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#41d1ff" />
        <stop offset="1" stopColor="#bd34fe" />
      </linearGradient>
    </defs>
    <path d="M29 5 16 28 3 5l9-3 4 6 4-6 9 3z" fill="url(#v)" />
    <path d="M29 5 16 28l-3-15 6-5 6 3z" fill="url(#v)" opacity=".8" />
  </svg>
);

const xampp = (
  <svg viewBox="0 0 32 32" aria-label="XAMPP">
    <rect width="32" height="32" rx="6" fill="#fb7a24" />
    <text
      x="16"
      y="20.4"
      textAnchor="middle"
      fontSize="9.5"
      fontWeight="800"
      letterSpacing="0.5"
      fill="#fff"
      fontFamily="ui-sans-serif, system-ui, sans-serif"
    >
      XA
    </text>
  </svg>
);

const vscode = (
  <svg viewBox="0 0 32 32" aria-label="VS Code">
    <path
      fill="#0078d4"
      d="M27.4 4.7 18.6 16l8.8 11.3 2.6-1.5V6.2l-2.6-1.5z"
    />
    <path fill="#24a8f0" d="m18.6 16-7.4-9.5L3 5v22l8.2-1.5L18.6 16z" opacity=".9" />
    <path fill="#0078d4" d="m18.6 16-7.4 9.5L3 27V5l8.2 1.5L18.6 16z" opacity=".7" />
  </svg>
);

const wordpress = (
  <svg viewBox="0 0 32 32" aria-label="WordPress">
    <circle cx="16" cy="16" r="13" fill="#21759b" />
    <path
      fill="#fff"
      d="M8.5 9h3.2l3 9.4L18 9h3l-4.6 14h-2.4l-2.6-8-3 8H6L8.5 9zm9.4 0h2.7L25 22.4 22.5 9h-2.3l-2.3 13.4z"
    />
  </svg>
);

const networking = (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-label="Networking">
    <circle cx="16" cy="6.5" r="2.5" />
    <circle cx="7" cy="24" r="2.5" />
    <circle cx="25" cy="24" r="2.5" />
    <line x1="16" y1="9" x2="7" y2="21.5" />
    <line x1="16" y1="9" x2="25" y2="21.5" />
    <line x1="9.5" y1="24" x2="22.5" y2="24" />
  </svg>
);

const itSupport = (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-label="IT Support">
    <circle cx="16" cy="12" r="4" />
    <path d="M5 27c1.4-4.4 5.6-7 11-7s9.6 2.6 11 7" />
    <path d="M22 8.5 24 6.5M24 8.5 22 6.5" />
  </svg>
);

const LOGOS = {
  HTML: html,
  CSS: css,
  JavaScript: js,
  React: react,
  'React Native': reactNative,
  PHP: php,
  Laravel: laravel,
  MySQL: mysql,
  'REST APIs': rest,
  Git: git,
  GitHub: github,
  Vite: vite,
  XAMPP: xampp,
  'VS Code': vscode,
  WordPress: wordpress,
  'Basic Networking': networking,
  'IT Support': itSupport,
};

export default function Brand({ name, className = '' }) {
  const Icon = LOGOS[name] || wrap(<span style={{ fontWeight: 800, fontSize: 14 }}>{name.charAt(0)}</span>);
  return <span className={`brand ${className}`} aria-label={name}>{Icon}</span>;
}
