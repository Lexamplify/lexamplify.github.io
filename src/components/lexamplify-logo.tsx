import type { SVGProps } from 'react';

const LexamplifyLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 280 50" // Adjusted viewBox to match general aspect ratio
    className="h-8 w-auto" // Existing class, can be overridden by props
    {...props}
  >
    <style>
      {`
        .logo-text-lexamplify {
          font-family: var(--font-playfair-display), serif; /* Use Playfair Display for serif look */
          font-size: 36px; /* Adjust as needed */
          font-weight: 400; /* Regular weight for Playfair Display */
          fill: #000000; /* Black color for text to match image */
          letter-spacing: 0.25px; /* Slight adjustment for Playfair */
        }
        .triangle-primary {
          fill: hsl(var(--primary)); /* Dark blue part of L */
        }
        .triangle-secondary {
          fill: hsl(0, 0%, 50%); /* Grey part of L */
        }
      `}
    </style>
    {/* Stylized L shape */}
    <g transform="translate(5, 2)"> {/* Nudge for alignment */}
      <polygon className="triangle-primary" points="0,40 20,0 40,40" />
      <polygon className="triangle-secondary" points="20,0 40,40 30,40 20,20" />
    </g>
    <text x="55" y="37" className="logo-text-lexamplify">
      LexAmplify
    </text>
  </svg>
);

export default LexamplifyLogo;