import type { SVGProps } from 'react';

const LexamplifyLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 50"
    className="h-8 w-auto"
    fill="currentColor"
    {...props}
  >
    <style>
      {`
        @import url('https://fonts.googleapis.com/css2?family=Times+New+Roman&display=swap');
        .logo-text {
          font-family: 'Times New Roman', Times, serif;
          font-size: 30px;
          font-weight: 700;
          fill: hsl(var(--primary));
        }
        .logo-highlight {
          fill: hsl(var(--accent));
        }
      `}
    </style>
    <text x="10" y="35" className="logo-text">
      Lexamplify
    </text>
    {/* Optional: Add a small graphical element if desired, e.g., a stylized scale or Gavel using accent color */}
    {/* Example: A small line under 'Lex' */}
    {/* <rect x="10" y="40" width="50" height="3" className="logo-highlight" /> */}
  </svg>
);

export default LexamplifyLogo;
