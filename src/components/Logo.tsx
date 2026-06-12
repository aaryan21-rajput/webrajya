import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export default function Logo({ className = "h-12 w-auto", showText = true }: LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 160 120"
      className={`${className} select-none overflow-visible`}
      fill="none"
    >
      <defs>
        {/* Metal glossy gradient for the crown body and circles (Luxury Gold Gradient) */}
        <linearGradient id="crownMetalGradient" x1="30" y1="11" x2="130" y2="66" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FAF7F2" />
          <stop offset="25%" stopColor="#D4A017" />
          <stop offset="60%" stopColor="#AA7C11" />
          <stop offset="100%" stopColor="#0F4C3A" />
        </linearGradient>

        {/* Shimmer overlay gradient */}
        <linearGradient id="shineGradient" x1="30" y1="11" x2="80" y2="60" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#FAF7F2" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#D4A017" stopOpacity="0" />
        </linearGradient>

        {/* Solid high-luxury Gold for borders */}
        <linearGradient id="solidGold" x1="30" y1="11" x2="130" y2="11" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FAF7F2" />
          <stop offset="50%" stopColor="#D4A017" />
          <stop offset="100%" stopColor="#AA7C11" />
        </linearGradient>

        {/* Text glow filter */}
        <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Group containing the Crown with distinct shadows and premium gold radiance */}
      <g className="transition-transform duration-300 hover:scale-[1.03] origin-center">
        {/* Shadow backdrop for Crown */}
        <path
          d="M 30 24 Q 45 35, 56 27 Q 68 30, 80 11 Q 92 30, 104 27 Q 115 35, 130 24 C 128 35, 125 45, 122 58 Q 80 50, 38 58 C 35 45, 32 35, 30 24"
          fill="#0F4C3A"
          opacity="0.2"
          transform="translate(0, 3)"
        />

        {/* Crown Main Body */}
        <path
          d="M 30 24 Q 45 35, 56 27 Q 68 30, 80 11 Q 92 30, 104 27 Q 115 35, 130 24 C 128 35, 125 45, 122 58 Q 80 50, 38 58 C 35 45, 32 35, 30 24 Z"
          fill="url(#crownMetalGradient)"
          stroke="url(#solidGold)"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />

        {/* Crown Shine Highlight (giving it that clean glossy glass finish) */}
        <path
          d="M 30 24 Q 45 35, 56 27 Q 68 30, 80 11 Q 92 30, 104 27 Q 115 35, 130 24 C 125 32, 120 38, 115 42 Q 80 32, 45 42 C 40 38, 35 32, 30 24 Z"
          fill="url(#shineGradient)"
          opacity="0.9"
        />

        {/* Crown Base Strap */}
        <path
          d="M 38 58 Q 80 50 122 58 C 120 63, 115 64, 105 63 Q 80 57 55 63 C 45 64, 40 63, 38 58 Z"
          fill="#0F4C3A"
          stroke="url(#solidGold)"
          strokeWidth="1.2"
        />
        
        {/* Secondary strap highlighting curve */}
        <path
          d="M 40 59 Q 80 52 120 59"
          stroke="#FAF7F2"
          strokeWidth="1.2"
          opacity="0.75"
          strokeLinecap="round"
        />

        {/* Crown Jewel Spheres (5 rounded peaks) */}
        {/* Leftmost peak */}
        <circle cx="30" cy="24" r="5" fill="url(#solidGold)" stroke="#0F4C3A" strokeWidth="1" />
        <circle cx="28.5" cy="22.5" r="1.5" fill="#FFFFFF" opacity="0.9" />

        {/* Mid-Left peak */}
        <circle cx="56" cy="27" r="4.5" fill="url(#solidGold)" stroke="#0F4C3A" strokeWidth="1" />
        <circle cx="54.5" cy="25.5" r="1.5" fill="#FFFFFF" opacity="0.9" />

        {/* Center peak (tallest) */}
        <circle cx="80" cy="11" r="6" fill="url(#solidGold)" stroke="#0F4C3A" strokeWidth="1.2" />
        <circle cx="78" cy="9" r="2" fill="#FFFFFF" opacity="1.0" />

        {/* Mid-Right peak */}
        <circle cx="104" cy="27" r="4.5" fill="url(#solidGold)" stroke="#0F4C3A" strokeWidth="1" />
        <circle cx="102.5" cy="25.5" r="1.5" fill="#FFFFFF" opacity="0.9" />

        {/* Rightmost peak */}
        <circle cx="130" cy="24" r="5" fill="url(#solidGold)" stroke="#0F4C3A" strokeWidth="1" />
        <circle cx="128.5" cy="22.5" r="1.5" fill="#FFFFFF" opacity="0.9" />
      </g>

      {/* Styled WR Text Block with luxury serif & clean look */}
      {showText && (
        <g>
          {/* Subtle gold glow filter layer */}
          <text
            x="80"
            y="110"
            textAnchor="middle"
            fontSize="48"
            fontWeight="bold"
            fontFamily='"Cormorant Garamond", "Times New Roman", serif'
            fill="#D4A017"
            stroke="#D4A017"
            strokeWidth="3"
            opacity="0.3"
            filter="url(#goldGlow)"
            className="select-none"
          >
            WR
          </text>

          {/* Core brand outline layer */}
          <text
            x="80"
            y="110"
            textAnchor="middle"
            fontSize="48"
            fontWeight="bold"
            fontFamily='"Cormorant Garamond", "Times New Roman", serif'
            fill="#0F4C3A"
            stroke="url(#solidGold)"
            strokeWidth="1"
            className="select-none tracking-widest"
          >
            WR
          </text>
        </g>
      )}
    </svg>
  );
}
