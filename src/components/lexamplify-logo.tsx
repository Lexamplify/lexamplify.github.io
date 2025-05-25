
import Image from 'next/image';
import type { HTMLAttributes } from 'react';

// Define props to accept className and other HTML attributes for the wrapper div
interface LexamplifyLogoProps extends HTMLAttributes<HTMLDivElement> {
  // You can add any specific props for the logo if needed in the future
}

const LexamplifyLogo = ({ className, ...props }: LexamplifyLogoProps) => (
  <div className={className} {...props}>
    <Image
      src="/lexamplify-logo.png" // Updated to local path
      alt="Lexamplify Logo"
      width={886}  // Intrinsic width of the provided logo image
      height={174} // Intrinsic height of the provided logo image
      className="h-8 w-auto" // This controls the final display size
      data-ai-hint="company logo"
      priority // Add priority if the logo is above the fold (e.g., in the header)
    />
  </div>
);

export default LexamplifyLogo;
