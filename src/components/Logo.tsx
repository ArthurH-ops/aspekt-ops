interface LogoProps {
  className?: string;
}

const Logo = ({ className = "w-8 h-8" }: LogoProps) => {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer hexagonal frame - engineering precision */}
      <path
        d="M16 2L28 9V23L16 30L4 23V9L16 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      {/* Inner geometric A - bold angular */}
      <path
        d="M16 7L24 23H20L18 19H14L12 23H8L16 7Z"
        fill="currentColor"
      />
      {/* Crossbar with circuit notch */}
      <path
        d="M13 17H19"
        stroke="currentColor"
        strokeWidth="2"
        className="stroke-background"
      />
      {/* Tech nodes */}
      <circle cx="16" cy="2" r="1.5" fill="currentColor" />
      <circle cx="28" cy="9" r="1.5" fill="currentColor" />
      <circle cx="28" cy="23" r="1.5" fill="currentColor" />
      <circle cx="16" cy="30" r="1.5" fill="currentColor" />
      <circle cx="4" cy="23" r="1.5" fill="currentColor" />
      <circle cx="4" cy="9" r="1.5" fill="currentColor" />
    </svg>
  );
};

export default Logo;
