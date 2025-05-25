import Image from 'next/image';
import type { HTMLAttributes } from 'react';

// Define props to accept className and other HTML attributes for the wrapper div
interface LexamplifyLogoProps extends HTMLAttributes<HTMLDivElement> {
  // You can add any specific props for the logo if needed in the future
}

const LexamplifyLogo = ({ className, ...props }: LexamplifyLogoProps) => (
  <div className={className} {...props}>
    <Image
      // IMPORTANT: Replace this src with the actual path to your logo image
      // For example, if your logo is in public/lexamplify-logo.png, use "/lexamplify-logo.png"
      src="https://placehold.co/200x50.png" 
      alt="Lexamplify Logo"
      width={140} // Adjust width as needed, maintaining aspect ratio
      height={35}  // Adjust height as needed, maintaining aspect ratio
      className="h-8 w-auto" // This will be overridden by parent if className is passed
      data-ai-hint="company logo"
      priority // Add priority if the logo is above the fold (e.g., in the header)
    />
  </div>
);

export default LexamplifyLogo;
