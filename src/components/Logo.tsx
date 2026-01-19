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
      {/* Geometric angular A - precision engineering aesthetic */}
      <path
        d="M4 28L16 4L28 28H20L16 18L12 28H4Z"
        fill="currentColor"
      />
      {/* Tech notch detail */}
      <rect x="14" y="22" width="4" height="2" className="fill-background" />
    </svg>
  );
};

export default Logo;
